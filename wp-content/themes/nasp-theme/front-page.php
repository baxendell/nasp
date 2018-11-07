<?php
/**
 * Front-page
 *
 * Front page action hooks in inc/front-page-hooks.php
 */

get_header();

?>

<section class="main">

	<div class="container">

		<div class="row">

			<div class="col-lg-9">

				<div class="border-content">

					<div class="row no-gutters">

						<div class="offset-lg-1 col-lg-5">

							<?php if ( have_posts() ) : while ( have_posts() ) : the_post() ?>

								<?php the_content() ?>

							<?php endwhile; endif; ?>

						</div>

					</div>

					<a class="btn btn-1" href="#">Learn More</a>

				</div>

			</div>

		</div>

		<div class="offset-video col-lg-7 text-right">

			<a href="#" data-toggle="modal" data-target="#exampleModalCenter">

				<?php $vImg = get_field('video_image'); ?>

				<img src="<?php echo $vImg['url'] ?>" alt="<?php echo $vImg['alt'] ?>"/>

			</a>

			<!-- Modal -->
			<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
			  <div class="modal-dialog modal-dialog-centered" role="document">
			    <div class="modal-content">
			      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
			          <span aria-hidden="true">&times;</span>
		          </button>

			      <div class="modal-body">
			        <?php the_field('video_embed') ?>
			      </div>

			    </div>
			  </div>
			</div>

		</div>

	</div>

	<?php $post_objects = get_field('testimonials'); if( $post_objects ): ?>

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

	<?php endif ?>

</section>

<section class="home-section-3 split-bg">

	<div class="container">

		<div class="row justify-content-end">

			<div class="col-lg-4 align-self-end">

				<h2><?php the_field('section_3_title') ?></h2>

				<?php the_field('section_3_text') ?>

			</div>

		</div>

	</div>

</section>

<section class="home-section-4 solid-bg">

	<div class="container">

		<div class="row align-items-center justify-content-around no-gutters">

			<div class="col-12">

				<?php the_field('section_4_text') ?>

			</div>

		</div>

	</div>

</section>

<section class="home-section-5 split-bg">

	<div class="container">

		<div class="row justify-content-end">

			<div class="col-lg-4 align-self-end">

				<h2><i class="certification-icon"></i><?php the_field('certifications_title') ?></h2>

				<?php the_field('certifications_text') ?>

				<div class="text-center">

					<a class="btn btn-1" href="#">Learn More</a>
					
				</div>

			</div>

		</div>

	</div>

</section>

