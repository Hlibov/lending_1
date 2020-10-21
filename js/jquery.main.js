jQuery(function() {
	initMobileNav();
});


// mobile menu init
function initMobileNav() {
	jQuery('.menu-opener').click(function(event) {
		jQuery('.menu-opener, .header-menu').toggleClass('active');
		jQuery('body').toggleClass('lock');
	});
}