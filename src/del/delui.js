/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module basic-styles/del/delui
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

import delIcon from '../../theme/icons/del.svg';

const DEL = 'del';

/**
 * The del UI feature. It introduces the Del button.
 *
 * @extends module:core/plugin~Plugin
 */
export default class DelUI extends Plugin {
	/**
	 * @inheritDoc
	 */
	init() {
		const editor = this.editor;
		const t = editor.t;

		// Add bold button to feature components.
		editor.ui.componentFactory.add(DEL, locale => {
			const command = editor.commands.get(DEL);
			const view = new ButtonView(locale);

			view.set({
				label: t('Del'),
				description: t('편집 - 삭제한 문구'),
				icon: delIcon,
				keystroke: 'CTRL+SHIFT+D',
				tooltip: true,
				isToggleable: true
			});

			view.bind('isOn', 'isEnabled').to(command, 'value', 'isEnabled');

			// Execute command.
			this.listenTo(view, 'execute', () => {
				editor.execute(DEL);
				editor.editing.view.focus();
			});

			return view;
		});
	}
}
