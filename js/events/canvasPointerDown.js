import { getTranslation } from "../lib/canvasFns.js";
import { HexCoords } from "../lib/hexCoords.js";

/** @param {MouseEvent} e
 */
export const canvasPointerDown = (e) => {
  const mouseCoord = { x: e.clientX, y: e.clientY };
  const worldCoord = HexCoords.screenToWorld(mouseCoord);

  const drawCoord = HexCoords.worldCubeRound(worldCoord);

  console.log(
    worldCoord,
    HexCoords.worldToCube(worldCoord, globalThis.appState.map.hexes),
  );

  const tile = globalThis.appState.map.loadedTilesets[0].tiles[0];
  globalThis.hexDrawer.drawTile(tile, drawCoord);
};
