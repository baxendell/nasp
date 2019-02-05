<?php
/**
 * Template Name: About Us
 */
get_header() ?>
<section class="main about-1">

	<div class="container">

		<div class="row no-gutters">

			<article class="col-md-7 offset-lg-1 col-lg-6 pr-lg-5">

				<header>
					<h1 class="headline"><?php h1_title() ?></h1>
					<h2 class="subtitle"><?php the_field('subtitle') ?></h2>
				</header>

				<?php if ( have_posts() ) : while ( have_posts() ) : the_post() ?>

					<?php the_content() ?>

				<?php endwhile; endif; ?>

			</article>

			<aside class="col-md-5">

				<?php the_post_thumbnail('full') ?>

			</aside>

		</div>

	</div>

</section>

<section class="blue-sec red-bdr lazy-background">

	<div class="container">

		<div class="row justify-content-around">

			<div class="col-sm-5 pos-rel">

				<?php the_field('section_2_left') ?>

				<a class="btn btn-1" href="<?php the_field('section_2_left_link') ?>">Learn More</a>

			</div>

			<div class="col-sm-5 pos-rel">

				<?php the_field('section_2_right') ?>

				<a class="btn btn-1" href="<?php the_field('section_2_right_link') ?>">Learn More</a>

			</div>

		</div>

	</div>

</section>

<section class="open-section about-3">

	<div class="container">

		<div class="row no-gutters">

			<aside class="col-md-5 d-none d-lg-block">

				<?php $sImg = get_field('section_3_side_image') ?>

				<img class="img-responsive" data-src="<?php echo $sImg['url'] ?>" alt="<?php echo $sImg['alt'] ?>"/>

				<div class="sidebar-callout-offset">

					<p>Call now to get personalized information <a href="tel:8009222219">(800) 922-2219</a></p>

					<?php $smImg = get_field('section_3_side_small_image') ?>

					<img class="img-responsive" data-src="<?php echo $smImg['url'] ?>" alt="<?php echo $smImg['alt'] ?>"/>

				</div>

			</aside>

			<article class="col offset-lg-1 col-lg-6 pl-lg-5">

				<header>
					<h2 class="headline"><?php the_field('section_3_title') ?></h2>
					<h3 class="subtitle"><?php the_field('section_3_subtitle') ?></h3>
				</header>

				<?php the_field('section_3_text') ?>

			</article>

		</div>

	</div>

</section>

<?php get_template_part('partials/events') ?>

<section class="main">

    <?php get_template_part('partials/testimonials') ?>

</section>

<?php get_template_part('partials/awards') ?>

<?php get_footer() ?>