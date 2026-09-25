// export var HexOrientation;
// (function (HexOrientation) {
//     HexOrientation["FLATTOP"] = "flatTop";
//     HexOrientation["POINTYTOP"] = "pointyTop";
// })(HexOrientation || (HexOrientation = {}));
// export var HexRaised;
// (function (HexRaised) {
//     HexRaised["EVEN"] = "even";
//     HexRaised["ODD"] = "odd";
// })(HexRaised || (HexRaised = {}));

/** @typedef {string} HexOrientation = "flatTop" | "pointyTop" */
/** @typedef {string} HexRaised = "odd" | "even" */

/** @typedef {Object} HexSizeParams
 * @property {number} width
 * @property {number} height
   *  ___       /\
   * /   \  or |  |
   * \___/      \/
   *  
   * Flat     Pointy
   *  Top      Top
 * @property {HexOrientation} orientation
 * @property {number} [gap]
 * @property {HexRaised} [raised]
 */

/** Copy of HexSizeParams but gap and raised are required
 * @typedef {Object} HexGridParams
 * @property {number} width
 * @property {number} height
 * @property {HexOrientation} orientation
 * @property {number} gap
 * @property {HexRaised} raised
 */

