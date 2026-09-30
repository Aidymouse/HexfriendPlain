import { Tile } from "./tileTypes.js";

export type Layer = {
          id: string;
          tiles: { [id: string]: Tile | null };
};
