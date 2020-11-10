import { isPosInt } from "./isPosInt";

describe("Check positive integer number command tests", () => {
  test("correct number", () => {
    expect(isPosInt("5")).toBe(true);
  });

  test("zero number", () => {
    expect(isPosInt("0")).toBe(false);
  });

  test("not number", () => {
    expect(isPosInt("cat")).toBe(false);
  });

  test("empty", () => {
    expect(isPosInt(" ")).toBe(false);
  });
});
