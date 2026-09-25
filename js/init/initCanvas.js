import { HexDrawer } from "../lib/HexDrawer.js";
//import { HexOrientation } from "../types/index.js";
import { defaultTileset } from "./defaultTileset.js";
import { HexOrientation } from '../types/enums.js'

export const initCanvas = () => {
    globalThis.ctx = document.getElementById('main-canvas').getContext('2d');
    fitCanvasToWindow();
    window.addEventListener('resize', fitCanvasToWindow);

    const hs = new HexDrawer(globalThis.ctx);

    for (const [idx, tile] of defaultTileset.tiles.entries()) {
        const x = (idx % 7) * 100 + 100;
        const y = ((idx - (idx % 7)) / 7) * 100 + ((idx % 7) % 2 === 1 ? 45 : 0) + 200;
        hs.drawTile(tile, { x, y }, { width: 100, height: 90, orientation: HexOrientation.FLATTOP });
    }
};
const fitCanvasToWindow = () => {
    const { width, height } = document.getElementById('full-size').getBoundingClientRect();
    document.getElementById('main-canvas').setAttribute('width', `${width}`);
    document.getElementById('main-canvas').setAttribute('height', `${height}`);
};
const drawCheckerboard = (size) => {
    globalThis.ctx.clearRect(0, 0, 100000, 100000);
    const { width, height } = document.getElementById('main-canvas').getBoundingClientRect();
    for (let col = 0; col < height / size; col += 1) {
        for (let row = 0; row < width / size; row += 2) {
            if (col % 2 === 1 && row === 0) {
                row += 1;
            }
            globalThis.ctx.fillRect(row * size, col * size, size, size);
        }
    }
};
//# sourceMappingURL=initCanvas.js.map
