$(function() {
  $('#wrapper-about').hide();
  $('#wrapper-products').hide();
  $('#wrapper-contact').hide();
  $('#newSec').hide();

  delay:17
  duration: 3000
  var ul = $(".slider ul");
  var slide_count = ul.children().length;
  var slide_width_pc = 100.0 / slide_count;
  var slide_index = 0;
  
  ul.find("li").each(function(indx) {
    var left_percent = (slide_width_pc * indx) + "%";
    $(this).css({"left":left_percent});
    $(this).css({width:(100 / slide_count) + "%"});
  });

  $(".slider .prev").click(function() {
    console.log("prev button clicked");
    slide(slide_index - 1);
  });

  $(".slider .next").click(function() {
    console.log("next button clicked");
    slide(slide_index + 1);
  });

  function slide(new_slide_index) {
    if(new_slide_index < 0)
      new_slide_index = slide_count-1;
    if(new_slide_index >= slide_count) 
      new_slide_index = 0; 
    var margin_left_pc = (new_slide_index * (-100)) + "%";
    ul.animate({"margin-left": margin_left_pc}, 400, function() {
      slide_index = new_slide_index;
    });
  }
});

function hoverFunc()
{
  $(".btn").hover(function(){
    $(this).css("color", "maroon");
    }, function(){
    $(this).css("color", "white");
  });
}

function hoverLinkFunc()
{
  $(".sidebar-box-help-links a").hover(function(){
    $(this).css("color", "blue");
    }, function(){
    $(this).css("color", "red");
  });
}

function hoverPageActiveFunc()
{
  $(".pagination .active").hover(function(){
    $(this).css("background-color", "#df1010");
    }, function(){
    $(this).css("background-color", "#df1010");
  });
}

function hoverPageFunc()
{
  $(".pagination a").hover(function(){
    $(this).css("background-color", "#ddd");
    }, function(){
    $(this).css("background-color", "white");
  });
}

function changeImage() {
  var image = document.getElementById('myImage');
  if (image.src.match("bulb_on")) 
    image.src = "Pictures/bulb_off.jpg";
  else 
    image.src = "Pictures/bulb_on.jpeg";
}

//Web 3.0
function index_home(){
  $('#wrapper-about').hide();
  $('#wrapper-products').hide();
  $('#wrapper-contact').hide();
  $('#wrapper').show();
}

function index_about(){
  $('#wrapper').hide();
  $('#wrapper-products').hide();
  $('#wrapper-contact').hide();
  $('#wrapper-about').show();
}

function index_products(){
  $('#wrapper').hide();
  $('#wrapper-about').hide();
  $('#wrapper-contact').hide();
  $('#wrapper-products').show();
}

function index_contact(){
  $('#wrapper').hide();
  $('#wrapper-products').hide();
  $('#wrapper-about').hide();
  $('#wrapper-contact').show();
}

// $(window).on(“load”,function() {
//   $(window).scroll(function() {
//     var windowBottom = $(this).scrollTop() + $(this).innerHeight();
//     $(“.fade-animation”).each(function() {

//       var objectBottom = $(this).offset().top + $(this).outerHeight();

//       if (objectBottom < windowBottom) {
//         if ($(this).css(“opacity”)==0) {$(this).fadeTo(500,1);}
//       } else {
//         if ($(this).css(“opacity”)==1) {$(this).fadeTo(500,0);}
//       }
//     });
//   }).scroll();
// });
