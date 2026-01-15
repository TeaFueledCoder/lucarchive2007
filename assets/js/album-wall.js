(() => {
  const wall = document.getElementById("albumWall");
  const modal = document.getElementById("albumModal");
  if (!wall || !modal) return;

  const coverEl  = document.getElementById("albumCover");
  const titleEl  = document.getElementById("albumTitle");
  const metaEl   = document.getElementById("albumMeta");
  const textEl   = document.getElementById("albumText");
  const playerEl = document.getElementById("albumPlayer");

  const openModal = (data) => {
    coverEl.src = data.cover || "";
    coverEl.alt = data.title || "";

    titleEl.textContent = data.title || "";
    metaEl.textContent  = data.meta || "";
    textEl.textContent  = data.text || "";

    playerEl.src = data.spotify || "";

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");

    // stop playback
    playerEl.src = "";

    document.body.style.overflow = "";
  };

  wall.addEventListener("click", (e) => {
    const tile = e.target.closest(".album-tile");
    if (!tile) return;

    openModal({
      title: tile.dataset.title,
      meta: tile.dataset.meta,
      text: tile.dataset.text,
      cover: tile.dataset.cover,
      spotify: tile.dataset.spotify,
    });
  });

  modal.addEventListener("click", (e) => {
    if (e.target.matches("[data-close]")) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) closeModal();
  });
})();
