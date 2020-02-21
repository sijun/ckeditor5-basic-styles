/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module basic-styles/footnote/footnoteediting
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import AttributeCommand from '../attributecommand';
import bindTwoStepCaretToAttribute from '@ckeditor/ckeditor5-engine/src/utils/bindtwostepcarettoattribute';

const FOOTNOTE = 'footnote';

/**
 * The footnote editing feature.
 *
 * It registers the `'footnote'` command, the <kbd>Ctrl+I</kbd> keystroke and introduces the `footnote` attribute in the model
 * which renders to the view as an `<i>` element.
 *
 * @extends module:core/plugin~Plugin
 */
export default class FootnoteEditing extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'FootnoteEditing';
	}

	/**
	 * @inheritDoc
	 */
	init() {
		const editor = this.editor;

		// Allow footnote attribute on text nodes.
		editor.model.schema.extend( '$text', { allowAttributes: FOOTNOTE } );
		editor.model.schema.setAttributeProperties( FOOTNOTE, {
			isFormatting: true,
			copyOnEnter: true
		} );

		editor.conversion.attributeToElement( {
			model: FOOTNOTE,
			view:  {
				name: 'span',
				attributes: {
					'data-phrase-format' : 'footnote'
				},
				priority: 1
			}
		} );

		// Create footnote command.
		editor.commands.add( FOOTNOTE, new AttributeCommand( editor, FOOTNOTE ) );

		editor.keystrokes.set( 'CTRL+SHIFT+F', FOOTNOTE );

		bindTwoStepCaretToAttribute( {view:this.editor.editing.view, model:this.editor.model, emitter:this, attribute:FOOTNOTE, locale: 'en' });
	}
}
