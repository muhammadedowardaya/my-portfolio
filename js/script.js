$(window).scroll(function(){

	let wScroll = $(this).scrollTop();

	$('header img').css({
		'transform' : 'translate(0px,' + wScroll/4.5 +'%)'
	});

	$('header h1').css({
		'transform' : 'translate(0px,' + wScroll/2 +'%)'
	});

	$('header p').css({
		'transform' : 'translate(0px,' + wScroll/1.5 +'%)'
	});

	// portfolio
	if(wScroll > $('section.portfolio').offset().top -200)  {
		$('.portfolio .row .col-md-6 a img.img-thumbnail').each(function(i){
			setTimeout(function() {
				$('.portfolio .row a img').eq(i).addClass('muncul');
			},300 * (i+1));
		});
		
    }
    console.log(wScroll);
});