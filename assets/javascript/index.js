var WS = WS || {};

WS.Indexing = function() {
  this.initialize();
}

WS.Indexing.prototype = {
  initialize:function() {
    this.handleAllHideContainers();
    this.animationOnArticle();
    this.sliderOnHomePage();
    this.handleHoverOnButtons();
    this.handleHoverOnSideLinks();
    this.handleHoverOnActivePagination();
    this.handleHoverOnPassivePagination();
    this.handleHoverOnActiveNavLink();
    this.handleHoverOnPassiveNavLink();
    this.handleChangeBulbImageEvent();
    this.linkToHomePage();
    this.linkToAboutPage();
    this.linkToProductsPage();
    this.linkToContactPage();
  },

  handleAllHideContainers: function() {
    $('#wrapper-about').hide();
    $('#wrapper-products').hide();
    $('#wrapper-contact').hide();
    $('#newSec').hide();
  },

  animationOnArticle: function() {
    $(window).scroll(function() {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $('.main-page .animation-element').each(function() {
        var objectBottom = $(this).offset().top + $(this).outerHeight();
        if (objectBottom < windowBottom) {
          if ($(this).css("opacity")==0) {$(this).fadeTo(150,1);}
        } else {
          if ($(this).css("opacity")==1) {$(this).fadeTo(150,0);}
        }
      });
    }).scroll(); 
  },

  sliderOnHomePage:function(){
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

  handleHoverOnButtons:function(){
    $(".article .btn").hover(function(){
      $(this).css("color", "maroon");
      }, function(){
      $(this).css("color", "white");
    });
  },

  handleHoverOnSideLinks:function(){
    $(".sidebar .sidebar-box-help-links a").hover(function(){
      $(this).css("color", "blue");
      }, function(){
      $(this).css("color", "red");
    });
  },

  handleHoverOnActivePagination:function(){
    $(".pagination .active").hover(function(){
      $(this).css("background-color", "#df1010");
      }, function(){
      $(this).css("background-color", "#df1010");
    });
  },

  handleHoverOnPassivePagination:function(){
    $(".pagination .passive").hover(function(){
      $(this).css("background-color", "#ddd");
      }, function(){
      $(this).css("background-color", "white");
    });
  },

  handleHoverOnActiveNavLink:function()
  {
    $(".nav-bar .active").hover(function(){
      $(this).css("color", "white");
      }, function(){
      $(this).css("color", "white");
    });
  },

  handleHoverOnPassiveNavLink:function()
  {
    $(".nav-bar .passive").hover(function(){
      $(this).css("color", "white");
      }, function(){
      $(this).css("color", "#999");
    });
  },

  handleChangeBulbImageEvent:function(){
    $('.light-bulb #myImage').click(function(){
      var image = document.getElementById('myImage');
      if (image.src.match("bulb_on")) 
        image.src = "assets/images/bulb_off.jpg";
      else 
        image.src = "assets/images/bulb_on.jpeg";
    });
  },

  //Web 3.0
  linkToHomePage:function(){
    $('.nav-item .homeLink').click(function(){
      $('#wrapper-about').hide();
      $('#wrapper-products').hide();
      $('#wrapper-contact').hide();
      $('#wrapper').show();
    });
  },

  linkToAboutPage:function(){
    $('.nav-item .aboutLink').click(function(){
      $('#wrapper').hide();
      $('#wrapper-products').hide();
      $('#wrapper-contact').hide();
      $('#wrapper-about').show();
    });
  },

  linkToProductsPage:function(){
    $('.nav-item .productsLink').click(function(){
      $('#wrapper').hide();
      $('#wrapper-about').hide();
      $('#wrapper-contact').hide();
      $('#wrapper-products').show();
    });
  },

  linkToContactPage:function(){
    $('.nav-item .contactLink').click(function(){
      var contactFirst = new WS.ContactFirst();
      var contactNext = new WS.ContactNext();
      $('#wrapper').hide();
      $('#wrapper-products').hide();
      $('#wrapper-about').hide();
      $('#wrapper-contact').show();
    });
  }
}; 
