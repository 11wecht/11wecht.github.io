document.addEventListener('DOMContentLoaded', function() {
  // Navbar toggle functionality
  const toggleButton = document.getElementById('navbar-toggle');
  const navbarMenu = document.getElementById('navbar-menu');

  toggleButton.addEventListener('click', function() {
      const expanded = toggleButton.getAttribute('aria-expanded') === 'true' || false;
      toggleButton.setAttribute('aria-expanded', !expanded);
      navbarMenu.style.visibility = expanded ? 'hidden' : 'visible';
      navbarMenu.style.opacity = expanded ? '0' : '1';
  });

  // Smooth scroll for navigation links
  const navLinks = document.querySelectorAll('.navbar-link');
  navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
          const targetId = this.getAttribute('href').slice(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
              event.preventDefault();
              targetElement.scrollIntoView({ behavior: 'smooth' });

              // Close the menu if open (for mobile view)
              if (toggleButton.getAttribute('aria-expanded') === 'true') {
                  toggleButton.click();
              }
          }
      });
  });

  // Initialize both sliders
  initSlider('mySlides', 'dot');
  initSlider('mySlides1', 'dot1');
});

let slideIndexes = { 'mySlides': 1, 'mySlides1': 1 };

function initSlider(slideClass, dotClass) {
  showSlides(slideIndexes[slideClass], slideClass, dotClass);
}

function plusSlides(n, slideClass, dotClass) {
  showSlides(slideIndexes[slideClass] += n, slideClass, dotClass);
}

function currentSlide(n, slideClass, dotClass) {
  showSlides(slideIndexes[slideClass] = n, slideClass, dotClass);
}

function showSlides(n, slideClass, dotClass) {
  let i;
  let slides = document.getElementsByClassName(slideClass);
  let dots = document.getElementsByClassName(dotClass);

  if (n > slides.length) { slideIndexes[slideClass] = 1 }
  if (n < 1) { slideIndexes[slideClass] = slides.length }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndexes[slideClass] - 1].style.display = "block";
  dots[slideIndexes[slideClass] - 1].className += " active";
}
