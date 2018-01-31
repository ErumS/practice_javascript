var WS = WS || {};

WS.Contact = function() {
  this.initialize();
}

WS.Contact.prototype = {
  initialize:function() {
    this.myMap();
    this.handleModalShow();
    this.handleModalHideOnCloseButtonClick();
    this.displaySubscribedInfo();
  },

  myMap:function() {
    var mapOptions = {
      center: new google.maps.LatLng(51.5, -0.12),
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.HYBRID
    } 
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  },

  handleModalShow:function(){
    $('#wrapper-contact .col-1 #clickOn').click(function(){
      $('#wrapper-contact .col-1 #modalContainer').css('display', 'block');
    });
  },

  handleModalHideOnCloseButtonClick:function()
  {
    $('#wrapper-contact .col-1 #closeButton').click(function(){
      $('#wrapper-contact .col-1 #modalContainer').css('display', 'none');
    });
  },

  displaySubscribedInfo:function()
  {
    $('#simpleModal .subscribe-button').click(function(){
      if (typeof(Storage) !== "undefined") {
        subscriberName = document.getElementById("myName").value;
        subscriberMail = document.getElementById("myMail").value;
        var row = "You have successfully subscribed with name as " + subscriberName + " and email id as " + subscriberMail;
        $('#wrapper-contact .col-1 #newSec').show();
        $('#wrapper-contact .col-1 #newSec').append(row + '<br>');
        $('#wrapper-contact .col-1 #modalContainer').css('display', 'none');
        document.getElementById("myForm").reset();
      } 
      else {
        document.getElementById("myName").innerHTML = "Sorry, your browser does not support Web Storage...";
      }
    });
  }
}
