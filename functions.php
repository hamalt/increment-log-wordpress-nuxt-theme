<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
require_once get_theme_file_path( 'inc/theme-functions.php' );


/**
 * Twenty Nineteen only works in WordPress 4.7 or later.
 */
// TODO: 互換性に関するプログラムを作成する（Twenty Nineteenを参考にする）
if ( version_compare( $GLOBALS['wp_version'], '4.7', '<' ) ) {
//	require get_theme_file_path( 'inc/back-compat.php' );
	return;
}
//require_once( get_theme_file_path( 'inc/class-panthera-theme-manager.php' ) );

if ( ! function_exists( 'ptr_setup_theme' ) ) :
	/**
	 * テーマの初期設定
	 */
	function ptr_setup_theme() {
		
		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );
		
		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );
		
		// デフォルトのコンテンツ横幅を設定
		$GLOBALS['content_width'] = 894;
		
		// デフォルトのアイキャッチサイズ（カード時）の横幅を設定
		$GLOBALS['eyecatch_width_card'] = 837;
		
		// This theme uses wp_nav_menu() in one location.
		register_nav_menus( array(
			'header-menu'   => esc_html__( 'Header Menu', 'panthera' ),
			'footer-nav'    => esc_html__( 'Footer Menu', 'panthera' ),
		) );
		
		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support( 'html5', array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		) );
		
		/*
		 * Enable support for Post Formats.
		 *
		 * See: https://codex.wordpress.org/Post_Formats
		 */
		add_theme_support( 'post-formats', array(
			'aside',
			'image',
			'video',
			'quote',
			'link',
			'gallery',
			'audio',
		) );
		
		// Set up the WordPress core custom logo feature.
		add_theme_support( 'custom-logo', apply_filters( 'mfz_custom_logo_args', array(
			'height'      => 250,
			'width'       => 250,
			'flex-height' => true,
			'flex-width'  => true,
			'header-text' => array( '.site-id__logo a.site-id__logotype', '.site-id__catchphrase' ),
		) ) );
		
		/*
		 * テーマカスタマイザーウィジェットをセレクティブリフレッシュに対応する
		 */
		add_theme_support( 'customize-selective-refresh-widgets' );
	}
endif;
add_action( 'after_setup_theme', 'ptr_setup_theme' );

if ( ! function_exists( 'ptr_enqueue_styles_scripts' ) ) :
	/**
	 * テーマ用CSS、JavaScriptの読み込み
	 */
	function ptr_enqueue_styles_scripts() {
		// テーマのスタイルシート
		wp_enqueue_style(
			'panthera-style',
			get_template_directory_uri() . '/assets/css/main.css',
			array(),
			get_theme_version()
		);
		
		// テーマのスクリプト
		wp_enqueue_script(
			'panthera-script',
			get_template_directory_uri() . '/main.js',
			array( 'jquery' ),
			get_theme_version()
		);
	}
endif;
add_action( 'wp_enqueue_scripts', 'ptr_enqueue_styles_scripts' );

function get_site_title() {
    $site_name = get_bloginfo( 'name' );
    $title = $site_name . ' | ' . get_bloginfo( 'description' );
    
    if ( is_single() || is_page() ) {
        $title = get_the_title();
        
    } else if ( is_page() ) {
        $title = get_the_title() . ' | ' . $site_name;
        
    } else if ( is_category() ) {
        $title = single_cat_title() . ' | ' . $site_name;
    }
    
    return $title;
}

function get_site_description() {
    $description = get_bloginfo( 'description' );
    
    if ( is_single() || is_page() ) {
        $description = get_post_meta( get_the_ID(), '_aioseop_description', true );
        
        if ( ! $description ) {
            // 現在の投稿オブジェクトを取得
            $post_data = get_post();
            
            // 本文を取得
            $content = $post_data->post_content;
    
            // HTML、PHPタグを削除
            $content = strip_tags( $content );
    
            // 改行、タブ、垂直タブを削除
            $str = array( "\r\n", "\r", "\n", "\t", "\x0B" );
            $content = str_replace( $str, "", $content );
            
            // []に囲まれている文字列を除去
            $regexp = "/\[.*?\]/";
            $content = preg_replace( $regexp, '', $content );
            
            // 140文字で抜粋
            $description = mb_strimwidth( $content, 0, 280, '…', 'utf-8' );
        }
    } else if ( is_category() ) {
    
    }
    
    return $description;
}