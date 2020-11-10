import { validateCanvasCommand } from "./validateCanvasCmd";

export function createCanvasField(width, height) {
  validateCanvasCommand(["C", width, height]);

  let arr = [];
  for (let i = 0; i < height; i++) {
    arr[i] = [];
    for (let j = 0; j < width; j++) {
      arr[i][j] = "";
    }
  }
  return arr;
}
