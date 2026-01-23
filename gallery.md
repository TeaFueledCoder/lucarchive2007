---
layout: page
title: Gallery
permalink: /gallery/
---

{% assign pics = site.static_files | where_exp: "f", "f.path contains '/assets/images/photos/'" %}

<div class="slideshow" data-autoplay="true" data-interval="4500">
  <div class="slideshow__stage">
    {% for p in pics %}
      <figure class="slide{% if forloop.first %} is-active{% endif %}">
        <img src="{{ p.path | relative_url }}" alt="">
      </figure>
    {% endfor %}
  </div>

  <button class="slideshow__btn prev" type="button" aria-label="Previous">‹</button>
  <button class="slideshow__btn next" type="button" aria-label="Next">›</button>

  <div class="slideshow__dots" aria-label="Slide selector"></div>
</div>

<script>
(() => {
  const root = document.querySelector(".slideshow");
  if (!root) return;

  const slides = Array.from(root.querySelectorAll(".slide"));
  const dotsWrap = root.querySelector(".slideshow__dots");
  const prevBtn = root.querySelector(".slideshow__btn.prev");
  const nextBtn = root.querySelector(".slideshow__btn.next");

  let i = slides.findIndex(s => s.classList.contains("is-active"));
  if (i < 0) i = 0;

  // build dots
  const dots = slides.map((_, idx) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "dot" + (idx === i ? " is-active" : "");
    b.ariaLabel = `Go to slide ${idx + 1}`;
    b.addEventListener("click", () => go(idx, true));
    dotsWrap.appendChild(b);
    return b;
  });

  function setActive(idx) {
    slides[i]?.classList.remove("is-active");
    dots[i]?.classList.remove("is-active");
    i = (idx + slides.length) % slides.length;
    slides[i]?.classList.add("is-active");
    dots[i]?.classList.add("is-active");
  }

  function go(idx, userAction = false) {
    setActive(idx);
    if (userAction) restartAutoplay();
  }

  prevBtn.addEventListener("click", () => go(i - 1, true));
  nextBtn.addEventListener("click", () => go(i + 1, true));

  // keyboard support
  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") go(i - 1, true);
    if (e.key === "ArrowRight") go(i + 1, true);
  });

  // autoplay
  const autoplay = root.dataset.autoplay === "true";
  const intervalMs = Number(root.dataset.interval || 4500);
  let timer = null;

  function startAutoplay() {
    if (!autoplay || slides.length < 2) return;
    timer = setInterval(() => go(i + 1, false), intervalMs);
  }

  function stopAutoplay() {
    if (timer) clearInterval(timer);
    timer = null;
  }

  function restartAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  root.addEventListener("mouseenter", stopAutoplay);
  root.addEventListener("mouseleave", startAutoplay);

  startAutoplay();
})();
</script>
