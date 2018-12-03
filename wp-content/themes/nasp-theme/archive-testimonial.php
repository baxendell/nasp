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

			<article class="offset-md-1 col-md-6 pr-5">

				<header>
					<h1 class="headline"><?php h1_title('330') ?></h1>
					<h2 class="subtitle"><?php the_field('subtitle', '330') ?></h2>
				</header>

				<?php if ( have_posts() ) : while ( have_posts() ) : the_post() ?>

					<?php echo $content ?>

				<?php endwhile; endif; ?>

			</article>

			<aside class="col-md-5">

				<img src="<?php echo $featured_img_url ?>" />

			</aside>

		</div>

	</div>

</section>

<section id="testimonial-archive" itemscope itemtype="http://schema.org/Review">

	<div class="container">

		<meta itemprop="itemReviewed" content="NASP" />

		<div class="row no-gutters justify-content-center">

		<?php if(have_posts() ) : ?>

			<?php while( have_posts() ) : the_post() ?>		

			<div class="col-md-5">

				<div class="testimonials-item">

					<i>“</i>

					<?php the_content() ?>

					<cite>- <?php the_title() ?></cite>

				</div>

			</div>
				<?php endwhile ?>

			<?php endif; wp_reset_postdata() ?>

			<?php do_action( 'cws_pagination' ) ?>

		</div>

	</div>

</section>

<?php get_footer() ?>