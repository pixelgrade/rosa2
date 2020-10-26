import $ from 'jquery';

const LIGHT_THEME = 'user-light-mode',
	  DARK_THEME = 'user-dark-mode';

let theme;

export default class LightsSwitcher {

	constructor( element ) {
		this.$element = $( element );
		this.$lightsSwitcher = document.querySelectorAll('.is-lights-button a');

		this.checkLocalStorage();

		this.$lightsSwitcher.forEach(switcher => {
			switcher.addEventListener('click', this.switchTheme );
		});
	}

	checkLocalStorage() {

		if (localStorage) {
			theme = localStorage.getItem('theme')
		}

		if( $('body').is( '.is-dark-mode' ) && theme === null ) {

			localStorage.setItem('theme', DARK_THEME);
			theme = localStorage.getItem('theme');
			html.classList.add(DARK_THEME);

			return;
		}

		if (theme === LIGHT_THEME || theme === DARK_THEME) {
			html.classList.add(theme)
		} else {
			html.classList.add(LIGHT_THEME)
		}
	}

	switchTheme(event) {

		event.preventDefault();

		if (theme === DARK_THEME) {
			html.classList.replace(DARK_THEME, LIGHT_THEME);
			localStorage.setItem('theme', LIGHT_THEME);
			theme = LIGHT_THEME;
		} else {
			html.classList.replace(LIGHT_THEME, DARK_THEME);
			localStorage.setItem('theme', DARK_THEME);
			theme = DARK_THEME;
		}
	}
}
