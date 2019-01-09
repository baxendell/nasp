
    <footer>

      <div class="container">

        <div class="row align-items-center justify-content-between text-center-sm">

          <div class="col-lg-7 col-xl-5">

            <a href="tel:8009222219">800.922.2219</a> | <a href="mailto:info@naspweb.com">info@naspweb.com</a>

            <p class="copyright">©2018 NASP. All rights reserved. <a href="/development/privacy-policy/">Privacy Policy & Terms</a> </p>

          </div>

          <div class="col-lg-4 text-md-right">

            <a href="https://dynamic.naspweb.com/index.php/login/">Client Login</a>

            <a class="brand" href="https://www.ironstridemarketing.com/" target="_blank">Website and Marketing by IronStride Marketing & Digital Co.</a>

          </div>

        </div>

      </div>

    </footer>
    
    <link href="https://fonts.googleapis.com/css?family=Khand:300,500|Overpass:300,400" rel="stylesheet">

  <?php if(is_page('775')): ?>
    <script>
      document.addEventListener( 'wpcf7mailsent', function( event ) {
    if ( '783' == event.detail.contactFormId ) {
        location = 'https://dynamic.naspweb.com/index.php/catalog/product/105';
    }
}, false );
</script>
<?php endif ?>

	<?php wp_footer() ?>

	</body>

</html>