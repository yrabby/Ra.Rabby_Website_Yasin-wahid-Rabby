$(document).ready(function() {

    $('#slides').superslides({
    	animation:'fade',
    	play: 5000
    });


    var typed = new Typed(".typed", {
    	strings: ["GEOMORPHOLOGY", "SPATIAL DATA SCIENCE", "STATISTICS", "MACINE LEARNING", "RISK AND VULNERABILITY ANALYSIS"],
    	typeSpeed: 100,
    	loop: true,
    	startDelay: 1000,
    	showCursor: false
    });

    $('.owl-carousel').owlCarousel({
		loop:true,
		items: 5,
		responsive:{
		    0:{
		        items:1
		    },
		    480:{
		        items:2
		    },
		    768:{
		        items:3
		    },
		    938:{
		        items:4
	        },
	        1226:{
		        items:5
	        },
	        1514:{
		        items:6
	        },
	    }
    });


    


    var skillsTopOffset = $(".skillsSection").offset().top;

    $(window).scroll(function() {

    	if(window.pageYOffset > skillsTopOffset - $(window).height() +200) {

			$('.chart').easyPieChart({
			        easing: 'easeInOut',
			        barColor: 'red',
			        trackColor: false,
			        scaleColor: false,
			        lineWidth: 4,
			        size: 152,
			        onStep: function(from, to, percent) {
			        	$(this.el).find('.percent').text(Math.round(percent));
			        }
                });



    	}

    	
    

    });

    $(".counter").each(function() {
    	var element = $(this);
    	var endVal = parseInt(element.text());

    	element.countup(endVal)
    });
    {
    	const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window). on("scroll", )
    }




    



});

