import { getNeighbors } from "./getNeighbors";

describe("find neighbors", () => {
  test("find eight neighbors", () => {
    const neighbors = getNeighbors({ x: 3, y: 3 }, 6, 6);

    expect(neighbors).toContainEqual({ x: 2, y: 2 });
    expect(neighbors).toContainEqual({ x: 3, y: 2 });
    expect(neighbors).toContainEqual({ x: 4, y: 2 });
    expect(neighbors).toContainEqual({ x: 2, y: 3 });
    expect(neighbors).toContainEqual({ x: 4, y: 3 });
    expect(neighbors).toContainEqual({ x: 2, y: 4 });
    expect(neighbors).toContainEqual({ x: 3, y: 4 });
    expect(neighbors).toContainEqual({ x: 4, y: 4 });
    expect(neighbors.length).toBe(8);
  });

  test("find neighbors in the top corner", () => {
    const neighbors = getNeighbors({ x: 0, y: 0 }, 6, 6);

    expect(neighbors).toContainEqual({ x: 1, y: 0 });
    expect(neighbors).toContainEqual({ x: 0, y: 1 });
    expect(neighbors).toContainEqual({ x: 1, y: 1 });
    expect(neighbors.length).toBe(3);
  });

  test("find neighbors in the bottom corner", () => {
    const neighbors = getNeighbors({ x: 5, y: 5 }, 6, 6);

    expect(neighbors).toContainEqual({ x: 4, y: 4 });
    expect(neighbors).toContainEqual({ x: 5, y: 4 });
    expect(neighbors).toContainEqual({ x: 4, y: 5 });
    expect(neighbors.length).toBe(3);
  });

  test("should throw [point.x must be positive integer number]", () => {
    expect(() => {
      getNeighbors({ x: "cat", y: 3 }, 6, 6);
    }).toThrowError("point.x must be positive integer number, but got cat");
  });

  test("should throw [point.y must be positive integer number]", () => {
    expect(() => {
      getNeighbors({ x: 3, y: -1 }, 6, 6);
    }).toThrowError("point.y must be positive integer number, but got -1");
  });

  test("should throw [maxX must be positive integer number]", () => {
    expect(() => {
      getNeighbors({ x: 3, y: 3 }, "cat", 6);
    }).toThrowError("maxX must be positive integer number, but got cat");
  });

  test("should throw [maxY must be positive integer number]", () => {
    expect(() => {
      getNeighbors({ x: 3, y: 3 }, 6, -5);
    }).toThrowError("maxY must be positive integer number, but got -5");
  });

  test("should throw [point.x should be less then maxX]", () => {
    expect(() => {
      getNeighbors({ x: 9, y: 3 }, 6, 6);
    }).toThrowError("point.x should be less then maxX, but got 9");
  });

  test("should throw [point.y should be less then maxY]", () => {
    expect(() => {
      getNeighbors({ x: 3, y: 100 }, 6, 6);
    }).toThrowError("point.y should be less then maxY, but got 100");
  });
});
