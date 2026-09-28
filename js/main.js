import { defaultTileset } from "./init/defaultTileset.js";
import {
  initDrawing,
  initTextureStore,
  initTranslation,
  initMapState,
  initCanvas,
} from "./init/index.js";
import { loadTileset } from "./lib/tilesets.js";

// Called when the page has finished loading
export const initHexfriend = async () => {
  initCanvas();
  initMapState();
  // TODO: load save data here
  initTranslation();
  initTextureStore();
  await loadTileset(defaultTileset);
  initDrawing();
  // TODO: draw from save data
  globalThis.hexDrawer.paintTiles(globalThis.mapState.tiles);
};
