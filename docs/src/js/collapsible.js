$('.collapse h2').on('click',function(e){
	e.preventDefault();
	$(this).parent().toggleClass('active');
});