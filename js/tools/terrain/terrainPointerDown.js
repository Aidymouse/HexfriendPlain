import { HexCoords } from "../../lib/hexCoords.js";
import { toPlacedTile } from "../../lib/tileFns.js";
import { placeTile } from "./terrainToolFns.js";

/** @import { Tile, WorldCoord, PlacedTile } from '../../types' */

/** @param {MouseEvent} e
 */
export const terrainPointerDown = (e) => {
  const mouseCoord = { x: e.clientX, y: e.clientY };
  const worldCoord = HexCoords.screenToWorld(mouseCoord);

  const tile = globalThis.appState.tools.terrain.selectedTile;
  placeTile(tile, worldCoord);
};

