import { HexCoords } from "../../lib/hexCoords.js";
import { toPlacedTile } from "../../lib/tileFns.js";

/** @import { Tile, WorldCoord, PlacedTile } from '../../types' */

/** @param {MouseEvent} e
 */
export const terrainPointerDown = (e) => {
  const mouseCoord = { x: e.clientX, y: e.clientY };
  const worldCoord = HexCoords.screenToWorld(mouseCoord);

  // TODO: make this based on selected tile
  const tile = globalThis.appState.tools.terrain.selectedTile;
  placeTile(tile, worldCoord);
};

/** Places a tile into map state and draws it
 * Protects itself - doesn't place tiles where they're not allowed
 * @param {PlacedTile} tile
 * @param {WorldCoord} worldCoord
 */
const placeTile = (tile, worldCoord) => {
  const hexCoord = HexCoords.worldToCube(worldCoord);
  const drawCoord = HexCoords.worldCubeRound(worldCoord);
  const hexId = HexCoords.hexId(hexCoord);

  if (hexExists(hexId)) {
    globalThis.appState.map.tiles[hexId].tile = structuredClone(tile);
    globalThis.hexDrawer.drawTile(tile, drawCoord);
  }
};

/** @param {string} id
 */
const hexExists = (id) => {
  return globalThis.appState.map.tiles[id] !== undefined;
};
