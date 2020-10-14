const slides = document.getElementsByClassName("carousel-item");
//console.log(slides[0])
let slidePosition = 0;
const totalSlides = slides.length;
console.log(totalSlides);

function hideAllSlides() {
  for (let slide of slides) {
    slide.classList.remove("carousel-item-visible");
    slide.classList.add("carousel-item-hidden");
  }
}

function nextSlide() {
  hideAllSlides();

  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  slides[slidePosition].classList.add("carousel-item-visible");
  //console.log(slides[slidePosition].classList)
  //console.log(slidePosition)
}

function changeSlide() {
  setInterval(nextSlide, 5000);
}

changeSlide();
