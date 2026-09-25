import { initCanvas, initTextureStore, initTranslation, TextureStore } from './init/index.js';

export const initHexfriend = async () => {
    initTranslation();
    console.log(`Init Texture Store`);
    await initTextureStore();
    initCanvas();
};
