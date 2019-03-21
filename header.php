<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}
?><!doctype html>
<html lang="ja" prefix="og: http://ogp.me/ns#" data-n-head="lang,prefix">
<head data-n-head="">
    <title data-n-head="true"><?php echo get_site_title(); ?></title>
    <meta data-n-head="true" charset="utf-8">
    <meta data-n-head="true" name="viewport" content="width=device-width,initial-scale=1">
    <meta data-n-head="true" data-hid="description" name="description" content="<?php echo get_site_description(); ?>">
    <meta data-n-head="true" data-hid="author" name="author" content="Ryoichi Shiohama">
    <meta data-n-head="true" data-hid="theme-color" name="theme-color" content="#3B8070">
    <meta data-n-head="true" data-hid="og:type" name="og:type" property="og:type" content="<?php echo is_home() ? 'website' : 'article'; ?>">
    <meta data-n-head="true" data-hid="og:title" name="og:title" property="og:title" content="<?php echo get_site_title(); ?>">
    <meta data-n-head="true" data-hid="og:site_name" name="og:site_name" property="og:site_name" content="<?php echo get_bloginfo( 'name' ); ?>">
    <meta data-n-head="true" data-hid="og:description" name="og:description" property="og:description"
          content="<?php echo get_site_description(); ?>">
    <meta data-n-head="true" data-hid="og:image" name="og:image" property="og:image"
          content="https://increment-log.com/wp-content/themes/incrementlog-nuxt/nuxt/icons/icon_380.9gvoK1H797A.png">
    <meta data-n-head="true" data-hid="og:image:width" name="og:image:width" property="og:image:width" content="380">
    <meta data-n-head="true" data-hid="og:image:height" name="og:image:height" property="og:image:height" content="380">
    <meta data-n-head="true" data-hid="og:image:type" name="og:image:type" property="og:image:type" content="image/png">
    <link data-n-head="true" rel="icon" type="image/x-icon" href="/favicon.ico">
    <link data-n-head="true" rel="stylesheet" href="//fonts.googleapis.com/earlyaccess/notosansjp.css">
    <link rel="preload" href="<?php echo get_template_directory_uri(); ?>/nuxt/runtime.js?ver=<?php echo get_theme_version(); ?>"
          as="script">
    <link rel="preload" href="<?php echo get_template_directory_uri(); ?>/nuxt/commons.app.js?ver=<?php echo get_theme_version(); ?>"
          as="script">
    <link rel="preload" href="<?php echo get_template_directory_uri(); ?>/nuxt/vendors.app.js?ver=<?php echo get_theme_version(); ?>"
          as="script">
    <link rel="preload" href="<?php echo get_template_directory_uri(); ?>/nuxt/app.js?ver=<?php echo get_theme_version(); ?>" as="script">
</head>

<body data-n-head="">