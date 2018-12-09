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

			<div class="top-header sps" data-sps-offset="50">

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

								<li><a href="#">Client Login</a></li>

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

			<?php if(!is_page_template('contact.php')) { get_template_part('partials/banner'); } ?>

		</header>
		

<?php
if(!is_front_page()){
	get_template_part('partials/breadcrumbs');
}
?>