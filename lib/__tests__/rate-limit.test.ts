// Tests voor de in-memory rate limiter.

import { describe, expect, it } from "vitest";

import { createRateLimiter } from "../rate-limit";

describe("createRateLimiter", () => {
  it("laat verzoeken binnen de limiet door", () => {
    const limiter = createRateLimiter({ limit: 3, windowMs: 1000 });
    expect(limiter.check("a", 0).ok).toBe(true);
    expect(limiter.check("a", 10).ok).toBe(true);
    const third = limiter.check("a", 20);
    expect(third.ok).toBe(true);
    expect(third.remaining).toBe(0);
  });

  it("blokkeert boven de limiet en meldt wanneer het weer mag", () => {
    const limiter = createRateLimiter({ limit: 2, windowMs: 1000 });
    limiter.check("a", 0);
    limiter.check("a", 100);
    const blocked = limiter.check("a", 200);
    expect(blocked.ok).toBe(false);
    expect(blocked.remaining).toBe(0);
    // Het oudste verzoek (t=0) verloopt op t=1000, dus nog 800ms wachten.
    expect(blocked.retryAfterSec).toBe(1);
  });

  it("telt per sleutel, niet globaal", () => {
    const limiter = createRateLimiter({ limit: 1, windowMs: 1000 });
    expect(limiter.check("a", 0).ok).toBe(true);
    expect(limiter.check("b", 0).ok).toBe(true);
    expect(limiter.check("a", 0).ok).toBe(false);
  });

  it("schuift het venster mee", () => {
    const limiter = createRateLimiter({ limit: 1, windowMs: 1000 });
    expect(limiter.check("a", 0).ok).toBe(true);
    expect(limiter.check("a", 999).ok).toBe(false);
    expect(limiter.check("a", 1000).ok).toBe(true);
  });

  it("telt een geblokkeerd verzoek niet mee — een bui verlengt de straf niet", () => {
    const limiter = createRateLimiter({ limit: 1, windowMs: 1000 });
    limiter.check("a", 0);
    for (let t = 1; t < 900; t++) limiter.check("a", t);
    expect(limiter.check("a", 1000).ok).toBe(true);
  });

  it("ruimt verlopen sleutels op zodat de map niet oneindig groeit", () => {
    const limiter = createRateLimiter({ limit: 1, windowMs: 1000 });
    for (let i = 0; i < 50; i++) limiter.check(`ip-${i}`, i);
    expect(limiter.size()).toBe(50);
    limiter.check("nieuw", 10_000);
    expect(limiter.size()).toBe(1);
  });
});
