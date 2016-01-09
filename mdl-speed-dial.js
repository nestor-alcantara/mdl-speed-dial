$(document).ready(function() {
	$('.mdl-speed-dial__main-fab').hover(openFAB);
	$('.mdl-speed-dial').mouseleave(closeFAB);
	$('.mdl-speed-dial__option').hover(showFABTooltip, hideFABTooltip);
	$('.mdl-speed-dial__tooltip--hidden').hide();
});

function openFAB(e) {
	var $btn = $(this),
		rotate = $btn.hasClass('mdl-speed-dial__main-fab--spin');

	$btn.siblings('.mdl-speed-dial__options').fadeIn('fast');

	if (rotate) {
		$btn.stop().animate({ rotation: 45 }, {
			duration: 100,
			step: function(now, fx) {
				$(this).css({ "transform": "rotate(" + now + "deg)" });
			}
		});
	}
}

function closeFAB(e) {
	var $btn = $(this).children('.mdl-speed-dial__main-fab'),
		rotate = $btn.hasClass('mdl-speed-dial__main-fab--spin');

	$(this).children('.mdl-speed-dial__options').fadeOut('fast');

	if (rotate) {
		$btn.stop().animate({ rotation: 0 }, {
			duration: 100,
			step: function(now, fx) {
				$(this).css({ "transform": "rotate(" + now + "deg)" });
			}
		});
	}
}

function showFABTooltip(e) {
	$(this).children('.mdl-speed-dial__tooltip--hidden').show();
}

function hideFABTooltip(e) {
	$(this).children('.mdl-speed-dial__tooltip--hidden').hide();
}