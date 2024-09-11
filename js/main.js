// hero-slider //

$('.hero').owlCarousel({
    loop:true,
    margin:10,
    rtl:true,
    animateOut: 'slideOutUp',
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$(window).on('load', function(){
  $(document).on("click", ".click-to-expand", function() {
    var imageSrc = $(this).parents(".image-grid").find("img").attr("src");
    $(".js-modal-image").attr("src", imageSrc);
  });
})