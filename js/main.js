var mobileNavButton = document.getElementById('mobile-button-icon');
var mobileNavMenu = document.getElementById('navigation-mobile');

var mobileNavActive = false;

const MOBILE_NAV_ICON_ACTIVE = 'fa-bars';
const MOBILE_NAV_ICON_INACTIVE = 'fa-times';


function switchMobileMenu() {
	mobileNavActive = !mobileNavActive;

	if (mobileNavActive) {
		mobileNavButton.classList.add(MOBILE_NAV_ICON_INACTIVE);
		mobileNavButton.classList.remove(MOBILE_NAV_ICON_ACTIVE);
	} else {
		mobileNavButton.classList.add(MOBILE_NAV_ICON_ACTIVE);
		mobileNavButton.classList.remove(MOBILE_NAV_ICON_INACTIVE);
	}

	mobileNavMenu.classList.toggle('open');
}

window.onresize = function(event) {
	if (window.innerWidth > 680) {
		mobileNavActive = false;
		mobileNavButton.classList.add(MOBILE_NAV_ICON_ACTIVE);
		mobileNavButton.classList.remove(MOBILE_NAV_ICON_INACTIVE);
		mobileNavMenu.classList.remove('open');
	}
}