var myMap = L.map("map", {
  center: [14.4974, 14.4524],
  zoom: 2
});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
  maxZoom: 12,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson";

d3.json(url, function(response) {
  response=[response];
  // console.log(response);
  // console.log(response[0].features[0].properties.mag);
  var heatArray = [];
  var quakeMag = [];

  for (var i = 0; i <= heatArray.length; i++) {
    var location = response[0].features[i];
    // console.log(location);
    if (location) {
      heatArray.push([location.geometry.coordinates[1], location.geometry.coordinates[0]]);
      quakeMag.push([location.properties.mag]);

    }
  }

//  console.log(heatArray);
//  console.log(quakeMag);
  var heat = L.heatLayer(heatArray, {
    radius: 15,
    blur: 15,
    maxOpacity: 8,
    minOpacity: 0,
    maxZoom: 4
  }).addTo(myMap);
});


  // console.log(response.features[0].geometry.coordinates[0], response.features[0].geometry.coordinates[1]);
  // console.log(response.features[0].properties.mag);
  // console.log(heatArray);

