$(document).ready(function() {
	$('.mdl-speed-dial__main-fab').mouseenter(openFAB);
	$('.mdl-speed-dial').mouseleave(closeFAB);
	$('.mdl-speed-dial__option').hover(showFABTooltip, hideFABTooltip);
	$('.mdl-speed-dial__tooltip--hidden').hide();
});

function rotateElement(el, deg, duration){
	$(el).stop().animate({ rotation: deg }, {
		duration: duration,
		step: function(now, fx) {
			$(this).css({ "transform": "rotate(" + now + "deg)" });
		}
	});
}

function openFAB(e) {
	var $btn = $(this),
		$speedDialOptions = $btn.siblings('.mdl-speed-dial__options'),
		icons = $btn.children('i'),
		$firstIcon = $(icons[0]),
		$secondIcon = $(icons[1]);
		rotate = $btn.hasClass('mdl-speed-dial__main-fab--spin');

	if ($speedDialOptions.css('display') == 'none') {
		$speedDialOptions.fadeIn('fast');

		if (rotate) {
			rotateElement($btn, 360, 300);

			if (icons.length == 2) {
				if ($firstIcon.hasClass('hide')) {
					$firstIcon.fadeIn('fast').removeClass('hide');
					$secondIcon.fadeOut('fast').addClass('hide');
				} else if ($secondIcon.hasClass('hide')) {
					$firstIcon.fadeOut('fast').addClass('hide');
					$secondIcon.fadeIn('fast').removeClass('hide');
				}
			}
		}
	}
}

function closeFAB(e) {
	var $btn = $(this).children('.mdl-speed-dial__main-fab'),
		icons = $btn.children('i'),
		$firstIcon = $(icons[0]),
		$secondIcon = $(icons[1]);
		rotate = $btn.hasClass('mdl-speed-dial__main-fab--spin');

	$(this).children('.mdl-speed-dial__options').fadeOut('fast');

	if (rotate) {
		$btn.stop().animate({ rotation: 0 }, {
			duration: 100,
			step: function(now, fx) {
				$(this).css({ "transform": "rotate(" + now + "deg)" });
			}
		});

		if (icons.length == 2) {
			if ($firstIcon.hasClass('hide')) {
				$firstIcon.fadeIn('fast').removeClass('hide');
				$secondIcon.fadeOut('fast').addClass('hide');
			} else if ($secondIcon.hasClass('hide')) {
				$firstIcon.fadeOut('fast').addClass('hide');
				$secondIcon.fadeIn('fast').removeClass('hide');
			}
		}
	}
}

function showFABTooltip(e) {
	$(this).children('.mdl-speed-dial__tooltip--hidden').show();
}

function hideFABTooltip(e) {
	$(this).children('.mdl-speed-dial__tooltip--hidden').hide();
}