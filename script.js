// Navbar
$('.nav-link').click(function(){
    $('.navbar-collapse').collapse('hide');
});
$("#nav-faq").click(function(){
    $(".collapse").collapse('hide');
});

//Owl Carousel
$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    startPosition: 0,
    // autoplay:true,	
    // autoplayTimeout:3000,
    // autoplayHoverPause:true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    freeDrag: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

lightbox.option({
    'resizeDuration': 300,
    'fitImagesInViewport':true,
    'imageFadeDuration':100
  })



// $('.navbar-nav>li> .dropdown-menu').on('hover', function(){
//     $('.dropdown-toggle').css('color','blue');
// });

// $('.navbar-nav li .dropdown-menu').hover(
//     function(){
//         $('.dropdown-toggle').css("background-color", "white");
//         $('.dropdown-toggle').css("color", "#2d3192");
//         }, function(){
//         $('.dropdown-toggle').css("background-color", "#2d3192");
//         $('.dropdown-toggle').css("color", "white");
//       }
// )

// $('.navbar-nav li').hover(
//     function(){
//         $(this).css("background-color", "white");
//         $(this).css("color", "#2d3192");
//         }, function(){
//         $(this).css("background-color", "#2d3192");
//         $(this).css("color", "white");
//       }
// )