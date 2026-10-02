import { selectTile } from "../js/tools/terrain/index.js"

export class TerrainPanel extends HTMLElement {
  constructor() {
    super()
  }

	connectedCallback() { }

	syncTilesets() {
		let newHtml = ""

		const tilesets = globalThis.appState.map.loadedTilesets;
		console.log(tilesets);
		for (const tileset of tilesets) {
			for (const tile of tileset.tiles) {

				newHtml += `<button id="terrain-panel-btn-${tile.tileset_id}-${tile.id}" title="${tile.display}">
<img style="width: 50px; height: 45px;" src="${tile.preview_flatTop}">
</button>`
				
			}
		}

		this.innerHTML = newHtml;

		for (const tileset of tilesets) {
			for (const tile of tileset.tiles) {
				document.getElementById(`terrain-panel-btn-${tile.tileset_id}-${tile.id}`).addEventListener("pointerup", () => {
					selectTile(tile);
				});
			}
		}


	}

}
