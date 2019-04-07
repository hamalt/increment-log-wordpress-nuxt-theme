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
    <meta data-n-head="true" data-hid="author" name="author" content="@s_ryone">
    <meta data-n-head="true" data-hid="theme-color" name="theme-color" content="#3B8070">
    <meta data-n-head="true" data-hid="og:type" name="og:type" property="og:type" content="<?php echo is_home() ? 'website' : 'article'; ?>">
    <meta data-n-head="true" data-hid="og:url" property="og:url" content="https://increment-log.com">
    <meta data-n-head="true" data-hid="og:site_name" name="og:site_name" property="og:site_name" content="<?php echo get_bloginfo( 'name' ); ?>">
    <meta data-n-head="true" data-hid="og:title" name="og:title" property="og:title" content="<?php echo get_site_title(); ?>">
    <meta data-n-head="true" data-hid="og:description" name="og:description" property="og:description"
          content="<?php echo get_site_description(); ?>">
    <meta data-n-head="true" data-hid="og:image" property="og:image"
          content="https://increment-log.com/wp-content/themes/incrementlog-nuxt/assets/images/ogp-default.png">
    <meta data-n-head="true" data-hid="og:image:type" name="og:image:type" property="og:image:type" content="image/png">
    <meta data-n-head="true" data-hid="twitter:card" property="twitter:card" content="summary_large_image">
    <meta data-n-head="true" data-hid="twitter:site" property="twitter:site" content="@incrementlog">
    <meta data-n-head="true" data-hid="twitter:creator" property="twitter:creator" content="@s_ryone">
    <meta data-n-head="true" data-hid="twitter:image" property="twitter:image"
          content="https://increment-log.com/wp-content/themes/incrementlog-nuxt/assets/images/ogp-default.png">
    <link data-n-head="true" rel="icon" type="image/x-icon" href="https://increment-log.com/favicon.ico">
    <link rel="preload" href="<?php echo get_template_directory_uri(); ?>/nuxt/runtime.js?ver=<?php echo filemtime( get_template_directory() . '/nuxt/runtime.js' ); ?>"
          as="script">
    <link rel="preload" href="<?php echo get_template_directory_uri(); ?>/nuxt/commons.app.js?ver=<?php echo filemtime( get_template_directory() . '/nuxt/commons.app.js' ); ?>"
          as="script">
    <link rel="preload" href="<?php echo get_template_directory_uri(); ?>/nuxt/vendors.app.js?ver=<?php echo filemtime( get_template_directory() . '/nuxt/vendors.app.js' ); ?>"
          as="script">
    <link rel="preload" href="<?php echo get_template_directory_uri(); ?>/nuxt/app.js?ver=<?php echo filemtime( get_template_directory() . '/nuxt/app.js' ); ?>" as="script">
</head>

<body data-n-head="">