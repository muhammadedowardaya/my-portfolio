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
});

$(document).ready(function(){

	$('.page-scroll').on('click',function(e){

		const tujuan = $(this).attr('href');
		const elemenTjuan = $(tujuan);

		$('html').animate({
			scrollTop: elemenTjuan.offset().top -70
		},1000,"easeInExpo");


	});




});
const navbar = document.querySelector('.container .collapse');
const tombol = document.querySelector('.navbar .container button');

tombol.addEventListener('click', function () {

	navbar.classList.toggle('show');
	
});