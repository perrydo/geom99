// setting up base map
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

// setting up marker styles
// marker styles: https://github.com/pointhi/leaflet-color-markers
var greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
// end of setting up marker

// setting up coniferous and deciduous layers
var coniferous = L.layerGroup().addTo(map);
var deciduous = L.layerGroup().addTo(map);

// setting up data input for coniferous layers 
var geojsondata1 = new L.GeoJSON.AJAX("treedata.geojson", {
    filter: function(feature) { return feature.properties.species == "Balsam fir"},
    pointToLayer: function(geoJsonPoint, latlng) {return L.marker(latlng, {icon: greenIcon});},
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<b><center> Species: ' + feature.properties.species + '<br>' +
        '<img src= "https://kc.humanitarianresponse.info/media/original?media_file=perrydo/attachments/'+ 
        feature.properties.photo + '"' +' style="height:200px;">' + '<br>' + 'Comments: ' + feature.properties.comments);}}).addTo(coniferous);

var geojsondata2 = new L.GeoJSON.AJAX("treedata.geojson", {
    filter: function(feature) { return feature.properties.species == "Black spruce"},
    pointToLayer: function(geoJsonPoint, latlng) {return L.marker(latlng, {icon: greenIcon});},
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<b><center> Species: ' + feature.properties.species + '<br>' +
        '<img src= "https://kc.humanitarianresponse.info/media/original?media_file=perrydo/attachments/'+ 
        feature.properties.photo + '"' +' style="height:200px;">' + '<br>' + 'Comments: ' + feature.properties.comments);}}).addTo(coniferous);

var geojsondata3 = new L.GeoJSON.AJAX("treedata.geojson", {
    filter: function(feature) { return feature.properties.species == "Eastern hemlock"},
    pointToLayer: function(geoJsonPoint, latlng) {return L.marker(latlng, {icon: greenIcon});},
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<b><center> Species: ' + feature.properties.species + '<br>' +
        '<img src= "https://kc.humanitarianresponse.info/media/original?media_file=perrydo/attachments/'+ 
        feature.properties.photo + '"' +' style="height:200px;">' + '<br>' + 'Comments: ' + feature.properties.comments);}}).addTo(coniferous);
    
var geojsondata4 = new L.GeoJSON.AJAX("treedata.geojson", {
    filter: function(feature) { return feature.properties.species == "Eastern redcedar"},
    pointToLayer: function(geoJsonPoint, latlng) {return L.marker(latlng, {icon: greenIcon});},
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<b><center> Species: ' + feature.properties.species + '<br>' +
        '<img src= "https://kc.humanitarianresponse.info/media/original?media_file=perrydo/attachments/'+ 
        feature.properties.photo + '"' +' style="height:200px;">' + '<br>' + 'Comments: ' + feature.properties.comments);}}).addTo(coniferous);

var geojsondata5 = new L.GeoJSON.AJAX("treedata.geojson", {
    filter: function(feature) { return feature.properties.species == "Eastern white cedar"},
    pointToLayer: function(geoJsonPoint, latlng) {return L.marker(latlng, {icon: greenIcon});},
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<b><center> Species: ' + feature.properties.species + '<br>' +
        '<img src= "https://kc.humanitarianresponse.info/media/original?media_file=perrydo/attachments/'+ 
        feature.properties.photo + '"' +' style="height:200px;">' + '<br>' + 'Comments: ' + feature.properties.comments);}}).addTo(coniferous);

var geojsondata6 = new L.GeoJSON.AJAX("treedata.geojson", {
    filter: function(feature) { return feature.properties.species == "Eastern white pine"},
    pointToLayer: function(geoJsonPoint, latlng) {return L.marker(latlng, {icon: greenIcon});},
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<b><center> Species: ' + feature.properties.species + '<br>' +
        '<img src= "https://kc.humanitarianresponse.info/media/original?media_file=perrydo/attachments/'+ 
        feature.properties.pics + '"' +' style="height:200px;">' + '<br>' + 'Comments: ' + feature.properties.comments);}}).addTo(coniferous);

