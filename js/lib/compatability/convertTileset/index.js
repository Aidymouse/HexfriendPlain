import { convertTilesetv4Tov5 } from "./v4Tov5.js"

/** @import { Tileset } from '../../../types' */

/** @param {Tileset} tileset
 * @returns {Tileset} */
// TODO: flesh this fn out
export const getLatestTilesetFormat = (tileset) => {
  // @ts-ignore - spelling was format_version pre-v5
  if (tileset.format_version === 4) {
    tileset = convertTilesetv4Tov5(tileset)
  }
  return tileset
}
