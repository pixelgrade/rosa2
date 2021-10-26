<?php
/**
 * Displays the Single widget area.
 *
 * @since Anima 1.10.0
 */

if ( is_active_sidebar( 'sidebar-1' ) ) : ?>

    <?php dynamic_sidebar( 'sidebar-1' ); ?>

<?php endif; ?>
