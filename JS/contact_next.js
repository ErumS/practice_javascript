var WS = WS || {};

WS.ContactNext = function() {
  this.initialize();
}

WS.ContactNext.prototype = {
  initialize:function() {
    this.modalShow();
    this.modalHide();
    this.displayInfo();
  },

  modalShow:function(){
    $('#wrapper-contact .col-1 #clickOn').click(function(){
      $('#wrapper-contact .col-1 #modalContainer').css('display', 'block');
    });
  },

  modalHide:function()
  {
    $('#wrapper-contact .col-1 #closeButton').click(function(){
      $('#wrapper-contact .col-1 #modalContainer').css('display', 'none');
    });
  },

  displayInfo:function()
  {
    $('#simpleModal .subscribe-button').click(function(){
      if (typeof(Storage) !== "undefined") 
      {
        subscriberName = document.getElementById("myName").value;
        subscriberMail = document.getElementById("myMail").value;
        var row = "You have successfully subscribed with name as " + subscriberName + " and email id as " + subscriberMail;
        $('#wrapper-contact .col-1 #newSec').show();
        $('#wrapper-contact .col-1 #newSec').append(row + '<br>');
        $('#wrapper-contact .col-1 #modalContainer').css('display', 'none');
        document.getElementById("myForm").reset();
      } 
      else 
      {
        document.getElementById("myName").innerHTML = "Sorry, your browser does not support Web Storage...";
      }
    });
  }
}
