
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

// Створюємо точки
const dots = [];
for (let i = 0; i < images.length; i++) {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dot.addEventListener("click", () => {
    currentIndex = i;
    showSlide();
  });
  dotsContainer.appendChild(dot);
  dots.push(dot);
}

// Показати поточний слайд
function showSlide() {
  slideImage.src = images[currentIndex];

  // Кнопки Prev/Next
  prevBtn.style.display = currentIndex === 0 ? "none" : "block";
  nextBtn.style.display = currentIndex === images.length - 1 ? "none" : "block";

  // Активна точка
  dots.forEach((dot, i) => {
    dot.classList.toggle("active-dot", i === currentIndex);
  });
}

// Кнопки
prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    showSlide();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    showSlide();
  }
});

// Показати перший слайд спочатку
showSlide();
