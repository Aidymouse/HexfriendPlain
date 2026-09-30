import { ScaleMode } from "../types/enums.js";
import { drawHex } from "./drawingFns.js";
import { scaleImageToRect } from "./imageSizing.js";
import { tintImage } from "./imageFns.js";
import { HexCoords } from "./hexCoords.js";

/** @import {Icon, WorldCoord, HexSizeParams, Tile, PlacedTile } from '../types/index' */

export class HexDrawer {
  // @type {CanvasRenderingContext2D}
  ctx;

  /** @param {CanvasRenderingContext2D} ctx
   */
  constructor(ctx) {
    this.ctx = ctx;
  }

  /**
   * @param {PlacedTile} tile
   * @param {WorldCoord} pos
   * @param {HexSizeParams} [sizeIn]
   */
  drawTile(tile, pos, sizeIn) {
    const size = sizeIn ?? globalThis.appState.map.hexes;

    const f = `#${tile.bgColor.toString(16)}`;
    this.ctx.fillStyle = f;
    drawHex(this.ctx, pos, size);
    this.ctx.fill();
    if (tile.symbol) {
      const tex = globalThis.textureStore.getTexture(tile.id);

      if (tex) {
        // TODO: cache the scaled tex for the latest 5 placed tiles
        const texScale = scaleImageToRect(
          tex.width,
          tex.height,
          size.width,
          size.height,
          { scaleMode: ScaleMode.RELATIVE, proportion: 0.8 },
        );
        const texWidth = tex.width * texScale.x;
        const texHeight = tex.height * texScale.y;
        const tintedTex = tintImage(tex, `#${tile.symbol.color.toString(16)}`);
        this.ctx.drawImage(
          tintedTex,
          pos.x - texWidth / 2,
          pos.y - texHeight / 2,
          texWidth,
          texHeight,
        );
        this.ctx.restore();
      }
    }
  }

  /**
   * @param {{[k: string]: {q: number, r: number, tile: PlacedTile | null}}} tiles
   * @param {HexSizeParams} [sizeIn]
   */
  paintTiles(tiles, sizeIn) {
    const size = sizeIn ?? globalThis.appState.map.hexes;
    for (const [hexId, tile] of Object.entries(tiles)) {
      if (tile.tile === null) {
        this.drawTile(
          {
            bgColor: Number(
              globalThis.appState.map.hexes.blankColor.replace(/#/g, "0x"),
            ),
            symbol: null,
            id: "",
            tileset_id: "",
          },
          HexCoords.axialToWorld({ q: tile.q, r: tile.r }, size),
          size,
        );
      } else {
        this.drawTile(
          tile.tile,
          HexCoords.axialToWorld({ q: tile.q, r: tile.r }, size),
          size,
        );
      }
    }
  }

  drawHexagon() {}
}
