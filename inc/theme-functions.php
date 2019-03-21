<?php
/**
 * テーマのバージョンを取得
 *
 * @return false|string テーマのバージョン
 */
function get_theme_version () {
	$theme = wp_get_theme();
	
	return $theme->get( 'Version' );
}
