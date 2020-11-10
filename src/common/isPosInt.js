export function isPosInt(x, allowZero = false) {
  const n = +x;
  return Number.isInteger(n) && allowZero ? n >= 0 : n > 0;
}
