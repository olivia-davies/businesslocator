var restaurants = [
    { 
        name: "Rokkos Teriyaki", address: "506 1st St, Cheney, WA 99004",
        lat: 47.487827, lon:-117.575117
    },
    { 
        name: "Mason Jar", address: "101 F St, Cheney, WA 99004",
        lat:  47.487082, lon: -117.576001
    },
     { 
        name: "Top Of The Line", address: "24 W 1st St, Cheney, WA 99004",
        lat:  47.483603, lon: -117.580599
    },
  
];

/* Calculate distance between two points in Earth in KM */
function getDistance(lat1,lon1,lat2,lon2) {
  var R = 3959; // Radius of the earth in mi
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in mi
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}