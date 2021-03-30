$( document ).ready(function() {
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:16,
		nav:true,
		navClass: ['slider-arrow-left', 'slider-arrow-right'],
		responsive:{
			0:{
				items:1
			},
			700:{
				items:2
			},
			
			900:{
				items:3
			},

			1200:{
				items:4
			}
		}
	})
});