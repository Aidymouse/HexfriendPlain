/** @import { IconScale, PlacedIcon } from '../types' */

import { ScaleMode } from '../types/enums.js'

/** 
 * @param {PlacedIcon} icon1
 * @param {PlacedIcon} icon2
 * @retrusn { boolean }
 */
export const iconsMatch = (icon1, icon2) => {
  const colorMatches = icon1.color === icon2.color
  const scaleMatches = scalesMatch(icon1.scale, icon2.scale)

  console.log({ colorMatches, scaleMatches })

  return colorMatches && scaleMatches
}

/**
 * @param {IconScale} scale1 
 * @param {IconScale} scale2 
 * */
export const scalesMatch = (scale1, scale2) => {
  const modesMatch = scale1.scaleMode === scale2.scaleMode

  //@ts-expect-error
  const pHexMatches = scale1.pHex === scale2.pHex
  //@ts-expect-error
  const pWidthMatches = scale1.pWidth === scale2.pWidth
  //@ts-expect-error
  const pHeightMatches = scale1.pHeight === scale2.pHeight


  return modesMatch && pWidthMatches && pHeightMatches && pHexMatches
}
