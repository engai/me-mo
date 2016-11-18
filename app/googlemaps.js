var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 32.880277, lng: -117.233928},
    zoom: 15
  });
}
