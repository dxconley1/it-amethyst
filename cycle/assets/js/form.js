
$(document).ready(function() {
    $('.gallery').cycle({
		fx: 'fade' // choose your transition type, ex: fade, scrollUp, shuffle, etc...
	});
	
	$('.quotes').cycle({
		 fx:      'fade', 
		 speed:    2500, 
		 timeout:  5000 
	});
	
	$('ul.ticker').cycle({
		 fx:      'scrollHorz', 
		 speed:    2500, 
		 timeout:  5000 
	});
	
});

