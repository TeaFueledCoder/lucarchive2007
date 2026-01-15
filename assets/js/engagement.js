// /assets/js/engagement.js
(() => {
  const SUPABASE_URL = "YOUR_SUPABASE_URL";
  const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY";

  // Supabase client must be loaded via CDN before this runs
  const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  function getAnonId() {
    const k = "anon_id";
    let v = localStorage.getItem(k);
    if (!v) {
      v = (crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + Math.random());
      localStorage.setItem(k, v);
    }
    return v;
  }

  function getPostSlug() {
    const meta = document.querySelector('meta[name="post-slug"]');
    if (meta?.content) return meta.content;
    // fallback: URL path (stable enough)
    return location.pathname.replace(/\/$/, "");
  }

  async function trackView(postSlug, anonId) {
    // fire-and-forget; no need to block UI
    sb.rpc("track_view", { p_post_slug: postSlug, p_anon_id: anonId });
  }

  async function refreshLikeUI(postSlug, anonId) {
    const btn = document.getElementById("like-button");
    const countEl = document.getElementById("like-count");
    if (!btn || !countEl) return; // not on this page

    const { data, error } = await sb.rpc("get_like_state", {
      p_post_slug: postSlug,
      p_anon_id: anonId,
    });
    if (error) return console.error("get_like_state:", error);

    const row = data?.[0];
    countEl.textContent = row?.like_count ?? 0;
    btn.textContent = row?.liked ? "♥ Liked" : "♡ Like";
  }

  async function toggleLike(postSlug, anonId) {
    const btn = document.getElementById("like-button");
    const countEl = document.getElementById("like-count");
    if (!btn || !countEl) return;

    btn.disabled = true;
    try {
      const { data, error } = await sb.rpc("toggle_like", {
        p_post_slug: postSlug,
        p_anon_id: anonId,
      });
      if (error) return console.error("toggle_like:", error);

      const row = data?.[0];
      countEl.textContent = row?.like_count ?? 0;
      btn.textContent = row?.liked ? "♥ Liked" : "♡ Like";
    } finally {
      btn.disabled = false;
    }
  }

  document.addEventListener("DOMContentLoaded", async () => {
    const anonId = getAnonId();
    const postSlug = getPostSlug();

    // Track views on every post/page load
    trackView(postSlug, anonId);

    // Likes only if the page has the UI
    await refreshLikeUI(postSlug, anonId);

    const btn = document.getElementById("like-button");
    if (btn) {
      btn.addEventListener("click", () => toggleLike(postSlug, anonId));
    }
  });
})();
