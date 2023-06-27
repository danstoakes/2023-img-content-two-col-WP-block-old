import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

import { blockStyle } from "./index";

const Save = () => {
	const blockProps = useBlockProps.save({ style: blockStyle });

	return (
		<div { ...blockProps }>
			{ __(
				"Hello World, (from the frontend).",
				"danstoakes"
			) }
		</div>
	);
};

export default Save;