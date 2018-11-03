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

			<div class="col-lg-9">

				<div class="border-content">

					<div class="row no-gutters">

						<div class="offset-lg-1 col-lg-5">

							<?php if ( have_posts() ) : while ( have_posts() ) : the_post() ?>

								<?php the_content() ?>

							<?php endwhile; endif; ?>

						</div>

					</div>

					<a class="btn btn-1" href="#">Learn More</a>

				</div>

			</div>

		</div>

		<div class="offset-video col-lg-7 text-right">

			<a href="#" data-toggle="modal" data-target="#exampleModalCenter">

				<?php $vImg = get_field('video_image'); ?>

				<img src="<?php echo $vImg['url'] ?>" alt="<?php echo $vImg['alt'] ?>"/>

			</a>

			<!-- Modal -->
			<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
			  <div class="modal-dialog modal-dialog-centered" role="document">
			    <div class="modal-content">
			      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
			          <span aria-hidden="true">&times;</span>
		          </button>

			      <div class="modal-body">
			        <?php the_field('video_embed') ?>
			      </div>

			    </div>
			  </div>
			</div>

		</div>

	</div>

	<?php $post_objects = get_field('testimonials'); if( $post_objects ): ?>

	<div class="testimonials">

		<h2>people have said...</h2>

		<div class="testimonials-slider">

		<?php foreach( $post_objects as $post): setup_postdata($post); ?>

			<div class="testimonials-item">

				<?php the_content() ?>

				<cite><?php the_title() ?></cite>

			</div>

		<?php endforeach; wp_reset_postdata(); ?>

		</div>

	</div>

	<?php endif ?>

</section>

<section class="home-section-3 split-bg">

	<div class="container">

		<div class="row align-items-center align-self-end">

			<div class="col-lg-4">

				<h2><?php the_field('section_3_title') ?></h2>

				<?php the_field('section_3_text') ?>

			</div>

		</div>

	</div>

</section>

<section class="home-section-4 solid-bg">

	<div class="container">

		<div class="row align-items-center justify-content-around no-gutters">

			<div class="col-12">

				<?php the_field('section_4_text') ?>

			</div>

		</div>

	</div>

</section>

<section class="home-section-5 split-bg">

	<div class="container">

		<div class="row align-items-center align-self-end">

			<div class="col-lg-4">

				<h2><?php the_field('certifications_title') ?></h2>

				<?php the_field('certifications_text') ?>

				<a class="btn btn-1" href="#">Learn More</a>

			</div>

		</div>

	</div>

</section>

<section class="main home-section-6">

	<div class="container">

		<div class="row no-gutters align-items-center justify-content-center">

			<div class="col-md-9">

				<h2><!--title--></h2>

				<!--come back too-->

			</div>

		</div>

	</div>

</section>

<?php get_template_part('partials/awards') ?>

<?php get_footer() ?>
