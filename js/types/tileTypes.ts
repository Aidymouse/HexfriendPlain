import { HexOrientation } from "./enums.js"
import { Icon, PlacedIcon } from "./iconTypes.js"

export type Tile = {
  display: string
  /* Some tiles won't *really* need a bg color, if they're all icon cos they're images, but, whatever */
  bgColor: number
  /* ID local to the tileset */
  id: string
  /* Picture to draw on the hex. This also implicitly sets the tile type as dynamic or bydimension */
  symbol: Omit<Icon, "preview"> | null
  /* Which tileset this tile originates from, even if the color has been changed */
  tileset_id: string
  preview_flatTop: string // Preview for the tile panel
  preview_pointyTop: string
}

/** Tile placed on the map, smaller for storage optimisation */
export type PlacedTile = Pick<Tile, "bgColor" | "id" | "tileset_id"> & {
  symbol: PlacedIcon | null
}

export type Tileset = {
  name: string
  id: string
  author: string
  version: number
  collapsed: boolean // This needs to go in a list of collapsed IDs in the save data somewhere, not in the tileset itself !
  tiles: Tile[]
  formatVersion: number // Internal ID of tileset format.
  supportedOrientations:
    | typeof HexOrientation.FLATTOP
    | typeof HexOrientation.POINTYTOP
    | "both"
  //tileset_type: TilesetType
}
