/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module basic-styles/q/qui
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

import qIcon from '../../theme/icons/q.svg';

const Q = 'q';

/**
 * The q UI feature. It introduces the Q button.
 *
 * @extends module:core/plugin~Plugin
 */
export default class QUI extends Plugin {
	/**
	 * @inheritDoc
	 */
	init() {
		const editor = this.editor;
		const t = editor.t;

		// Add bold button to feature components.
		editor.ui.componentFactory.add(Q, locale => {
			const command = editor.commands.get(Q);
			const view = new ButtonView(locale);

			view.set({
				label: t('Q'),
				description: t('인라인 인용문 요소'),
				icon: qIcon,
				keystroke: 'CTRL+SHIFT+U',
				tooltip: true,
				isToggleable: true
			});

			view.bind('isOn', 'isEnabled').to(command, 'value', 'isEnabled');

			// Execute command.
			this.listenTo(view, 'execute', () => {
				editor.execute(Q);
				editor.editing.view.focus();
			});

			return view;
		});
	}
}
