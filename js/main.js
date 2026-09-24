import { initCanvas, initTextureStore, initTranslation } from './init/index.js';
export const initHexfriend = async () => {
    initTranslation();
    console.log(`Init Texture Store`);
    await initTextureStore();
    initCanvas();
};
//# sourceMappingURL=main.js.map