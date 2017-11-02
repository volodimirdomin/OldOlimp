;(function ($) {
	$(document).ready(function () {
		var offset = 700,
		
		offset_opacity = 1200,
		scroll_top_duration = 700,
		$back_to_top = $('.cd-top');

		$(window).scroll(function (e) {
			if ($(this).scrollTop() > offset) {
				$back_to_top.fadeIn();
			} else if ($(this).scrollTop() < offset) {
				$back_to_top.fadeOut();
			}
		});

		$back_to_top.on('click', function(event){
			event.preventDefault();

			$('body, html').animate(
			{
				scrollTop: 0,
			}, scroll_top_duration);
		});		
	});

})(jQuery);