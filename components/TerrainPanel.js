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

	<label for="selected-tile-symbol-color" id="selected-tile-symbol-color-label" >Symbol Color</label>
	<input id="selected-tile-symbol-color" type="color" onChange="this.parentNode.parentNode.syncTileToControls()">
</section>

<section id="terrain-panel-buttons"></section>
`
	}

	/** Called to update state after a control is changed */
	syncTileToControls() {
		const selectedTile = globalThis.appState.tools.terrain.selectedTile
		selectedTile.bgColor = hexToNumber(this.querySelector("#selected-tile-color").value)
		if (selectedTile.symbol) {
			selectedTile.symbol.color = hexToNumber(this.querySelector("#selected-tile-symbol-color").value)
		}
	}

	/** Called after a tile is changed to update UI */
	syncControlsToTile() {
		const selectedTile = globalThis.appState.tools.terrain.selectedTile

		this.querySelector("#selected-tile-color").value = numberToHex(selectedTile.bgColor)

		if (selectedTile.symbol) {
			this.querySelector("#selected-tile-symbol-color").value = numberToHex(selectedTile.symbol.color)
			this.querySelector("#selected-tile-symbol-color").style.display = "unset"
			this.querySelector("#selected-tile-symbol-color-label").style.display = "unset"
		} else {
			this.querySelector("#selected-tile-symbol-color").style.display = "none"
			this.querySelector("#selected-tile-symbol-color-label").style.display = "none"
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

		this.querySelector('.selected')?.classList.remove('selected');
		e.currentTarget.classList.add('selected');
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
