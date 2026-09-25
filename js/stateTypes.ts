// export type SaveData = {
//         saveVersion: number,
//         title: string,
//
//         tiles:
// }

import { HexGridParams } from "./hexTypes";
import { Tile, Tileset } from "./tileTypes";

export type MapState = {
          title: string;
          hexConfig: HexGridParams;

          tiles: { [hexId: string]: Tile };
          loadedTilesets: Tileset[];
};
