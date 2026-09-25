// Implementation of hexTypes/HexOrientation

/** Orientation of the hex
*  ___       /\
* /   \  or |  |
* \___/      \/
*
* Flat     Pointy
*  Top      Top
* @enum { string } */
export const HexOrientation = {
    FLATTOP: "flatTop",
    POINTYTOP: "pointyTop",
}

/** For square grids
 * @enum {string} */
export const HexRaised = {
    EVEN: 'even',
    ODD: 'odd',
}

/** For scaling images, mostly icons
 * @enum {typeof ScaleMode[keyof typeof ScaleMode]} */
export const ScaleMode = /** @type {const} */ ({
    RELATIVE: 'relative',
    BYDIMENSION: 'bydimension',
})


