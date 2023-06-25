// Verificar si el navegador admite la geolocalización
if (navigator.geolocation) {
  // Obtener la posición actual del usuario
  navigator.geolocation.getCurrentPosition(success, error, options);
} else {
  // Mostrar un mensaje de error si la geolocalización no está disponible
  alert("Los servicios de geolocalización no están disponibles.");
}

// Opciones de geolocalización
var options = {
  enableHighAccuracy: true, // Habilitar alta precisión
  timeout: 5000, // Tiempo de espera antes de que se considere un error (en milisegundos)
  maximumAge: 0 // No utilizar una caché de ubicación anterior
};

// Función de éxito para obtener la ubicación
function success(position) {
  let latitude = position.coords.latitude; // Obtener la latitud
  let longitude = position.coords.longitude; // Obtener la longitud

  // Crear un mapa centrado en la ubicación actual del usuario
  var map = createMap([latitude, longitude], 12);
  
  createTileLayer(map);
  
  // Crear un control de enrutamiento desde la ubicación actual del usuario a un destino específico
  createRoutingControl(map, [latitude, longitude], [39.4666936, -0.3852043]);
}

// Función de error para manejar problemas al obtener la ubicación
function error(error) {
  if (error.code === error.PERMISSION_DENIED) {
    // Si se deniega el permiso de geolocalización, crear un mapa en una ubicación predeterminada MasterD
    var map = createMap([39.4666936, -0.3852043], 18);
    
    createTileLayer(map);
    
    // Agregar un marcador en la ubicación predeterminada con un mensaje
    createMarker(map, [39.4666936, -0.3852043], "Aquí está el lugar");
  } else {
    // Mostrar un mensaje de error genérico
    alert("Hubo un error al obtener la ubicación.");
  }
}

// Función para crear un mapa Leaflet en un elemento HTML dado
function createMap(center, zoom) {
  var map = L.map('map', {
    center: center, // Centro del mapa
    zoom: zoom // Nivel de zoom del mapa
  });
  return map;
}

// Función para agregar una capa de teselas (tiles) al mapa
function createTileLayer(map) {
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19
  }).addTo(map);
}

// Función para crear un control de enrutamiento en el mapa
function createRoutingControl(map, origin, destination) {
  var control = L.routing.control({
    waypoints: [
      L.latLng(origin), // Origen del enrutamiento
      L.latLng(destination) // Destino del enrutamiento
    ],
    language: 'es', // Idioma del enrutamiento
  }).addTo(map);
}

function createMarker(map, coordinates, popupContent) {
  let marker = L.marker(coordinates).bindPopup(popupContent).openPopup().addTo(map);
}