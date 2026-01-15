---
layout: default
title: album wall
permalink: /albums/
---

<h1>album wall</h1>
<p class="muted">click a cover to open the file.</p>

<div class="album-wall" id="albumWall"></div>

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
          <iframe id="albumPlayer" style="border-radius:12px" width="100%" height="152" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
      </div>
    </div>
  </div>
</div>

<script src="{{ '/assets/js/album-wall.js' | relative_url }}"></script>
