import { validateFillCommand } from "./validateFillCmd";
import { getNeighbors } from "../common/getNeighbors";

export function bucketFill(canvas, cmd) {
  let [, x, y, color] = cmd;
  const maxX = canvas[0].length;
  const maxY = canvas.length;

  x = +x - 1;
  y = +y - 1;

  validateFillCommand(cmd, maxX, maxY);

  const oldColor = canvas[y][x];

  canvas[y][x] = color;

  let queue = [];

  queue.push({
    x,
    y,
  });

  while (queue.length > 0) {
    let point = queue.shift();

    for (let neighbor of getNeighbors(point, maxX, maxY)) {
      if (canvas[neighbor.y][neighbor.x] === oldColor) {
        queue.push(neighbor);
        canvas[neighbor.y][neighbor.x] = color;
      }
    }
  }
  return canvas;
}
