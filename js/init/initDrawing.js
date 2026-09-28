import { HexDrawer } from "../lib/HexDrawer.js";

export const initDrawing = () => {
  globalThis.hexDrawer = new HexDrawer(globalThis.ctx);
};
