import { HexCoords } from "../../lib/hexCoords.js";
import { placeTile } from "./terrainToolFns.js";

/** @param {MouseEvent} e */
export const terrainPointerMove = (e) => {
  const mouseHeld = e.buttons & (1 << 0);

  if (mouseHeld) {
    const mouseCoord = { x: e.clientX, y: e.clientY };
    const worldCoord = HexCoords.screenToWorld(mouseCoord);

    // TODO: make this based on selected tile
    const tile = globalThis.appState.tools.terrain.selectedTile;
    placeTile(tile, worldCoord);
  }
}
