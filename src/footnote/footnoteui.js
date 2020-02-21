/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module basic-styles/footnote/footnoteui
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

import footnoteIcon from '../../theme/icons/footnote.svg';

const FOOTNOTE = 'footnote';

/**
 * The footnote UI feature. It introduces the Footnote button.
 *
 * @extends module:core/plugin~Plugin
 */
export default class FootnoteUI extends Plugin {
	/**
	 * @inheritDoc
	 */
	init() {
		const editor = this.editor;
		const t = editor.t;

		// Add bold button to feature components.
		editor.ui.componentFactory.add( FOOTNOTE, locale => {
			const command = editor.commands.get( FOOTNOTE );
			const view = new ButtonView( locale );

			view.set( {
				label: t( 'Footnote' ),
				icon: footnoteIcon,
				keystroke: 'CTRL+SHIFT+F',
				tooltip: true,
				isToggleable: true
			} );

			view.bind( 'isOn', 'isEnabled' ).to( command, 'value', 'isEnabled' );

			// Execute command.
			this.listenTo( view, 'execute', () => {
				editor.execute( FOOTNOTE );
				editor.editing.view.focus();
			} );

			return view;
		} );
	}
}
