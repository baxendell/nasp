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


			<div class="col-lg-9">

				<div class="border-content">

					<div class="row no-gutters">

						<div class="col-lg-7 offset-xl-1 col-xl-5">

							<?php if ( have_posts() ) : while ( have_posts() ) : the_post() ?>

								<?php the_content() ?>

							<?php endwhile; endif; ?>

						</div>

					</div>

					<a class="btn btn-1" href="#">Learn More</a>

				</div>

			</div>

		</div>

	</div>

    <?php get_template_part('partials/testimonials') ?>

</section>

<section class="home-section-3 split-bg">

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

		<div class="row align-items-center justify-content-around no-gutters">

			<div class="col-12">

				<?php the_field('section_4_text') ?>

			</div>

		</div>

	</div>

</section>

<section class="home-section-5 split-bg">

	<div class="container">

		<div class="row justify-content-end">

			<div class="col-lg-4 align-self-end">

				<h2><i class="certification-icon"></i><?php the_field('certifications_title') ?></h2>

				<?php the_field('certifications_text') ?>

				<div class="text-center">

					<a class="btn btn-1" href="#">Learn More</a>
					
				</div>

			</div>

		</div>

	</div>

</section>

<?php get_template_part('partials/in-the-know') ?>

<?php get_template_part('partials/awards') ?>

<?php get_footer() ?>
