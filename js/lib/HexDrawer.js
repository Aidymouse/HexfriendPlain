import { drawHex } from "./hexDrawing.js";
export class HexDrawer {
    ctx;
    constructor(ctx) {
        this.ctx = ctx;
    }
    drawTile(tile, pos, size) {
        const f = `#${tile.bgColor.toString(16)}`;
        console.log(f);
        ctx.fillStyle = f;
        drawHex(this.ctx, pos, size);
        ctx.fill();
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