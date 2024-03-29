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

/**
 * 投稿の取得APIに情報を追加
 *
 * @param WP_REST_Response $response
 * @param WP_Post $post
 * @param WP_REST_Request $request
 * @return mixed
 */
if ( ! function_exists( 'il_rest_prepare_post' ) ) :
    function il_rest_prepare_post( $response, $post, $request ) {
    get_the_content();
        // 関連記事
        $related_posts_args = array(
            'category__in'  =>  wp_get_post_categories( $post->ID ),
            'numberposts'   =>  3,
            'post__not_in'  => array( $post->ID )
        );
        $related_posts = get_posts( $related_posts_args );
    
        if ( $related_posts ) {
            foreach( $related_posts as $key => $related_post ) {
                if ( has_post_thumbnail( $related_post ) ) {
                    $post_thumbnail_url = get_the_post_thumbnail_url( $related_post->ID, 'full' );
                    $related_posts[$key]->post_thumbnail = $post_thumbnail_url;
                }
            }
    
            $response->data['related_posts'] = $related_posts;
        }
        
        // 前の記事
        $response->data['prev_post'] = get_previous_post();

        // 次の記事
        $response->data['next_post'] = get_next_post();

        return $response;
    }
endif;
add_filter( 'rest_prepare_post', 'il_rest_prepare_post', 10, 3 );

//if ( ! function_exists( 'my_customize_rest_cors' ) ) :
//    function my_customize_rest_cors() {
//    remove_filter( 'rest_pre_serve_request', 'rest_send_cors_headers' );
//    $origin = $_SERVER['HTTP_ORIGIN'];
//
////    if ($origin == "http://www.domain1.com"
////        || $origin == "http://www.domain2.com"
////        || $origin == "http://www.domain3.com") {
////        header("Access-Control-Allow-Origin: $origin");
////    }
//
//    var_dump($origin);
//
//    add_filter( 'rest_pre_serve_request', function( $value ) {
//        header( 'Access-Control-Allow-Origin: *' );
//        header( 'Access-Control-Allow-Methods: GET' );
//        header( 'Access-Control-Allow-Credentials: true' );
//        header( 'Access-Control-Expose-Headers: Link', false );
//        return $value;
//    } );
//}
//endif;
//add_action( 'rest_api_init', 'my_customize_rest_cors', 15 );
