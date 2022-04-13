// setting up markers for significant trees from GEOM65

// setting up marker styles
// marker styles: https://github.com/pointhi/leaflet-color-markers
var yellowIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var orangeIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// setting up data input for coniferous layers 
var geojsondata70 = new L.GeoJSON.AJAX("treedatageom65.geojson", {
    filter: function(feature) { return feature.properties.species == "Eastern white pine"},
    pointToLayer: function(geoJsonPoint, latlng) {return L.marker(latlng, {icon: yellowIcon});},
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<b><center> Species: ' + feature.properties.species + '<br>' + 'Comments: ' + feature.properties.comments);}}).addTo(coniferous);

// setting up data input for deciduous layer

var geojsondata13 = new L.GeoJSON.AJAX("treedatageom65.geojson", {
    filter: function(feature) { return feature.properties.species == "Sugar maple"},
    pointToLayer: function(geoJsonPoint, latlng) {return L.marker(latlng, {icon: orangeIcon});},
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<b><center> Species: ' + feature.properties.species + '<br>' + 'Comments: ' + feature.properties.comments);}}).addTo(deciduous);

var geojsondata13 = new L.GeoJSON.AJAX("treedatageom65.geojson", {
    filter: function(feature) { return feature.properties.species == "Silver maple"},
    pointToLayer: function(geoJsonPoint, latlng) {return L.marker(latlng, {icon: orangeIcon});},
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<b><center> Species: ' + feature.properties.species + '<br>' + 'Comments: ' + feature.properties.comments);}}).addTo(deciduous);

var geojsondata13 = new L.GeoJSON.AJAX("treedatageom65.geojson", {
    filter: function(feature) { return feature.properties.species == "Black willow"},
    pointToLayer: function(geoJsonPoint, latlng) {return L.marker(latlng, {icon: orangeIcon});},
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<b><center> Species: ' + feature.properties.species + '<br>' + 'Comments: ' + feature.properties.comments);}}).addTo(deciduous);

var geojsondata13 = new L.GeoJSON.AJAX("treedatageom65.geojson", {
    filter: function(feature) { return feature.properties.species == "White oak"},
    pointToLayer: function(geoJsonPoint, latlng) {return L.marker(latlng, {icon: orangeIcon});},
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<b><center> Species: ' + feature.properties.species + '<br>' + 'Comments: ' + feature.properties.comments);}}).addTo(deciduous);
