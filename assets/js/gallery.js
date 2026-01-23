(function () {
  const root = document.getElementById("gallerySlideshow");
  if (!root) return;

  const slides = Array.from(root.querySelectorAll(".gallery-slide"));
  const prevBtn = root.querySelector(".gallery-btn.prev");
  const nextBtn = root.querySelector(".gallery-btn.next");

  if (slides.length === 0) return;

  let i = 0;

  function show(idx) {
    i = (idx + slides.length) % slides.length;
    for (let s = 0; s < slides.length; s++) {
      slides[s].classList.toggle("is-active", s === i);
    }
  }

  prevBtn?.addEventListener("click", () => show(i - 1));
  nextBtn?.addEventListener("click", () => show(i + 1));

  // Keyboard support
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") show(i - 1);
    if (e.key === "ArrowRight") show(i + 1);
  });

  show(0);
})();
