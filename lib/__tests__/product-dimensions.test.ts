import { describe, expect, it } from "vitest";
import { formatDimensions, repeatsDimensions } from "../product-dimensions";

describe("product dimensions", () => {
  it("normalizes equivalent supplier formats", () => {
    for (const value of ["3000mmx600mm", "3000mm*600mm", "3000 × 600 mm"]) {
      expect(formatDimensions(value)).toBe("3000 × 600 mm");
    }
    expect(formatDimensions("10,5cm x 20cm x 3cm")).toBe("10,5 × 20 × 3 cm");
  });
  it("preserves descriptions, ranges and mixed units", () => {
    for (const value of ["Paneel 3000mmx600mm", "3000 mm x 60 cm", "3–5 mm", "3000 x 600", "Ø 40 cm"]) {
      expect(formatDimensions(value)).toBe(value);
    }
    expect(repeatsDimensions("Paneel 3000mmx600mm", "3000mm*600mm")).toBe(false);
  });
  it("only removes a duplicate for the currently selected size", () => {
    expect(repeatsDimensions("3000mm*600mm", "3000mmx600mm")).toBe(true);
    expect(repeatsDimensions("3000mm*600mm", "2400mmx600mm")).toBe(false);
    expect(repeatsDimensions(null, "3000mmx600mm")).toBe(false);
  });
});
