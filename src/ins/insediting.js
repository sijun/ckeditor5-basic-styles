/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module basic-styles/ins/insediting
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import AttributeCommand from '../attributecommand';

const INS = 'ins';

/**
 * The ins editing feature.
 *
 * It registers the `'ins'` command, the <kbd>Ctrl+I</kbd> keystroke and introduces the `ins` attribute in the model
 * which renders to the view as an `<i>` element.
 *
 * @extends module:core/plugin~Plugin
 */
export default class InsEditing extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'InsEditing';
	}

	/**
	 * @inheritDoc
	 */
	init() {
		const editor = this.editor;

		// Allow ins attribute on text nodes.
		editor.model.schema.extend('$text', { allowAttributes: INS });
		editor.model.schema.setAttributeProperties(INS, {
			isFormatting: true,
			copyOnEnter: true
		});

		editor.conversion.attributeToElement({
			model: INS,
			view: 'ins'
		});

		// Create ins command.
		editor.commands.add(INS, new AttributeCommand(editor, INS));

		editor.keystrokes.set('CTRL+SHIFT+I', INS);
	}
}
