var WS = WS || {};

WS.ContactFirst = function() {
  this.initialize();
}

WS.ContactFirst.prototype = {
  initialize:function() {
    this.myMap();
  },

  myMap:function() {
    var mapOptions = {
      center: new google.maps.LatLng(51.5, -0.12),
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.HYBRID
    } 
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  }
}
