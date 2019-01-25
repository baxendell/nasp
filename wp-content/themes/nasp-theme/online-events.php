<?php
/**
 * Template Name: Online Courses
 */
get_header() ?>
<section class="main course-1">

	<div class="container">

		<div class="row no-gutters">

			<article class="col-md-7 offset-lg-1 col-lg-6 pr-lg-5">

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

		<div id="professional-certs" class="course-wrap">

			<div class="row no-gutters course-section">

				<h2>Professional Certifications</h2>

				<div class="col">

					<div class="list-group" id="myList" role="tablist">
						<a class="list-group-item list-group-item-action active" data-toggle="list" href="#safety-certs" role="tab">Safety Certifications</a>
						<a class="list-group-item list-group-item-action" data-toggle="list" href="#environmental-certs" role="tab">Environmental Certifications</a>
					</div>

					<div class="tab-content">
					  <div class="tab-pane active" id="safety-certs" role="tabpanel">
					  	
					  	<?php the_field('safety_courses') ?>

					  </div>
					  <div class="tab-pane" id="environmental-certs" role="tabpanel">
					  	
					  	<?php the_field('environmental_courses') ?>

					  </div>

					</div>

				</div>

			</div>

		</div>

		<div id="coa" class="course-wrap">

			<div class="row no-gutters course-section">

				<h2>Certificates of Achievement</h2>

				<div class="col">

					<div class="course-section-intro">
					
						<p><?php the_field('second_block_intro') ?></p>

					</div>

					<?php the_field('certificates') ?>

				</div>

			</div>

		</div>

		<div id="specialist-designations" class="course-wrap">

			<div class="row no-gutters course-section">

				<h2>Specialist Designations</h2>

				<div class="col">

					<div class="course-section-intro">
					
						<p><?php the_field('third_block_intro') ?></p>

					</div>

					<?php the_field('designations') ?>

				</div>

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