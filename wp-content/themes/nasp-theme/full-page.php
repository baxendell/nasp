<?php
/**
 * Template Name: Full Page
 */
get_header() ?>
<section class="main course-1">

	<div class="container">

		<div class="row no-gutters">

			<article class="offset-md-1 col-md-11 pr-5">

				<header>
					<h1 class="headline"><?php h1_title() ?></h1>
					<h2 class="subtitle"><?php the_field('subtitle') ?></h2>
				</header>

				<?php if ( have_posts() ) : while ( have_posts() ) : the_post() ?>

					<?php the_content() ?>

				<?php endwhile; endif; ?>

			</article>

		</div>

	</div>

</section>

<?php get_footer() ?>