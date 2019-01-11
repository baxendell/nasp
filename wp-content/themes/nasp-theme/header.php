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

	<?php
	$url = home_url();
	?>
		<a href="#main-content" class="skiplink" tabindex="-1">Skip Navigation</a>
		<!-- Google Tag Manager (noscript) -->

		<header id="main-header" class="banner">

			<div class="top-header sps" data-sps-offset="50">

				<div class="container-fluid">

					<div class="row align-items-center justify-content-between no-gutters pos-rel">

			            <div class="logo text-center-xs col-5 col-md-6 col-lg-3" itemscope itemtype="http://schema.org/Organization">

			                <a href="<?php echo $url ?>" itemprop="url">

			                    <img itemprop="logo" class="img-responsive" src="<?php echo esc_url( get_stylesheet_directory_uri() ) ?>/assets/images/nasp-logo.png" alt="National Association of Safety Professionals">

			                </a>

			            </div>

						<?php if(wp_is_mobile()): ?>

						<div id="m-toggle" class="header-top-wrap d-lg-none affix">

							<nav id="mobile-nav" class="mobile-nav-links-container">

								<button class="nav-opener" role="presentation" aria-label="nav_opener" data-toggle="collapse" data-target=".navbar-collapse">                       
			      
			                            <span></span>
			                            <span></span>
			                            <span></span>
			                            
			                    </button>	

							</nav>

						</div>

						<?php endif ?>

						<nav id="nav" class="navbar col-lg-9 col-xl-auto d-none d-lg-block">

							<ul class="navbar-social list-inline">

						          <li><a href="https://dynamic.naspweb.com/index.php/login/" target="_blank">Client Login</a></li>

						          <li><a href="https://www.facebook.com/NASPweb" target="_blank"><i class="facebook-icon"></i></a></li>

						          <li><a href="https://twitter.com/NASPweb" target="_blank"><i class="twitter-icon"></i></a></li>

						          <li><a href="https://www.linkedin.com/showcase/nasp-courses/" target="_blank"><i class="linkedin-icon"></i></a></li>

								<li><button class="btn-search"><i class="search-icon"></i></button></li>

							</ul>

							<?php wp_nav_menu( array( 
								'container'         => 'div',
								'theme_location'  => 'header-menu',
								'menu_class' 		=> 'nav navbar-nav',
								'walker'          => new Walker_Nav_Primary()

							) ) ?>

						</nav>	

						<div class="search-bar"><?php get_search_form( ) ?></div>
		            
				  	</div>
				
				</div>

				<!-- Full Menu -->
				<div class="full-screen-menu">

		            <div class="full-screen-menu-logo" itemscope itemtype="http://schema.org/Organization">

		                <a href="/" itemprop="url">

		                    <img itemprop="logo" class="img-responsive" src="<?php echo esc_url( get_stylesheet_directory_uri() ) ?>/assets/images/nasp-logo-sm.png" alt="National Association of Safety Professionals">

		                </a>

		            </div>
					
					<a href="#" class="full-screen-menu-login">Client Login</a>

				    <div class="full-screen-menu-close">
				        <div></div>
				        <div></div>
				    </div>

				    <div class="full-screen-menu-content mx-auto clearfix">

				        <div class="d-block full-screen-menu-content-box">

				            <div class="full-screen-menu-content-menu">

								<?php wp_nav_menu( array(
									'container'      => 'div',
									'theme_location' => 'header-menu',
									'menu_class'     => 'nav navbar-nav',
									'walker'         => new Walker_Nav_Primary(),

								) ) ?>

								<ul class="navbar-social navbar-social__full-screen list-inline">

						          	<li><a href="https://dynamic.naspweb.com/index.php/login/">Client Login</a></li>

						          	<li><a href="https://www.facebook.com/NASPweb" target="_blank"><i class="fab fa-facebook-f"></i></a></li>

						          	<li><a href="https://twitter.com/NASPweb" target="_blank"><i class="fab fa-twitter"></i></a></li>

					          		<li><a href="https://www.linkedin.com/showcase/nasp-courses/" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>

									<li><button class="btn-search"><i class="far fa-search"></i></button></li>
								</ul>

				            </div>

				        </div>

			        </div>

		        </div><!--full menu-->
			
			</div>

			<?php if(!is_page_template('contact.php')) { get_template_part('partials/banner'); } ?>

		</header>
		

<?php
if(!is_front_page()){
	get_template_part('partials/breadcrumbs');
}
?>