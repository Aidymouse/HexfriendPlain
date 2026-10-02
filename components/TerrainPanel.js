import { selectTile } from "../js/tools/terrain/index.js"
import { hexToNumber, numberToHex } from "../js/helpers/index.js"

export class TerrainPanel extends HTMLElement {
  constructor() {
    super()
  }

	connectedCallback() { 
		this.render()
	}

	render() {
		this.innerHTML = `
<section id="terrain-panel-controls">
	<label for="selected-tile-color">Color</label>
	<input id="selected-tile-color" type="color" onChange="this.parentNode.parentNode.syncTileToControls()">

	<label for="selected-tile-symbol-color">Symbol Color</label>
	<input id="selected-tile-symbol-color" type="color">
</section>

<section id="terrain-panel-buttons"></section>
`
	}

	syncTileToControls() {
		globalThis.appState.tools.terrain.selectedTile.bgColor = hexToNumber(this.querySelector("#selected-tile-color").value)
	}

	syncControlsToTile() {
		const selectedTile = globalThis.appState.tools.terrain.selectedTile

		this.querySelector("#selected-tile-color").value = numberToHex(selectedTile.bgColor)

		if (selectedTile.symbol) {
			this.querySelector("#selected-tile-symbol-color").value = numberToHex(selectedTile.symbol.color)
		} else {
			// TODO: hide
		}
	}


	/** 
 	* @param {MouseEvent} e
 	* @param {string} tileset_id
 	* @param {string} tile_id
 	*/
	clickTile(e, tileset_id, tile_id) {
		const tileset = globalThis.appState.map.loadedTilesets.find(t => t.id === tileset_id) 
		const tile = tileset.tiles.find(t => t.id === tile_id)
		selectTile(tile)
		this.syncControlsToTile() 
	}

	syncTilesets() {
		let newHtml = ""

		const tilesets = globalThis.appState.map.loadedTilesets;

		for (const tileset of tilesets) {
			for (const tile of tileset.tiles) {

				newHtml += `<button title="${tile.display}" onClick="this.parentNode.parentNode.clickTile(event, '${tile.tileset_id}', '${tile.id}')">
<img style="width: 50px; height: 45px;" src="${tile.preview_flatTop}">
</button>`
				
			}
		}

		this.querySelector("#terrain-panel-buttons").innerHTML = newHtml;


	}

}
