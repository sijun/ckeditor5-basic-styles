/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module basic-styles/mark
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import MarkEditing from './mark/markediting';
import MarkUI from './mark/markui';

/**
 * The mark feature.
 *
 * For a detailed overview check the {@glink features/basic-styles Basic styles feature documentation}
 * and the {@glink api/basic-styles package page}.
 *
 * This is a "glue" plugin which loads the {@link module:basic-styles/mark/markediting~MarkEditing} and
 * {@link module:basic-styles/mark/markui~MarkUI} plugins.
 *
 * @extends module:core/plugin~Plugin
 */
export default class Mark extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ MarkEditing, MarkUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'Mark';
	}
}
