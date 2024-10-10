// nav toggle
// Function to toggle the navbar collapse
const hambugeropen = document.querySelector(".navbar-toggler");
const hamburgerclose = document.querySelector(".navbar-close");
const navbarcollapse = document.querySelector(".navbar-collapse");

const navbartoggler = () => {
  navbarcollapse.classList.toggle("show");
}

// Select all dropdown toggles with the attribute data-toggle="dropdown"
const dropdownToggles = document.querySelectorAll('a[data-toggle="dropdown"]');

// Loop through all dropdown toggles and add a click event listener
dropdownToggles.forEach((toggle, index) => {
  toggle.addEventListener('click', (event) => {
    event.preventDefault();  // Prevent default anchor behavior
    
    const currentDropdown = toggle.nextElementSibling;  // Get the dropdown-menu next to the clicked toggle

    // Close all other dropdowns except the current one
    document.querySelectorAll('.dropdown-menu').forEach((dropdown, i) => {
      if (i !== index) {
        dropdown.classList.remove('show');
      }
    });

    // Toggle the current dropdown menu
    currentDropdown.classList.toggle('show');
  });
});

// Add click listeners to hamburger open/close
if (hambugeropen) {
  hambugeropen.addEventListener("click", navbartoggler);
}

if (hamburgerclose) {
  hamburgerclose.addEventListener("click", navbartoggler);
}



let indexValue = 0;
const imgElements = document.querySelectorAll('.images img');
const sliderElements = document.querySelectorAll('.btm-slides span');
const slideInterval = 3000; // Time in milliseconds for each slide transition (3 seconds)

// Update slider to show the correct image
function updateSlider() {
  // Handle infinite loop
  if (indexValue >= imgElements.length) {
    indexValue = 0;
  } else if (indexValue < 0) {
    indexValue = imgElements.length - 1;
  }

  // Move the image container to slide images
  document.querySelector('.images').style.transform = `translateX(${-indexValue * 100}%)`;

  // Update slider dots
  sliderElements.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === indexValue);
  });
}

// Function to handle bottom slider clicks
function btm_slide(e) {
  indexValue = e - 1; // Adjusting indexValue to be zero-based
  updateSlider();
}

// Function to handle side slider clicks (next/prev)
function side_slide(e) {
  indexValue += e;
  updateSlider();
}

// Automatic slide function
function autoSlide() {
  indexValue++;
  updateSlider();
}

// Set up the automatic sliding with a timer
let slideIntervalId = setInterval(autoSlide, slideInterval);

// Clear the interval when navigating manually
function stopAutoSlide() {
  clearInterval(slideIntervalId);
}

// Optionally restart automatic sliding when the user manually navigates (if desired)
function restartAutoSlide() {
  clearInterval(slideIntervalId);
  slideIntervalId = setInterval(autoSlide, slideInterval);
}

// Initial call to display the first image
updateSlider();

// Add event listeners to stop and restart the auto-slide on manual interaction
document.querySelectorAll('.btm-slides span, .sliders').forEach(element => {
  element.addEventListener('click', stopAutoSlide);
});

// text slider
let slideIndex = 0;
const slides = document.querySelectorAll('.text-slide');
const totalSlides = slides.length;

function showNextSlide() {
    slides[slideIndex].classList.remove('current');
    slides[slideIndex].classList.add('prev');
    
    slideIndex = (slideIndex + 1) % totalSlides;
    
    slides[slideIndex].classList.add('current');
    slides[(slideIndex - 1 + totalSlides) % totalSlides].classList.remove('prev');
}

setInterval(showNextSlide, 5000); // Change text every 3 seconds


// brand logo slider
document.addEventListener('DOMContentLoaded', function() {
  const carousels = document.querySelectorAll('.carousel');

  carousels.forEach(carousel => {
      const container = carousel.querySelector('.carousel-container');
      const items = container.querySelectorAll('.carousel-item');
      const totalItems = items.length;
      let itemWidth = items[0].offsetWidth;
      let currentIndex = 0;

      if (!container || !items.length) {
          console.error('Required elements not found in the DOM');
          return;
      }

      // Clone items for infinite loop effect
      container.innerHTML += container.innerHTML; // Duplicate items
      const allItems = container.querySelectorAll('.carousel-item');

      function moveCarousel() {
          currentIndex++;
          if (currentIndex >= allItems.length / 2) {
              currentIndex = 0;
              container.style.transition = 'none'; // Disable transition for reset
              container.style.transform = `translateX(0px)`;
              setTimeout(() => {
                  container.style.transition = 'transform 0.5s ease-in-out'; // Re-enable transition
                  container.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
              }, 50); // Small delay to ensure transition is applied after reset
          } else {
              container.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
          }
      }

      setInterval(moveCarousel, 1500); // Change slide every 1.5 seconds

      // window.addEventListener('resize', function() {
      //     itemWidth = items[0].offsetWidth; // Update item width on resize
      //     container.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
      // });
  });
});


// portals slider

document.addEventListener('DOMContentLoaded', function() {
  const carousels = document.querySelectorAll('.portal-carousel');

  carousels.forEach(carousel => {
      const container = carousel.querySelector('.portal-carousel-container');
      const items = container.querySelectorAll('.portal-carousel-item');
      const totalItems = items.length;
      let itemWidth = items[0].offsetWidth;
      let currentIndex = 0;

      if (!container || !items.length) {
          console.error('Required elements not found in the DOM');
          return;
      }

      // Clone items for infinite loop effect
      container.innerHTML += container.innerHTML; // Duplicate items
      const allItems = container.querySelectorAll('.portal-carousel-item');

      function moveCarousel() {
          currentIndex++;
          if (currentIndex >= allItems.length / 2) {
              currentIndex = 0;
              container.style.transition = 'none'; // Disable transition for reset
              container.style.transform = `translateX(0px)`;
              setTimeout(() => {
                  container.style.transition = 'transform 0.5s ease-in-out'; // Re-enable transition
                  container.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
              }, 100); // Small delay to ensure transition is applied after reset
          } else {
              container.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
          }
      }

      setInterval(moveCarousel, 1800); 

  });
});


// Open popup on click
document.querySelectorAll('.btn-open-popup').forEach(button => {
  button.addEventListener('click', function() {
      const popupId = this.getAttribute('data-popup');
      document.getElementById(popupId).style.display = 'block';
      document.querySelector('.overlay-bg').style.display = 'block';
      document.body.style.overflow = 'hidden';
  });
});

document.querySelectorAll('.btn-close-popup').forEach(button => {
  button.addEventListener('click', function() {
      this.closest('.popup-box').style.display = 'none';
      document.querySelector('.overlay-bg').style.display = 'none';
      document.body.style.overflow = 'visible'; 
  });
});

window.addEventListener('click', function(event) {
  const overlay = document.getElementById('overlay-bg');
  if (event.target === overlay) {
      document.querySelectorAll('.popup-box').forEach(popup => {
          popup.style.display = 'none';
      });
      overlay.style.display = 'none';
      document.body.style.overflow = ''; 
  }
});
