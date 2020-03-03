/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module basic-styles/ins
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import InsEditing from './ins/insediting';
import InsUI from './ins/insui';

/**
 * The ins feature.
 *
 * For a detailed overview check the {@glink features/basic-styles Basic styles feature documentation}
 * and the {@glink api/basic-styles package page}.
 *
 * This is a "glue" plugin which loads the {@link module:basic-styles/ins/insediting~InsEditing} and
 * {@link module:basic-styles/ins/insui~InsUI} plugins.
 *
 * @extends module:core/plugin~Plugin
 */
export default class Ins extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [InsEditing, InsUI];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'Ins';
	}
}
