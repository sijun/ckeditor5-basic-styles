/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module basic-styles/comment/commentediting
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import AttributeCommand from '../attributecommand';
import bindTwoStepCaretToAttribute from '@ckeditor/ckeditor5-engine/src/utils/bindtwostepcarettoattribute';

const COMMENT = 'comment';

/**
 * The comment editing feature.
 *
 * It registers the `'comment'` command, the <kbd>Ctrl+I</kbd> keystroke and introduces the `comment` attribute in the model
 * which renders to the view as an `<i>` element.
 *
 * @extends module:core/plugin~Plugin
 */
export default class CommentEditing extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'CommentEditing';
	}

	/**
	 * @inheritDoc
	 */
	init() {
		const editor = this.editor;

		// Allow comment attribute on text nodes.
		editor.model.schema.extend( '$text', { allowAttributes: COMMENT } );
		editor.model.schema.setAttributeProperties( COMMENT, {
			isFormatting: true,
			copyOnEnter: true
		} );

		editor.conversion.attributeToElement( {
			model: COMMENT,
			view:  {
				name: 'span',
				attributes: {
					'data-phrase-format' : 'comment'
				},
				priority: 1
			}
		} );

		// Create comment command.
		editor.commands.add( COMMENT, new AttributeCommand( editor, COMMENT ) );

		editor.keystrokes.set( 'CTRL+SHIFT+C', COMMENT );

		bindTwoStepCaretToAttribute( {view:this.editor.editing.view, model:this.editor.model, emitter:this, attribute:COMMENT, locale: 'en' });
	}
}
