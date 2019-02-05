
    <footer>

      <div class="container">

        <div class="row align-items-center justify-content-between text-center-sm">

          <div class="col-lg-7 col-xl-5">

            <a href="tel:8009222219">800.922.2219</a> | <a href="mailto:info@naspweb.com">info@naspweb.com</a>

            <p class="copyright">©2018 NASP. All rights reserved. <a href="/privacy-policy/">Privacy Policy & Terms</a> </p>

          </div>

          <div class="col-lg-4 text-md-right">

            <a href="/student-login/" class="mb-3">Client Login</a> 

            <a href="/partners-affiliates/">PARTNERS & AFFILIATES</a>

            <a class="brand" href="https://www.ironstridemarketing.com/" target="_blank">Website and Marketing by IronStride Marketing & Digital Co.</a>

          </div>

        </div>

      </div>

    <?php if(is_front_page()): ?>

      <!-- Modal -->
      <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div class="modal-content">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>

            <div class="modal-body">
              <?php //the_field('video_embed') ?>
              <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="" data-src="https://player.vimeo.com/video/302093757?autoplay=0&color=9E8862&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js" defer></script>
            </div>

          </div>
        </div>
      </div>

    <?php endif ?>

    </footer>

    <link rel="preload" as="font" href="https://fonts.googleapis.com/css?family=Khand:300,500|Overpass:300,400" rel="stylesheet">
  

  <?php if(is_page('775')): ?>
    <script>
      document.addEventListener( 'wpcf7mailsent', function( event ) {
        if ( '785' == event.detail.contactFormId ) {
            location = 'https://dynamic.naspweb.com/index.php/catalog/product/105';
        }
      }, false );
    </script>
<?php endif ?>

  <?php if(is_page('1110')): ?>
    <script>
      document.addEventListener( 'wpcf7mailsent', function( event ) {
        if ( '1109' == event.detail.contactFormId ) {
            location = 'https://dynamic.naspweb.com/index.php/catalog/product/143';
        }
      }, false );
    </script>
<?php endif ?>


	<?php wp_footer() ?>

	</body>

</html>