$(document).ready(function() {
	$('.mdl-speed-dial__main-fab').hover(openFAB);
	$('.mdl-speed-dial').mouseleave(closeFAB);
	$('.mdl-speed-dial__option').hover(showFABTooltip, hideFABTooltip);
	$('.mdl-speed-dial__tooltip').hide();
});

function openFAB(e) {
	$(this).siblings('.mdl-speed-dial__options').show('normal');
}

function closeFAB(e) {
	$(this).children('.mdl-speed-dial__options').hide('normal');
}

function showFABTooltip(e) {
	$(this).children('.mdl-speed-dial__tooltip').show();
}

function hideFABTooltip(e) {
	$(this).children('.mdl-speed-dial__tooltip').hide();
}