/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module basic-styles/alt/altediting
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import AttributeCommand from '../attributecommand';

const ALT = 'alt';

/**
 * The alt editing feature.
 *
 * It registers the `'alt'` command, the <kbd>Ctrl+I</kbd> keystroke and introduces the `alt` attribute in the model
 * which renders to the view as an `<i>` element.
 *
 * @extends module:core/plugin~Plugin
 */
export default class AltEditing extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'AltEditing';
	}

	/**
	 * @inheritDoc
	 */
	init() {
		const editor = this.editor;

		// Allow alt attribute on text nodes.
		editor.model.schema.extend( '$text', { allowAttributes: ALT } );
		editor.model.schema.setAttributeProperties( ALT, {
			isFormatting: true,
			copyOnEnter: true
		} );

		editor.conversion.attributeToElement( {
			model: ALT,
			view: 'i'
		} );

		// Create alt command.
		editor.commands.add( ALT, new AttributeCommand( editor, ALT ) );

		editor.keystrokes.set( 'CTRL+SHIFT+A', ALT );
	}
}
