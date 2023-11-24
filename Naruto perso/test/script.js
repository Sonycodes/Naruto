// JavaScript Code
let currentIndex = 0;

function showNext() {
  const wrapper = document.querySelector('.carousel-wrapper');
  const slides = document.querySelectorAll('.carousel-slide');
  const slideWidth = slides[0].offsetWidth;
  
  currentIndex = (currentIndex + 3) % slides.length;

  wrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

setInterval(showNext, 3000); // Change slide every 3 seconds (adjust as needed)
