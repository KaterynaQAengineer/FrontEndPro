const images = [
  "img/1.jpg",
  "img/2.jpg",
  "img/3.jpg",
  "img/4.jpg",
  "img/5.jpg",
  "img/6.jpg",
  "img/7.jpg",
  "img/8.jpg",
  "img/9.jpg"
];

let currentIndex = 0;
const slideImage = document.getElementById("slideImage");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const dotsContainer = document.getElementById("dots");

const dots = [];
for (let i = 0; i < images.length; i++) {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dot.addEventListener("click", () => {
    currentIndex = i;
    showSlide();
    resetInterval();
  });
  dotsContainer.appendChild(dot);
  dots.push(dot);
}

function showSlide() {
 
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  } else if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  slideImage.src = images[currentIndex];

  dots.forEach((dot, i) => {
    dot.classList.toggle("active-dot", i === currentIndex);
  });
}


prevBtn.addEventListener("click", () => {
  currentIndex--;
  showSlide();
  resetInterval();
});

nextBtn.addEventListener("click", () => {
  currentIndex++;
  showSlide();
  resetInterval();
});

// Автослайд
let interval = setInterval(() => {
  currentIndex++;
  showSlide();
}, 3000);

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(() => {
    currentIndex++;
    showSlide();
  }, 3000);
}


showSlide();
