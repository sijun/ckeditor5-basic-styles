/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module basic-styles/kbd/kbdediting
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import AttributeCommand from '../attributecommand';

const KBD = 'kbd';

/**
 * The kbd editing feature.
 *
 * It registers the `'kbd'` command, the <kbd>Ctrl+I</kbd> keystroke and introduces the `kbd` attribute in the model
 * which renders to the view as an `<i>` element.
 *
 * @extends module:core/plugin~Plugin
 */
export default class KbdEditing extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'KbdEditing';
	}

	/**
	 * @inheritDoc
	 */
	init() {
		const editor = this.editor;

		// Allow kbd attribute on text nodes.
		editor.model.schema.extend( '$text', { allowAttributes: KBD } );
		editor.model.schema.setAttributeProperties( KBD, {
			isFormatting: true,
			copyOnEnter: true
		} );

		editor.conversion.attributeToElement( {
			model: KBD,
			view: {
				name: KBD,
				styles: {
					border: "1px solid #aaa",
					"-moz-border-radius": "0.2em",
					"-webkit-border-radius": "0.2em",
					"border-radius": "0.2em",
					"-moz-box-shadow": "0.1em 0.1em 0.2em rgba(0,0,0,0.1)",
					"-webkit-box-shadow": "0.1em 0.1em 0.2em rgba(0,0,0,0.1)",
					"box-shadow": "0.1em 0.1em 0.2em rgba(0,0,0,0.1)",
					"background-color": "#f9f9f9",
					"background-image": "-moz-linear-gradient(top, #eee, #f9f9f9, #eee)",
					"background-image": "-o-linear-gradient(top, #eee, #f9f9f9, #eee)",
					"background-image": "-webkit-linear-gradient(top, #eee, #f9f9f9, #eee)", "background-image": "linear-gradient(to bottom, #eee, #f9f9f9, #eee)",
					"color": "#000",
					"padding": "0.1em 0.3em",
					"font-family": "monospace",
					"font-size": "0.85em"
				}
			}
		} );
		

		// Create kbd command.
		editor.commands.add( KBD, new AttributeCommand( editor, KBD ) );

		editor.keystrokes.set( 'CTRL+SHIFT+K', KBD );
	}
}
