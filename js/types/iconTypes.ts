import { type ScaleMode } from "./enums"

export type Icon = {
  display: string
  /* */
  id: string // Within iconset id
  texId: string // Id of loaded texture
  color: number
  //pHex: number;
  base64: string
  preview: string // Preview is set to nothing on the icon layer itself TODO: true?
  texWidth: number
  texHeight: number
  rotation: number
  scale: IconScale
}

export type RelativeScaleMode = {
  scaleMode: typeof ScaleMode.RELATIVE
  /* percent of total hex taken up, where 1 = 100% of hexes shortest dimension */
  pHex: number
}

export type ByDimensionScaleMode = {
  scaleMode: typeof ScaleMode.BYDIMENSION
  pWidth: number
  pHeight: number
}

export type IconScale = RelativeScaleMode | ByDimensionScaleMode

export type PlacedIcon = Pick<
  Icon,
  "id" | "texId" | "color" | "rotation" | "scale"
>
