
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

