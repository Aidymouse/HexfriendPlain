
import { ScaleMode } from '../types/enums.js'


/** @typedef {Object} RelativeOptions
 * @property {typeof ScaleMode.RELATIVE} scaleMode
 * @property {number} proportion
 * */

/** @typedef {Object} ByDimensionOptions
 * @property {typeof ScaleMode.BYDIMENSION} scaleMode,
 * @property {number} propWidth,
 * @property {number} propHeight
 */

/** Gets a scale vector to fit an image into a rectangle of specified height, done by best fit so image will always fit
 * @param {number} imgWidth
 * @param {number} imgHeight
 * @param {number} rectWidth
 * @param {number} rectHeight
 * @param {RelativeOptions | ByDimensionOptions} [optionsIn]
 *
 * @returns {{x: number, y: number}} - X and Y scale that, when applied to imgWidth and Height, results in the desired fit to the rect
 */
export const scaleImageToRect = (imgWidth, imgHeight, rectWidth, rectHeight, optionsIn) => {
    let options = optionsIn ?? { scaleMode: ScaleMode.RELATIVE, proprtion: 1 }

    if (options.scaleMode === ScaleMode.RELATIVE) {
        /** @type {number} **/
        let scale

        if (rectWidth < rectHeight) {
            scale = (rectWidth * /** @type {RelativeOptions} */(options).proportion) / imgWidth
        } else {
            scale = (rectHeight * /** @type {RelativeOptions} */(options).proportion) / imgHeight
        }

        return { x: scale, y: scale }

    } else if (options.scaleMode === ScaleMode.BYDIMENSION) {
        return {
            x: (rectWidth * /** @type {ByDimensionOptions} */(options).propWidth) / imgWidth,
            y: (rectHeight * /** @type {ByDimensionOptions} */(options).propHeight) / imgHeight,
        }
    }
}
