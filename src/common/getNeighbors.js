import { validateGetNeighbors } from "./getNeighborsValidator";

export function getNeighbors(point, maxX, maxY) {
  validateGetNeighbors(point, maxX, maxY);

  const [x, y] = [point.x, point.y];
  let neighbors = [];

  for (let i = +y - 1; i <= +y + 1; i++) {
    for (let j = +x - 1; j <= +x + 1; j++) {
      if ((i != y || j != x) && j < maxX && j >= 0 && i < maxY && i >= 0) {
        neighbors.push({ x: j, y: i });
      }
    }
  }
  return neighbors;
}
