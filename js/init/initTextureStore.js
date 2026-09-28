import { defaultTileset } from "./defaultTileset.js";
import { TextureStore } from "../lib/TextureStore.js";

export const initTextureStore = () => {
  globalThis.textureStore = new TextureStore();
};
