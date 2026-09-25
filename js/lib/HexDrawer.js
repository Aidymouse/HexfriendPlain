import { drawHex } from "./hexDrawing.js";

/** @import {Icon, WorldCoord, HexSizeParams, Tile} from '../types/index' */

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
                this.ctx.drawImage(tex, pos.x - tex.width / 2, pos.y - tex.height / 2);
            }
        }
    }

    drawHexagon() {
    }
}
//# sourceMappingURL=HexDrawer.js.map
