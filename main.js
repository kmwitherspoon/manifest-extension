

var page = {
  url: 'https://data.nasa.gov/resource/y77d-th95.json',
  init: function() {
    page.initStyling();
    page.initEvents();
  },
  initStyling: function(){
    page.getNasa();
  },

  getNasa: function(){
    $.ajax({
      url: page.url,
      method: 'GET',
      type: 'jsonp',
      success: function(nasaArr){
        console.log(nasaArr);
        nasaArr.forEach(function (el){
          if(el.geolocation) {
            var myLatLng = {lat: el.geolocation.coordinates[1], lng: el.geolocation.coordinates[0]};

            var marker = new google.maps.Marker({
              position: myLatLng,
              map: map,
              title: 'Hello World!'
            });
          }
        });
      }
    });
  }
}

$(document).ready(function () {

//   function loadMapsAPI() {
//     var script = document.createElement( 'script' );
//     script.src =
//         'https://maps.googleapis.com/maps/api/js?key=AIzaSyCD95mIeZInBR0EcMnJLVWleBNDslOuc-8&callback=initMap';
//     document.body.appendChild( script );
// }


  // var map;
  // function initMap() {
  //  map = new google.maps.Map(document.getElementById('map'), {
  //    center: {lat: -34.397, lng: 150.644},
  //    zoom: 3
  //  });
  // }

  page.getNasa();
});
