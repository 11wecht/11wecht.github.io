document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('navbar-toggle');
  const navbarMenu = document.getElementById('navbar-menu');

  toggleButton.addEventListener('click', function() {
      const expanded = toggleButton.getAttribute('aria-expanded') === 'true' || false;
      toggleButton.setAttribute('aria-expanded', !expanded);
      navbarMenu.style.visibility = expanded ? 'hidden' : 'visible';
      navbarMenu.style.opacity = expanded ? '0' : '1';
  });

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
});

let slideIndex = 1;

showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}


// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 




let slideIndex1 = 1;

showSlides(slideIndex1);

// Next/previous controls
function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
}


// Thumbnail image controls
function currentSlide1(n) {
  showSlides1(slideIndex1 = n);
}


function showSlides1(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides1");
  let dots = document.getElementsByClassName("dot1");
  if (n > slides.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex1-1].style.display = "block";
  dots[slideIndex1-1].className += " active";
} 