<section class="main home-section-6">

	<div class="container">

		<div class="row no-gutters align-items-center justify-content-center">

			<div class="col-md-9">

				<h2><!--title--></h2>

				<div class="card_section">
                    <div class="cards_images">
                        <div class="cards_section">
                            <div class="first_card">
                                <div class="cards_container">
                                    <h3>Sign Up for the NASP Newsletter Now!</h3>
                                    <p>Informative Articles. Stay up-to-date on upcoming courses. Never miss a special offer. Don't wait... Sign up today!</p>
                                    <a class="btn btn-1" href="#">Sign Up</a>
                                </div>
                            </div>

                            <div class="second_card">
                                <div class="cards_container">

                                <?php $post_object = get_field('featured_article_card'); 
                                if( $post_object ): $post = $post_object; setup_postdata( $post ); ?>

                                    <?php the_post_thumbnail('large') ?>

                                    <h3><?php the_title() ?></h3>
                                    <?php the_excerpt() ?>

                                    <a class="btn btn-1" href="<?php the_permalink() ?>">Read More</a>

    							<?php wp_reset_postdata(); endif; ?>

                                </div>
                            </div>

                            <div class="third_card">
                                <div class="cards_container">
                                    <?php the_field('featured_course') ?>
                                </div>
                            </div>

                            <div class="fourth_card">
                                <div class="cards_container">
                                    <?php the_field('events_card') ?>
                                    <?php 
                                    $card_args = array(
                                    	'post_type' => 'event',
                                    	'posts_per_page' => '5',
                                    	'order' => 'menu_order');

                                    $card_Query = new WP_Query($card_args);

                                    if($card_Query->have_posts()):
                                	?>
                                	<ul>
                                		<?php while($card_Query->have_posts()): $card_Query->the_post(); ?>
                            			<li class="events-item">

                            				<a href="<?php the_permalink() ?>">
                            					<div>
                            						<span class="events-item-date"><?php the_field('event_date') ?> | </span> <?php the_title() ?>
                        						</div> 
                        						<i class="fal fa-arrow-right"></i>
                            				</a>
                        				</li>
                        				<?php endwhile; wp_reset_postdata(); ?>
                    				</ul>
                    				<?php endif ?>

                                </div>
                            </div>
                            <!--
                            <div class="fifth_card" style="transform: translateY(-6.5em) scale(0.75); opacity: 1; visibility: visible; z-index: 96;">
                                <div class="cards_container">
                                    <img class="card_active" alt="image" src="https://www.gnosisconnect.com/assets/images/icons4.png">
                                    <h3>Increase Adoption<span>Leverage Gnosis LMS's Cloud and Mobile.</span></h3>
                                    <p>Mobile-ready capabilities to provide your learners 24/7 access to training programs anytime, anywhere and on any device!</p>

                                </div>
                            </div>

                            <div class="sixth_card" style="transform: translateY(-6.5em) scale(0.75); opacity: 1; visibility: visible; z-index: 96;">
                                <div class="cards_container">
                                    <img class="card_active" alt="image" src="https://www.gnosisconnect.com/assets/images/icons4.png">
                                    <h3>Increase Adoption<span>Leverage Gnosis LMS's Cloud and Mobile.</span></h3>
                                    <p>Mobile-ready capabilities to provide your learners 24/7 access to training programs anytime, anywhere and on any device!</p>

                                </div>
                            </div>                            

							-->
                        </div>

                    </div>

                    <div class="card_list">
                        <ul class="card_list_box">
                            <li>
                                <a class="card1_click active-card" href="javascript:void(0)" rel="active-card">
                                    <div class="card_image">
                                        <img class="card_inactive" alt="image" src="https://www.gnosisconnect.com/assets/images/cards_icon1.png">
                                        <img class="card_active" alt="image" src="https://www.gnosisconnect.com/assets/images/cards_icon1_active.png">
                                    </div>
                                    <div class="card_content">
                                        <h5>Sign Up Now </h5>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a class="card2_click" href="javascript:void(0)">
                                    <div class="card_image">
                                        <img class="card_inactive" alt="image" src="https://www.gnosisconnect.com/assets/images/cards_icon2.png">
                                        <img class="card_active" alt="image" src="https://www.gnosisconnect.com/assets/images/cards_icon2_active.png">
                                    </div>
                                    <div class="card_content">
                                        <h5>Featured Article</h5>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a class="card3_click" href="javascript:void(0)">
                                    <div class="card_image">
                                        <img class="card_inactive" alt="image" src="https://www.gnosisconnect.com/assets/images/cards_icon3.png">
                                        <img class="card_active" alt="image" src="https://www.gnosisconnect.com/assets/images/cards_icon3_active.png">
                                    </div>
                                    <div class="card_content">
                                        <h5>Featured Course</h5>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a class="card4_click" href="javascript:void(0)">
                                    <div class="card_image">
                                        <img class="card_inactive" alt="image" src="https://www.gnosisconnect.com/assets/images/cards_icon4.png">
                                        <img class="card_active" alt="image" src="https://www.gnosisconnect.com/assets/images/cards_icon4_active.png">
                                    </div>
                                    <div class="card_content">
                                        <h5>Upcoming Events</h5>
                                    </div>
                                </a>
                            </li>
                            <!--
                            <li>
                                <a class="card5_click" href="javascript:void(0)">
                                    <div class="card_image">
                                        <img class="card_inactive" alt="image" src="https://www.gnosisconnect.com/assets/images/cards_icon4.png">
                                        <img class="card_active" alt="image" src="https://www.gnosisconnect.com/assets/images/cards_icon4_active.png">
                                    </div>
                                    <div class="card_content">
                                        <h5>On-site Training</h5>
                                    </div>
                                </a>
                            </li>

                            <li>
                                <a class="card6_click" href="javascript:void(0)">
                                    <div class="card_image">
                                        <img class="card_inactive" alt="image" src="https://www.gnosisconnect.com/assets/images/cards_icon4.png">
                                        <img class="card_active" alt="image" src="https://www.gnosisconnect.com/assets/images/cards_icon4_active.png">
                                    </div>
                                    <div class="card_content">
                                        <h5>Franchise Us</h5>
                                    </div>
                                </a>
                            </li>
							-->


                        </ul>
                    </div>

                </div>

			</div>

		</div>

	</div>

</section>

<?php get_template_part('partials/awards') ?>

<?php get_footer() ?>
