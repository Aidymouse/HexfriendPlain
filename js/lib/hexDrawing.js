import { HexOrientation } from '../types/enums.js'

/** @import { Tile, WorldCoord, HexSizeParams } from '../types/index' */

// /** 
//  * @param {Tile} tile */
// export const drawTile = (tile) => {
//     const ctx = globalThis.ctx;
// };


/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {WorldCoord} pos
 * @param {HexSizeParams} size
 */
export const drawHex = (ctx, pos, size) => {
    const hexPath = getHexPath(size, pos);
    drawPolygon(hexPath);
};

/**
 * @param {number[]} points
 */
export const drawPolygon = (points) => {
    const ctx = globalThis.ctx;
    ctx.beginPath();
    ctx.moveTo(points[0], points[1]);
    for (let i = 2; i < points.length; i += 2) {
        ctx.lineTo(points[i], points[i + 1]);
    }
    ctx.lineTo(points[0], points[1]);
    ctx.closePath();
};

/**
 * @param {WorldCoord} pos
 * @param {HexSizeParams} size
 */
export const getHexPath = (size, pos) => {
    const offsetX = pos?.x ?? 0;
    const offsetY = pos?.y ?? 0;
    if (size.orientation === HexOrientation.FLATTOP) {
        return [
            -size.width * 0.25 + offsetX, -size.height * 0.5 + offsetY,
            size.width * 0.25 + offsetX, -size.height * 0.5 + offsetY,
            size.width * 0.5 + offsetX, 0 + offsetY,
            size.width * 0.25 + offsetX, size.height * 0.5 + offsetY,
            -size.width * 0.25 + offsetX, size.height * 0.5 + offsetY,
            -size.width * 0.5 + offsetX, 0 + offsetY
        ];
    }
    else if (size.orientation === HexOrientation.POINTYTOP) {
        return [
            0 + offsetX, -size.height * 0.5 + offsetY,
            size.width * 0.5 + offsetX, -size.height * 0.25 + offsetY,
            size.width * 0.5 + offsetX, size.height * 0.25 + offsetY,
            0 + offsetX, size.height * 0.5 + offsetY,
            -size.width * 0.5 + offsetX, size.height * 0.25 + offsetY,
            -size.width * 0.5 + offsetX, -size.height * 0.25 + offsetY,
        ];
    }
    return [];
};

/**
 * @param {HexSizeParams} size
 */
export function getRadiusFromHexSize(size) {
    if (size.orientation == HexOrientation.POINTYTOP) {
        return ((size.width * Math.cos(Math.PI / 6)) / 2 + size.height / 2) / 2;
    }
    else {
        return (size.width / 2 + size.height * Math.tan(Math.PI / 6)) / 2;
    }
}
