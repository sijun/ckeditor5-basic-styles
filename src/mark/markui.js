/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module basic-styles/mark/markui
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

import markIcon from '../../theme/icons/mark.svg';

const MARK = 'mark';

/**
 * The mark UI feature. It introduces the Mark button.
 *
 * @extends module:core/plugin~Plugin
 */
export default class MarkUI extends Plugin {
	/**
	 * @inheritDoc
	 */
	init() {
		const editor = this.editor;
		const t = editor.t;

		// Add bold button to feature components.
		editor.ui.componentFactory.add( MARK, locale => {
			const command = editor.commands.get( MARK );
			const view = new ButtonView( locale );

			view.set( {
				label: t( 'Mark' ),
				icon: markIcon,
				keystroke: 'CTRL+SHIFT+R',
				tooltip: true,
				isToggleable: true
			} );

			view.bind( 'isOn', 'isEnabled' ).to( command, 'value', 'isEnabled' );

			// Execute command.
			this.listenTo( view, 'execute', () => {
				editor.execute( MARK );
				editor.editing.view.focus();
			} );

			return view;
		} );
	}
}
