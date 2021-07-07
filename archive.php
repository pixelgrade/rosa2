<?php
/**
 * The template for displaying archive pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Rosa2
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

get_header(); ?>

    <div id="primary" class="content-area">
        <main id="main" class="site-main">

			<?php if ( have_posts() ) { ?>

                <header class="entry-header has-text-align-center entry-content">
                    <?php
                    the_archive_title( '<h1 class="page-title">', '</h1>' );
                    the_archive_description( '<div class="archive-description">', '</div>' );
                    ?>
                </header><!-- .page-header -->
                <?php
                get_template_part( 'template-parts/loop' );
                rosa2_the_posts_pagination();
			} else {
				get_template_part( 'template-parts/content', 'none' );
			} ?>

        </main><!-- #main -->
    </div><!-- #primary -->

<?php
get_footer();
