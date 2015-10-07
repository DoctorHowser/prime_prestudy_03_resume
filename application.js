$("document").ready(function(){
	$('#verify').fadeIn();
	$('#verify').on('click', function (){
		$(this).fadeOut();
		$(this).closest('body').find('#container').fadeIn();
	})
})