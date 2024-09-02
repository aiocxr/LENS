// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let slides = document.getElementsByClassName("homeSlides");
//   for (let i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }
//   slides[slideIndex - 1].style.display = "block";
//   setTimeout(showSlides, 3000); // Change image every 3 seconds
// }

document.addEventListener("DOMContentLoaded", function () {
  const images = [
    'url("../images/damaris.JPG")',
    'url("../images/damaris2.JPG")',
    'url("../images/gabby4.JPG")',
    'url("../images/deliasha.JPG")',
    'url("../images/gabby6.jpg")',
    'url("../images/deliasha2.jpg")',
  ];

  let currentIndex = 0;
  const container = document.querySelector(".home__container");

  function changeBackgroundImage() {
    container.style.backgroundImage = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
  }

  // Initial background image
  changeBackgroundImage();

  // Change background image every 3 seconds
  setInterval(changeBackgroundImage, 3000);
});
