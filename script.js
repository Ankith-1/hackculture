const coords = { x: 0, y: 0 };
const particles = []; // Array to hold particle elements

window.addEventListener("mousemove", function (e) {
  // Capture mouse coordinates, accounting for scroll
  coords.x = e.clientX + window.scrollX;
  coords.y = e.clientY + window.scrollY;

  createParticle();
});

function createParticle() {
  const particle = document.createElement('div');
  particle.classList.add('trail');
  document.body.appendChild(particle);

  // Set the initial position of the particle
  particle.style.left = coords.x + 'px';
  particle.style.top = coords.y + 'px';

  // Remove the particle after animation finishes
  setTimeout(() => {
    particle.remove();
  }, 600); // The duration of the trail animation
}





var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable : true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
