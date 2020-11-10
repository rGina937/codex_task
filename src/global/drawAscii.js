import { createBorder } from "./createBorder";

export function drawAscii(canvas) {
  const maxX = canvas[0].length;
  const maxY = canvas.length;
  let ascii = "";

  for (let i = 0; i < +maxY; i++) {
    const row = canvas[i].map((char) => char || " ").join("");
    ascii += "|" + row + "|" + "\n";
  }
  ascii =
    createBorder(maxX).join("") + "\n" + ascii + createBorder(maxX).join("");

  return ascii;
}
