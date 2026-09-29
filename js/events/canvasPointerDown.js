import { getTranslation } from "../lib/canvasFns.js";
import { HexCoords } from "../lib/hexCoords.js";

/** @param {MouseEvent} e
 */
export const canvasPointerDown = (e) => {
  const mouseCoord = { x: e.clientX, y: e.clientY };
  const worldCoord = HexCoords.screenToWorld(mouseCoord);

  console.log(
    worldCoord,
    HexCoords.worldToCube(worldCoord, globalThis.mapState.hexes),
  );
};
