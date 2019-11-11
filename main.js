const center = { lat: -15, lng:- 47};
if (localStorage.getItem("coords") === null) {
    localStorage.setItem("coords", "[]");
}
function initMap() {
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 4, center: center });
        setMarkers(JSON.parse(localStorage.getItem('coords')));
    }
function setMarkers (vetMarkers) {
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 4, center: center });
    let marker = []
    for (const i of vetMarkers) {
        marker = new google.maps.Marker({position: {lat: i.lat, lng: i.long}, map: map });
    }
}
const insert = document.querySelector('#insert');
insert.addEventListener('click', () => {
    const input = document.querySelector('input');
    let vet = JSON.parse(localStorage.getItem("coords"));
    coords = input.value.split(',');
    jsonCoords = `{"lat": ${coords[0]}, "long": ${coords[1]}}`;
    vet.push(JSON.parse(jsonCoords));
    setMarkers(vet)
    localStorage.setItem('coords', JSON.stringify(vet));
});
clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    localStorage.setItem('coords', '[]');
    setMarkers(JSON.parse(localStorage.getItem('coords')))
})
