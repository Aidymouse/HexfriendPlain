/** @import { CubeCoord, AxialCoord, WorldCoord, HexSizeParams } from '../types' **/

import { HexOrientation } from "../types/enums.js";
import { getTranslation } from "./canvasFns.js";

export const HexCoords = {
  /**
   * @param {CubeCoord} c
   * @param {HexSizeParams} size
   * @returns {WorldCoord}
   */
  cubeToWorld: (c, size) => {
    const hexWidth = size.width + (size.gap ?? 0);
    const hexHeight = size.height + (size.gap ?? 0);
    let hx = 0;
    let hy = 0;
    if (size.orientation == "flatTop") {
      hx = c.q * hexWidth * 0.75;
      hy = (c.r * hexHeight) / 2 - (c.s * hexHeight) / 2;
    } else if (size.orientation == "pointyTop") {
      hx = (c.q * hexWidth) / 2 - (c.s * hexWidth) / 2;
      hy = c.r * hexHeight * 0.75;
    }
    return { x: hx, y: hy };
  },

  /** @param {CubeCoord} c
   * @returns {AxialCoord}
   */
  cubeToAxial: (c) => {
    return { q: c.q, r: c.r };
  },

  /** @param {AxialCoord} a
   * @returns {CubeCoord}
   */
  axialToCube: (a) => {
    return { q: a.q, r: a.r, s: -a.q - a.r };
  },

  /**
   * @param {AxialCoord} a
   * @param {HexSizeParams} size
   * @returns {WorldCoord}
   */
  axialToWorld: (a, size) => {
    return HexCoords.cubeToWorld(HexCoords.axialToCube(a), size);
  },

  /** @param p {WorldCoord}
   * @returns {WorldCoord}
   * */
  screenToWorld: (p) => {
    const t = getTranslation();
    return { x: p.x - t.x, y: p.y - t.y };
  },

  /** @param {WorldCoord} w
   * @param {HexSizeParams} [sizeIn]
   * @param {boolean} [round=true]
   * @returns {CubeCoord}
   */
  worldToCube: (w, sizeIn, round = true) => {

    const size = sizeIn ?? globalThis.appState.map.hexes

    const hexWidth = size.width + (size.gap ?? 0);
    const hexHeight = size.height + (size.gap ?? 0);

    let q = w.x / (hexWidth * 0.75);
    let r = ((2 * w.y) / hexHeight - q) / 2;

    if (size.orientation === HexOrientation.POINTYTOP) {
      r = w.y / (hexHeight * 0.75);
      q = ((2 * w.x) / hexWidth - r) / 2;
    }
    let s = -q - r;

    if (round) {
      return HexCoords.cubeRound({ q, r, s });
    }

    return { q, r, s };
  },

  /** Rounds a cube (or axial) coord to the nearest whole coord
   * @param {CubeCoord} frac
   * @returns { CubeCoord }
   */
  cubeRound: (frac) => {
    let q = Math.round(frac.q);
    let r = Math.round(frac.r);
    let s = Math.round(frac.s);

    let q_diff = Math.abs(q - frac.q);
    let r_diff = Math.abs(r - frac.r);
    let s_diff = Math.abs(s - frac.s);

    if (q_diff > r_diff && q_diff > s_diff) {
      q = -r - s;
    } else if (r_diff > s_diff) {
      r = -q - s;
    } else {
      s = -q - r;
    }

    if (q === -0) {
      q = 0;
    }
    if (r === -0) {
      r = 0;
    }
    if (s === -0) {
      s = 0;
    }

    return { q: q, r: r, s: s };
  },

  /** Round world coordinates to nearest cube coordinates, but return as world coordinates
   * @param {WorldCoord} w
   * @param {HexSizeParams} [sizeIn] - Defaults to size from map state
   * @returns {WorldCoord}
   * */
  worldCubeRound(w, sizeIn) {
    const size = sizeIn ?? globalThis.appState.map.hexes;
    return HexCoords.cubeToWorld(HexCoords.worldToCube(w, size), size);
  },

  /**
  * @param {AxialCoord} c
  * @returns {string}
  */
  hexId(c) {
    return `${c.q}:${c.r}`
  }
};
