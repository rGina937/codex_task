import { createCanvasField } from "./canvasCmd";

describe("correct canvas command tests", () => {
  test("should throw [canvas cannot have non positive integer args]", () => {
    expect(() => {
      createCanvasField(["C", 1, 0]);
    }).toThrowError("canvas cannot have non positive integer args");
  });

  test("create 3x3 canvas", () => {
    expect(createCanvasField(3, 3)).toEqual([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
  });

  test("create 1x1 canvas", () => {
    expect(createCanvasField(1, 1)).toEqual([[""]]);
  });

  test("create 3x1 canvas", () => {
    expect(createCanvasField(3, 1)).toEqual([["", "", ""]]);
  });
});
