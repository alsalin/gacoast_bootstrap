
$(document).ready(function(){/* google maps -----------------------------------------------------*/
google.maps.event.addDomListener(window, 'load', initialize);

function initialize() {

  /* position St. Catherines Island */
  var latlng = new google.maps.LatLng(31.624625, -81.160325);

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
      '<h1 id="firstHeading" class="firstHeading">Black Hammock Flyover</h1>'+
      '<div id="bodyContent">'+
      '<p><a href="st_catherines.html">About St. Catherines Island</a></p>'+
      '<p><a href="https://southernspaces.org/2015/st-catherines-island-flyover" target="_new">St. Catherines Flyover</a> from <em>Southern Spaces</em></p>'+
      '</div>'+
      '</div>';

var contentString2 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Santa Catalina de Guale</h1>'+
      '<div id="bodyContent">'+
      '<p><img src="st_catherines_image1.png"></p>'+
      '</div>'+
      '</div>';

  var infowindow1 = new google.maps.InfoWindow({
    content: contentString1
  });

 var infowindow2 = new google.maps.InfoWindow({
    content: contentString2
  });

  var marker_one = new google.maps.Marker({
    position: new google.maps.LatLng(31.660839, -81.136015),
    title: 'Black Hammock',
  });

  var marker_two = new google.maps.Marker({
    position: new google.maps.LatLng(31.584423, -81.146255),
    url: '/',
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