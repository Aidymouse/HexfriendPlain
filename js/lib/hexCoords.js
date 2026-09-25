
/** @import { CubeCoord, HexSizeParams } from '../types' **/

export const HexCoords = {

    /**
    * @param {CubeCoord} c
    * @param {HexSizeParams} size
    */
    cubeToWorld: (c, size) => {
        const hexWidth = size.width + (size.gap ?? 0);
        const hexHeight = size.height + (size.gap ?? 0);
        let hx = 0;
        let hy = 0;
        if (size.orientation == 'flatTop') {
            hx = c.q * hexWidth * 0.75;
            hy = (c.r * hexHeight) / 2 - (c.s * hexHeight) / 2;
        }
        else if (size.orientation == 'pointyTop') {
            hx = (c.q * hexWidth) / 2 - (c.s * hexWidth) / 2;
            hy = c.r * hexHeight * 0.75;
        }
        return { x: hx, y: hy };
    },
};
