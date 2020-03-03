/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module basic-styles/q/qediting
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import AttributeCommand from '../attributecommand';

const Q = 'q';

/**
 * The q editing feature.
 *
 * It registers the `'q'` command, the <kbd>Ctrl+I</kbd> keystroke and introduces the `q` attribute in the model
 * which renders to the view as an `<i>` element.
 *
 * @extends module:core/plugin~Plugin
 */
export default class QEditing extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'QEditing';
	}

	/**
	 * @inheritDoc
	 */
	init() {
		const editor = this.editor;

		// Allow q attribute on text nodes.
		editor.model.schema.extend('$text', { allowAttributes: Q });
		editor.model.schema.setAttributeProperties(Q, {
			isFormatting: true,
			copyOnEnter: true
		});

		editor.conversion.attributeToElement({
			model: Q,
			view: Q
		});

		// Create q command.
		editor.commands.add(Q, new AttributeCommand(editor, Q));

		editor.keystrokes.set('CTRL+SHIFT+Q', Q);
	}
}
