/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module basic-styles/footnote
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import FootnoteEditing from './footnote/footnoteediting';
import FootnoteUI from './footnote/footnoteui';

/**
 * The footnote feature.
 *
 * For a detailed overview check the {@glink features/basic-styles Basic styles feature documentation}
 * and the {@glink api/basic-styles package page}.
 *
 * This is a "glue" plugin which loads the {@link module:basic-styles/footnote/footnoteediting~FootnoteEditing} and
 * {@link module:basic-styles/footnote/footnoteui~FootnoteUI} plugins.
 *
 * @extends module:core/plugin~Plugin
 */
export default class Footnote extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ FootnoteEditing, FootnoteUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'Footnote';
	}
}
