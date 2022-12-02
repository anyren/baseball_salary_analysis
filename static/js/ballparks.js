
let myMap = L.map("map", {
    center: [44.967243, -103.771556],
    zoom: 4
  });
  
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

var greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
var orangeIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
var goldIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-gold.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
// geoJSON downloaded from https://github.com/cageyjames/GeoJSON-Ballparks
url = "../static/resources/ballparks.geojson";
d3.json(url).then(function (data) {
    createFeatures(data.features);
    
  });

function createFeatures(data){
    
    let markers = L.markerClusterGroup({maxClusterRadius:20});
    for(i=0;i<data.length;i++){
        feature = data[i];
        teams = feature.properties.Teams;
        salary = markerColor(feature);
        for(t=0;t<teams.length;t++){
            league=feature.properties.Teams[t].League
            if(league=="Major League Baseball"){
                markers.addLayer(
                    L.marker(
                        [feature.geometry.coordinates[1],feature.geometry.coordinates[0]], 
                    {
                    title: feature.properties.Ballpark,
                    icon: greenIcon,
                    }
                
                    ).bindPopup("<strong>" + feature.properties.Teams[t].Team + "</strong><br>" + 
                    "<hr />" + 
                    feature.properties.Ballpark
                    )).addTo(myMap); 
            }
        }
    }
};



function markerColor(feature){
    
    console.log(feature)
}
