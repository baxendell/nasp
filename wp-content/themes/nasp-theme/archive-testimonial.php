<?php
/**
 * Template name: Testimonial archive
 */
get_header();

$paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;
$post_330 = get_post('330');
$content = $post_330->post_content;
$featured_img_url = get_the_post_thumbnail_url('330','full'); 
?>
<section class="main test-1">

	<div class="container">

		<div class="row no-gutters">

			<article class="col-md-7 offset-lg-1 col-lg-6 pr-lg-5">

				<header>
					<h1 class="headline"><?php h1_title('330') ?></h1>
					<h2 class="subtitle"><?php the_field('subtitle', 330) ?></h2>
				</header>

				<?php echo $content ?>

			</article>

			<aside class="col-md-5">

				<img src="<?php echo $featured_img_url ?>" />

			</aside>

		</div>

		<div id="testimonial-archive" itemscope itemtype="http://schema.org/Review">

			<meta itemprop="itemReviewed" content="NASP" />

			<div class="row no-gutters justify-content-center">

			<?php if(have_posts() ) : ?>

				<?php while( have_posts() ) : the_post() ?>		

				<div class="col-lg-5 testimonials-item-wrapper testimonials">

					<div class="testimonials-item">

						<i>“</i>

						<?php the_content() ?>

						<cite>- <?php the_title() ?></cite>

					</div>

				</div>
				<?php endwhile ?>

			<?php endif; wp_reset_postdata() ?>

			</div>

			<div class="row">

				<div class="col">

					<?php do_action( 'cws_pagination' ) ?>

				</div>

			</div>


		</div>

	</div>

</section>

<?php get_template_part('partials/in-the-know') ?>

<?php get_footer() ?>