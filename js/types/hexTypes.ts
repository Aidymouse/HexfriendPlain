// export enum HexOrientation {
//   FLATTOP = 'flatTop',
//   POINTYTOP = 'pointyTop',
// }
//
// export enum HexRaised {
//   EVEN = 'even',
//   ODD = 'odd',
// }

import { HexOrientation as JSHO } from "./enums.js";

export enum HexOrientation {
          FLATTOP = "flatTop",
          POINTYTOP = "pointyTop",
}

export enum HexRaised {
          EVEN = "even",
          ODD = "odd",
}

export type HexSizeParams = {
          /** Width of the hex **/
          width: number;
          /** Height of the hex **/
          height: number;
          /** Orientation of the hex
           *  ___       /\
           * /   \  or | |
           * \___/     \/
           *
           * Flat     Pointy
           *  Top      Top
           *
           * **/
          orientation: HexOrientation;
          /* If you're thinking about your hex in a grid and want gaps between hexes, provide it here */
          gap?: number;
          /* For grid maps, the row (flat top) or column (pointy top) will start raised (ODD) or not raised (ODD) **/
          raised?: HexRaised;
};

export type HexGridParams = Required<HexSizeParams>;
