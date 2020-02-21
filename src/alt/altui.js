/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module basic-styles/alt/altui
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

import altIcon from '../../theme/icons/alt.svg';

const ALT = 'alt';

/**
 * The alt UI feature. It introduces the Alt button.
 *
 * @extends module:core/plugin~Plugin
 */
export default class AltUI extends Plugin {
	/**
	 * @inheritDoc
	 */
	init() {
		const editor = this.editor;
		const t = editor.t;

		// Add bold button to feature components.
		editor.ui.componentFactory.add( ALT, locale => {
			const command = editor.commands.get( ALT );
			const view = new ButtonView( locale );

			view.set( {
				label: t( 'Alt' ),
				icon: altIcon,
				keystroke: 'CTRL+SHIFT+A',
				tooltip: true,
				isToggleable: true
			} );

			view.bind( 'isOn', 'isEnabled' ).to( command, 'value', 'isEnabled' );

			// Execute command.
			this.listenTo( view, 'execute', () => {
				editor.execute( ALT );
				editor.editing.view.focus();
			} );

			return view;
		} );
	}
}
