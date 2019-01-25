<?php
/**
 * Template Name: Full Page
 */
get_header() ?>
<section class="main course-1">

	<div class="container">

		<div class="row no-gutters">

			<article class="offset-md-1 col-md-11 pr-sm-5">

				<header>
					<h1 class="headline"><?php h1_title() ?></h1>
					<h2 class="subtitle"><?php the_field('subtitle') ?></h2>
				</header>

				<?php if ( have_posts() ) : while ( have_posts() ) : the_post() ?>

					<?php the_content() ?>

				<?php endwhile; endif; ?>

				<?php if(is_page('334')): ?>


					 <!-- Begin MailChimp Signup Form -->
					<link href="//cdn-images.mailchimp.com/embedcode/classic-081711.css" rel="templatestylesheet.css" type="text/css">

					<div id="mc_embed_signup">
						<form action="//NASPweb.us11.list-manage.com/subscribe/post?u=fc0e6d14524fc54ef2add3cd1&amp;id=4dfb8b48ea" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate wpcf7-form" target="_blank" novalidate>
					    	<div id="mc_embed_signup_scroll" class="row">
								<div class="indicates-required col-12 mb-3">
									<strong><span class="asterisk">*</span> indicates required</strong>
								</div>

								<div class="mc-field-group col-12" >
									<label for="mce-EMAIL" >Email Address:  <span class="asterisk">*</span>
										<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" >
									</label>
								</div>

								<div class="mc-field-group col-md-6" >
									<label for="mce-FNAME">First Name:  <span class="asterisk">*</span>
										<input type="text" value="" name="FNAME" class="required" id="mce-FNAME" >
									</label>
								</div>

								<div class="mc-field-group col-md-6">
									<label for="mce-LNAME">Last Name:  <span class="asterisk">*</span>
										<input type="text" value="" name="LNAME" class="required" id="mce-LNAME">
									</label>
								</div>

								<div class="mc-field-group size1of2 col-12">
									<label for="mce-MMERGE3">Phone Number:
										<input type="text" name="MMERGE3" class="" value="" id="mce-MMERGE3">	
									</label>	
								</div>

								<div id="mce-responses" class="clear">
									<div class="response" id="mce-error-response" style="display:none"></div>
									<div class="response" id="mce-success-response" style="display:none"></div>
								</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
							    <div style="position: absolute; left: -5000px;">
							    	<input type="text" name="b_fc0e6d14524fc54ef2add3cd1_4dfb8b48ea" tabindex="-1" value="">
						    	</div>
				    			<div class="clear col-12 text-center">
					   				<input name="btn" class="btn btn-1"  type="submit" value="Go">
								</div>
							</div>
						</form>
					</div>
					<p>For more information, please email <a href="mailto:info@naspweb.com">info@naspweb.com</a> or call us at (800) 922-2219.</p>
				<?php elseif(is_page('1049')): ?>
					<div class="row mt-5">
						<div class="col-md-6 text-center mb-3">
							<a class="btn btn-1" href="https://dynamic.naspweb.com/index.php/login/" target="_blank">Legacy Course Login</a>
						</div>

						<div class="col-md-6 text-center mb-3">
							<a class="btn btn-1" href="https://nasp.gnosisconnect.com/nasp/login.php" target="_blank">LMS Course Login</a>
						</div>
					</div>

				<?php endif ?>

			</article>

		</div>

	</div>

</section>

<?php get_footer() ?>