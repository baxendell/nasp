<?php
/**
 * Front-page
 *
 * Front page action hooks in inc/front-page-hooks.php
 */

get_header();

?>

<section class="main">

	<div class="container">

		<div class="row">

			<div class="offset-video col-lg-7 text-sm-center text-lg-right">

				<a href="#" data-toggle="modal" data-target="#exampleModalCenter">

					<?php $vImg = get_field('video_image'); ?>

					<img src="<?php echo $vImg['url'] ?>" alt="<?php echo $vImg['alt'] ?>"/>

				</a>

			</div>


			<div class="col-lg-9">

				<div class="border-content">

					<div class="row">

						<div class="col-lg-7 offset-xl-1 col-xl-5 text-center-sm px-md-0">

							<?php if ( have_posts() ) : while ( have_posts() ) : the_post() ?>

								<?php the_content() ?>

							<?php endwhile; endif; ?>

						</div>

					</div>

					<a class="btn btn-1" href="/about/">Learn More</a>

				</div>

			</div>

		</div>

	</div>

</section>

<section class="home-section-5 split-bg lazy-background">

	<img class="d-none d-sm-block d-lg-none" data-src="<?php bloginfo('template_url') ?>/assets/images/backgrounds/beam-bg.jpg"/>

	<img class="d-sm-none" data-src="<?php bloginfo('template_url') ?>/assets/images/backgrounds/beam-bg-sm.jpg"/>

	<div class="container">

		<div class="row justify-content-end">

			<div class="col-lg-4 align-self-end">

				<h2><i class="certification-icon"></i><?php the_field('certifications_title') ?></h2>

				<?php the_field('certifications_text') ?>

				<div class="text-center d-none d-lg-block">

					<a class="btn btn-1" href="/online-courses/">Learn More</a>
					
				</div>

			</div>

		</div>

	</div>

</section>

<section class="main">

	<?php get_template_part('partials/testimonials') ?>

</section>

<section class="home-section-3 split-bg lazy-background">

	<img class="d-none d-sm-block d-lg-none" data-src="<?php bloginfo('template_url') ?>/assets/images/backgrounds/hard-hat-bg.jpg"/>

	<img class="d-sm-none" data-src="<?php bloginfo('template_url') ?>/assets/images/backgrounds/hard-hat-bg-sm.jpg"/>

	<div class="container">

		<div class="row justify-content-end">

			<div class="col-lg-4 align-self-end">

				<h2><?php the_field('section_3_title') ?></h2>

				<?php the_field('section_3_text') ?>

			</div>

		</div>

	</div>

</section>

<section class="home-section-4 solid-bg">

	<div class="container">

		<div class="row align-items-center justify-content-around">

			<div class="col-12 px-md-0">

				<?php the_field('section_4_text') ?>

			</div>

		</div>

	</div>

</section>

<?php get_template_part('partials/in-the-know') ?>

<?php get_template_part('partials/awards') ?>

<?php get_footer() ?>
