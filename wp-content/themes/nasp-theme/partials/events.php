<?php
$args = array (
	'post_type' => 'event',
	'posts_per_page' => '3',
	'order' => 'menu_order'
	);

$e_query = new WP_Query($args);

if($e_query->have_posts()):
	$i = 0;
?>

<section class="upcoming-events lazy-background">

	<div class="container">

		<div class="row">

			<div class="col-12">

				<h2>Upcoming Events</h2>

			</div>

			<?php while($e_query->have_posts()): $e_query->the_post(); $i++;

				if($i == 1) {
					$first = 'first';
				} else {
					$first = '';
				}
			 ?>

			<div class="col-lg-4 <?php echo $first ?>">

				<div class="upcoming-events-item">

					<div class="events-item events-item__upcoming">

						<a href="<?php the_field('event_link') ?>" target="_blank">
							<div>
								<span class="events-item-date"><?php the_field('event_date') ?> | </span> <?php the_title() ?>
							</div> 
						</a>

						<?php the_field('event_excerpt') ?>

						<a class="btn btn-1" href="<?php the_field('event_link') ?>">Learn More</a>

					</div>

				</div>

			</div> 

			<?php endwhile ?>

		</div>

	</div>

</section>

<?php endif; wp_reset_postdata(); ?>