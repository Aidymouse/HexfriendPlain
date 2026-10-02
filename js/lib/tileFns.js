
import { iconsMatch, scalesMatch } from './iconFns.js'

/** @import {Tile, PlacedTile, Icon, PlacedIcon} from '../types' */


/** @param {Tile} tile
 * @returns {PlacedTile}
 */
export const toPlacedTile = (tile) => {
  return {
    bgColor: tile.bgColor,
    symbol: tile.symbol !== null ? toPlacedIcon(tile.symbol) : null,
    id: tile.id,
    tileset_id: tile.tileset_id
  }
}

/** @param {Icon} icon
 * @returns {PlacedIcon}
  */
export const toPlacedIcon = (icon) => {
  return {
    id: icon.id,
    color: icon.color,
    rotation: icon.rotation,
    scale: { ...icon.scale },
    texId: icon.texId
  }
}


/** @param {PlacedTile | null} tile1
/** @param {PlacedTile | null} tile2
/** @returns {boolean}
 */
export const tilesMatch = (tile1, tile2) => {
  if (tile1 === null || tile2 === null) {
    return tile1 === tile2
  }
  const colorMatches = tile1.bgColor === tile2.bgColor
  const idsMatch = tile1.id === tile2.id
  const tilesetsMatch = tile1.tileset_id === tile2.tileset_id
  const iconMatches = tile1.symbol && tile2.symbol ? iconsMatch(tile1.symbol, tile2.symbol) : true

  // console.log({
  //   colorMatches,
  //   idsMatch,
  //   tilesetsMatch,
  //   iconMatches,
  // })

  return colorMatches && idsMatch && tilesetsMatch && iconMatches

}


