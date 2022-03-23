<?php
/**
 * Default header block pattern
 */
return array(
	'title'      => __( 'Default Header (theme)', '__theme_txtd' ),
	'categories' => array( 'header' ),
	'blockTypes' => array( 'core/template-part/header' ),
	'content'    => '<!-- wp:novablocks/header {"layout":"logo-center"} -->
<!-- wp:novablocks/header-row {"name":"primary","label":"Primary Navigation","isSticky":true,"isPrimary":true,"className":"nb-header-row\u002d\u002dprimary"} -->
<!-- wp:novablocks/navigation {"slug":"primary","className":"nb-navigation nb-navigation\u002d\u002dprimary"} /-->

<!-- wp:novablocks/logo /-->

<!-- wp:novablocks/navigation {"slug":"secondary","className":"nb-navigation nb-navigation\u002d\u002dsecondary"} /-->
<!-- /wp:novablocks/header-row -->
<!-- /wp:novablocks/header -->',
);
