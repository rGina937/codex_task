export const globalValidators = [
  validateFirstCommandIsCanvas,
  validateOneCanvasCommand,
];

export function validateFirstCommandIsCanvas(cmdList) {
  const canvasCmd = cmdList[0];
  if (canvasCmd && canvasCmd.length === 3 && canvasCmd[0] === "C") {
    return false;
  } else {
    throw "first command is not a canvas";
  }
}

export function validateOneCanvasCommand(cmdList) {
  let c = 0;
  for (let i = 0; i < cmdList.length; i++) {
    if (cmdList[i][0] === "C") {
      c++;
    }
  }

  if (c === 1) {
    return false;
  } else {
    throw "can be only one canvas command";
  }
}
