import { validateLineCommand } from "./validateLineCmd";

export function createLine(canvas, cmd) {
  validateLineCommand(canvas, cmd);

  const [, x1, y1, x2, y2] = cmd;

  const startX = Math.min(+x1, +x2) - 1;
  const endX = Math.max(+x1, +x2);

  const startY = Math.min(+y1, +y2) - 1;
  const endY = Math.max(+y1, +y2);

  for (let y = startY; y < endY; y++) {
    for (let x = startX; x < endX; x++) {
      canvas[y][x] = "x";
    }
  }

  return canvas;
}
