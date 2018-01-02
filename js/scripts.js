jQuery(document).ready(function($) {

	jQuery('#nav-toggle').click(function(event) {
		jQuery(this).toggleClass('active');
		jQuery("#menu-navbar").toggleClass('open');
	});

	jQuery(window).scroll(function () {
		visibleElement();
		visiblelineElement();
	});

});

jQuery( window ).load( function() {
	setTimeout( function() {

   	  jQuery( '.loading' ).addClass( 'hide-up' );

    }, 600 );

	setTimeout(function(){ jQuery(".loader").remove(); }, 2500);
});


function visibleElement(){
	if (jQuery(window).width() > 767) {
	jQuery(".animate-content, .animate-left, .animate-right").each(function() {
	var windowPos = jQuery(window).scrollTop();
	var reqPos = jQuery(window).scrollTop()+(jQuery(window).height()*3/4)
	var btnTopOffset = jQuery( this ).offset().top-100;
	if (btnTopOffset < reqPos) { jQuery( this ).addClass('begin-animate'); } else { jQuery( this ).removeClass('begin-animate'); }
	});
	}
}
function visiblelineElement(){
	if (jQuery(window).width() > 1100) {
	jQuery(".animate-line").each(function() {
	var windowPos = jQuery(window).scrollTop();
	var reqPos = jQuery(window).scrollTop()+(jQuery(window).height()*2/4)
	var btnTopOffset = jQuery( this ).offset().top-100;
	if (btnTopOffset < reqPos) { jQuery( this ).addClass('animate-start'); } else { jQuery( this ).removeClass('begin-animate'); }
	});
	}
}
