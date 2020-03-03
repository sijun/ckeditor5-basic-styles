/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module basic-styles/del/delediting
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import AttributeCommand from '../attributecommand';

const DEL = 'del';

/**
 * The del editing feature.
 *
 * It registers the `'del'` command, the <kbd>Ctrl+I</kbd> keystroke and introduces the `del` attribute in the model
 * which renders to the view as an `<i>` element.
 *
 * @extends module:core/plugin~Plugin
 */
export default class DelEditing extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'DelEditing';
	}

	/**
	 * @inheritDoc
	 */
	init() {
		const editor = this.editor;

		// Allow del attribute on text nodes.
		editor.model.schema.extend('$text', { allowAttributes: DEL });
		editor.model.schema.setAttributeProperties(DEL, {
			isFormatting: true,
			copyOnEnter: true
		});

		editor.conversion.attributeToElement({
			model: DEL,
			view: DEL
		});

		// Create del command.
		editor.commands.add(DEL, new AttributeCommand(editor, DEL));

		editor.keystrokes.set('CTRL+SHIFT+D', DEL);
	}
}
