/**
* @author: Nestor Alcantara
* @copyright: Copyright (c) 2016 Nestor Alcantara. All rights reserved.
* @license: Licensed under the MIT license. See http://www.opensource.org/licenses/mit-license
* @website: http://nesgael.github.io/mdl-speed-dial/
*/

$(document).ready(function() {
	$('.mdl-speed-dial__main-fab').mouseenter(openFAB);
	$('.mdl-speed-dial').mouseleave(closeFAB);
	$('.mdl-speed-dial__option').hover(showFABTooltip, hideFABTooltip);
	$('.mdl-speed-dial__tooltip--hidden').hide();
});

function rotateElement(el, deg, duration) {
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
		isSpeedDialOptionsHidden = $speedDialOptions.css('display') == 'none' ? true : false,
		icons = $btn.children('i'),
		$firstIcon = $(icons[0]),
		$secondIcon = $(icons[1]),
		isFirstIconPlusSign = $firstIcon.html() == 'add' ? true : false,
		hiddenClassName = 'mdl-speed-dial_main-fab-icon--hidden',
		rotate = $btn.hasClass('mdl-speed-dial__main-fab--spin');

	if (isSpeedDialOptionsHidden) {
		$speedDialOptions.fadeIn('fast');

		if (rotate) {
			if (icons.length == 1 && isFirstIconPlusSign) {
				console.log('Rotate 45 deg');
				rotateElement($btn, 45, 100);
			} else {
				rotateElement($btn, 360, 300);
			}
			
			if (icons.length == 2) {
				if ($firstIcon.hasClass(hiddenClassName)) {
					$firstIcon.fadeIn('fast').removeClass(hiddenClassName);
					$secondIcon.fadeOut('fast').addClass(hiddenClassName);
				} else if ($secondIcon.hasClass(hiddenClassName)) {
					$firstIcon.fadeOut('fast').addClass(hiddenClassName);
					$secondIcon.fadeIn('fast').removeClass(hiddenClassName);
				}
			}
		}
	}
}

function closeFAB(e) {
	var $btn = $(this).children('.mdl-speed-dial__main-fab'),
		icons = $btn.children('i'),
		$firstIcon = $(icons[0]),
		$secondIcon = $(icons[1]),
		hiddenClassName = 'mdl-speed-dial_main-fab-icon--hidden',
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
			if ($firstIcon.hasClass(hiddenClassName)) {
				$firstIcon.fadeIn('fast').removeClass(hiddenClassName);
				$secondIcon.fadeOut('fast').addClass(hiddenClassName);
			} else if ($secondIcon.hasClass(hiddenClassName)) {
				$firstIcon.fadeOut('fast').addClass(hiddenClassName);
				$secondIcon.fadeIn('fast').removeClass(hiddenClassName);
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