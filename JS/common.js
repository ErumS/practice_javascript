var WS = WS || {};

WS.Common = function() {
  this.initialize();
}

WS.Common.prototype = {
  initialize:function() {
    this.hoverNavActiveFunc();
    this.hoverNavFunc();
  },

  hoverNavActiveFunc:function()
  {
    $(".nav-bar .active").hover(function(){
      $(this).css("color", "white");
      }, function(){
      $(this).css("color", "white");
    });
  },

  hoverNavFunc:function()
  {
    $(".nav-bar .passive").hover(function(){
      $(this).css("color", "white");
      }, function(){
      $(this).css("color", "#999");
    });
  }
}
