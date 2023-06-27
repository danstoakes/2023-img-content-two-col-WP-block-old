import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

import { blockStyle } from "./index";

const Edit = () => {
	const blockProps = useBlockProps( { style: blockStyle } );

	return (
		<div { ...blockProps }>
			{ __(
				"Hello World, (from the editor).",
				"danstoakes"
			) }
		</div>
	);
};
export default Edit;