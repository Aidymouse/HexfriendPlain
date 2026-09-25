import { TextureStore } from "../init/initTextureStore.js";
import { Translation } from "./translationTypes";

declare global {
          var ctx: CanvasRenderingContext2D;
          var tl: Translation;
          var textureStore: TextureStore;
}
