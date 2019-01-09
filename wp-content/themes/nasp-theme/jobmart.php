<?php
/**
 * Template Name: Jobmart
 */
get_header() ?>
<section class="main course-1">

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

		<div class="row no-gutters">

			<div class="col-12">

			<?php $args = array(
				'post_type' => 'jobs',
				'posts_per_page' => -1,
				);

			$job_query = new WP_Query($args);

			if($job_query->have_posts()):
			?>
				<table class="table table-striped table-responsive">
				  <tbody>
					  <thead>
					    <tr>
					      <th scope="col">Job</th>
					      <th scope="col">Company</th>
					      <th scope="col">Location</th>
					      <th scope="col">View</th>
					    </tr>
					  </thead>				  

			<?php  while($job_query->have_posts()): $job_query->the_post();?>
				
						<tr>
						  <td><a href="<?php the_permalink()?>"><?php the_title() ?></a></td>
						  <td><?php the_field('company') ?></td>
						  <td><?php the_field('job_location') ?></td>
						  <td><a href="<?php the_permalink()?>">View</a></td>
						</tr>

			<?php endwhile; ?>

				  </tbody>
				</table>			

			<?php endif; wp_reset_postdata(); ?>

			</div>

		</div>

	</div>

</section>

<?php get_template_part('partials/events') ?>

<section class="main">

    <?php get_template_part('partials/testimonials') ?>

</section>

<?php get_template_part('partials/awards') ?>

<?php get_footer() ?>