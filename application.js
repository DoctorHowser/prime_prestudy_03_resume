$("document").ready(function(){
	$('#container').fadeOut();
	$('#verify').fadeIn();
	$('#verify').on('click', function (){
		$(this).fadeOut();
		$(this).parent().parent().find('#container').fadeIn();
	})
})