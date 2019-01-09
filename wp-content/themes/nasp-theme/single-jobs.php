<?php
/**
 * Single Job template
 */
get_header();

?>

	<section id="blog" class="main">

		<div class="container">

			<div class="inner-wrapper row">

				<article class="content col-md-8">

					<?php if ( have_posts() ) : while ( have_posts() ) : the_post() ?>

						<p><strong>Job Title:</strong><?php the_title() ?><br/>
						<strong>Company:</strong><?php the_field('company') ?><br/>
						<strong>Location:</strong> <?php the_field('job_location') ?>

						<p><strong>Job Description:</strong></p>

						<?php the_content() ?>

					<?php endwhile; endif; ?>

				</article>

				<aside id="sidebar" class="col-md-4">

					<a href="<?php the_field('application_link') ?>" class="btn btn-1">Apply Here</a>

					<?php get_template_part('partials/share') ?>

				</aside><!--#sidebar-->

			</div><!--.row-->

		</div>

	</section><!--.container-->

</div><!--.schema-wrap-->

<?php get_footer() ?>