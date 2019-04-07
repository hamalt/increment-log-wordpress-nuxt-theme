<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/nuxt/runtime.js?ver=<?php echo filemtime( get_template_directory() . '/nuxt/runtime.js' ); ?>"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/nuxt/commons.app.js?ver=<?php echo filemtime( get_template_directory() . '/nuxt/commons.app.js' ); ?>"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/nuxt/vendors.app.js?ver=<?php echo filemtime( get_template_directory() . '/nuxt/vendors.app.js' ); ?>"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/nuxt/app.js?ver=<?php echo filemtime( get_template_directory() . '/nuxt/app.js' ); ?>"></script>

<?php //if ( is_user_logged_in() ) { wp_footer(); } ?>
</body>
</html>