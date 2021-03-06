<?php
/**
 * Excerpt loop
 */

$i    = 0; 
$home = esc_attr( home_url() );

?>

<?php if ( have_posts() ) : ?> 

    <?php while ( have_posts() ) : the_post(); $i++ ?>

        <article class="<?php echo( is_single() ) ? 'blog-holder' : 'post-excerpt' ?> <?php echo "excerpt-" . $i ?>">

            <div class="blog-post clearfix" itemprop="blogPost" itemscope itemtype="https://schema.org/BlogPosting">
                        
                
                <?php
                    global $post;
                    $author_id     = get_the_author_meta( 'ID' );
                    $author        = get_author_posts_url( $author_id );
                    $author_name   = get_the_author_meta( 'display_name' );
                    //$category      = get_the_category_list( ', ', $post->ID );
                    $category      = get_the_category( $post->ID );
                    $category_name = $category[0]->name;
                    $category_id   = $category[0]->term_id;
                    $link          = get_category_link( $category_id );
                ?>                    

                                                        
                <?php if( !is_single() ) : ?>
                
                    <?php if( has_post_thumbnail() ) : ?>
                    
                        <div class="image-holder featured-image">
    
                            <div itemprop="image" itemscope itemtype="https://schema.org/ImageObject">
    
                                <meta itemprop="url" content="<?php the_post_thumbnail_url() ?>">
    
                                <meta itemprop="width" content="335">
    
                                <meta itemprop="height" content="246">
    
                                <?php the_post_thumbnail('thumbnail') ?>
    
                            </div>
    
                        </div>
    
                    <?php endif ?>
                
                    <div class="post-wrap">

                        <div class="post-meta" itemprop="author">

                            <span>

                                <meta itemprop="name" content="<?php echo $author_name; ?>">
                                <meta itemprop="datePublished" content="<?php the_time( c ) ?>">
                                <meta itemprop="dateModified" content="<?php the_modified_date(); ?>">

                                <time class="month" datetime="<?php the_time('F j, Y')?>"><?php the_time('F j, Y') ?></time> <span><a href="<?php echo $link ?>"><?php echo $category_name ?></a></span>

                                <div itemprop="publisher" itemscope itemtype="https://schema.org/Organization">
                                    <meta itemprop="name" content="<?php echo $author_name; ?>">
                                    <div itemprop="logo" itemscope itemtype="https://schema.org/ImageObject">

                                        <meta itemprop="url" content="<?php echo $home ?>/logo.jpg">

                                        <meta itemprop="width" content="600">

                                        <meta itemprop="height" content="60">

                                    </div>                                


                                </div>

                            </span>

                        </div>

                        <h2 itemprop="name headline"><a href="<?php the_permalink() ?>"><?php the_title() ?></a></h2>

                        <div class="<?php echo ( is_single() ) ? 'blog-content' : 'blog-excerpt' ?>" itemprop="articleBody">
    
                            
                            <div itemprop="mainEntityOfPage">

                                <?php the_excerpt() ?>

                            </div>
    
                        </div>
    
                    </div>
                
                <?php endif ?>
                
                <?php if( is_single() ) : ?>
                
                    <div class="post-wrap col entry-content">

                        <h1 itemprop="name headline" class="page-title"><?php the_title() ?></h1>

                        <div class="post-meta" itemprop="author">

                            <span>

                                <?php if(is_singular('post')): ?>
                                <span itemprop="name"><?php echo $author_name; ?> | </span>
                                <?php else: ?>
                                <meta itemprop="name" content="<?php echo $author_name; ?>">
                                <?php endif ?>
                                <meta itemprop="datePublished" content="<?php the_time( c ) ?>">
                                <meta itemprop="dateModified" content="<?php the_modified_date(); ?>">

                                <time class="month" datetime="<?php the_time('F j, Y')?>"><?php the_time('F j, Y') ?></time> | <span><a href="<?php echo $link ?>"><?php echo $category_name ?></a></span>

                                <div itemprop="publisher" itemscope itemtype="https://schema.org/Organization">
                                    <meta itemprop="name" content="<?php echo $author_name; ?>">
                                    <div itemprop="logo" itemscope itemtype="https://schema.org/ImageObject">

                                        <meta itemprop="url" content="<?php echo $home ?>/logo.jpg">

                                        <meta itemprop="width" content="600">

                                        <meta itemprop="height" content="60">

                                    </div>                                

                                </div>


                            </span>

                        </div>                               
    
                        <div class="blog-content" itemprop="articleBody">             
                        
                            <?php if( has_post_thumbnail() ) : ?>
    
                                <div class="image-holder featured-image col-sm-4 no-pad-left no-pad-mobile pull-left">
        
                                    <div itemprop="image" itemscope itemtype="https://schema.org/ImageObject">
            
                                        <meta itemprop="url" content="<?php the_post_thumbnail_url() ?>">
            
                                        <meta itemprop="width" content="263">
            
                                        <meta itemprop="height" content="263">
            
                                        <?php the_post_thumbnail('medium') ?>
            
                                    </div>
            
                                </div>
                                
                            <?php endif ?>

                            <div itemprop="mainEntityOfPage">

                                <?php the_content() ?>

                            </div>
    
                        </div><!--.blog-content-->
    
                    </div><!--.post-wrap-->

                    <div itemprop="publisher" itemscope itemtype="https://schema.org/Organization">

                        <div itemprop="logo" itemscope itemtype="https://schema.org/ImageObject">

                            <meta itemprop="url" content="<?php echo $home ?>/logo.jpg">

                            <meta itemprop="width" content="600">

                            <meta itemprop="height" content="60">

                        </div>

                        <meta itemprop="name" content="<?php bloginfo( 'name' ) ?>">

                    </div>
                
                <?php endif ?>
                
                <!-- END NEW -->

            </div><!--.blog-post-->

        </article>

    <?php endwhile ?>

<?php endif ?>