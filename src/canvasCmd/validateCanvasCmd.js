import { isPosInt } from "../common/isPosInt";

export function validateCanvasCommand(cmd) {
  if (!isPosInt(cmd[1]) || !isPosInt(cmd[2])) {
    throw "canvas cannot have non positive integer args";
  }
}
