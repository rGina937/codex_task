import { isPosInt } from "./isPosInt";

export function validateGetNeighbors(point, maxX, maxY) {
  if (!isPosInt(point.x, true)) {
    throw `point.x must be positive integer number, but got ${point.x}`;
  }
  if (!isPosInt(point.y, true)) {
    throw `point.y must be positive integer number, but got ${point.y}`;
  }
  if (!isPosInt(maxX, true)) {
    throw `maxX must be positive integer number, but got ${maxX}`;
  }
  if (!isPosInt(maxY, true)) {
    throw `maxY must be positive integer number, but got ${maxY}`;
  }
  if (point.x >= maxX) {
    throw `point.x should be less then maxX, but got ${point.x}`;
  }
  if (point.y >= maxY) {
    throw `point.y should be less then maxY, but got ${point.y}`;
  }
}
