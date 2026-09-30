import { getTranslation } from "../lib/canvasFns.js";
import { HexCoords } from "../lib/hexCoords.js";
import { toPlacedTile } from "../lib/tileFns.js";

/** @import { Tile, WorldCoord } from '../types' */

/** @param {MouseEvent} e
 */
export const canvasPointerDown = (e) => {
  const mouseCoord = { x: e.clientX, y: e.clientY };
  const worldCoord = HexCoords.screenToWorld(mouseCoord);

  // TODO: make this based on selection
  const tile = globalThis.appState.map.loadedTilesets[0].tiles[10];
  console.log(tile)
  placeTile(tile, worldCoord)
};

/** Places a tile into map state and draws it
 * @param {Tile} tile
 * @param {WorldCoord} worldCoord
 */
const placeTile = (tile, worldCoord) => {
  const hexCoord = HexCoords.worldToCube(worldCoord);
  const drawCoord = HexCoords.worldCubeRound(worldCoord);

  globalThis.appState.map.tiles[HexCoords.hexId(hexCoord)].tile = toPlacedTile(tile)
  globalThis.hexDrawer.drawTile(tile, drawCoord);
}
