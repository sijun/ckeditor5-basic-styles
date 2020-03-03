/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module basic-styles/q
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import QEditing from './q/qediting';
import QUI from './q/qui';

/**
 * The q feature.
 *
 * For a detailed overview check the {@glink features/basic-styles Basic styles feature documentation}
 * and the {@glink api/basic-styles package page}.
 *
 * This is a "glue" plugin which loads the {@link module:basic-styles/q/qediting~QEditing} and
 * {@link module:basic-styles/q/qui~QUI} plugins.
 *
 * @extends module:core/plugin~Plugin
 */
export default class Q extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [QEditing, QUI];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'Q';
	}
}
