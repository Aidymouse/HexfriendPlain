import { defaultTileset } from './defaultTileset.js';
export class TextureStore {

    // TODO: how do i get BitmapImage
    /** @type Object.<string, BitmapImage> */
    textures = {};

    constructor() {
    }
    /** @param {string} id
    * @param {string} base64
    */
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

    /** @param {string} id */
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
