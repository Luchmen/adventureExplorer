// Variables
var carousel = document.querySelector('.carousel');
var images = carousel.getElementsByTagName('img');
var indicators = document.querySelectorAll('.carousel-indicators li');
var currentIndex = 0;
var timer;

// Función para mostrar la imagen actual
function showImage(index) {
  // Verificar límites
  if (index < 0) {
    index = images.length - 1;
  } else if (index >= images.length) {
    index = 0;
  }

  // Ocultar todas las imágenes
  for (var i = 0; i < images.length; i++) {
    images[i].classList.remove('active');
  }

  // Mostrar la imagen actual
  images[index].classList.add('active');

  // Actualizar el indicador activo
  for (var j = 0; j < indicators.length; j++) {
    indicators[j].classList.remove('active');
  }
  indicators[index].classList.add('active');

  // Actualizar el índice actual
  currentIndex = index;
}

// Función para avanzar a la siguiente imagen
function nextImage() {
  showImage(currentIndex + 1);
}

// Iniciar el carrusel
function startCarousel() {
  timer = setInterval(nextImage, 4000);
}

// Evento click en un indicador
for (var k = 0; k < indicators.length; k++) {
  indicators[k].addEventListener('click', function() {
    var index = Array.prototype.indexOf.call(this.parentElement.children, this);
    showImage(index);
  });
}

// Iniciar el carrusel por defecto
startCarousel();