// /assets/js/album-wall.js
// Album wall modal logic (event delegation = works for all tiles, now and later)

document.addEventListener("DOMContentLoaded", () => {
  const wall = document.getElementById("albumWall");
  const modal = document.getElementById("albumModal");

  // Modal parts (match your albums.md IDs)
  const coverEl = document.getElementById("albumCover");
  const titleEl = document.getElementById("albumTitle");
  const metaEl  = document.getElementById("albumMeta");
  const textEl  = document.getElementById("albumText");
  const playerEl = document.getElementById("albumPlayer");

  if (!wall || !modal || !coverEl || !titleEl || !metaEl || !textEl || !playerEl) {
    // If something's missing, fail silently to avoid breaking other pages
    return;
  }

  const closeTargets = modal.querySelectorAll("[data-close]");

  const openModal = (tile) => {
    const { title, meta, text, cover, spotify } = tile.dataset;

    titleEl.textContent = title || "";
    metaEl.textContent  = meta || "";
    textEl.textContent  = text || "";

    // Cover
    coverEl.src = cover || "";
    coverEl.alt = title ? `${title} cover` : "Album cover";

    // Spotify iframe
    // Setting src each time ensures it loads the selected track.
    // Clearing it on close stops playback.
    playerEl.src = spotify || "";

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");

    // Stop Spotify playback
    playerEl.src = "";

    document.body.style.overflow = "";
  };

  // ✅ One listener for all tiles (including future ones)
  wall.addEventListener("click", (e) => {
    const tile = e.target.closest(".album-tile");
    if (!tile || !wall.contains(tile)) return;
    openModal(tile);
  });

  // Close on backdrop or close button (anything with data-close)
  closeTargets.forEach((el) => el.addEventListener("click", closeModal));

  // Close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });
});
