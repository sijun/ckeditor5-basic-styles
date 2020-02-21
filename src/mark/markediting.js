/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module basic-styles/mark/markediting
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import AttributeCommand from '../attributecommand';

const MARK = 'mark';

/**
 * The mark editing feature.
 *
 * It registers the `'mark'` command, the <kbd>Ctrl+I</kbd> keystroke and introduces the `mark` attribute in the model
 * which renders to the view as an `<i>` element.
 *
 * @extends module:core/plugin~Plugin
 */
export default class MarkEditing extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'MarkEditing';
	}

	/**
	 * @inheritDoc
	 */
	init() {
		const editor = this.editor;

		// Allow mark attribute on text nodes.
		editor.model.schema.extend( '$text', { allowAttributes: MARK } );
		editor.model.schema.setAttributeProperties( MARK, {
			isFormatting: true,
			copyOnEnter: true
		} );

		editor.conversion.attributeToElement( {
			model: MARK,
			view: MARK
		} );

		// Create mark command.
		editor.commands.add( MARK, new AttributeCommand( editor, MARK ) );

		editor.keystrokes.set( 'CTRL+SHIFT+R', MARK );
	}
}
