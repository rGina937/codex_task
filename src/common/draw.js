import { createCanvasField } from "../canvasCmd/canvasCmd";
import { bucketFill } from "../fillCmd/fillCmd";
import { drawAscii } from "../global/drawAscii";
import { globalValidators } from "../global/globalValidators";
import { createLine } from "../lineCmd/lineCmd";
import { createRectangle } from "../rectangleCmd/rectangleCmd";

export function draw(rawCmdList) {
  let commands = rawCmdList
    .trim()
    .split("\n")
    .map((cmd) =>
      cmd
        .trim()
        .split(" ")
        .filter((v) => !!v)
    );

  globalValidators.forEach((validator) => validator(commands));

  let canvas;
  let maxX;
  let maxY;

  commands.forEach((cmd) => {
    if (cmd[0] === "C") {
      maxX = +cmd[1];
      maxY = +cmd[2];

      canvas = createCanvasField(maxX, maxY);

      return;
    }

    if (cmd[0] === "L") {
      createLine(canvas, cmd);
      return;
    }

    if (cmd[0] === "R") {
      createRectangle(canvas, cmd);
      return;
    }

    if (cmd[0] === "B") {
      bucketFill(canvas, cmd);

      return;
    }

    throw `unknown command ${cmd[0]}`;
  });

  return drawAscii(canvas);
}
