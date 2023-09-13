  function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    const isOpen = menu.classList.toggle("open");
    icon.setAttribute("aria-expanded", isOpen.toString());
    menu.setAttribute("aria-hidden", (!isOpen).toString());
  }
  


  // JavaScript to handle animations and interactions
document.addEventListener("DOMContentLoaded", function () {
  const profile = document.querySelector("#profile");
  profile.classList.add("active");

  // Add scroll event listener to trigger animations on scroll
  window.addEventListener("scroll", function () {
    const profilePosition = profile.getBoundingClientRect().top;
    if (profilePosition < window.innerHeight / 1.5) {
      profile.classList.add("active");
    }
    // Add similar logic for other sections
  });

  // JavaScript to toggle modal
  const openModalButton = document.querySelector("#open-modal-button");
  const modal = document.querySelector(".modal");
  const closeModalButton = document.querySelector("#close-modal-button");

  openModalButton.addEventListener("click", function () {
    modal.style.display = "block";
  });

  closeModalButton.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // JavaScript to toggle color theme
  const themeToggle = document.querySelector(".theme-toggle");
  const body = document.querySelector("body");

  themeToggle.addEventListener("click", function () {
    // Toggle between different color themes
    body.classList.toggle("dark-theme");
  });

  // Add other JavaScript interactions as needed
});

  var slideIndex = 1;
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
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");

    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
  }

