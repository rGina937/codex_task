import { createBorder } from "./createBorder";
import { drawAscii } from "./drawAscii";

describe("Ascii command tests", () => {
  test("create eight element border", () => {
    expect(createBorder(6)).toEqual(["-", "-", "-", "-", "-", "-", "-", "-"]);
  });

  test("create three element border", () => {
    expect(createBorder(1)).toEqual(["-", "-", "-"]);
  });

  test("empty canvas", () => {
    expect(
      drawAscii([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ])
    ).toBe(
      `
-----
|   |
|   |
|   |
-----
    `.trim()
    );
  });

  test("canvas with vertical line", () => {
    expect(
      drawAscii([
        ["x", "", ""],
        ["x", "", ""],
        ["x", "", ""],
        ["x", "", ""],
      ])
    ).toBe(
      `
-----
|x  |
|x  |
|x  |
|x  |
-----
    `.trim()
    );
  });

  test("canvas with horizontal line", () => {
    expect(
      drawAscii([
        ["", "", ""],
        ["x", "x", "x"],
        ["", "", ""],
        ["", "", ""],
      ])
    ).toBe(
      `
-----
|   |
|xxx|
|   |
|   |
-----
    `.trim()
    );
  });

  test("canvas with rectangle", () => {
    expect(
      drawAscii([
        ["x", "x", "x", "", ""],
        ["x", "", "x", "", ""],
        ["x", "x", "x", "", ""],
        ["", "", "", "", ""],
      ])
    ).toBe(
      `
-------
|xxx  |
|x x  |
|xxx  |
|     |
-------
    `.trim()
    );
  });

  test("canvas with filling", () => {
    expect(
      drawAscii([
        ["x", "x", "x", "o", "o"],
        ["x", "", "x", "o", "o"],
        ["x", "x", "x", "o", "o"],
        ["o", "o", "o", "o", "o"],
      ])
    ).toBe(
      `
-------
|xxxoo|
|x xoo|
|xxxoo|
|ooooo|
-------
    `.trim()
    );
  });
});
