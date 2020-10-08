/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module basic-styles/comment
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import CommentEditing from './comment/commentediting';
import CommentUI from './comment/commentui';

/**
 * The comment feature.
 *
 * For a detailed overview check the {@glink features/basic-styles Basic styles feature documentation}
 * and the {@glink api/basic-styles package page}.
 *
 * This is a "glue" plugin which loads the {@link module:basic-styles/comment/commentediting~CommentEditing} and
 * {@link module:basic-styles/comment/commentui~CommentUI} plugins.
 *
 * @extends module:core/plugin~Plugin
 */
export default class Comment extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ CommentEditing, CommentUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'Comment';
	}
}
