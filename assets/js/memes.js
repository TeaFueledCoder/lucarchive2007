const MEME_BASE = "/assets/images/memes/random/";

const memeFiles = [
  "ego.jpg",
  "msn-music.jpg",
  "stay-up-late.jpg",
  // add more filenames as you drop them in
];

function shuffleInPlace(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function populateSide(selector, count) {
  const side = document.querySelector(selector);
  if (!side) return;

  const picks = shuffleInPlace([...memeFiles]).slice(0, count);

  for (const name of picks) {
    const img = document.createElement("img");
    img.src = MEME_BASE + name;
    img.loading = "lazy";
    img.decoding = "async";
    img.alt = "";
    side.appendChild(img);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  populateSide(".side.left", 3);
  populateSide(".side.right", 3);
});
