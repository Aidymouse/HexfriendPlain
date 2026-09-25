import { ScaleMode } from "./imageTypes";

export type IconBase = {
          display: string;
          /* */
          id: string; // Within iconset id
          texId: string; // Id of loaded texture
          color: number;
          //pHex: number;
          base64: string;
          preview: string; // Preview is set to nothing on the icon layer itself TODO: true?
          texWidth: number;
          texHeight: number;
          rotation: number;
};

export type RelativeIcon = IconBase & {
          scaleMode: ScaleMode.RELATIVE;
          pHex: number; // percent of total hex taken up, where 1 = 100% of hexes shortest dimension
};

export type ByDimensionIcon = IconBase & {
          scaleMode: ScaleMode.BYDIMENSION;
          pWidth: number;
          pHeight: number;
};

export type Icon = RelativeIcon | ByDimensionIcon;
