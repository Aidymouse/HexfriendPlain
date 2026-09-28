import { TextureStore } from "../init/initTextureStore.js";
import { Translation } from "./translationTypes.js";
import { MapState } from "./stateTypes.js"
import { HexDrawer } from "../lib/HexDrawer.js"

/* Set up types for globalThis */
declare global {
          var ctx: CanvasRenderingContext2D;
          var tl: Translation;
          var textureStore: TextureStore;
	  var mapState: MapState;
	  var hexDrawer: HexDrawer;
}

export * from "./tileTypes";
export * from "./hexTypes";
export * from "./iconTypes";
export * from "./translationTypes";
export * from "./coordTypes";

/** NOTE: watch for sneaky enums.js file, it's not typescript! */
