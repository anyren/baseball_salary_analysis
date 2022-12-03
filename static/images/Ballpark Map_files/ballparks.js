
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
var blueIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
// geoJSON downloaded from https://github.com/cageyjames/GeoJSON-Ballparks
url = "../static/resources/ballparks_salary.geojson";
d3.json(url).then(function (data) {
    createFeatures(data.features);
    
  });

function createFeatures(data){
    
    let markers = L.markerClusterGroup({maxClusterRadius:20});
    for(i=0;i<data.length;i++){
        feature = data[i];
        teams = feature.properties.Teams;
        for(t=0;t<teams.length;t++){
            color = markerColor(feature.properties.Teams[t].AVGSalaryGroup);
            league=feature.properties.Teams[t].League
            if(league=="Major League Baseball"){
                L.circle(
                    [feature.geometry.coordinates[1],feature.geometry.coordinates[0]], 
                {
                title: feature.properties.Ballpark,
                color: color,
                fillColor: color,
                fillOpacity: 0.75,
                radius: markerRadius(feature.properties.Teams[t].AVGSalary),
                }
            
                ).bindPopup("<strong>" + feature.properties.Teams[t].Team + "</strong><br>" + 
                "<hr />" + 
                feature.properties.Ballpark + 
                "<hr />" + "$" + feature.properties.Teams[t].AVGSalary
                ).addTo(myMap); 
                
            }
        }
    }
};

function markerColor(sg){
    console.log(sg);
    let colorList=[
        '#fcef56',
        '#edaa53',
        '#d6c84b',
        '#32a852',

    ];
    if (sg>6000000){
        color=colorList[0]
    }
    else if(sg>=4000000){
        color=colorList[1]
    }
    
    else if(sg>=2000000){
        color=colorList[2]
    }
    else {
        color=colorList[3]
    
    }
    // color='#32a852';
    return color;
}
function markerRadius(sg){
    if (sg >0){
        // rad = Math.sqrt(sg)*15
        rad = sg/100
    }
    return rad;
    
}
// legend
var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {
    // colors
    var div = L.DomUtil.create('div', 'info legend'),
        dollars = ['<$2M ', '$2-4M', '$4-6M', '>=$6M'],
        labels = [];
        colorList = [
            '#fcef56',
            '#edaa53',
            '#d6c84b',
            '#32a852',
        ];

    // legend
    div.innerHTML +=
            '<h4>Average Player Salary</h4>' ;
    for (var i = 0; i < colorList.length; i++) {
        div.innerHTML +=
            '<i style="background:' + colorList[i] + '"></i> ' +
             dollars[i] + '<br>' ;
        
        }
    div.innerHTML += '<br>'
return div;
};

legend.addTo(myMap);