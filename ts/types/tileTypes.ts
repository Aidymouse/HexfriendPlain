import { HexOrientation } from "./hexTypes.js";
import { Icon } from "./iconTypes.js";

export type Tile = {
	display: string;
	/* Some tiles won't *really* need a bg color, if they're all icon cos they're images, but, whatever */
	bgColor: number; 
	id: string; // Local to the tileset
	symbol: Icon | null; // Picture to draw on the hex. This also implicitly sets the tile type as dynamic or bydimension
	tileset_id: string; // Used to identify which tile to select when the tile is clicked on
	preview_flatTop: string; // Preview for the tile panel
	preview_pointyTop: string; 
}

export type Tileset = {
	name: string;
	id: string;
	author: string;
	version: number;
	collapsed: boolean; // This needs to go in a list of collapsed IDs in the save data somewhere, not in the tileset itself !
	tiles: Tile[];
	format_version: number; // Internal ID of tileset format. 
	supported_orientations: HexOrientation.FLATTOP | HexOrientation.POINTYTOP | 'both'
	//tileset_type: TilesetType
}
