<?php
/**
 * Site map partial
 */
?>
<section class="main">
	<div class="container">
		<div class="row no-gutters">
			<div class="col">
				<header>
					<h1 class="headline"><?php h1_title() ?></h1>
					<h2 class="subtitle"><?php the_field('subtitle') ?></h2>
				</header>

				<div class="site-map-content">

					<ul>

					<?php

						// Add pages you'd like to exclude in the exclude here
						wp_list_pages(
							array(
								'exclude' => '',
								'title_li' => '',
							)
						);
					?>

					</ul>

				</div>

			</div>
			
		</div>
	</div>
</section>