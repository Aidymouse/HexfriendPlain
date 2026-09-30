import { getTranslation } from "../lib/canvasFns.js";
import { HexCoords } from "../lib/hexCoords.js";
import { toPlacedTile } from "../lib/tileFns.js";
import { terrainPointerDown } from "../tools/terrain/index.js";
import { Tool } from "../types/enums.js";

/** Takes pointer down events from the canvas and passes them on to relevant tool handlers
 * @param {MouseEvent} e
 */
export const canvasPointerDown = (e) => {
  switch (globalThis.appState.selectedTool) {
    case Tool.TERRAIN: {
      terrainPointerDown(e);
      break;
    }
    default: {
      throw new Error(
        `Tool switch failed? Selected tool: ${globalThis.appState.selectedTool}`,
      );
    }
  }
};
