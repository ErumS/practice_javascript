var WS = WS || {};

WS.Indexing = function() {
  this.initialize();
}

WS.Indexing.prototype = {
  initialize:function() {
    this.sliding();
    this.hoverFunc();
    this.hoverLinkFunc();
    this.hoverPageActiveFunc();
    this.hoverPageFunc();
    this.changeImage();
    this.index_home();
    this.index_about();
    this.index_products();
    this.index_contact();
    $('#wrapper-about').hide();
    $('#wrapper-products').hide();
    $('#wrapper-contact').hide();
    $('#newSec').hide();
  },

  sliding:function(){
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
  },

    hoverFunc:function()
    {
      $(".article .btn").hover(function(){
        $(this).css("color", "maroon");
        }, function(){
        $(this).css("color", "white");
      });
    },

    hoverLinkFunc:function()
    {
      $(".sidebar .sidebar-box-help-links a").hover(function(){
        $(this).css("color", "blue");
        }, function(){
        $(this).css("color", "red");
      });
    },

    hoverPageActiveFunc:function()
    {
      $(".pagination .active").hover(function(){
        $(this).css("background-color", "#df1010");
        }, function(){
        $(this).css("background-color", "#df1010");
      });
    },

    hoverPageFunc:function()
    {
      $(".pagination .passive").hover(function(){
        $(this).css("background-color", "#ddd");
        }, function(){
        $(this).css("background-color", "white");
      });
    },

  changeImage:function(){
    $('.light-bulb #myImage').click(function(){
      var image = document.getElementById('myImage');
      if (image.src.match("bulb_on")) 
        image.src = "Pictures/bulb_off.jpg";
      else 
        image.src = "Pictures/bulb_on.jpeg";
    });
  },

  //Web 3.0
  index_home:function(){
    $('.nav-item .homeLink').click(function(){
      $('#wrapper-about').hide();
      $('#wrapper-products').hide();
      $('#wrapper-contact').hide();
      $('#wrapper').show();
    });
  },

  index_about:function(){
    $('.nav-item .aboutLink').click(function(){
      $('#wrapper').hide();
      $('#wrapper-products').hide();
      $('#wrapper-contact').hide();
      $('#wrapper-about').show();
    });
  },

  index_products:function(){
    $('.nav-item .productsLink').click(function(){
      $('#wrapper').hide();
      $('#wrapper-about').hide();
      $('#wrapper-contact').hide();
      $('#wrapper-products').show();
    });
  },

  index_contact:function(){
    $('.nav-item .contactLink').click(function(){
      $('#wrapper').hide();
      $('#wrapper-products').hide();
      $('#wrapper-about').hide();
      $('#wrapper-contact').show();
    });
  }
}; 
