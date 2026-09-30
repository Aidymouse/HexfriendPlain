/** @import { PlacedTile } from '../../types' */

/** @param {PlacedTile} tile */
export const selectTile = (tile) => {
  globalThis.appState.tools.terrain.selectedTile = structuredClone(tile);
};
