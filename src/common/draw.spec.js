import { draw } from "./draw";

describe("draw tests", () => {
  test("empty canvas draw", () => {
    expect(draw("\n    C 3 3 \n    ")).toBe(
      `
-----
|   |
|   |
|   |
-----
    `.trim()
    );
  });

  test("canvas with vertical line draw", () => {
    expect(draw("\n    C 3 4 \n    L 1 1 1 4\n    ")).toBe(
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

  test("canvas with horizontal line draw", () => {
    expect(draw("\n    C 3 4 \n    L 1 2 3 2\n    ")).toBe(
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

  test("canvas with rectangle draw", () => {
    expect(draw("\n    C 5 4 \n    R 1 1 3 3\n    ")).toBe(
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

  test("canvas with filling draw", () => {
    expect(draw("\n    C 5 4 \n    R 1 1 3 3\n    B 4 4 o\n    ")).toBe(
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
