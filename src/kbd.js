/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module basic-styles/kbd
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import KbdEditing from './kbd/kbdediting';
import KbdUI from './kbd/kbdui';

/**
 * The kbd feature.
 *
 * For a detailed overview check the {@glink features/basic-styles Basic styles feature documentation}
 * and the {@glink api/basic-styles package page}.
 *
 * This is a "glue" plugin which loads the {@link module:basic-styles/kbd/kbdediting~KbdEditing} and
 * {@link module:basic-styles/kbd/kbdui~KbdUI} plugins.
 *
 * @extends module:core/plugin~Plugin
 */
export default class Kbd extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ KbdEditing, KbdUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'Kbd';
	}
}
