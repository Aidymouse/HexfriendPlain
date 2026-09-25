import { AxialCoord, CubeCoord, HexGridParams, HexSizeParams, WorldCoord } from '../types/index.js'

export const HexCoords = {
  // cubeToAxial: (c: CubeCoord): AxialCoord => {
  // },

  cubeToWorld: (c: CubeCoord, size: HexSizeParams): WorldCoord => {
    const hexWidth = size.width + (size.gap ?? 0)
    const hexHeight = size.height + (size.gap ?? 0)

    let hx: number = 0;
    let hy: number = 0;

    if (size.orientation == 'flatTop') {
      hx = c.q * hexWidth * 0.75
      hy = (c.r * hexHeight) / 2 - (c.s * hexHeight) / 2
    } else if (size.orientation == 'pointyTop') {
      hx = (c.q * hexWidth) / 2 - (c.s * hexWidth) / 2
      hy = c.r * hexHeight * 0.75
    }

    return { x: hx, y: hy }
  },

  // worldToCube: (w: WorldCoord, size: HexGridParams, round?: boolean): CubeCoord => {
  // const hex_width = size.width + size.gap
  // const hex_height = size.height + size.gap
  // if (size.orientation == 'flatTop') {
  //   // This is the inversion of the axialToWorld
  //   // Of course, substituting -q-r in as S
  //
  //   let q = w.x / (hex_width * 0.75)
  //   let r = ((2 * w.y) / hex_height - q) / 2
  //
  //   if (round) {
  //     let roundedCoords = cube_round(AxialToCube(q, r))
  //     return roundedCoords
  //   }
  //
  //   return AxialToCube(q, r)
  //
  // } else if (HexOrientation == 'pointyTop') {
  //   let r = worldY / (hex_height * 0.75)
  //   let q = ((2 * worldX) / hex_width - r) / 2
  //
  // if (round) {
  // 	let roundedCoords = cube_round(AxialToCube(q, r))
  // 	return roundedCoords
  // }
  //
  //   return AxialToCube(q, r)
  // }
  // }
}
