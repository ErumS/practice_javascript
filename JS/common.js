function hoverNavActiveFunc()
{
  $(".active .nav-link").hover(function(){
    $(this).css("color", "white");
    }, function(){
    $(this).css("color", "white");
  });
}

function hoverNavFunc()
{
  $(".nav-link").hover(function(){
    $(this).css("color", "white");
    }, function(){
    $(this).css("color", "#999");
  });
}
