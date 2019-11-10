
    <footer>

      <div class="container">

        <div class="row align-items-center justify-content-between text-center-sm">

          <div class="col-lg-5 col-xl-4 bottom-footer-left">

            <a href="tel:8009222219">800.922.2219</a><br/> 
            <a href="mailto:info@naspweb.com">info@naspweb.com</a>

            <p class="copyright">©2018 NASP. All rights reserved. <a href="/privacy-policy/">Privacy Policy & Terms</a> </p>

          </div>

          <div class="bottom-footer-center col-lg-4 clearfix">

            <img data-src="<?php bloginfo('template_url') ?>/assets/images/iacet.gif" alt="IACET">

            <p>NASP is accredited by the International Association for Continuing Education and Training(IACET) and is accredited to issue the IACET CEU</p>

          </div>

          <div class="bottom-footer-right col-lg-3 col-xl-4 text-md-right">

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
              
              <div>
                <?php the_field('video_embed') ?>

              </div>
              <script src="https://player.vimeo.com/api/player.js" defer></script>
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