<!DOCTYPE html>
<html <?php language_attributes() ?>>
	<head>
		<meta charset="<?php echo esc_attr( get_bloginfo( 'charset' ) ) ?>">
		<title><?php wp_title( '-', true, 'right' ); echo esc_html( get_bloginfo( 'name' ) ) ?></title>
		<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=2"/>
		<meta name="format-detection" content="telephone=no">
		<link rel="pingback" href="<?php echo esc_url( get_bloginfo( 'pingback_url' ) ) ?>">
		<?php get_template_part('partials/favicons') ?>

		<link href="#" rel="publisher"/>
		<!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
		<!--[if lt IE 9]>
		  <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->

<!--        <script src="https://cdnjs.cloudflare.com/ajax/libs/enquire.js/2.1.6/enquire.min.js"></script>-->

		<?php wp_head() ?>

		<?php
			$post_slug = $post->post_name;
			$page_slug = 'page-'.$post_slug;
			$post_id   = 'post-id-'.$post->ID;
			$classes   = array( $page_slug, $post_id );
		?>
		<!-- Google Tag Manager -->

	</head>
	<body <?php body_class( $classes ) ?>>
		<a href="#main-content" class="skiplink" tabindex="-1">Skip Navigation</a>
		<!-- Google Tag Manager (noscript) -->

		<header class="banner">

			<div class="top-header" data-spy="affix" data-offset-top="115" data-offset-bottom="115">

				<?php if(wp_is_mobile()): ?>

				<div id="m-toggle" class="header-top-wrap visible-xs affix">

					<a class="visible-xs" href="/">
						<img class="visible-xs" src="<?php bloginfo('template_url');?>/images/company-name-logo-sm.png" alt="Client Name HEre">
					</a>

					<nav id="mobile-nav" class="mobile-nav-links-container">

						<button class="nav-opener" role="presentation" aria-label="nav_opener" data-toggle="collapse" data-target=".navbar-collapse">                       
	      
	                            <span></span>
	                            <span></span>
	                            <span></span>
	                            
	                    </button>	

						<?php wp_nav_menu( array( 
							'container'         => 'div',
							'container_class'   => 'collapse navbar-collapse',
							'theme_location'  => 'mobile-menu',
							'menu_class' 		=> 'nav navbar-nav',
							'walker'          => new Walker_Nav_Primary()

						) ) ?>

					</nav>

				</div>

				<?php endif ?>

				<div class="container-fluid hidden-xs">

					<div class="row align-items-center justify-content-between no-gutters">

			            <div class="logo text-center-xs col-md-6 col-lg-3" itemscope itemtype="http://schema.org/Organization">

			                <a href="/" itemprop="url">

			                    <img itemprop="logo" class="img-responsive" src="<?php echo esc_url( get_stylesheet_directory_uri() ) ?>/assets/images/nasp-logo.png" alt="National Association of Safety Professionals">

			                </a>

			            </div>

						<nav id="nav" class="navbar col-lg-9 col-xl-auto visible-lg">

							<ul class="navbar-social list-inline">

								<li><a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a></li>

								<li><a href="#" target="_blank"><i class="fab fa-twitter"></i></a></li>

								<li><a href="#" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>

								<li><button class="btn-search"><i class="far fa-search"></i></button></li>

							</ul>

							<?php wp_nav_menu( array( 
								'container'         => 'div',
								'theme_location'  => 'header-menu',
								'menu_class' 		=> 'nav navbar-nav',
								'walker'          => new Walker_Nav_Primary()

							) ) ?>

						</nav>			            

				  	</div>
				
				</div>
			
			</div>

			<div class="banner-slider">

				<div class="container">

					<div class="row">

						<div class="banner-slider-container col-lg-9">

							<div class="banner-slider-nav"></div>

							<div class="banner-slider-wrap">

								<div class="banner-slider-item">

									<h1 class="banner-slider-title"><?php the_field('h1_title') ?></h1>

									<h2 class="banner-slider-subtitle"><?php the_field('first_slide_subtitle') ?></h2>

								</div>

								<div class="banner-slider-item">

									<h2 class="banner-slider-title"><?php the_field('second_slide_subtitle') ?></h2>

									<h3 class="banner-slider-subtitle"><?php the_field('second_slide_subtitle') ?></h3>

								</div>

								<div class="banner-slider-item">

									<h2 class="banner-slider-title"><?php the_field('third_slide_subtitle') ?></h2>

									<h3 class="banner-slider-subtitle"><?php the_field('third_slide_subtitle') ?></h3>

								</div>

							</div>

						</div>

						<?php
						$args = array (
							'post_type' => 'event',
							'posts_per_page' => '2',
							'order' => 'menu_order'
							);

						$e_query = new WP_Query($args);

						if($e_query->have_posts()):

						?>

						<div class="col-lg-3 events">

							<?php while($e_query->have_posts()): $e_query->the_post(); ?>

							<div class="events-item">

								<a href="#"><div><span class="events-item-date"><?php the_field('event_date') ?> | </span> <?php the_title() ?></div> <i class="fal fa-arrow-right"></i></a>

							</div>

							<?php endwhile ?>

						</div>

						<?php endif; wp_reset_postdata(); ?>

					</div>

				</div>

			</div>

		</header>
		

<?php //get_template_part('partials/banner'); ?>

<?php
if(!is_front_page()){
	get_template_part('partials/breadcrumbs');
}
?>