
/** Orientation of the hex
*  ___       /\
* /   \  or |  |
* \___/      \/
*
* Flat     Pointy
*  Top      Top
* @readonly
* @enum { string } */
export const HexOrientation = {
    FLATTOP: "flatTop",
    POINTYTOP: "pointyTop",
}

/** For square grids
 * @readonly
 * @enum {string} */
export const HexRaised = {
    EVEN: 'even',
    ODD: 'odd',
}

/** For scaling images, mostly icons
 * @readonly
 * @enum { string } 
 */
export const ScaleMode = {
    RELATIVE: 'relative',
    BYDIMENSION: 'bydimension',
}


