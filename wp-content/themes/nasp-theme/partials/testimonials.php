	
	<?php $post_objects = get_field('testimonials'); if( $post_objects ): ?>

	<div class="d-none d-lg-block">

		<div class="testimonials">

			<h2>people have said...</h2>

			<div class="testimonials-slider">

			<?php foreach( $post_objects as $post): setup_postdata($post); ?>

				<div class="testimonials-item">

					<i>“</i>

					<?php the_content() ?>

					<cite>- <?php the_title() ?></cite>

				</div>

			<?php endforeach; wp_reset_postdata(); ?>

			</div>

		</div>

	</div>

	<div class="d-lg-none">

		<div class="testimonials">

			<h2>people have said...</h2>


		<?php foreach( $post_objects as $post): setup_postdata($post); ?>

			<div class="testimonials-item slick-current">

				<i>“</i>

				<?php the_content() ?>

				<cite>- <?php the_title() ?></cite>

			</div>

		<?php break; endforeach; wp_reset_postdata(); ?>

		</div>

	</div>

	<?php endif ?>