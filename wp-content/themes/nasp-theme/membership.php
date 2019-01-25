<?php
/**
 * Template Name: MEMBERSHIP
 */
get_header() ?>
<section class="main membership-1">

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

		<div class="row no-gutters membership-section">

			<h2>Membership Options</h2>

			<div class="col">

				<div class="list-group" id="myList" role="tablist">
					<a class="list-group-item list-group-item-action active" data-toggle="list" href="#gold" role="tab">NASP Gold</a>
					<a class="list-group-item list-group-item-action" data-toggle="list" href="#gold-corp" role="tab">IASP Gold</a>
					<a class="list-group-item list-group-item-action" data-toggle="list" href="#silver" role="tab">NASP Silver</a>
					<a class="list-group-item list-group-item-action" data-toggle="list" href="#silver-corp" role="tab">IASP Silver</a>
				</div>

				<div class="tab-content">
				  <div class="tab-pane active entry-content" id="gold" role="tabpanel">

				  	<?php the_field('gold_membership') ?>

				  </div>

				  <div class="tab-pane entry-content" id="gold-corp" role="tabpanel">
				  	
				  	<?php the_field('gold_corporate') ?>

				  </div>

				  <div class="tab-pane entry-content" id="silver" role="tabpanel">
				  	
				  	<?php the_field('silver_membership') ?>

				  </div>

				  <div class="tab-pane entry-content" id="silver-corp" role="tabpanel">
				  	
				  	<?php the_field('silver_corporate') ?>

				  </div>

				</div>

			</div>

		</div>

		<div class="row justify-content-center">

			<div class="col-md-10 membership-note">

				<?php the_field('membership_note') ?>

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