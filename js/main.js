import { initCanvas, initTextureStore, initTranslation, TextureStore } from './init/index.js';

// Called when the page has finished loading
export const initHexfriend = async () => {
    initTranslation();
    await initTextureStore();
    initCanvas();
};
