import { isPosInt } from "../common/isPosInt";

export function validateFillCommand(cmd, maxX, maxY) {
  if (cmd.length !== 4) {
    throw "Wrong cmd length. Example: B 10 3 o";
  }

  if (!isPosInt(cmd[1])) {
    throw "cmd[1] must be positive integer number";
  }

  if (!isPosInt(cmd[2])) {
    throw "cmd[2] must be positive integer number";
  }

  if (Number(cmd[1]) > maxX) {
    throw "cmd[1] should be less then maxX";
  }

  if (Number(cmd[2]) > maxY) {
    throw "cmd[2] should be less then maxY";
  }
}
