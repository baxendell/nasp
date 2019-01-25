<?php
/**
 * Template Name: Contact
 *
 * 
 */
get_header();
 ?>


 <section class="main">

	<div class="container">

		<div class="row no-gutters">

			<article class="offset-md-1 col-md-7 pr-5">

				<header>
					<h1 class="headline"><?php h1_title() ?></h1>
					<?php if(get_field('subtitle')): ?>
					<h2 class="subtitle"><?php the_field('subtitle') ?></h2>
					<?php endif ?>
				</header>

				<?php echo do_shortcode('[contact-form-7 id="719" title="Contact form 1"]');?>

			</article>

			<aside id="sidebar" class="col-md-4">

				<div class="sb-contact-info sidebar-widgets">

					<h3>NASP Corporate Office Training Office and Member Services</h3>

					<p><strong>phone:<br/>
					(800) 922-2219</strong></p>

					<p><strong>Fax:<br/>
					(910) 793-5314</strong></p>

					<p><strong>Mailing Only:</strong><br/>
					PO Box 3367 <br/>
					Wilmington, NC 28406 </p>

					<p><strong>FedEx/UPS/Express Shipping Only:</strong><br/>
					3904 Oleander Drive<br/>
					Suite #101<br/>
					Wilmington, NC 28403<br/>
					</p>

					<ul class="contact-social row">

						<li><a href="https://www.facebook.com/NASPweb" target="_blank"><i class="fab fa-facebook-f"></i></a></li>

						<li><a href="https://twitter.com/NASPweb" target="_blank"><i class="fab fa-twitter"></i></a></li>

						<li><a href="https://www.linkedin.com/in/national-association-of-safety-professionals-549820123/" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>

					</ul>

				</div>

			</aside>

		</div>

	</div>

</section>

<?php get_template_part('partials/events') ?>

<?php get_template_part('partials/awards') ?>

<?php get_footer() ?>