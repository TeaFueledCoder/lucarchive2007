---

layout: default
title: album wall
permalink: /albums/
-------------------

<h1>album wall</h1>
<p class="muted">click a cover to open the file.</p>

<div class="album-wall" id="albumWall">

<button class="album-tile"
 data-title="Vex Red — Can't Smile - Start With A Strong And Persistent Desire"
 data-meta="first listened: 2026 • format: CD"
 data-text="Nu-metal electronic fusion + they're from Hampshire."
 data-cover="{{ '/assets/images/albums/SSPD.jpg' | relative_url }}"
 data-spotify="https://open.spotify.com/embed/track/3ivsBS2Sko6udZ7GWarDTu"> <img src="{{ '/assets/images/albums/SSPD.jpg' | relative_url }}" alt="Vex Red album cover"> </button>

<button class="album-tile"
 data-title="Rival Schools — United by Fate"
 data-meta="first listened: 2026 • format: CD"
 data-text="Post-hardcore clarity: melody under tension."
 data-cover="{{ '/assets/images/albums/united-by-fate.jpg' | relative_url }}"
 data-spotify="https://open.spotify.com/embed/track/1n7JYy7R0Y8QnXW0CzFJmY"> <img src="{{ '/assets/images/albums/united-by-fate.jpg' | relative_url }}" alt="United by Fate album cover"> </button>

<button class="album-tile"
 data-title="Snapcase — Progression Through Unlearning"
 data-meta="first listened: 2026 • format: CD"
 data-text="Hardcore stripped to its ethical engine."
 data-cover="{{ '/assets/images/albums/progression-through-unlearning.jpg' | relative_url }}"
 data-spotify="https://open.spotify.com/embed/track/4oYwZ6m3zjJ9d9xZ8m5Q9Z"> <img src="{{ '/assets/images/albums/progression-through-unlearning.jpg' | relative_url }}" alt="Progression Through Unlearning album cover"> </button>

<button class="album-tile"
 data-title="Quicksand — Slip"
 data-meta="first listened: 2026 • format: CD"
 data-text="Post-hardcore with weight, groove, and restraint."
 data-cover="{{ '/assets/images/albums/quicksand.jpg' | relative_url }}"
 data-spotify="https://open.spotify.com/embed/track/6yG5f1n4LZ9zQx4K6yH0dG"> <img src="{{ '/assets/images/albums/quicksand.jpg' | relative_url }}" alt="Slip album cover"> </button>

<button class="album-tile"
 data-title="My Vitriol — Finelines"
 data-meta="first listened: 2026 • format: CD"
 data-text="Shoegaze precision; quiet dynamics, sharp edges."
 data-cover="{{ '/assets/images/albums/finelines.jpg' | relative_url }}"
 data-spotify="https://open.spotify.com/embed/track/0w8kFJpR8Q5C1Z9m7X4G8Y"> <img src="{{ '/assets/images/albums/finelines.jpg' | relative_url }}" alt="Finelines album cover"> </button>

<button class="album-tile"
 data-title="Hell Is For Heroes — The Neon Handshake"
 data-meta="first listened: 2026 • format: CD"
 data-text="UK post-hardcore with arena-scale intent."
 data-cover="{{ '/assets/images/albums/The-neon-handshake.jpg' | relative_url }}"
 data-spotify="https://open.spotify.com/embed/track/2n6RZQy0QZpZ9WJx8m8QfZ"> <img src="{{ '/assets/images/albums/The-neon-handshake.jpg' | relative_url }}" alt="The Neon Handshake album cover"> </button>

<button class="album-tile"
 data-title="Red House Painters — Old Ramon"
 data-meta="first listened: 2026 • format: Digital"
 data-text="Slowcore patience; songs that refuse to hurry."
 data-cover="{{ '/assets/images/albums/old-ramon.jpg' | relative_url }}"
 data-spotify="https://open.spotify.com/embed/track/1Z6m0HkF8JYyWZ0Qn3pQYyF"> <img src="{{ '/assets/images/albums/old-ramon.jpg' | relative_url }}" alt="Old Ramon album cover"> </button>

<button class="album-tile"
 data-title="Albert Lee & Hogan’s Heroes — Like This"
 data-meta="first listened: 2026 • format: Vinyl"
 data-text="Virtuosic country rock with casual confidence."
 data-cover="{{ '/assets/images/albums/like-this.jpg' | relative_url }}"
 data-spotify="https://open.spotify.com/embed/track/5QJZy8KZ1n4H9W8RZ0pQ8Y"> <img src="{{ '/assets/images/albums/like-this.jpg' | relative_url }}" alt="Like This album cover"> </button>

<button class="album-tile"
 data-title="The Inbreds — Kombinator"
 data-meta="first listened: 2026 • format: CD"
 data-text="Minimalist alt-rock: bass, drums, intention."
 data-cover="{{ '/assets/images/albums/kombinator.jpg' | relative_url }}"
 data-spotify="https://open.spotify.com/embed/track/3JY9WZk0pQ6mF8R8HnZ9ZQ"> <img src="{{ '/assets/images/albums/kombinator.jpg' | relative_url }}" alt="Kombinator album cover"> </button>

  <!-- continue adding albums here using the same pattern -->

</div>

<div class="album-modal" id="albumModal" aria-hidden="true">
  <div class="album-modal__backdrop" data-close></div>
  <div class="album-modal__panel" role="dialog" aria-modal="true" aria-labelledby="albumTitle">
    <button class="album-modal__close" type="button" data-close aria-label="Close">✕</button>
    <div class="album-modal__grid">
      <img class="album-modal__cover" id="albumCover" alt="">
      <div class="album-modal__info">
        <h2 id="albumTitle"></h2>
        <p class="album-modal__meta" id="albumMeta"></p>
        <p id="albumText"></p>
        <div class="player">
          <iframe id="albumPlayer"
            width="100%"
            height="152"
            frameborder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"></iframe>
        </div>
      </div>
    </div>
  </div>
</div>

<script src="{{ '/assets/js/album-wall.js' | relative_url }}"></script>
