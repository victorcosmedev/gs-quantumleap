// Initialize and add the map
const citymap = {
  Tambaqui: {
    center: { lat: -3.26566986590792, lng: -64.7198013441622 },
    color: "#FF0000", 
    radius: 5000,
    zoom: 12      // Define zoom level for this location
  },
  Pirarucu: {
    center: { lat: -2.917810491730294, lng: -64.84587021833737 },
    color: "#FF0000",  
    radius: 5000,
    zoom: 12      // Define zoom level for this location
  },   
  Tucunare: {
    center: { lat: -2.4071978828831013, lng: -54.87435740815989 },
    color: "#FF0000",  
    radius: 5000,
    zoom: 12      // Define zoom level for this location
  },
  Jaraqui: {
    center: { lat: -3.154230981337441, lng: -60.06882494126729 },
    color: "#FF0000",  
    radius: 2000,
    zoom: 13      // Define zoom level for this location
  },
  Anchova: {
    center: { lat: -23.79352708707693, lng: -45.396002288178 },
    color: "#FF0000",  
    radius: 2000,
    zoom: 12      // Define zoom level for this location
  },
  Robalo: {
    center: { lat: -23.758111309161922, lng: -45.385429025091234 },
    color: "#FF0000",  
    radius: 2000,
    zoom: 12      // Define zoom level for this location
  },
  Badejo : {
    center: { lat: -23.86552948225707, lng: -45.479484976701016 },
    color: "#FF0000",  
    radius: 2000,
    zoom: 12      // Define zoom level for this location
  },
  Tainha : {
    center: { lat: -23.81854425418311, lng: -45.39977377471165 },
    color: "#FF0000",  
    radius: 1000,
    zoom: 13      // Define zoom level for this location
  },
  Atum: {
    center: { lat: -25.566299604243415, lng: -42.67327447132944 },
    color: "#FF0000",  
    radius: 100000,
    zoom: 7      // Define zoom level for this location
  },
  Marlin: {
    center: { lat: -13.28297277884059, lng: -38.655612525117 },
    color: "#FF0000",  
    radius: 6000,
    zoom: 11     // Define zoom level for this location
  }, 
  Douradodomar: {
    center: { lat: -28.804167, lng: -47.060000 },
    color: "#FF0000",  
    radius: 10000,
    zoom: 8       // Define zoom level for this location
  },
  Peixeespada: {
    center: { lat: -21.731557354757868, lng:  -40.96480450059727 },
    color: "#FF0000",  
    radius: 6000,
    zoom: 9      // Define zoom level for this location
  },
};


let map;
let cityCircle;

function initMap() {
  // Create the map.
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: { lat: -24.03784120147199, lng: -46.43398439033383 },
    mapTypeId: "terrain"
  });

  // Check if location parameter is present in the URL
  const params = new URLSearchParams(window.location.search);
  const location = params.get('location');
  
  if (location && citymap[location]) {
    showCircle(location);
  }
}

function showCircle(location) {
  // Remove existing circle if it exists
  if (cityCircle) {
    cityCircle.setMap(null);
  }

  const cityData = citymap[location];
  cityCircle = new google.maps.Circle({
    strokeColor: cityData.color,
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: cityData.color,
    fillOpacity: 0.35,
    map: map,
    center: cityData.center,
    radius: cityData.radius
  });
  // Set zoom based on fish data (if defined)
  if (cityData.zoom !== undefined) {
    map.setZoom(cityData.zoom);
  } else {
    // Use a default zoom level if not specified
    map.setZoom(11); // Adjust this as needed
  }

  map.setCenter(cityData.center);
}

window.initMap = initMap;
