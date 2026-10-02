import { Tool } from "../types/enums.js";
import { terrainPointerMove } from "../tools/terrain/index.js";

/** @param {MouseEvent} e */
export const canvasPointerMove = (e) => {
  //console.log("Left mouse down?", e.buttons & (1 << 0));
  switch (globalThis.appState.selectedTool) {
    case Tool.TERRAIN: {
      terrainPointerMove(e);
    }
  }
};
