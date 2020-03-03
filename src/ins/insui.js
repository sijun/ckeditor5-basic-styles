/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module basic-styles/ins/insui
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

import insIcon from '../../theme/icons/ins.svg';

const INS = 'ins';

/**
 * The ins UI feature. It introduces the Ins button.
 *
 * @extends module:core/plugin~Plugin
 */
export default class InsUI extends Plugin {
	/**
	 * @inheritDoc
	 */
	init() {
		const editor = this.editor;
		const t = editor.t;

		// Add bold button to feature components.
		editor.ui.componentFactory.add(INS, locale => {
			const command = editor.commands.get(INS);
			const view = new ButtonView(locale);

			view.set({
				label: t('Ins'),
				description: t('편집 - 삽입한 문구'),
				icon: insIcon,
				keystroke: 'CTRL+SHIFT+I',
				tooltip: true,
				isToggleable: true
			});

			view.bind('isOn', 'isEnabled').to(command, 'value', 'isEnabled');

			// Execute command.
			this.listenTo(view, 'execute', () => {
				editor.execute(INS);
				editor.editing.view.focus();
			});

			return view;
		});
	}
}
