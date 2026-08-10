// Tests voor de undo/redo-geschiedenis rond de planner-reducer.

import { describe, expect, it } from "vitest";
import { historyReducer, initialHistory, type HistoryState } from "../store";

function addCabinet(state: HistoryState): HistoryState {
  return historyReducer(state, { type: "ADD_CARCASS", carcassId: "onderkast-60x60x80" });
}

describe("historyReducer", () => {
  it("maakt elke ontwerp-actie ongedaan te maken", () => {
    let s = addCabinet(initialHistory());
    expect(s.past).toHaveLength(1);
    expect(s.present.items).toHaveLength(1);

    s = historyReducer(s, { type: "UNDO" });
    expect(s.present.items).toHaveLength(0);
    expect(s.future).toHaveLength(1);

    s = historyReducer(s, { type: "REDO" });
    expect(s.present.items).toHaveLength(1);
    expect(s.future).toHaveLength(0);
  });

  it("doet niets bij UNDO/REDO zonder geschiedenis", () => {
    const s = initialHistory();
    expect(historyReducer(s, { type: "UNDO" })).toBe(s);
    expect(historyReducer(s, { type: "REDO" })).toBe(s);
  });

  it("wist de redo-stapel bij een nieuwe actie", () => {
    let s = addCabinet(addCabinet(initialHistory()));
    s = historyReducer(s, { type: "UNDO" });
    expect(s.future).toHaveLength(1);
    s = addCabinet(s);
    expect(s.future).toHaveLength(0);
  });

  it("voegt een sleep-gebaar (MOVE…MOVE, SNAP) samen tot één undo-stap", () => {
    let s = addCabinet(initialHistory());
    const id = s.present.items[0].instanceId;
    const before = s.present.items[0];

    s = historyReducer(s, { type: "MOVE_ITEM", instanceId: id, cx: 120, cy: 100 });
    s = historyReducer(s, { type: "MOVE_ITEM", instanceId: id, cx: 150, cy: 120 });
    s = historyReducer(s, { type: "MOVE_ITEM", instanceId: id, cx: 180, cy: 40 });
    s = historyReducer(s, { type: "SNAP_ITEM", instanceId: id });
    // 1 stap voor het toevoegen + 1 stap voor het hele sleep-gebaar.
    expect(s.past).toHaveLength(2);

    s = historyReducer(s, { type: "UNDO" });
    expect(s.present.items[0].cx).toBe(before.cx);
    expect(s.present.items[0].cy).toBe(before.cy);
  });

  it("begrenst de geschiedenis tot 50 stappen", () => {
    let s = initialHistory();
    for (let i = 0; i < 60; i++) {
      s = historyReducer(s, { type: "SET_CEILING", cm: 200 + i });
      // Zelfde actietype wordt niet samengevoegd — alleen sleep-gebaren.
      s = historyReducer(s, { type: "SET_ROOM_WIDTH", cm: 200 + i });
    }
    expect(s.past.length).toBeLessThanOrEqual(50);
  });

  it("vervangt het ontwerp bij HYDRATE zonder undo-stap", () => {
    const designed = addCabinet(initialHistory()).present;
    const s = historyReducer(initialHistory(), { type: "HYDRATE", design: designed });
    expect(s.present).toEqual(designed);
    expect(s.past).toHaveLength(0);
  });
});
