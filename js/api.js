// Initialize and add the map
const citymap = {
    vilaCaiçara: {
      center: { lat: -24.055530028466592, lng: -46.52176798751062 },
      population: 2714856,
      color: "#FF0000",  // Red
      radius: 5000       // Example radius
    },
    vilaTupi: {
      center: { lat: -24.02746111618876, lng: -46.457548975829496 },
      population: 1,
      color: "#00FF00",  // Green
      radius: 1000       // Example radius
    },
    cantoForte: {
      center: { lat: -24.021755302762713, lng: -46.407073332383995 },
      population: 3857799,
      color: "#0000FF",  // Blue
      radius: 7000       // Example radius
    },
    saoVicente: {
      center: { lat: -23.974273120638987, lng: -46.3785870782768 },
      population: 603502,
      color: "#FFFF00",  // Yellow
      radius: 3000       // Example radius
    }
  };
  
  function initMap() {
    // Create the map.
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 11,
      center: { lat: -24.03784120147199, lng: -46.43398439033383 },
      mapTypeId: "terrain"
    });
  
    // Construct the circle for each value in citymap.
    for (const city in citymap) {
      // Get the color and radius for this city
      const cityData = citymap[city];
      const cityCircle = new google.maps.Circle({
        strokeColor: cityData.color,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: cityData.color,
        fillOpacity: 0.35,
        map,
        center: cityData.center,
        radius: cityData.radius // Use the specified radius
      });
    }
  }
  
  window.initMap = initMap;
  