// Image Carousel using picsum.photos
const imageUrls = [
  "https://picsum.photos/id/1015/800/500",  // mountain
  "https://picsum.photos/id/1016/800/500",  // beach
  "https://picsum.photos/id/1018/800/500",  // lake
  "https://picsum.photos/id/1020/800/500",  // forest
  "https://picsum.photos/id/1024/800/500",  // dog
  "https://picsum.photos/id/1025/800/500"   // parrot
];

let currentIndex = 0;
const carouselImage = document.getElementById("carouselImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateCarousel() {
  carouselImage.src = imageUrls[currentIndex];
}
updateCarousel();

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
  updateCarousel();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % imageUrls.length;
  updateCarousel();
});

// Joke Fetcher
const jokeBtn = document.getElementById("jokeBtn");
const jokeText = document.getElementById("jokeText");

jokeBtn.addEventListener("click", async () => {
  try {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await response.json();
    jokeText.textContent = `${data.setup} — ${data.punchline}`;
  } catch (err) {
    jokeText.textContent = "Oops! Couldn't fetch a joke.";
  }
});
