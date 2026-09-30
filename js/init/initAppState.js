import {
  CoordinateSystem,
  HexOrientation,
  HexRaised,
  Tool,
} from "../types/enums.js";

/** @import {MapState, TerrainToolState} from '../types' */

const initSaveData = () => {};

export const initAppState = () => {
  globalThis.appState = {
    selectedTool: Tool.TERRAIN,
    tools: {
      terrain: getInitTerrainToolState(),
    },
    map: getInitMapState(),
  };

  // TEMP: Create a ring of hexes
  // TODO: refactor this into default save data and do a load save data
  const hexesOut = 7;
  for (let q = -hexesOut; q <= hexesOut; q++) {
    for (let r = -hexesOut; r <= hexesOut; r++) {
      const s = -q - r;
      if (q + r <= hexesOut && q + r >= -hexesOut) {
        globalThis.appState.map.tiles[`${q}:${r}`] = { q, r, tile: null };
      }
    }
  }
};

/** @returns {MapState} */
const getInitMapState = () => {
  return {
    shape: {
      mapShape: "flower",
      hexesOut: 7,
    },
    hexes: {
      width: 50,
      height: 45,
      orientation: HexOrientation.FLATTOP,
      gap: 0,
      raised: HexRaised.EVEN,
      blankColor: "#f2f2f2",
    },
    largeHexes: {
      shown: false,
      style: { width: 2, color: "#000000" },
      offset: { x: 0, y: 0 },
      diameterInHexes: 3,
      raised: HexRaised.EVEN,
      encompassEdges: false,
    },
    grid: {
      shown: true,
      stroke: "#000000",
      thickness: 2,
    },
    coordinates: {
      shown: false,
      style: { fill: "#ffffff", stroke: "#000000", strokeThickness: 1 },
      system: CoordinateSystem.AXIAL,
      seperator: ".",
      gap: 2,
      offsets: {
        row_col: { row: 0, col: 0 },
        cube: { q: 0, r: 0, s: 0 },
      },
    },

    tiles: {},
    loadedTilesets: [],
  };
};

/** @returns { TerrainToolState } */
const getInitTerrainToolState = () => {
  return {
    selectedTile: {
      id: "",
      tileset_id: "",
      bgColor: 0x000000,
      symbol: null,
    },
  };
};
