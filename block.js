(function (blocks, editor, i18n, element, components, _, blockEditor) {
	var __ = i18n.__;
	var el = element.createElement;
	var RichText = blockEditor.RichText;
	var MediaUpload = blockEditor.MediaUpload;
	var useBlockProps = blockEditor.useBlockProps;

	blocks.registerBlockType('danstoakes/img-content-two-col', {
		title: __('Image Beside Text', 'danstoakes'),
		icon: 'index-card',
		category: 'layout',
		attributes: {
			title: {
				type: 'array',
				source: 'children',
				selector: 'h2',
			},
			mediaID: {
				type: 'number',
			},
			mediaURL: {
				type: 'string',
				source: 'attribute',
				selector: 'img',
				attribute: 'src',
			},
			content: {
				type: 'array',
				source: 'children',
				selector: '.content',
			}
		},

		example: {
			attributes: {
				title: __( 'Image Beside Text', 'danstoakes' ),
				mediaID: 1,
				mediaURL:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/2ChocolateChipCookies.jpg/320px-2ChocolateChipCookies.jpg',
				content: [
					__( 'This is some content!', 'danstoakes' ),
				],
			},
		},

		edit: function (props) {
			var attributes = props.attributes;

			var onSelectImage = function (media) {
				return props.setAttributes({
					mediaURL: media.url,
					mediaID: media.id,
				});
			};

			return el(
				'div',
				useBlockProps({ className: props.className }),
				el(RichText, {
					tagName: 'h2',
					placeholder: __(
						'Title',
						'danstoakes'
					),
					value: attributes.title,
					onChange: function (value) {
						props.setAttributes({ title: value });
					},
				}),
				el(
					'div',
					{ className: 'content-image' },
					el(MediaUpload, {
						onSelect: onSelectImage,
						allowedTypes: 'image',
						value: attributes.mediaID,
						render: function (obj) {
							return el(
								components.Button,
								{
									className: attributes.mediaID
										? 'image-button'
										: 'button button-large',
									onClick: obj.open,
								},
								! attributes.mediaID
									? __( 'Upload Image', 'danstoakes' )
									: el( 'img', { src: attributes.mediaURL } )
							);
						}
					})
				),
				el(RichText, {
					tagName: 'div',
					placeholder: i18n.__(
						'Content...',
						'danstoakes'
					),
					value: attributes.content,
					onChange: function (value) {
						props.setAttributes({ content: value });
					}
				})
			);
		},
		save: function (props) {
			var attributes = props.attributes;

			return el(
				'div',
				useBlockProps.save({ className: props.className }),
				el(RichText.Content, {
					tagName: 'h2',
					value: attributes.title
				}),
				attributes.mediaURL &&
					el(
						'div',
						{ className: 'content-image' },
						el('img', { src: attributes.mediaURL })
					),
				el(RichText.Content, {
					tagName: 'div',
					className: 'content',
					value: attributes.content
				})
			);
		}
	});
})(
	window.wp.blocks,
	window.wp.editor,
	window.wp.i18n,
	window.wp.element,
	window.wp.components,
	window._,
	window.wp.blockEditor
);