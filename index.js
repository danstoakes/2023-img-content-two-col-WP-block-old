import { registerBlockType } from "@wordpress/blocks";

import json from "./block.json";

import edit from "./edit";
import save from "./save";

export const blockStyle = {
	backgroundColor: "#900",
	color: "#fff",
	padding: "20px",
};

const { name } = json;

// Register the block
registerBlockType(name, {
	edit: edit,
	save, // save: save
});