export function createBorder(maxX) {
  let border = [];

  for (let i = 0; i < +maxX + 2; i++) {
    border[i] = "-";
  }

  return border;
}
