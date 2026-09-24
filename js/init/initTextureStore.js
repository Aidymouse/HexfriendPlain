import { defaultTileset } from './defaultTileset.js';
export class TextureStore {
    textures = {};
    constructor() {
    }
    loadTexture = async (id, base64) => new Promise((res, rej) => {
        const img = new Image();
        img.onload = async () => {
            console.log(`Loaded texture: ${id}`);
            const bm = await window.createImageBitmap(img);
            this.textures[id] = bm;
            res(bm);
        };
        img.src = base64;
    });
    getTexture(id) {
        return this.textures[id];
    }
}
export const initTextureStore = async () => {
    globalThis.textureStore = new TextureStore();
    for (const tile of defaultTileset.tiles) {
        if (tile.symbol) {
            await globalThis.textureStore.loadTexture(tile.id, tile.symbol.base64);
        }
    }
};
//# sourceMappingURL=initTextureStore.js.map