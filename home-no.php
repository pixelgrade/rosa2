<?php
/**
 * The template for displaying the blog home page.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Anima
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

get_header();

?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">

			<?php echo do_blocks(
				'<!-- wp:novablocks/sidecar -->' .
				'<!-- wp:novablocks/sidecar-area -->' .
				anima_get_home_content_markup() .
				'<!-- /wp:novablocks/sidecar-area -->' .
				'<!-- /wp:novablocks/sidecar -->'
			); ?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();