var geojsondata7 = new L.GeoJSON.AJAX("treedata.geojson", {
    filter: function(feature) { return feature.properties.species == "Jack pine"},
    pointToLayer: function(geoJsonPoint, latlng) {return L.marker(latlng, {icon: greenIcon});},
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<b><center> Species: ' + feature.properties.species + '<br>' +
        '<img src= "https://kc.humanitarianresponse.info/media/original?media_file=perrydo/attachments/'+ 
        feature.properties.photo + '"' +' style="height:200px;">' + '<br>' + 'Comments: ' + feature.properties.comments);}}).addTo(coniferous);

var geojsondata8 = new L.GeoJSON.AJAX("treedata.geojson", {
    filter: function(feature) { return feature.properties.What_is_the_species_name == "Pitch pine"},
    pointToLayer: function(geoJsonPoint, latlng) {return L.marker(latlng, {icon: greenIcon});},
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<b><center> Species: ' + feature.properties.species + '<br>' +
        '<img src= "https://kc.humanitarianresponse.info/media/original?media_file=perrydo/attachments/'+ 
        feature.properties.photo + '"' +' style="height:200px;">' + '<br>' + 'Comments: ' + feature.properties.comments);}}).addTo(coniferous);

var geojsondata9 = new L.GeoJSON.AJAX("treedata.geojson", {
    filter: function(feature) { return feature.properties.What_is_the_species_name == "Red pine"},
    pointToLayer: function(geoJsonPoint, latlng) {return L.marker(latlng, {icon: greenIcon});},
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<b><center> Species: ' + feature.properties.species + '<br>' +
        '<img src= "https://kc.humanitarianresponse.info/media/original?media_file=perrydo/attachments/'+ 
        feature.properties.photo + '"' +' style="height:200px;">' + '<br>' + 'Comments: ' + feature.properties.comments);}}).addTo(coniferous);

var geojsondata10 = new L.GeoJSON.AJAX("treedata.geojson", {
    filter: function(feature) { return feature.properties.species == "Red spruce"},
    pointToLayer: function(geoJsonPoint, latlng) {return L.marker(latlng, {icon: greenIcon});},
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<b><center> Species: ' + feature.properties.species + '<br>' +
        '<img src= "https://kc.humanitarianresponse.info/media/original?media_file=perrydo/attachments/'+ 
        feature.properties.photo + '"' +' style="height:200px;">' + '<br>' + 'Comments: ' + feature.properties.comments);}}).addTo(coniferous);

var geojsondata11 = new L.GeoJSON.AJAX("treedata.geojson", {
    filter: function(feature) { return feature.properties.species == "Tamarack"},
    pointToLayer: function(geoJsonPoint, latlng) {return L.marker(latlng, {icon: greenIcon});},
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<b><center> Species: ' + feature.properties.species + '<br>' +
        '<img src= "https://kc.humanitarianresponse.info/media/original?media_file=perrydo/attachments/'+ 
        feature.properties.photo + '"' +' style="height:200px;">' + '<br>' + 'Comments: ' + feature.properties.comments);}}).addTo(coniferous);

var geojsondata12 = new L.GeoJSON.AJAX("treedata.geojson", {
    filter: function(feature) { return feature.properties.species == "White spruce"},
    pointToLayer: function(geoJsonPoint, latlng) {return L.marker(latlng, {icon: greenIcon});},
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<b><center> Species: ' + feature.properties.species + '<br>' +
        '<img src= "https://kc.humanitarianresponse.info/media/original?media_file=perrydo/attachments/'+ 
        feature.properties.photo + '"' +' style="height:200px;">' + '<br>' + 'Comments: ' + feature.properties.comments);}}).addTo(coniferous);

// setting up data input for deciduous layer

var geojsondata13 = new L.GeoJSON.AJAX("treedata.geojson", {
    filter: function(feature) { return feature.properties.species == "Alternate-leaf dogwood"},
    pointToLayer: function(geoJsonPoint, latlng) {return L.marker(latlng);},
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<b><center> Species: ' + feature.properties.species + '<br>' +
        '<img src= "https://kc.humanitarianresponse.info/media/original?media_file=perrydo/attachments/'+ 
        feature.properties.photo + '"' +' style="height:200px;">' + '<br>' + 'Comments: ' + feature.properties.comments);}}).addTo(deciduous);










        // Filter

var basemap = {
    "Basemap": tiles
};

var choices = {
    "Coniferous": coniferous,
    "Deciduous": deciduous
};

var filter = L.control.layers(basemap, choices).addTo(map);