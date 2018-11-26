<?php
/**
 * Template Name: About Us
 */
get_header() ?>
<section class="main about-1">

	<div class="container">

		<div class="row no-gutters">

			<article class="offset-md-1 col-md-6 pr-5">

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

<section class="blue-sec red-bdr">

	<div class="container">

		<div class="row justify-content-around">

			<div class="col-5">

				<?php the_field('section_2_left') ?>

				<a class="btn btn-1" href="<?php the_field('section_2_left_link') ?>">Learn More</a>

			</div>

			<div class="col-5">

				<?php the_field('section_2_right') ?>

				<a class="btn btn-1" href="<?php the_field('section_2_right_link') ?>">Learn More</a>

			</div>

		</div>

	</div>

</section>

<section class="open-section about-3">

	<div class="container">

		<div class="row no-gutters">

			<aside class="col-md-5">

				<?php $sImg = get_field('section_3_side_image') ?>

				<img class="img-responsive" src="<?php echo $sImg['url'] ?>" alt="<?php echo $sImg['alt'] ?>"/>

				<div class="sidebar-callout-offset">

					<p>Call now to get personalized information <a href="tel:8009222219">(800) 922-2219</a></p>

					<?php $smImg = get_field('section_3_side_small_image') ?>

					<img class="img-responsive" src="<?php echo $smImg['url'] ?>" alt="<?php echo $smImg['alt'] ?>"/>

				</div>

			</aside>

			<article class="offset-md-1 col-md-6 pl-5">

				<header>
					<h2 class="headline"><?php the_field('section_3_title') ?></h2>
					<h3 class="subtitle"><?php the_field('section_3_subtitle') ?></h3>
				</header>

				<?php the_field('section_3_text') ?>

			</article>

		</div>

	</div>

</section>

<?php
$args = array (
	'post_type' => 'event',
	'posts_per_page' => '2',
	'order' => 'menu_order'
	);

$e_query = new WP_Query($args);

if($e_query->have_posts()):

?>

<section class="upcoming-events">

	<div class="container">

		<div class="row">

			<h2>Upcoming Events</h2>

			<?php while($e_query->have_posts()): $e_query->the_post(); ?>

			<div class="col-md-4">

				<div class="upcoming-events-item">

					<div class="events-item events-item__upcoming">

						<a href="#">
							<div>
								<span class="events-item-date"><?php the_field('event_date') ?> | </span> <?php the_title() ?>
							</div> 
							<i class="fal fa-arrow-right"></i>
						</a>

						<?php the_excerpt() ?>

						<a class="btn btn-1" href="<?php the_permalink() ?>">Learn More</a>

					</div>

				</div>

			</div> 

			<?php endwhile ?>

		</div>

	</div>

</section>

<?php endif; wp_reset_postdata(); ?>

<section class="main">

    <?php get_template_part('partials/testimonials') ?>

</section>

<?php get_template_part('partials/awards') ?>

<?php get_footer() ?>