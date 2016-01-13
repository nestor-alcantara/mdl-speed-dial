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
	$('.mdl-speed-dial_main-fab-icon--secondary').hide();
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
		$primaryIcon = $btn.children('.mdl-speed-dial_main-fab-icon--primary'),
		$secondaryIcon = $btn.children('.mdl-speed-dial_main-fab-icon--secondary'),
		isPrimaryIconNull = $primaryIcon.length > 0 ? false : true,
		isSecondaryIconNull = $secondaryIcon.length > 0 ? false : true,
		$primaryIcon = isPrimaryIconNull ? $btn.children('.mdl-speed-dial_main-fab-icon') : $primaryIcon,
		isPrimaryIconPlusSign = $primaryIcon.html() == 'add' ? true : false,
		rotationDegrees = 360,
		rotationSpeed = 300,
		rotate = $btn.hasClass('mdl-speed-dial__main-fab--spin');

	if (isSpeedDialOptionsHidden) {
		$speedDialOptions.fadeIn('fast');

		if (rotate) {
			if (isSecondaryIconNull && isPrimaryIconPlusSign) {
				rotationDegrees = 45;
				rotationSpeed = 100;
			}
			
			rotateElement($btn, rotationDegrees, rotationSpeed);

			if (!isPrimaryIconNull && !isSecondaryIconNull) {
				$primaryIcon.fadeOut('fast');
				$secondaryIcon.fadeIn('fast');
			}
		}
	}
}

function closeFAB(e) {
	var $btn = $(this).children('.mdl-speed-dial__main-fab'),
		$primaryIcon = $btn.children('.mdl-speed-dial_main-fab-icon--primary') || $btn.children('.mdl-speed-dial_main-fab-icon'),
		$secondaryIcon = $btn.children('.mdl-speed-dial_main-fab-icon--secondary'),
		isPrimaryIconNull = $primaryIcon.length > 0 ? false : true,
		isSecondaryIconNull = $secondaryIcon.length > 0 ? false : true,
		$primaryIcon = isPrimaryIconNull ? $btn.children('.mdl-speed-dial_main-fab-icon') : $primaryIcon,
		rotate = $btn.hasClass('mdl-speed-dial__main-fab--spin');

	$(this).children('.mdl-speed-dial__options').fadeOut('fast');

	if (rotate) {
		rotateElement($btn, 0, 100);

		if (!isPrimaryIconNull && !isSecondaryIconNull) {
			$primaryIcon.fadeIn('fast');
			$secondaryIcon.fadeOut('fast');
		}
	}
}

function showFABTooltip(e) {
	$(this).children('.mdl-speed-dial__tooltip--hidden').show();
}

function hideFABTooltip(e) {
	$(this).children('.mdl-speed-dial__tooltip--hidden').hide();
}