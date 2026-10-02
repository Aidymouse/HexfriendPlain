/** @import { Tileset } from '../types' */

/**
 * TODO: this should probably generate previews, to save on load time
 * @param {Tileset} tileset
 * 
 */
export const loadTileset = async (tileset) => {
  // TODO: check for already loaded

  for (const tile of tileset.tiles) {
    if (tile.symbol) {
      await globalThis.textureStore.loadTexture(tile.id, tile.symbol.base64);
    }
  }

  globalThis.appState.map.loadedTilesets.push(tileset);
};
