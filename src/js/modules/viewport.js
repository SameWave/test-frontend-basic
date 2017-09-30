//detect viewport
$(function isMobile() {
	var mobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
			if (mobile) {
					$('body').addClass('mobile');
					var userAgent = navigator.userAgent.toLowerCase();
					if ((userAgent.search("android") > -1) && (userAgent.search("mobile") > -1))
							$('body').addClass('android');
						 	else if ((userAgent.search("android") > -1) && !(userAgent.search("mobile") > -1))
									$('body').addClass('android_tablet');
						 	else if ((userAgent.search("blackberry") > -1))
								 	$('body').addClass('blackberry');
						 	else if ((userAgent.search("iphone") > -1))
								 	$('body').addClass('iphone');
						 	else if ((userAgent.search("ipod") > -1))
								 	$('body').addClass('ipod');
						 	else if ((userAgent.search("ipad") > -1))
								 	$('body').addClass('ipad');
						 	else
				 					$('body').addClass('unknown');
		} else $('body').addClass('desktop');
});

function ApplyOrientationStyle() {
	iH = window.innerHeight;
	vw = $(window).width();
	vh = $(window).height();
	if ((vw>vh) && ($('body').hasClass('mobile'))) {
		$('body').removeClass('portrait');
		$('body').addClass('landscape');
	}
	else {
		$('body').removeClass('landscape');
		$('body').addClass('portrait');
	}
	//fix 100% height for scaled page
	$("main").css("min-height", iH*2);
}

ApplyOrientationStyle();

window.addEventListener("orientationchange", function() {
	ApplyOrientationStyle();
}, false);

