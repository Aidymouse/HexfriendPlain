import { defaultTileset } from "./init/defaultTileset.js"
import { selectTile } from "./tools/terrain/index.js"
import {
  initDrawing,
  initTextureStore,
  initTranslation,
  initAppState,
  initCanvas,
	initComponents,
} from "./init/index.js"
import { loadTileset } from "./lib/tilesets.js"
import { getLatestTilesetFormat } from "./lib/compatability/index.js"


// Called when the page has finished loading
export const initHexfriend = async () => {

	console.log("Begin init...")
	const initStart = Date.now().valueOf();

	initComponents()

  initCanvas()
  initAppState()
  // TODO: load save data here
  initTranslation()
  initTextureStore()

  await loadTileset(defaultTileset)
  initDrawing()

  // TODO: draw from save data
  selectTile(globalThis.appState.map.loadedTilesets[0].tiles[10])
  globalThis.hexDrawer.paintTiles(globalThis.appState.map.tiles)


	const t = document.querySelector("terrain-panel");
	t.syncTilesets();	

	const initEnd = Date.now().valueOf();
	const initDuration = initEnd - initStart;
	console.log(`Finish init, took ${initDuration} ms`)
}
