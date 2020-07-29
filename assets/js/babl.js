$('.burger').click(function(){
	$(this).toggleClass('slide-out');
	$('.nav-side').toggleClass('slide-out');
	$('.container[role="main"]').toggleClass('slide-out-half');
});