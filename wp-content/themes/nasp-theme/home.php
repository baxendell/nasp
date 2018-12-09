<?php
/*
 * Blog page "Home"
 */
get_header() ?>

<section id="blog" class="main">

	<div class="container">

		<div class="row">

			<div class="col text-center">
            
				<header>
					<h1 class="headline"><?php h1_title('463') ?></h1>
					<h2 class="subtitle"><?php the_field('subtitle', 463) ?></h2>
				</header>

			</div>

		</div>

		<div class="row">

			<div class="col-md-8">

				<?php get_template_part( 'partials/excerpt-loop' ) ?>

				<div class="blog-pagination">

					<?php do_action( 'cws_pagination' ) ?>

				</div><!--.blog-pagination-->

			</div>

			<aside id="sidebar" class="col-md-4">

				<?php get_template_part( 'sidebars/blog-sidebar' ) ?>

			</aside><!--#sidebar-->
            
		</div><!--.row-->

	</div>

</section><!--.container-->

<?php get_footer() ?>