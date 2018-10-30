<?php
/**
 * Template Name: Location
 *
 */
get_header();
?>

<section class="location-logos-section">

    <div class="container">

        <div class="location-logos">

            <div class="grid-logos">

                <div class="item">
                    <p>Trusted & Respected</p>
                </div>

                <?php
                if ( have_rows( 'location_logos' ) ):

                    $repeater_list = get_field( 'location_logos' );

                    foreach ( $repeater_list as $item ) { ?>

                        <?php if ( $item['link'] ) { ?>

                            <div class="item">
                                <a href="<?php echo $item['link']['url']; ?>" target="<?php echo $item['link']['target']; ?>">
                                    <img class="img-responsive" src="<?php echo $item['item']; ?>" alt="logo">
                                </a>
                            </div>

                        <?php } else { ?>

                            <div class="item">
                                <img class="img-responsive" src="<?php echo $item['item']; ?>" alt="logo">
                            </div>

                        <?php } ?>

                    <?php }
                endif;
                ?>

            </div>

            <div class="slick-nav-logos-sidebar visible-xs"></div>

        </div>

    </div>

</section>

<div class='contact-location-content main-intro'>

    <section class="location-top-content">

        <div class="container">

            <div class="row">

                <div class="col-sm-12 col-wrap">

                    <div class="col col-left">

                        <div class="inner-col">

			                <?php

			                $post_object = get_field( 'testimonial_sidebar' );
			                if ( $post_object ): ?>

				                <?php
				                // override $post
				                $post = $post_object;
				                setup_postdata( $post );
				                ?>

                                <div class="testimonial-wrap">
                                    <blockquote><?php echo get_the_excerpt(); ?></blockquote>
                                    <cite>— <?php the_field('client'); ?></cite>
                                </div>

				                <?php wp_reset_postdata(); ?>

			                <?php endif; ?>

                            <div class='location-details clearfix'>

				                <?php
				                $template_place_id = get_field('location_place_id');
				                $output = googlemap_curl($template_place_id);
				                $template_location = json_decode( $output, true );
				                ?>

                                <h5>Visit Our <?php the_title(); ?> Office</h5>

                                <div class='inner-col-left'>
                                    <div id="map_temp" class="map-wrap"></div>
                                </div>

                                <div class='inner-col-right address' id="location-address">

                                    <div id="wpseo_location-<?php echo $location_id ?>" class="wpseo-location" itemscope="" itemscope itemtype="http://schema.org/Place">

                                        <h6>Schiller & Hamilton<br>
                                            Law Firm</h6>

                                        <div itemprop="address" itemscope="" itemtype="http://schema.org/PostalAddress" class="wpseo-address-wrapper">

                                            <p>
                                                <span class="wpseo-business-name law-firm-footer-title hidden" itemprop="name">Schiller &amp; Hamilton Law Firm</span>
                                                <span itemprop="address" itemscope="" itemtype="http://schema.org/PostalAddress" class="wpseo-address-wrapper">
                                                <span class="street-address" itemprop="streetAddress">
                                                    <?php echo get_field( 'street' ); ?>
                                                </span>
                                                <span class="locality" itemprop="addressLocality"><?php echo get_field( 'city' ); ?></span>,
                                                <span class="region" itemprop="addressRegion"><?php echo get_field( 'state' ); ?></span>
                                                <span class="postal-code" itemprop="postalCode"><?php echo get_field( 'zipcode' ); ?></span>
                                            </span>
                                                <span class="wpseo-phone"><span itemprop="telephone"><?php echo get_field( 'location_phone' ); ?></span></span>
                                            </p>

                                            <div class="location-links">

                                                <a data-lat="<?php echo $template_location['result']['geometry']['location']['lat']; ?>" data-lng="<?php echo $template_location['result']['geometry']['location']['lng']; ?>" class="map_coordinates_temp address-link address-direction" href="<?php echo $template_location['result']['url']; ?>" target="_blank" rel="noopener">Directions</a>

                                                <a class="address-link office-hours" href="#" data-toggle="modal" data-target="#myModal">Hours</a>

                                                <!-- Modal -->
                                                <div id="myModal" class="modal fade" role="dialog">
                                                    <div class="modal-dialog">

                                                        <!-- Modal content-->
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                                                <h4 class="modal-title">Office Hours</h4>
                                                            </div>
                                                            <div class="modal-body">

                                                                <div class="opening-hours">
                                                                    <table class="wpseo-opening-hours">
                                                                        <tbody>

														                <?php if( get_field( 'monday_hours' ) ): ?>
                                                                            <tr>
                                                                                <td class="day">Monday</td>
                                                                                <td class="time"><span><?php the_field( 'monday_hours' ); ?></span></td>
                                                                            </tr>
														                <?php endif; ?>

														                <?php if( get_field( 'tuesday_hours' ) ): ?>
                                                                            <tr>
                                                                                <td class="day">Tuesday</td>
                                                                                <td class="time"><span><?php the_field( 'tuesday_hours' ); ?></span></td>
                                                                            </tr>
														                <?php endif; ?>

														                <?php if( get_field( 'wednesday_hours' ) ): ?>
                                                                            <tr>
                                                                                <td class="day">Wednesday</td>
                                                                                <td class="time"><span><?php the_field( 'wednesday_hours' ); ?></span></td>
                                                                            </tr>
														                <?php endif; ?>

														                <?php if( get_field( 'thursday_hours' ) ): ?>
                                                                            <tr>
                                                                                <td class="day">Thursday</td>
                                                                                <td class="time"><span><?php the_field( 'thursday_hours' ); ?></span></td>
                                                                            </tr>
														                <?php endif; ?>

														                <?php if( get_field( 'friday_hours' ) ): ?>
                                                                            <tr>
                                                                                <td class="day">Friday</td>
                                                                                <td class="time"><span><?php the_field( 'friday_hours' ); ?></span></td>
                                                                            </tr>
														                <?php endif; ?>

														                <?php if( get_field( 'saturday_hours' ) ): ?>
                                                                            <tr>
                                                                                <td class="day">Saturday</td>
                                                                                <td class="time"><span><?php the_field( 'saturday_hours' ); ?></span></td>
                                                                            </tr>
														                <?php endif; ?>

														                <?php if( get_field( 'sunday_hours' ) ): ?>
                                                                            <tr>
                                                                                <td class="day">Sunday</td>
                                                                                <td class="time"><span><?php the_field( 'sunday_hours' ); ?></span></td>
                                                                            </tr>
														                <?php endif; ?>

                                                                        </tbody>
                                                                    </table>
                                                                </div>

                                                            </div>
                                                            <div class="modal-footer">
                                                                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div class="col col-right entry-content">

		                <?php if ( have_posts() ) : ?>
			                <?php while ( have_posts() ) : the_post() ?>
				                <?php the_content() ?>
			                <?php endwhile ?>
		                <?php endif ?>

                        <div class="text-left">
                            <a class="btn btn-1" href="/about-us/">Meet the team</a>
                        </div>

                    </div>

                </div>



            </div>

        </div>

    </section>

    <section class="location-contact">

        <div class="container">

            <div class="location-contact-wrap">

                <div class="location-contact-top">
                    <h2>contact us today</h2>
                    <p><?php the_field( 'location_contact_description' ); ?></p>
                </div>

                <div class="location-contact-bottom">

                    <form action="#" method="post">

                        <input type="text" class="input-text form-input" id="name" placeholder="Name" name="name">

                        <input type="text" class="input-text form-input" id="phone_email" placeholder="Email | Phone" name="phone_email">

                        <button class="btn btn-submit" type="submit"><span>Send</span></button>

                    </form>

                </div>

            </div>

        </div>

    </section>

    <section class="second-main-content">

        <div class="container">

            <div class="row">

                <div class="col-left entry-content">

                    <?php the_field( 'second_content' ); ?>

                    <?php
                    if ( have_rows( 'squares_condition' ) ): ?>
                        <div class="squares-grid">
                            <?php
                            // loop through rows (sub repeater)
                            while ( have_rows( 'squares_condition' ) ): the_row(); ?>

                                <div class="item sameHeight">
                                    <?php if ( get_sub_field( 'link' ) ) { ?>
                                        <h4><a href="<?php echo get_sub_field( 'link' )['url']; ?>" target="<?php echo get_sub_field( 'link' )['target']; ?>"><?php the_sub_field( 'title' ); ?></a></h4>
                                    <?php } else { ?>
                                        <h4><?php the_sub_field( 'title' ); ?></h4>
                                    <?php } ?>
                                    <?php if ( get_sub_field( 'address' ) ) { ?>
                                        <p class="details">
                                            <span class="address"><?php the_sub_field( 'address' ); ?></span>
                                            <?php if ( get_sub_field( 'phone' ) ) { ?>
                                                <span class="phone"><?php the_sub_field( 'phone' ); ?></span>
                                            <?php } ?>
                                        </p>
                                    <?php } ?>
                                </div>

                            <?php endwhile; ?>
                        </div>
                    <?php endif;
                    ?>

                    <div class="social-contact">

                        <a href="/about-us/" class="btn btn-1"><span>Meet The Team</span></a>

                        <p>connect with us:</p>

                        <ul class="social-icons">

                            <?php if ( get_field( 'google_plus_link', 'option' ) ): ?>
                                <li>
                                    <a target="_blank" href="<?php the_field( 'google_plus_link', 'option' ); ?>">
                                        <?php include( "assets/images/social-gplus.svg" ); ?>
                                    </a>
                                </li>
                            <?php endif; ?>

                            <?php if ( get_field( 'linkedin_link', 'option' ) ): ?>
                                <li>
                                    <a target="_blank" href="<?php the_field( 'linkedin_link', 'option' ); ?>">
                                        <?php include( "assets/images/social-linkedin.svg" ); ?>
                                    </a>
                                </li>
                            <?php endif; ?>

                            <?php if ( get_field( 'facebook_link', 'option' ) ): ?>
                                <li>
                                    <a target="_blank" href="<?php the_field( 'facebook_link', 'option' ); ?>">
                                        <?php include( "assets/images/social-facebook.svg" ); ?>
                                    </a>
                                </li>
                            <?php endif; ?>

                            <?php if ( get_field( 'twitter_link', 'option' ) ): ?>
                                <li>
                                    <a target="_blank" href="<?php the_field( 'twitter_link', 'option' ); ?>">
                                        <?php include( "assets/images/social-twitter.svg" ); ?>
                                    </a>
                                </li>
                            <?php endif; ?>

                        </ul>

                    </div>

                </div>

                <aside id="sidebar" class="col-right">

                    <div class="inner-aside">

                        <div id="primary" class="sidebar widget-area" role="complementary">

                            <ul class="sidebar-widgets">
                                <li class="siderbar-item"><?php do_action( 'cws_results' ) ?></li>
                            </ul>

                        </div>

                    </div>

                </aside>

            </div>

        </div>

    </section>

    <section class="location-services">

        <div class="container">

            <div class="location-services-wrap">

                <div class="col-first">
                    <div class="box">
                        <div class="img-wrap">
                            <img class="img-responsive" src="<?php the_field( 'service_image_01' ); ?>" alt="image">
                        </div>
                        <p class="title"><?php the_field( 'service_title_01' ); ?></p>
                        <p class="desc"><?php the_field( 'service_description_01' ); ?></p>
                    </div>

                    <div class="box">
                        <div class="img-wrap">
                            <img class="img-responsive" src="<?php the_field( 'service_image_02' ); ?>" alt="image">
                        </div>
                        <p class="title"><?php the_field( 'service_title_02' ); ?></p>
                        <p class="desc"><?php the_field( 'service_description_02' ); ?></p>
                    </div>

                    <div class="box">
                        <div class="img-wrap">
                            <img class="img-responsive" src="<?php the_field( 'service_image_03' ); ?>" alt="image">
                        </div>
                        <p class="title"><?php the_field( 'service_title_03' ); ?></p>
                        <p class="desc"><?php the_field( 'service_description_03' ); ?></p>
                    </div>
                </div>

                <div class="col-second">

                    <h3><?php the_field( 'title_services' ); ?></h3>

                    <p><?php the_field( 'description_services' ); ?></p>

                    <a href="/legal-services/" class="btn btn-1"><span>see all cases we handle</span></a>

                </div>

                <div class="col-third">
                    <div class="box">
                        <div class="img-wrap">
                            <img class="img-responsive" src="<?php the_field( 'service_image_04' ); ?>" alt="image">
                        </div>
                        <p class="title"><?php the_field( 'service_title_04' ); ?></p>
                        <p class="desc"><?php the_field( 'service_description_04' ); ?></p>
                    </div>

                    <div class="box">
                        <div class="img-wrap">
                            <img class="img-responsive" src="<?php the_field( 'service_image_05' ); ?>" alt="image">
                        </div>
                        <p class="title"><?php the_field( 'service_title_05' ); ?></p>
                        <p class="desc"><?php the_field( 'service_description_05' ); ?></p>
                    </div>

                    <div class="box">
                        <div class="img-wrap">
                            <img class="img-responsive" src="<?php the_field( 'service_image_06' ); ?>" alt="image">
                        </div>
                        <p class="title"><?php the_field( 'service_title_06' ); ?></p>
                        <p class="desc"><?php the_field( 'service_description_06' ); ?></p>
                    </div>
                </div>

                <div class="col-fourth">

                    <h3><?php the_field( 'title_services' ); ?></h3>

                    <p><?php the_field( 'description_services' ); ?></p>

                    <a href="/legal-services/" class="btn btn-1"><span>see all cases we handle</span></a>

                </div>

            </div>

        </div>

    </section>

</div>

<section class="third-main-content">

    <div class="container">

        <div class="row">

            <div class="col-left entry-content">

                <?php the_field( 'third_content' ); ?>

            </div>

            <aside id="sidebar" class="col-right">

                <div class="inner-aside">

                    <div id="primary" class="sidebar widget-area" role="complementary">

                        <ul class="sidebar-widgets">

                            <li class="siderbar-item">

                                <div class="cta-holder gray-block">
                                    <h4>Call Us Today</h4>
                                    <a class="phone" href="tel:8033660333">(803) 366-0333</a>
                                    <a class="btn-contact" href="/contact-us/"><span>Free Consultation</span></a>
                                </div>

                            </li>

                        </ul>

                    </div>

                </div>

            </aside>

        </div>

    </div>

</section>

<?php get_footer(); ?>