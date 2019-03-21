<?php get_header(); ?>

    <div id="__nuxt">
        <style>
            body, html {
                height: 100%;
                margin: 0;
                padding: 0
            }
            
            #__nuxt {
                height: 100%;
            }
            
            #loading-indicator-wrapper {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 100%;
                background: #25415c;
                background: linear-gradient(0deg, #30617e, #25415c)
            }

            #loading-indicator {
                width: 64px;
                height: 64px
            }
        </style>
        <div id="loading-indicator-wrapper">
            <div id="loading-indicator"></div>
        </div>
        <script src="<?php echo get_template_directory_uri(); ?>/js/lottie.js" type="text/javascript"></script>
        <script>var animData = {
            wrapper: document.getElementById("loading-indicator"),
            animType: "svg",
            loop: !0,
            prerender: !0,
            autoplay: !0,
            path: "<?php echo get_template_directory_uri(); ?>/data.json"
          }, anim = bodymovin.loadAnimation(animData)</script>
    </div>

<?php get_footer();
