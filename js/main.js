/**
 * ===================================================================
 * main js
 *
 * -------------------------------------------------------------------
 */

(function($) {

	"use strict";

	/*---------------------------------------------------- */
	/* Preloader
	------------------------------------------------------ */
   $(window).load(function() {

      // will first fade out the loading animation
    	$("#loader").fadeOut("slow", function(){

        // will fade out the whole DIV that covers the website.
        $("#preloader").delay(300).fadeOut("slow");

      });

  	})


  	/*---------------------------------------------------- */
  	/* FitText Settings
  	------------------------------------------------------ */
  	setTimeout(function() {

   	$('#intro h1').fitText(1, { minFontSize: '42px', maxFontSize: '84px' });

  	}, 100);


	/*---------------------------------------------------- */
	/* FitVids
	------------------------------------------------------ */
  	$(".fluid-video-wrapper").fitVids();


	/*---------------------------------------------------- */
	/* Owl Carousel
	------------------------------------------------------ */
	$("#owl-slider").owlCarousel({
        navigation: false,
        pagination: true,
        itemsCustom : [
	        [0, 1],
	        [700, 2],
	        [960, 3]
	     ],
        navigationText: false
    });


	/*----------------------------------------------------- */
	/* Alert Boxes
  	------------------------------------------------------- */
	$('.alert-box').on('click', '.close', function() {
	  $(this).parent().fadeOut(500);
	});


    /*Progress Bar Setting*/
    var proficientLine = {
        strokeWidth: 10,
        easing: 'easeInOut',
        duration: 2500,
        trailColor: '#a1a1a1',
        trailWidth: 1,
        from: {color: '#ef4f4f'},
        to: {color: '#1b9d55'},
        text: {
            style: {
                color: '#FFFFFF',
            },
            autoStyleContainer: false
        },
        svgStyle: {
            width: '85%',
            height: '100%',
            'border-radius': '10px'
        },
        step: (state, bar) => {
            bar.path.setAttribute('stroke', state.color);
            bar.setText('Proficient');
        }
    };

    var intermediateLine = {
        strokeWidth: 10,
        easing: 'easeInOut',
        duration: 3500,
        trailColor: '#a1a1a1',
        trailWidth: 1,
        from: {color: '#ef4f4f'},
        to: {color: '#298dd4'},
        text: {
            style: {
                color: '#FFFFFF',
            },
            autoStyleContainer: false
        },
        svgStyle: {
            width: '75%',
            height: '100%',
            'border-radius': '10px'
        },
        step: (state, bar) => {
            bar.path.setAttribute('stroke', state.color);
            bar.setText('Intermediate');
        }
    };

    var skilledLine = {
        strokeWidth: 10,
        easing: 'easeInOut',
        duration: 4500,
        trailColor: '#a1a1a1',
        trailWidth: 1,
        from: {color: '#ef4f4f'},
        to: {color: '#c1d429'},
        text: {
            style: {
                color: '#FFFFFF',
            },
            autoStyleContainer: false
        },
        svgStyle: {
            width: '65%',
            height: '100%',
            'border-radius': '10px'
        },
        step: (state, bar) => {
            bar.path.setAttribute('stroke', state.color);
            bar.setText('Skilled');
        }
    };

    var efficientedLine = {
        strokeWidth: 10,
        easing: 'easeInOut',
        duration: 5500,
        trailColor: '#a1a1a1',
        trailWidth: 1,
        from: {color: '#ef4f4f'},
        to: {color: '#ef4f4f'},
        text: {
            style: {
                color: '#FFFFFF',
            },
            autoStyleContainer: false
        },
        svgStyle: {
            width: '55%',
            height: '100%',
            'border-radius': '10px'
        },
        step: (state, bar) => {
            bar.path.setAttribute('stroke', state.color);
            bar.setText('Efficiented');
        }
    };
    var phpLine = new ProgressBar.Line('#phpProgress', proficientLine),
        jsLine = new ProgressBar.Line('#jsProgress', proficientLine),
        sqlLine = new ProgressBar.Line('#sqlProgress', proficientLine),
        cLine = new ProgressBar.Line('#cProgress', intermediateLine),
        dockerLine = new ProgressBar.Line('#dockerProgress', intermediateLine),
        goLine = new ProgressBar.Line('#goProgress', skilledLine),
        pythonLine = new ProgressBar.Line('#pythonProgress', efficientedLine);

    phpLine.animate(1);
    jsLine.animate(1);
    sqlLine.animate(1);
    cLine.animate(1);
    dockerLine.animate(1);
    goLine.animate(1);
    pythonLine.animate(1);

	/*----------------------------------------------------- */
	/* Stat Counter
  	------------------------------------------------------- */
   var statSection = $("#stats"),
       stats = $(".stat-count");

    statSection.waypoint({

   	handler: function(direction) {
      	if (direction === "down") {
			   stats.each(function () {
				   var $this = $(this);

				   $({ Counter: 0 }).animate({ Counter: $this.text() }, {
				   	duration: 4000,
				   	easing: 'swing',
				   	step: function (curValue) {
				      	$this.text(Math.ceil(curValue));
				    	}
				  	});
				});
       	}

       	// trigger once only
       	this.destroy();
		},

		offset: "90%"

	});


	/*---------------------------------------------------- */
	/*	Masonry
	------------------------------------------------------ */
	var containerProjects = $('#folio-wrapper');

	containerProjects.imagesLoaded( function() {

		containerProjects.masonry( {
		  	itemSelector: '.folio-item',
		  	resize: true
		});

	});


	/*----------------------------------------------------*/
	/*	Modal Popup
	------------------------------------------------------*/
   $('.item-wrap a').magnificPopup({

      type:'inline',
      fixedContentPos: false,
      removalDelay: 300,
      showCloseBtn: false,
      mainClass: 'mfp-fade'

   });

   $(document).on('click', '.popup-modal-dismiss', function (e) {
   	e.preventDefault();
   	$.magnificPopup.close();
   });


	/*-----------------------------------------------------*/
  	/* Navigation Menu
   ------------------------------------------------------ */
   var toggleButton = $('.menu-toggle'),
       nav = $('.main-navigation');

   // toggle button
   toggleButton.on('click', function(e) {

		e.preventDefault();
		toggleButton.toggleClass('is-clicked');
		nav.slideToggle();

	});

   // nav items
  	nav.find('li a').on("click", function() {

   	// update the toggle button
   	toggleButton.toggleClass('is-clicked');
   	// fadeout the navigation panel
   	nav.fadeOut();

  	});


   /*---------------------------------------------------- */
  	/* Highlight the current section in the navigation bar
  	------------------------------------------------------ */
	var sections = $("section"),
	navigation_links = $("#main-nav-wrap li a");

	sections.waypoint( {

       handler: function(direction) {

		   var active_section;

			active_section = $('section#' + this.element.id);

			if (direction === "up") active_section = active_section.prev();

			var active_link = $('#main-nav-wrap a[href="#' + active_section.attr("id") + '"]');

         navigation_links.parent().removeClass("current");
			active_link.parent().addClass("current");

		},

		offset: '25%'
	});


	/*---------------------------------------------------- */
  	/* Smooth Scrolling
  	------------------------------------------------------ */
  	$('.smoothscroll').on('click', function (e) {

	 	e.preventDefault();

   	var target = this.hash,
    	$target = $(target);

    	$('html, body').stop().animate({
       	'scrollTop': $target.offset().top
      }, 800, 'swing', function () {
      	window.location.hash = target;
      });

  	});


   /*---------------------------------------------------- */
	/*  Placeholder Plugin Settings
	------------------------------------------------------ */
	$('input, textarea, select').placeholder()

 	/*----------------------------------------------------- */
  	/* Back to top
   ------------------------------------------------------- */
	var pxShow = 300; // height on which the button will show
	var fadeInTime = 400; // how slow/fast you want the button to show
	var fadeOutTime = 400; // how slow/fast you want the button to hide
	var scrollSpeed = 300; // how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'

   // Show or hide the sticky footer button
	jQuery(window).scroll(function() {

		if (!( $("#header-search").hasClass('is-visible'))) {

			if (jQuery(window).scrollTop() >= pxShow) {
				jQuery("#go-top").fadeIn(fadeInTime);
			} else {
				jQuery("#go-top").fadeOut(fadeOutTime);
			}

		}

	});

})(jQuery);