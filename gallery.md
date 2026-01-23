---
layout: page
title: Gallery
permalink: /gallery/
---

<div class="photo-grid">
  {% assign pics = site.static_files | where_exp: "f", "f.path contains '/assets/images/photos/'" %}
  {% for p in pics %}
    <a class="photo-tile" href="{{ p.path | relative_url }}" target="_blank" rel="noopener">
      <img src="{{ p.path | relative_url }}" alt="">
    </a>
  {% endfor %}
</div>
