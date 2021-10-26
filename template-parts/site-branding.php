<?php
/**
 * Template part for displaying the site logo.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Anima
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

$anima_has_transparent_logo = anima_has_custom_logo_transparent();
?>

<div class="c-branding site-branding">

	<?php if ( has_custom_logo() || $anima_has_transparent_logo ) { ?>

        <div class="c-logo site-logo">
			<?php if ( has_custom_logo() ) { ?>
                <div class="c-logo__default">
					<?php the_custom_logo(); ?>
                </div>
			<?php } ?>

                <div class="c-logo__inverted">
                    <?php
                        /**
                         * If transparent logo is not loaded,
                         * use the custom logo.
                         */
                        if ( $anima_has_transparent_logo ) {
	                        anima_the_custom_logo_transparent();
                        } else {
	                        the_custom_logo();
                        }
                    ?>

                </div>
        </div><!-- .c-logo.site-logo -->

	<?php }

	$blog_info   = get_bloginfo( 'name' );
	$description = get_bloginfo( 'description', 'display' );

	if ( ! empty( $blog_info ) || ! empty( $description ) ) { ?>
        <div class="site-info">
			<?php
			if ( ! empty( $blog_info ) ) {
				if ( is_front_page() || is_home() ) { ?>
                    <h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
				<?php } else { ?>
                    <p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
				<?php }
			}

			if ( $description || is_customize_preview() ) { ?>
                <p class="site-description"><?php echo $description; ?></p>
			<?php } ?>
        </div><!-- .site-info -->
	<?php } ?>

</div><!-- .c-branding.site-branding -->
