import { TextureStore } from "../lib/TextureStore.js";
import { Translation } from "./translationTypes.js";
import { AppState } from "./stateTypes.js"
import { HexDrawer } from "../lib/HexDrawer.js"

/* Set up types for globalThis */
declare global {
          var ctx: CanvasRenderingContext2D;
          var tl: Translation;
          var textureStore: TextureStore;
	  var hexDrawer: HexDrawer;
	  var appState: AppState;
}

export * from "./tileTypes";
export * from "./hexTypes";
export * from "./iconTypes";
export * from "./translationTypes";
export * from "./coordTypes";
export * from "./stateTypes";

/** NOTE: watch for sneaky enums.js file, it's not typescript! */
