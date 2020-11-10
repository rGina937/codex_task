// @ts-check

import { isPosInt } from "../common/isPosInt";

export function validateLineCommand(canvas, cmd) {
  validateObjectCommand(canvas, cmd);

  if (cmd[1] != cmd[3] && cmd[2] != cmd[4]) {
    throw "it is not a line";
  }

  return false;
}

export function validateObjectCommand(canvas, cmd) {
  const maxY = canvas.length;
  const maxX = canvas[0].length;

  const [, x1, y1, x2, y2] = cmd;

  if (
    cmd.length !== 5 ||
    !isPosInt(+x1) ||
    !isPosInt(+y1) ||
    !isPosInt(+x2) ||
    !isPosInt(+y2)
  ) {
    throw "object cannot have non digit arg";
  }

  if (x1 > maxX) {
    throw `object cannot fit in canvas. ${x1} is greater that ${maxX}`;
  }
  if (y1 > maxY) {
    throw `object cannot fit in canvas. ${y1} is greater that ${maxY}`;
  }
  if (x2 > maxX) {
    throw `object cannot fit in canvas. ${x2} is greater that ${maxX}`;
  }
  if (y2 > maxY) {
    throw `object cannot fit in canvas. ${y2} is greater that ${maxY}`;
  }

  return false;
}
