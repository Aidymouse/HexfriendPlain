import { HexDrawer } from "../lib/HexDrawer.js";
//import { HexOrientation } from "../types/index.js";
import { defaultTileset } from "./defaultTileset.js";
import { HexOrientation } from "../types/enums.js";

export const initCanvas = () => {
  globalThis.ctx = /** @type {HTMLCanvasElement} */ (
    document.getElementById("main-canvas")
  ).getContext("2d");

  fitCanvasToWindow();

  const { width, height } = document
    .getElementById("full-size")
    .getBoundingClientRect();

  globalThis.ctx.translate(width / 2, height / 2);

  window.addEventListener("resize", fitCanvasToWindow);
};

const fitCanvasToWindow = () => {
  const { width, height } = document
    .getElementById("full-size")
    .getBoundingClientRect();
  // TODO: could consider throttling resize events
  // https://bencentra.com/code/2015/02/27/optimizing-window-resize.html
  const d = ctx.getImageData(0, 0, width, height);

  document.getElementById("main-canvas").setAttribute("width", `${width}`);
  document.getElementById("main-canvas").setAttribute("height", `${height}`);

  ctx.putImageData(d, 0, 0);
};
