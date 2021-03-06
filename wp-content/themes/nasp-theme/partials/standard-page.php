<?php
/**
 * Standard Page partial
 */

if(is_page_template('page-bullets.php')) {
	$class = "bullets";
}
?>

<section class="main course-1">

	<div class="container">

		<div class="row no-gutters">

			<article class="offset-md-1 col-md-6 pr-sm-5">

				<header>
					<h1 class="headline"><?php h1_title() ?></h1>
					<h2 class="subtitle"><?php the_field('subtitle') ?></h2>
				</header>

				<div class="entry-content <?php echo $class ?>">
				<?php if ( have_posts() ) : while ( have_posts() ) : the_post() ?>

					<?php the_content() ?>

				<?php endwhile; endif; ?>
				</div>

			</article>

			<aside class="col-md-5">

				<?php the_post_thumbnail('full') ?>

				<?php get_template_part('sidebars/generic-sidebar') ?>

			</aside>

		</div>

	</div>

</section>


