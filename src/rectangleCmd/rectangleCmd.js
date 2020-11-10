import { createLine } from "../lineCmd/lineCmd";
import { validateObjectCommand } from "../lineCmd/validateLineCmd";

export function createRectangle(canvas, cmd) {
  validateObjectCommand(canvas, cmd);

  const [, x1, y1, x2, y2] = cmd;

  createLine(canvas, ["L", x1, y1, x2, y1]);
  createLine(canvas, ["L", x1, y1, x1, y2]);
  createLine(canvas, ["L", x1, y2, x2, y2]);
  createLine(canvas, ["L", x2, y1, x2, y2]);

  return canvas;
}
