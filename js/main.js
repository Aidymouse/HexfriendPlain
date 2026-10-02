import { defaultTileset } from "./init/defaultTileset.js"
import { selectTile } from "./tools/terrain/index.js"
import {
  initDrawing,
  initTextureStore,
  initTranslation,
  initAppState,
  initCanvas,
} from "./init/index.js"
import { loadTileset } from "./lib/tilesets.js"
import { getLatestTilesetFormat } from "./lib/compatability/index.js"

// Called when the page has finished loading
export const initHexfriend = async () => {
  initCanvas()
  // App State

  initAppState()
  // TODO: load save data here
  initTranslation()
  initTextureStore()

  await loadTileset(defaultTileset)
  initDrawing()

  // TODO: draw from save data
  selectTile(globalThis.appState.map.loadedTilesets[0].tiles[10])
  globalThis.hexDrawer.paintTiles(globalThis.appState.map.tiles)
}
