function init_map() {
    var myOptions = {
        zoom: 10,
        center: new google.maps.LatLng(37.7652065, -122.24163550000003),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
    marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(37.7652065, -122.24163550000003)
    });
    infowindow = new google.maps.InfoWindow({
        content: '<strong>Bendito Cousine</strong><br>Alameda, CA<br>'
    });
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });
    infowindow.open(map, marker);
}
google.maps.event.addDomListener(window, 'load', init_map);