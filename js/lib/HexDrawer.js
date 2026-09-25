import { ScaleMode } from "../types/enums.js";
import { drawHex } from "./hexDrawing.js";
import { scaleImageToRect } from "./imageSizing.js";
import { tintImage } from './imageFns.js'

/** @import {Icon, WorldCoord, HexSizeParams, Tile } from '../types/index' */

export class HexDrawer {
    // @type {CanvasRenderingContext2D}
    ctx;

    /** @param {CanvasRenderingContext2D} ctx
     */
    constructor(ctx) {
        this.ctx = ctx;
    }

    /**
    * @param {Tile} tile
    * @param {WorldCoord} pos
    * @param {HexSizeParams} size
    */
    drawTile(tile, pos, size) {
        const f = `#${tile.bgColor.toString(16)}`;
        console.log(f);
        this.ctx.fillStyle = f;
        drawHex(this.ctx, pos, size);
        this.ctx.fill();
        if (tile.symbol) {
            const tex = globalThis.textureStore.getTexture(tile.id);

            if (tex) {
                const texScale = scaleImageToRect(tex.width, tex.height, size.width, size.height, { scaleMode: ScaleMode.RELATIVE, proportion: 0.8 })
                const texWidth = tex.width * texScale.x
                const texHeight = tex.height * texScale.y
                const tintedTex = tintImage(tex, `#${tile.symbol.color.toString(16)}`)
                this.ctx.drawImage(tintedTex, pos.x - texWidth / 2, pos.y - texHeight / 2, texWidth, texHeight);
                this.ctx.restore()
            }
        }
    }

    drawHexagon() {
    }
}

