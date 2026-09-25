import { HexOrientation, HexRaised } from "./enums";
import { HexGridParams } from "./hexTypes";
import { Tile, Tileset } from "./tileTypes";

export type MapShapeConfig =
          | {
                      mapShape: "flower";
                      hexesOut: number;
            }
          | { mapShape: "square"; rows: number; columns: number; raised: HexRaised };

export type LargeHexesConfig = {
          shown: boolean;
          style: { width: number; color: string };
          offset: { x: number; y: number };
          diameterInHexes: number;
          raised: HexRaised;
          encompassEdges: boolean;
};

export type HexGridConfig = {
          shown: boolean;
          stroke: string;
          thickness: number;
};

export type HexConfig = {
          width: number;
          height: number;
          orientation: HexOrientation;
          blankColor: string;
};

export type CoordinatesConfig = {
          shown: boolean;
          style: { fill: string; stroke: string; strokeThickness: number };
          system: CoordinatesConfig;
          seperator: string;
          gap: number;
          offsets: {
                    row_col: { row: number; col: number };
                    cube: { q: number; r: number; s: number };
          };
};

// Live application state
export type MapState = {
          // Config
          shape: MapShapeConfig;
          hexes: HexConfig;
          largeHexes: LargeHexesConfig;
          grid: HexGridConfig;
          coordinates: CoordinatesConfig;

          // Tiles
          tiles: { [hexId: string]: Tile };
          loadedTilesets: Tileset[];
};
