import {
  validateFirstCommandIsCanvas,
  validateOneCanvasCommand,
} from "./globalValidators";

describe("Check global validators tests", () => {
  test("should throw [first command is not a canvas]", () => {
    expect(() => {
      validateFirstCommandIsCanvas([
        { 0: ["R", "16", "1", "20", "3"] },
        { 1: ["C", "20", "4"] },
        { 2: ["L", "1", "2", "6", "2"] },
      ]);
    }).toThrowError("first command is not a canvas");
  });

  test("should throw [can be only one canvas]", () => {
    expect(() => {
      validateOneCanvasCommand([
        { 0: ["C", "16", "1"] },
        { 1: ["C", "20", "4"] },
        { 2: ["L", "1", "2", "6", "2"] },
      ]);
    }).toThrowError("can be only one canvas");
  });
});
