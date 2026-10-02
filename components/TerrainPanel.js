import { selectTile } from "../js/tools/terrain/index.js"

export class TerrainPanel extends HTMLElement {
  constructor() {
    super()
  }

	connectedCallback() { }


	/** 
 	* @param {MouseEvent} e
 	* @param {string} tileset_id
 	* @param {string} tile_id
 	*/
	clickTile(e, tileset_id, tile_id) {
		const tileset = globalThis.appState.map.loadedTilesets.find(t => t.id === tileset_id) 
		const tile = tileset.tiles.find(t => t.id === tile_id)
		selectTile(tile)
	}

	syncTilesets() {
		let newHtml = ""

		const tilesets = globalThis.appState.map.loadedTilesets;

		for (const tileset of tilesets) {
			for (const tile of tileset.tiles) {

				newHtml += `<button title="${tile.display}" onClick="this.parentNode.clickTile(event, '${tile.tileset_id}', '${tile.id}')">
<img style="width: 50px; height: 45px;" src="${tile.preview_flatTop}">
</button>`
				
			}
		}

		this.innerHTML = newHtml;


	}

}
