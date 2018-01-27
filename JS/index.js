$(function() {
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
