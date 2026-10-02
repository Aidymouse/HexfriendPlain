import { HexCoords } from "../../lib/hexCoords.js";
import { tilesMatch } from "../../lib/tileFns.js";

/** @import { Tile, WorldCoord, PlacedTile } from '../../types' */

/** @param {PlacedTile} tile */
export const selectTile = (tile) => {
  globalThis.appState.tools.terrain.selectedTile = structuredClone(tile);
};

/** Places a tile into map state and draws it
 * Protects itself - doesn't place tiles where they're not allowed
 * @param {PlacedTile} tile
 * @param {WorldCoord} worldCoord
 */
export const placeTile = (tile, worldCoord) => {
  const hexCoord = HexCoords.worldToCube(worldCoord);
  const drawCoord = HexCoords.worldCubeRound(worldCoord);
  const hexId = HexCoords.hexId(hexCoord);

  const match = tilesMatch(tile, getPlacedTile(hexId))
  console.log(match)
  if (hexExists(hexId) && !match) {
    globalThis.appState.map.tiles[hexId].tile = structuredClone(tile);
    globalThis.hexDrawer.drawTile(tile, drawCoord);
  }
};

/** @param {string} id
 */
const hexExists = (id) => {
  return globalThis.appState.map.tiles[id] !== undefined;
};

/** @param hexId { string }
 * @returns { PlacedTile | null }
 * */
const getPlacedTile = (hexId) => {
  return globalThis.appState.map.tiles[hexId]?.tile ?? null
}

