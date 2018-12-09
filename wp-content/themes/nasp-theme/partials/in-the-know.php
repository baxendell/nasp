<section class="main home-section-6">

	<div class="container">

		<div class="row no-gutters align-items-center justify-content-center">

			<div class="col-md-9">

				<h2>Stay in the know:</h2>

				<div class="card_section">
                    <div class="cards_images">
                        <div class="cards_section">
                            <div class="first_card">
                                <div class="cards_container">
                                    <h3>Sign Up for the NASP Newsletter Now!</h3>
                                    <p>Informative Articles. Stay up-to-date on upcoming courses. Never miss a special offer. Don't wait... Sign up today!</p>

                                    <?php get_template_part('partials/newsletter') ?>
                                </div>
                            </div>

                            <div class="second_card">
                                <div class="cards_container">

                                <?php $post_object = get_field('featured_article_card'); 
                                if( $post_object ): $post = $post_object; setup_postdata( $post ); ?>

                                    <?php the_post_thumbnail('medium') ?>

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
                            <div class="fifth_card">
                                <div class="cards_container">
                                    <?php the_field('on-site_training_card') ?>

                                </div>
                            </div>

                            <div class="sixth_card">
                                <div class="cards_container">
                                    <?php the_field('franchise_card') ?>

                                </div>
                            </div>                            

                        </div>

                    </div>

                    <?php $tempUrl = get_stylesheet_directory_uri(); ?>

                    <div class="card_list">
                        <ul class="card_list_box">
                            <li>
                                <a class="card1_click active-card" href="javascript:void(0)" rel="active-card">
                                    <div class="card_image">
                                        <?php include($tempUrl.'/assets/images/icons/letter.svg') ?>
                                    </div>
                                    <div class="card_content">
                                        <h5>Sign Up Now </h5>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a class="card2_click" href="javascript:void(0)">
                                    <div class="card_image">
                                        <?php include($tempUrl.'/assets/images/icons/article.svg') ?>
                                    </div>
                                    <div class="card_content">
                                        <h5>Featured Article</h5>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a class="card3_click" href="javascript:void(0)">
                                    <div class="card_image">
                                        <?php include($tempUrl.'/assets/images/icons/noepad.svg') ?>
                                    </div>
                                    <div class="card_content">
                                        <h5>Featured Course</h5>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a class="card4_click" href="javascript:void(0)">
                                    <div class="card_image">
                                       <?php include($tempUrl.'/assets/images/icons/calendar.svg') ?>
                                    </div>
                                    <div class="card_content">
                                        <h5>Upcoming Events</h5>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a class="card5_click" href="javascript:void(0)">
                                    <div class="card_image">
                                        <?php include($tempUrl.'/assets/images/icons/meeting.svg') ?>
                                    </div>
                                    <div class="card_content">
                                        <h5>On-site Training</h5>
                                    </div>
                                </a>
                            </li>

                            <li>
                                <a class="card6_click" href="javascript:void(0)">
                                    <div class="card_image">
                                        <?php include($tempUrl.'/assets/images/icons/handshake.svg') ?>
                                    </div>
                                    <div class="card_content">
                                        <h5>Franchise Us</h5>
                                    </div>
                                </a>
                            </li>

                        </ul>
                    </div>

                </div>

			</div>

		</div>

	</div>

</section>