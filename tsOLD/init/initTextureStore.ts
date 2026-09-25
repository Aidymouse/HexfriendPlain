import { defaultTileset } from './defaultTileset.js'

export class TextureStore {
  textures: { [id: string]: ImageBitmap } = {}

  constructor() {
  }

  loadTexture = async (id: string, base64: string) => new Promise((res,rej) => {
    // if the texture already exists, we can basically symlink the id to that texture
    const img = new Image()
    img.onload = async () => {
      console.log(`Loaded texture: ${id}`)
      const bm: ImageBitmap = await window.createImageBitmap(img)
      this.textures[id] = bm
      res(bm)
    }
    img.src = base64

  })

  // TODO:
  getTexture(id: string): ImageBitmap | undefined {
    return this.textures[id]
  }
}


export const initTextureStore = async () => {
  globalThis.textureStore = new TextureStore()

  for (const tile of defaultTileset.tiles) {
    if (tile.symbol) {
      await globalThis.textureStore.loadTexture(tile.id, tile.symbol.base64)
    }
  }
}
