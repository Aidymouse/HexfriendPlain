/** @import { Tileset } from "../../../types" */

import { ScaleMode } from "../../../types/enums.js"

const debug = false

/**
 * Changes in v10 tileset:
 * - Tile symbols now have a scale property, icons aren't a union type, only scale is
 * - Change format_version to formatVersion
 * - Change supported_orientations to supportedOrientations
 *
 * @param {Tileset} tileset
 * @returns {Tileset}
 * */

export const convertTilesetv4Tov5 = (tileset) => {
  tileset.tiles = tileset.tiles.map((t) => {
    if (t.symbol === null) {
      return t
    }

    let newTile = structuredClone(t)

    // @ts-expect-error
    if (t.symbol.scaleMode === ScaleMode.RELATIVE) {
      debug && console.log(`v10: Updating symbol on ${t.tileset_id}-${t.id}`)
      // @ts-ignore - Must exist from above check on t
      newTile.symbol.scale = {
        scaleMode: ScaleMode.RELATIVE,
        // @ts-expect-error
        pHex: t.symbol.pHex,
      }
      // @ts-expect-error
      delete newTile.symbol.pHex
    }
    // @ts-expect-error
    else if (t.symbol.scaleMode === ScaleMode.BYDIMENSION) {
      // @ts-ignore - Must exist from above check on t
      newTile.symbol.scale = {
        scaleMode: ScaleMode.BYDIMENSION,
        // @ts-expect-error
        pWidth: t.symbol.pWidth,
        // @ts-expect-error
        pHeight: t.symbo.pHeight,
      }
      // @ts-expect-error
      delete newTile.symbol.pWidth
      // @ts-expect-error
      delete newTile.symbol.pHeight
    }

    // @ts-expect-error
    delete newTile.symbol.scaleMode

    return newTile
  })

  tileset.formatVersion = 5
  /** @ts-ignore */
  delete tileset.format_version

  /** @ts-ignore */
  tileset.supportedOrientations = tileset.supported_orientations
  /** @ts-ignore */
  delete tileset.supported_orientations

  return tileset
}
