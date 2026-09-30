import { defaultTileset } from "./init/defaultTileset.js";
import { selectTile } from "./tools/terrain/index.js";
import {
  initDrawing,
  initTextureStore,
  initTranslation,
  initAppState,
  initCanvas,
} from "./init/index.js";
import { loadTileset } from "./lib/tilesets.js";

// Called when the page has finished loading
export const initHexfriend = async () => {
  initCanvas();
  // App State

  initAppState();
  // TODO: load save data here
  initTranslation();
  initTextureStore();
  await loadTileset(defaultTileset);
  initDrawing();

  // TODO: draw from save data
  selectTile(globalThis.appState.map.loadedTilesets[0].tiles[0]);
  globalThis.hexDrawer.paintTiles(globalThis.appState.map.tiles);
};
