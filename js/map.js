var map = L.map('map', {doubleClickZoom: false}).locate({setView: true, maxZoom: 11});

var tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicGVycnlkbyIsImEiOiJjbDE0bTJjaWkwd2hoM2twMzJueWc2Ymt2In0.9woaI4P-Kk6VLGUqCEyEXQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10', 
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(map);
// you can change map style using id https://docs.mapbox.com/api/maps/styles/

// end of setting up base map

// marker styles: https://github.com/pointhi/leaflet-color-markers

var greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});



var coniferous = L.layerGroup().addTo(map);
var deciduous = L.layerGroup().addTo(map);

var geojsondata1 = new L.GeoJSON.AJAX("treedata2.geojson", {
    filter: function(feature) { return feature.properties.What_is_the_species_name == "Pine"},
    pointToLayer: function(geoJsonPoint, latlng) {return L.marker(latlng, {icon: greenIcon});}}).addTo(coniferous);

var geojsondata2 = new L.GeoJSON.AJAX("treedata2.geojson", {
    filter: function(feature) { return feature.properties.What_is_the_species_name == "Cedar"},
    pointToLayer: function(geoJsonPoint, latlng) {return L.marker(latlng, {icon: greenIcon});},
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<b><center> Species: ' + feature.properties.What_is_the_species_name + '<br>' +
        '<img src= "https://kc.humanitarianresponse.info/media/original?media_file=perrydo/attachments/'+ 
        feature.properties.Pics + '"' +' style="height:200px;">' );}}).addTo(coniferous);

var geojsondata3 = new L.GeoJSON.AJAX("treedata2.geojson", {
    filter: function(feature) { return feature.properties.What_is_the_species_name == "Maple"},
    pointToLayer: function(geoJsonPoint, latlng) {return L.marker(latlng);}}).addTo(deciduous);
    
var geojsondata4 = new L.GeoJSON.AJAX("treedata2.geojson", {
    filter: function(feature) { return feature.properties.What_is_the_species_name == "Oak"},
    pointToLayer: function(geoJsonPoint, latlng) {return L.marker(latlng);},
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<b><center> Species: ' + feature.properties.What_is_the_species_name + '<br>' +
        '<img src= "https://kc.humanitarianresponse.info/media/original?media_file=perrydo/attachments/'+ 
        feature.properties.Pics + '"' +' style="height:200px;">' + '<br>');}}).addTo(deciduous);

// Filter

var basemap = {
    "Basemap": tiles
};

var choices = {
    "Coniferous": coniferous,
    "Deciduous": deciduous
};

var filter = L.control.layers(basemap, choices).addTo(map);