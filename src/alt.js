/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module basic-styles/alt
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import AltEditing from './alt/altediting';
import AltUI from './alt/altui';

/**
 * The alt feature.
 *
 * For a detailed overview check the {@glink features/basic-styles Basic styles feature documentation}
 * and the {@glink api/basic-styles package page}.
 *
 * This is a "glue" plugin which loads the {@link module:basic-styles/alt/altediting~AltEditing} and
 * {@link module:basic-styles/alt/altui~AltUI} plugins.
 *
 * @extends module:core/plugin~Plugin
 */
export default class Alt extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ AltEditing, AltUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'Alt';
	}
}
