$("document").ready(function(){
	var clicks = 0;
	$('.verify').fadeIn();
	$('.verify').on('click', 'button', function (){
		clicks++;
		$('body').append("<div class='verify'></div>")
		var el = $('body').children().last();
		el.append("<p >Revealing...try again...</p>");
		if (clicks === 3) {
			$(".verify").fadeOut();
		$(this).closest('body').find('#container').fadeIn();
		};		
	});
});