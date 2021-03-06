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
		editor.model.schema.extend('$text', { allowAttributes: KBD });
		editor.model.schema.setAttributeProperties(KBD, {
			isFormatting: true,
			copyOnEnter: true
		});

		editor.conversion.attributeToElement({
			model: KBD,
			view: KBD
		});


		// Create kbd command.
		editor.commands.add(KBD, new AttributeCommand(editor, KBD));

		editor.keystrokes.set('CTRL+SHIFT+K', KBD);
	}
}
