$(document).ready(function(){

    $(".banner-inner").owlCarousel({        
        items:1,
        nav:false,
        loop:true,
        autoplay:true,
        autoHeight:false,
        smartSpeed: 1000,
        autoplayTimeout:5000,
        onInitialized: setOwlStageHeight,
        onResized: setOwlStageHeight,
        onTranslated: setOwlStageHeight
        
    });


    if ($(window).width() < 768) {
      $(".owl-carousel").owlCarousel({        
        items:2.5,
        nav:false,
        loop:true,
        autoplay:true,
        // autoHeight:false,
        smartSpeed: 1000,
        autoplayTimeout:5000,
        margin:43,
        responsiveClass:true,
        responsive:{
          0:{
            items:1.5
          },
          576:{
            items:2.5
          }
        }

        
        
    });
   }


  });

  $(window).on("resize", function () {
		if ($(window).width() > 767) {
      $(".owl-carousel").owlCarousel({        
        items:2.5,
        nav:false,
        loop:true,
        autoplay:true,
        // autoHeight:false,
        smartSpeed: 1000,
        autoplayTimeout:5000,
     
        
    });
		}
		// if (!slider.hasClass("slick-initialized")) {
		// 	return slider.slick(settings);
		// }
	});

  function setOwlStageHeight(event) {
    var maxHeight = 0;
    $('.owl-item.active').each(function () { // LOOP THROUGH ACTIVE ITEMS
        var thisHeight = parseInt( $(this).height() );
        maxHeight=(maxHeight>=thisHeight?maxHeight:thisHeight);
    });
    $('.owl-carousel').css('height', '100%' );
    $('.owl-stage-outer').css('height', '100%' ); // CORRECT DRAG-AREA SO BUTTONS ARE CLICKABLE
}

const navbar = document.getElementById('header')

// OnScroll event handler- header
const onScroll = () => {

  
  const scroll = document.documentElement.scrollTop

  
  if (scroll > 630) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled")
  }
}


window.addEventListener('scroll', onScroll)


//tab for help section

$('.help-tab-head a').on('click', function(e) {
  var currentAttrValue = jQuery(this).attr('href');

  $('.help-tab-content ' + currentAttrValue).slideDown(400).siblings().slideUp(400);
  $(this).parent('div').addClass('selected').siblings().removeClass('selected');

  e.preventDefault();
});


//tab for help media

$('.media-links a').on('click', function(e) {
  var currentAttrValue = jQuery(this).attr('href');
  $('.media-contents ' + currentAttrValue).slideDown(400).siblings().slideUp(400);
  $(this).parent('li').addClass('active').siblings().removeClass('active');

  e.preventDefault();
});


//collapse section

$('.toggle-contents').click(function(){
  $('.toggle-texts ').slideUp(400);
  $(this).addClass('open').siblings().removeClass('open');
  $('.open .toggle-texts ').slideDown(400);
  // $(this).toggleClass('open');
})

$('.hamburger').click(function(){
  
  $('nav').addClass('open').siblings().removeClass('open');
  $('nav.open').slideDown(400);
  // $(this).toggleClass('open');
});

$('nav .close').click(function(){
  $('nav').slideUp(400);
});

//faq question 

$('.toggle-contents-faq').click(function(){
  $('.toggle-texts-faq').slideUp(400);
  $(this).addClass('open').siblings().removeClass('open');
  $('.open .toggle-texts-faq ').slideDown(400);
  // $(this).toggleClass('open');
})


// language
$('.language').click(function(){
  $('.language').toggleClass('open');
  $('.language .language-list').slideUp(400);
  $('.open .language-list').slideDown(400);  
});

$('.font-size').click(function(){
  $('.font-size').toggleClass('open');
  $('.font-size .font-list').slideUp(400);
  $('.open .font-list').slideDown(400);  
});

//drag bar

var dragBar = $('.amount-seeker'),
    dragElem = $('.drag-elem'),
    dragContainer = $('.personal-amount-bar'),
    dragLimit = dragContainer.width() - dragElem.width(),
    tn = TweenLite.to({left:10, rotation:360, paused:true, ease:Linear.easeNone, onUpdate:upFn}),
    tnProgress;

Draggable.create(dragElem, {
  type:'x',
  bounds:dragContainer,
  edgeResistance:1,
  onDrag:function() {
    tnProgress = ( Math.round( (this.x / dragLimit) * 1000) ) /1000;
    // logDiv.html(tnProgress);
    tn.progress(tnProgress);
    TweenLite.set(dragBar, {width:this.x + 10});
  },
  onPress:function() {
    tn.pause();
  }
});

function upFn() {
  var xPos = tn.progress() * dragLimit;
  
  tnProgress = ( Math.round( tn.progress() * 1000) ) /1000;
  logDiv.html(tnProgress);
  
  TweenLite.set(dragElem, {x:xPos});
  TweenLite.set(dragBar, {width:xPos+10});
}

// div1.click(function() {
//   tn.play();
// });

var cards = document.querySelectorAll('.business-form');

[...cards].forEach((card)=>{
  $('.form-btn').on( 'click', function() {
    card.classList.toggle('is-flipped');
  });
});


// $(".busines-form-box.face-back .submit").on("click", function() {
//   alert("hi")
// });


// map

	// TO MAKE THE MAP APPEAR YOU MUST
	// ADD YOUR ACCESS TOKEN FROM
	// https://account.mapbox.com
	mapboxgl.accessToken = 'pk.eyJ1IjoiYW51dml2aW4iLCJhIjoiY2xiZzF1amc5MGJzazN2bGp0aXl1OWllcSJ9.yPt63yB9Vui5y2pOAd2OBg';
const map = new mapboxgl.Map({
container: 'map', // container ID
// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
style: 'mapbox://styles/mapbox/streets-v12', // style URL
center: [-105.750595856519, 55.5859012851966], // starting position [lng, lat]
zoom: 9 // starting zoom
});