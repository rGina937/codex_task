import { createLine } from "./lineCmd";

describe("line command tests", () => {
  let canvas;

  beforeEach(() => {
    canvas = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
  });

  test("add symbol to bottom right corner", () => {
    expect(createLine(canvas, ["L", 3, 3, 3, 3])).toEqual([
      ["", "", ""],
      ["", "", ""],
      ["", "", "x"],
    ]);
  });

  test("add symbol to bottom left corner", () => {
    expect(createLine(canvas, [, 1, 3, 1, 3])).toEqual([
      ["", "", ""],
      ["", "", ""],
      ["x", "", ""],
    ]);
  });

  test("add symbol to top left corner", () => {
    expect(createLine(canvas, [, 1, 1, 1, 1])).toEqual([
      ["x", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
  });

  test("add symbol to top right corner", () => {
    expect(createLine(canvas, [, 3, 1, 3, 1])).toEqual([
      ["", "", "x"],
      ["", "", ""],
      ["", "", ""],
    ]);
  });

  test("add line to right side", () => {
    expect(createLine(canvas, [, 3, 1, 3, 3])).toEqual([
      ["", "", "x"],
      ["", "", "x"],
      ["", "", "x"],
    ]);
  });

  test("add line to top side", () => {
    expect(createLine(canvas, [, 1, 1, 3, 1])).toEqual([
      ["x", "x", "x"],
      ["", "", ""],
      ["", "", ""],
    ]);
  });

  test("should throw [object cannot have non digit arg]", () => {
    expect(() => {
      createLine(canvas, [, 1, 2, 3, "e"]);
    }).toThrowError("object cannot have non digit arg");
  });

  test("should throw [it is not a line]", () => {
    expect(() => {
      createLine(canvas, [, 1, 2, 3, 1]);
    }).toThrowError("it is not a line");
  });

  test("should throw [object cannot fit in canvas. ${x1} is greater that ${maxX}]", () => {
    expect(() => {
      createLine(canvas, [, 4, 2, 3, 4]);
    }).toThrowError(
      `object cannot fit in canvas. ${4} is greater that ${canvas[0].length}`
    );
  });

  test("should throw [object cannot fit in canvas. ${y1} is greater that ${maxY}]", () => {
    expect(() => {
      createLine(canvas, [, 1, 6, 3, 3]);
    }).toThrowError(
      `object cannot fit in canvas. ${6} is greater that ${canvas.length}`
    );
  });

  test("should throw [object cannot fit in canvas. ${x2} is greater that ${maxX}]", () => {
    expect(() => {
      createLine(canvas, [, 1, 2, 9, 3]);
    }).toThrowError(
      `object cannot fit in canvas. ${9} is greater that ${canvas[0].length}`
    );
  });

  test("should throw [object cannot fit in canvas. ${y2} is greater that ${maxY}]", () => {
    expect(() => {
      createLine(canvas, [, 1, 2, 3, 4]);
    }).toThrowError(
      `object cannot fit in canvas. ${4} is greater that ${canvas.length}`
    );
  });
});
