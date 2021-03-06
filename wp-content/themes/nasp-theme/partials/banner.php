<?php
/**
 * Banner Partial
 */

if(is_front_page()):
?>

<div class="banner-slider">

	<div class="container">

		<div class="row">

			<div class="banner-slider-container col-lg-9">

			 	<div class="d-lg-none text-center">

			 		<h1 class="banner-slider-title"><?php the_field('h1_title') ?></h1>

			 		<h2 class="banner-slider-subtitle"><?php the_field('first_slide_subtitle') ?></h2>

		 		</div>

				<div class="d-none d-lg-block">

					<div class="banner-slider-nav"></div>

					<div class="banner-slider-wrap">

						<div class="banner-slider-item">

							<h1 class="banner-slider-title"><?php the_field('h1_title') ?></h1>

							<h2 class="banner-slider-subtitle"><?php the_field('first_slide_subtitle') ?></h2>

						</div>

						<div class="banner-slider-item">

							<h2 class="banner-slider-title"><?php the_field('second_slide_title') ?></h2>

							<h3 class="banner-slider-subtitle"><?php the_field('second_slide_subtitle') ?></h3>

						</div>

						<div class="banner-slider-item">

							<h2 class="banner-slider-title"><?php the_field('third_slide_title') ?></h2>

							<h3 class="banner-slider-subtitle"><?php the_field('third_slide_subtitle') ?></h3>

						</div>

					</div>

				</div>

			</div>

			<?php
			$args = array (
				'post_type' => 'event',
				'posts_per_page' => '2',
				'order' => 'menu_order'
				);

			$e_query = new WP_Query($args);

			if($e_query->have_posts()):

			?>

			<div class="col-lg-3 events d-none d-lg-block">

				<?php while($e_query->have_posts()): $e_query->the_post(); ?>

				<div class="events-item">

					<a href="<?php the_field('event_link') ?>" target="_blank"><div><span class="events-item-date"><?php the_field('event_date') ?> | </span> <?php the_title() ?></div> <i class="fal fa-arrow-right"></i></a>

				</div>

				<?php endwhile ?>

				<div class="events-item">

					<img data-src="<?php bloginfo('template_url') ?>/assets/images/iacet.gif" alt="IACET"/>

				</div>

			</div>

			<?php endif; wp_reset_postdata(); ?>

		</div>

	</div>

</div>

<?php else: ?>

<div class="banner-interior">

	<div class="container h-100">

		<div class="row align-items-center h-100">

			<div class="offset-md-1">

				<div class="banner-slider-title">

					<?php if(is_home()){ echo 'Blog';
					}elseif(is_post_type_archive('testimonial')){
						echo 'Testimonials';

					} elseif(is_singular('jobs')){
						echo 'Job Posting';
					}else {the_title();}
					?>

				</div>

			</div>

		</div>

	</div>

</div>

<?php endif ?>
