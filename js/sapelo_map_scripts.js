
$(document).ready(function(){/* google maps -----------------------------------------------------*/
google.maps.event.addDomListener(window, 'load', initialize);


function initialize() {

  /* position Sapelo Island */
  var latlng = new google.maps.LatLng(31.449320, -81.247654);

  var mapOptions = {
    center: latlng,
    scrollWheel: false,
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.HYBRID,
    zoomControl: false,
    streetViewControl: false
  };

var contentString1 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Borrow Pit Flyover</h1>'+
      '<div id="bodyContent">'+
      '</div>'+
      '</div>';

var contentString2 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">The Bull</h1>'+
      '<div id="bodyContent">'+
      '<p><img src="bull.png"></p>'+
      '</div>'+
      '</div>';

  var infowindow1 = new google.maps.InfoWindow({
    content: contentString1
  });

    var infowindow2 = new google.maps.InfoWindow({
    content: contentString2
  });

  var marker_one = new google.maps.Marker({
    position: new google.maps.LatLng(31.4343186188,  -81.2773385178),
    title: 'Borrow Pit',
  });

 var marker_two = new google.maps.Marker({
    position: new google.maps.LatLng(31.396962, -81.272024),
    title: 'The Bull',
  });


  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  marker_one.setMap(map);
  marker_two.setMap(map);

  marker_one.addListener('click', function() {
  infowindow1.open(map, marker_one);
  });

  marker_two.addListener('click', function() {
  infowindow2.open(map, marker_two);
  });

};


/* end google maps -----------------------------------------------------*/
});