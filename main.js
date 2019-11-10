function initMap() {
    var center = { lat: -15, lng:- 47};
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 4, center: center });
    }
    
    function setMarker (lat, long) {
        var center = { lat: -15, lng:- 47};
        var map = new google.maps.Map(document.getElementById('map'), { zoom: 4, center:center});
        let marker = []
        for (let i = 0; i < 2; i++) {
            marker[i] = new google.maps.Marker({ position: { lat: lat + i * 10, lng: long + i * 10 }, map: map });
        }
    }
    
    