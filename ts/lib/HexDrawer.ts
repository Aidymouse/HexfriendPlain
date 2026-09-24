import { HexSizeParams, Tile, WorldCoord } from "../types/index.js"
import { drawHex } from "./hexDrawing.js"

/* The overall drawing manager class for Hexfriend. 
 * Each layer will be drawn to its own canvas, when changes are registered to a layer, redraw all of that layer, then draw the layers as needed (maybe even only sections of them) to the screen as needed 
* */
export class HexDrawer {
  ctx: CanvasRenderingContext2D

  // TODO: set this stuff up one day
  //layers = []

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx
  }

  drawTile(tile: Tile, pos: WorldCoord, size: HexSizeParams) {


    const f = `#${tile.bgColor.toString(16)}`
    console.log(f)
    ctx.fillStyle = f
    drawHex(this.ctx, pos, size)
    ctx.fill();

    if (tile.symbol) {
      const tex = globalThis.textureStore.getTexture(tile.id)
      if (tex) {
	this.ctx.drawImage(tex, pos.x-tex.width/2, pos.y-tex.height/2)
      }
    }
  }

  drawHexagon() {
  }
}
