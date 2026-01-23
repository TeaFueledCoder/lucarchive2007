// /assets/js/album-wall.js
// Album wall: JSON renderer + modal logic (event delegation)

document.addEventListener("DOMContentLoaded", async () => {
  const wall = document.getElementById("albumWall");
  const modal = document.getElementById("albumModal");

  // Modal parts (match your albums.html IDs)
  const coverEl = document.getElementById("albumCover");
  const titleEl = document.getElementById("albumTitle");
  const metaEl = document.getElementById("albumMeta");
  const textEl = document.getElementById("albumText");
  const playerEl = document.getElementById("albumPlayer");

  // If something's missing, fail silently to avoid breaking other pages
  if (!wall || !modal || !coverEl || !titleEl || !metaEl || !textEl || !playerEl) return;

  // -----------------------------
  // 1) Render wall from JSON
  // -----------------------------
  const buildTitle = (a) => {
    // Prefer explicit titleFull if you ever add it later
    if (a.titleFull && typeof a.titleFull === "string") return a.titleFull;
    const artist = a.artist || "";
    const title = a.title || "";
    return artist && title ? `${artist} — ${title}` : (title || artist || "");
  };

  const buildFavEmbed = (a) => {
    // Preferred schema
    if (a.spotify && typeof a.spotify.favTrackEmbed === "string") return a.spotify.favTrackEmbed;
    // Back-compat: allow older key
    if (typeof a.spotifyEmbed === "string") return a.spotifyEmbed;
    return "";
  };

  const makeTile = (a) => {
    const btn = document.createElement("button");
    btn.className = "album-tile";
    btn.type = "button";

    // Keep your dataset contract
    btn.dataset.title = buildTitle(a);
    btn.dataset.meta = a.meta || "";
    btn.dataset.text = a.text || "";
    btn.dataset.cover = a.coverUrl || "";
    btn.dataset.spotify = buildFavEmbed(a);

    const img = document.createElement("img");
    img.src = a.coverUrl || "";
    img.width = 500;
    img.height = 500;
    img.loading = "lazy";

    // Accessibility upgrade: meaningful alt text
    const artist = a.artist || "";
    const title = a.title || "";
    img.alt = artist && title ? `${artist} — ${title} (album cover)` : "Album cover";

    btn.appendChild(img);
    return btn;
  };

  const renderWall = async () => {
    try {
      const res = await fetch("/data/albums.json", { cache: "no-store" });
      if (!res.ok) throw new Error(`Failed to load /data/albums.json (${res.status})`);
      const data = await res.json();
      const albums = Array.isArray(data.albums) ? data.albums : [];

      wall.innerHTML = "";
      for (const a of albums) wall.appendChild(makeTile(a));
    } catch (err) {
      console.error("[album-wall] render error:", err);
    }
  };

  await renderWall();

  // -----------------------------
  // 2) Modal logic (unchanged)
  // -----------------------------
  const closeTargets = modal.querySelectorAll("[data-close]");

  const openModal = (tile) => {
    const { title, meta, text, cover, spotify } = tile.dataset;

    titleEl.textContent = title || "";
    metaEl.textContent = meta || "";
    textEl.textContent = text || "";

    // Cover
    coverEl.src = cover || "";
    coverEl.alt = title ? `${title} cover` : "Album cover";

    // Spotify iframe
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

  // One listener for all tiles (including future ones)
  wall.addEventListener("click", (e) => {
    const tile = e.target.closest(".album-tile");
    if (!tile || !wall.contains(tile)) return;
    openModal(tile);
  });

  // Close on backdrop or close button (anything with data-close)
  closeTargets.forEach((el) => el.addEventListener("click", closeModal));

  // Close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) closeModal();
  });
});
