---
layout: page
title: Gallery
permalink: /gallery/
---

<div class="gallery-slideshow" id="gallerySlideshow">
  <button class="gallery-btn prev" type="button" aria-label="Previous image">‹</button>

  <div class="gallery-viewport">
    {% assign pics = site.static_files | where_exp: "f", "f.path contains '/assets/images/photos/'" %}
    {% for p in pics %}
      <a class="gallery-slide"
         href="{{ p.path | relative_url }}"
         target="_blank"
         rel="noopener"
         aria-label="Open full image">
        <img src="{{ p.path | relative_url }}" alt="" loading="lazy" decoding="async">
      </a>
    {% endfor %}
  </div>

  <button class="gallery-btn next" type="button" aria-label="Next image">›</button>
</div>

<script src="{{ '/assets/js/gallery.js' | relative_url }}"></script>
