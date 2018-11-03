      <?php 

        $awards_args = array(
        'post_type'      => 'awards',
        'posts_per_page' => -1,
        'orderby'        => 'menu_order',
        'order'          => 'ASC'
        );

        $awards_query = new WP_Query( $awards_args );

        if($awards_query->have_posts() ) :

      ?>

      <section class="clients">

        <div class="container">

          <div class="row align-items-center justify-content-between">

            <div class="col-md-3">

              <h2>a few of our clients</h2>

            </div>

            <div class="col-md-8">

              <ul class="client-list justify-content-between">

                <?php while($awards_query->have_posts()): $awards_query->the_post();?>

                <li>
                  <a href="<?php the_field('award_link') ?>" target="_blank">
                     <?php the_post_thumbnail('full');?>
                  </a>
                </li>

                <?php endwhile; ?>

              </ul>

            </div>

          </div>

        </div>

      </section>

      <?php endif; wp_reset_postdata();?>
