$(document).ready(function() {
	$('.mdl-speed-dial__main-fab').hover(openFAB);
	$('.mdl-speed-dial').mouseleave(closeFAB);
	$('.mdl-speed-dial__option').hover(showFABTooltip, hideFABTooltip);
	$('.mdl-speed-dial__tooltip--hidden').hide();
});

function openFAB(e) {
	$(this).siblings('.mdl-speed-dial__options').fadeIn('fast');
}

function closeFAB(e) {
	$(this).children('.mdl-speed-dial__options').fadeOut('fast');
}

function showFABTooltip(e) {
	$(this).children('.mdl-speed-dial__tooltip--hidden').show();
}

function hideFABTooltip(e) {
	$(this).children('.mdl-speed-dial__tooltip--hidden').hide();
}