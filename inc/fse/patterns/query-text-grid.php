<?php
/**
 * Text-based grid of posts block pattern
 */
return array(
	'title'      => __( 'Text-based grid of posts', '__theme_txtd' ),
	'categories' => array( 'query' ),
	'blockTypes' => array( 'core/query' ),
	'content'    => '<!-- wp:query {"queryId":17,"query":{"offset":0,"postType":"post","categoryIds":[],"tagIds":[],"order":"desc","orderBy":"date","author":"","search":"","sticky":"","perPage":12},"displayLayout":{"type":"flex","columns":3},"align":"wide","layout":{"inherit":true}} -->
<div class="wp-block-query break-align-left break-align-right alignwide"><!-- wp:post-template {"align":"wide"} -->
<!-- wp:post-title {"isLink":true,"fontSize":"x-large"} /-->

<!-- wp:post-excerpt /-->

<!-- wp:post-date {"format":"F j, Y","isLink":true,"fontSize":"small"} /-->
<!-- /wp:post-template -->

<!-- wp:separator {"align":"wide","className":"is-style-wide"} -->
<div class="wp-block-separator break-align-left break-align-right wp-block-separator alignwide is-style-wide alignwide" style="--nb-emphasis-top-spacing:0;--nb-emphasis-bottom-spacing:0;--nb-block-top-spacing:1;--nb-block-bottom-spacing:0;--nb-block-zindex:0;--nb-card-content-area-width:50%;--nb-card-media-container-height:50px;--nb-card-content-padding-multiplier:0;--nb-card-media-padding-top:100%;--nb-card-media-object-fit:cover;--nb-card-media-padding-multiplier:0;--nb-card-layout-gap-modifier:0;--nb-minimum-container-height:0vh;--nb-spacing-modifier:1">
        <div class="c-separator">
            <div class="c-separator__arrow c-separator__arrow--left"></div>
            <div class="c-separator__line c-separator__line--left"></div>
            <div class="c-separator__symbol">
                <span><svg width="31" height="20" viewBox="0 0 31 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30.721 6.3114c0 .599-.2647 1.1494-.7941 1.651-.5155.5016-1.2679.8777-2.2571 1.1285-5.6984 1.4768-8.7774 2.2153-9.2372 2.2153-.5434 0-.815-.1394-.815-.418 0-.2229.3204-.5294.9613-.9195.2647-.1672 1.1842-.6758 2.7586-1.5257 2.9816-1.6161 4.5072-2.4381 4.5768-2.466 1.3375-.6548 2.4243-.9822 3.2602-.9822 1.031 0 1.5465.4389 1.5465 1.3166zm-4.8485-3.1766c0 .4598-.3553 1.0031-1.0658 1.63-.3901.3345-1.3654 1.059-2.9258 2.1735-2.9676 2.1178-4.6604 3.1766-5.0784 3.1766-.209 0-.3762-.1393-.5016-.418l.2508-.585c.836-.8639 1.7346-1.8531 2.696-2.9677 1.0309-1.1982 1.637-1.8948 1.8181-2.0899 1.4908-1.5743 2.7796-2.3615 3.8663-2.3615.6269 0 .9404.4807.9404 1.442zm-9.0073-.9613c0 .195-.0975.7035-.2926 1.5256l-.7523 2.8422c-.2926 1.0867-.4668 1.9854-.5225 2.6959-.0279.404-.0627.6548-.1045.7523-.0418.1394-.1393.209-.2926.209-.1532 0-.2508-.0627-.2926-.1881 0-.0139-.0278-.195-.0835-.5433-.1394-.8499-.418-2.2292-.836-4.138-.3204-1.4071-.4807-2.4103-.4807-3.0094 0-.7105.1812-1.2748.5434-1.6927.3762-.418.8638-.627 1.4629-.627.4737 0 .8638.209 1.1703.627.3205.404.4807.9195.4807 1.5465zm-3.2602 7.9414c0 .2787-.1463.418-.4389.418-.1253 0-.5782-.3065-1.3584-.9195-.9334-.7245-2.0202-1.658-3.2602-2.8004a185.9607 185.9607 0 0 1-2.4451-2.2362c-.5852-.599-.8777-1.1634-.8777-1.6928 0-.404.1462-.7593.4388-1.0658.3065-.3065.6827-.4598 1.1286-.4598.6966 0 1.3305.3135 1.9017.9404.2648.2787.8011 1.052 1.6092 2.3198 2.2014 3.4134 3.302 5.2456 3.302 5.4963zm3.9081 3.4065c0 .5155-.209.9265-.627 1.233-.3065.209-.6061.411-.8986.6061-.209.2508-.3135 1.1982-.3135 2.8422 0 .6688-.0209 1.1146-.0627 1.3375-.0697.3065-.216.4598-.4389.4598-.195 0-.3135-.3622-.3553-1.0867-.0975-1.853-.1672-2.9955-.209-3.4274-.4597-.3344-.8289-.7245-1.1076-1.1703-.2229-.3762-.3344-.6827-.3344-.9196 0-.5573.2021-1.0449.6061-1.4629.418-.4319.8917-.6478 1.4211-.6478.6688 0 1.2191.2159 1.651.6478.4458.4319.6688.9614.6688 1.5883zm-5.2874-2.2361c0 .2925-.1184.4388-.3553.4388-.2368 0-.7036-.1184-1.4002-.3552a545.5275 545.5275 0 0 0-2.5705-.8778C4.8764 9.488 2.9119 8.7565 2.0063 8.2968.6688 7.614 0 6.8478 0 5.9979c0-.8917.627-1.3375 1.8809-1.3375.5015 0 1.3862.3901 2.6541 1.1703 1.0031.627 2.6193 1.7416 4.8485 3.3438.1672.1115.8568.5852 2.069 1.4211.5155.3483.7732.5782.7732.6897z" fill="currentColor"/></svg>
</span>
            </div>
            <div class="c-separator__line c-separator__line--right"></div>
            <div class="c-separator__arrow c-separator__arrow--right"></div>
        </div>
		</div>
<!-- /wp:separator -->

<!-- wp:query-pagination {"paginationArrow":"arrow","align":"wide","layout":{"type":"flex","justifyContent":"space-between"}} -->
<!-- wp:query-pagination-previous {"fontSize":"small"} /-->

<!-- wp:query-pagination-numbers /-->

<!-- wp:query-pagination-next {"fontSize":"small"} /-->
<!-- /wp:query-pagination --></div>
<!-- /wp:query -->',
);
