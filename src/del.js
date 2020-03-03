/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module basic-styles/del
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import DelEditing from './del/delediting';
import DelUI from './del/delui';

/**
 * The del feature.
 *
 * For a detailed overview check the {@glink features/basic-styles Basic styles feature documentation}
 * and the {@glink api/basic-styles package page}.
 *
 * This is a "glue" plugin which loads the {@link module:basic-styles/del/delediting~DelEditing} and
 * {@link module:basic-styles/del/delui~DelUI} plugins.
 *
 * @extends module:core/plugin~Plugin
 */
export default class Del extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [DelEditing, DelUI];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'Del';
	}
}
