$(window).scroll(function() {
	$('.nav').toggleClass('active', $(document).scrollTop() > 40);
});

$(window).scroll();
$('.nav').addClass('smooth');

