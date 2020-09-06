$(function(){
   
    
    'use strict';
    
//    Filter Munu navigation
        $('.filter_menu .navigation li').on("click", function(){
			$('.filter_menu .navigation li').removeClass('active');
			$(this).addClass('active');
		});
    
    

    
    // Magnify activation
    $('.property-magnify-gallery').each(function() {
        $(this).magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery:{enabled:true},
//            removalDelay: 500,
//            mainClass: 'mfp-fade'
        });
    });
    
                 // init Masonry
//                    var $grid = $('.cars').masonry({
//                      itemSelector: '.filtr-item',
//                      percentPosition: true,
//                      columnWidth: '.property-box'
//                    });

                    // layout Masonry after each image loads
//                    $grid.imagesLoaded().progress( function() {
//                      $grid.masonry();
//                    });  

//    Filter Activation
    var filterizd = $('.filter-portfolio').filterizr({
        
    })
    
    
    // Counter Activation
    function isCounterElementVisible($elementToBeChecked)
    {
        var TopView = $(window).scrollTop();
        var BotView = TopView + $(window).height();
        var TopElement = $elementToBeChecked.offset().top;
        var BotElement = TopElement + $elementToBeChecked.height();
        return ((BotElement <= BotView) && (TopElement >= TopView));
    }
    $(window).on('scroll', function () {
        $( ".counter" ).each(function() {
            var isOnView = isCounterElementVisible($(this));
            if(isOnView && !$(this).hasClass('Starting')){
                $(this).addClass('Starting');
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 3000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            }
        });
    });
    
    
    
    
    
    
//    Portfolio page 1st
     var selectedClass = "";
  $(".filter").click(function () {
    selectedClass = $(this).attr("data-rel");
    $("#gallery").fadeTo(100, 0.1);
    $("#gallery div").not("." + selectedClass).fadeOut().removeClass('animation');
    setTimeout(function () {
      $("." + selectedClass).fadeIn().addClass('animation');
      $("#gallery").fadeTo(300, 1);
    }, 300);
      
      
      
      
  });
    
    
   
    
    
    
    

    
});