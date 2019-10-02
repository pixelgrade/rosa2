import $ from 'jquery';

import { insideHalf, reloadRellax, debounce } from "../utils";
import GlobalService from './globalService';
import Hero from './hero';
import Header from './header';
import PromoBar from "./promo-bar";
import Navbar from "./navbar";

export default class App {

	constructor() {
		this.initializeHero();
		this.initializeHeader();
		this.initializeNavbar();
		this.initializePromoBar();
		this.checkWindowLocationComments();

		const initializeImages = this.initializeImages.bind( this );
		initializeImages();

		GlobalService.registerObserverCallback( function( mutationList ) {
			mutationList.forEach( mutationRecord => {
				mutationRecord.addedNodes.forEach( node => {
					const nodeName = node.nodeName.toLowerCase();
					if ( 'img' === nodeName || node.childNodes.length ) {
						initializeImages( node );
					}
				} );
			} );
		} );

		GlobalService.registerRender( this.render.bind( this ) );
	}

	render() {
		const { scrollY, adminBarHeight } = GlobalService.getProps();

		const promoBar = this.promoBar;
		const header = this.header;
		const HeroCollection = this.HeroCollection;

		const overlap = HeroCollection.some( function( hero ) {
			return insideHalf( {
				x: header.box.x,
				y: header.box.y + scrollY,
				width: header.box.width,
				height: header.box.height,
			}, {
				x: hero.box.x,
				y: hero.box.y + promoBar.height,
				width: hero.box.width,
				height: hero.box.height,
			} );
		} );

		header.render( overlap );
	}

	initializeImages( container = document.body ) {
		$( container ).imagesLoaded().progress( ( instance, image ) => {
			const className = image.isLoaded ? 'is-loaded' : 'is-broken';
			$( image.img ).addClass( className );
		} );
	}

	initializeHero() {
		const heroElements = document.getElementsByClassName( 'novablocks-hero' );
		const heroElementsArray = Array.from( heroElements );

		this.HeroCollection = heroElementsArray.map( element => new Hero( element ) );
		this.firstHero = heroElementsArray[0];
	}

	initializeHeader() {
		const headerElement = $( '.site-header' ).get(0);

		this.header = new Header( headerElement );
	}

	initializeNavbar() {
		this.navbar = new Navbar();
	}

	initializePromoBar() {
		const announcementBars = document.querySelectorAll( '.promo-bar .novablocks-announcement-bar' );

		this.promoBar = new PromoBar( announcementBars, {
			onUpdate: this.onPromoBarUpdate.bind( this )
		});
	}

	onPromoBarUpdate( promoBar ) {
		const header = this.header;
		const HeroCollection = this.HeroCollection;

		header.offset = promoBar.height;
		header.update();

		HeroCollection.forEach( hero => {
			hero.offset = promoBar.height;
			hero.updateOnScroll();

			const parallaxSelector = '.novablocks-slideshow__parallax, .novablocks-hero__parallax, .novablocks-map__parallax';
			const $parallaxBlocks = $( '.has-parallax' );
			const $parallaxElements = $parallaxBlocks.find( '.novablocks-hero__parallax' );

			$parallaxBlocks.find( parallaxSelector ).each( ( i, obj ) => {
				reloadRellax( obj );
			} );
		} );
	}

	checkWindowLocationComments() {
		if ( window.location.href.indexOf( "#comment" ) === -1 ) {
			$( ".c-comments-toggle__checkbox" ).prop( "checked", false );
		}
	}
}
