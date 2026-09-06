/* ============================================================
   RBXL Portfolio - renderer
   Reads window.PROJECTS (defined in data/projects.js) and
   renders the cards + detail modal for the current category.

   A page opts in by setting  <body data-cat="programming">.
   You should not need to edit this file to add projects.
   ============================================================ */

(function () {
  "use strict";

  var esc = function (s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  };

  /* ---- site config (window.SITE, set in data/projects.js) ---- */
  var cfg = window.SITE || {};
  if (cfg.carrd) {
    [].forEach.call(document.querySelectorAll("[data-back]"), function (a) {
      a.href = cfg.carrd;
    });
  }
  if (cfg.name) {
    [].forEach.call(document.querySelectorAll("[data-name]"), function (el) {
      el.textContent = cfg.name;
    });
  }
  [].forEach.call(document.querySelectorAll("[data-year]"), function (el) {
    el.textContent = new Date().getFullYear();
  });

  var cat = document.body.getAttribute("data-cat");
  var grid = document.getElementById("grid");
  if (!grid || !cat) return;

  var all = window.PROJECTS || [];
  var items = all.filter(function (p) { return p.category === cat; });

  var countEl = document.getElementById("count");
  if (countEl) {
    countEl.textContent = items.length + (items.length === 1 ? " project" : " projects");
  }

  /* ---------------- cards ---------------- */

  if (!items.length) {
    grid.style.display = "block";
    grid.innerHTML =
      '<div class="empty">Nothing here yet - add entries to <code>data/projects.js</code> ' +
      'with <code>category: "' + esc(cat) + '"</code>.</div>';
  } else {
    grid.innerHTML = items.map(function (p, i) {
      var thumb = p.thumb
        ? '<img src="' + esc(p.thumb) + '" alt="' + esc(p.title) + '" loading="lazy">'
        : '<div class="ph">no preview yet</div>';
      var badge = p.badge ? '<span class="badge">' + esc(p.badge) + "</span>" : "";
      var year = p.year ? '<span class="yr">' + esc(p.year) + "</span>" : "";
      var tags = (p.tags || []).map(function (t) {
        return '<span class="tag">' + esc(t) + "</span>";
      }).join("");

      return (
        '<button class="card" type="button" data-i="' + i + '">' +
          '<div class="thumb">' + badge + thumb + "</div>" +
          '<div class="card-body">' +
            "<h3>" + year + esc(p.title) + "</h3>" +
            (p.summary ? "<p>" + esc(p.summary) + "</p>" : "") +
            (tags ? '<div class="tags">' + tags + "</div>" : "") +
          "</div>" +
        "</button>"
      );
    }).join("");
  }

  /* ---------------- detail modal ---------------- */

  var modal = document.getElementById("modal");
  if (!modal) return;
  var sheet = modal.querySelector(".sheet");
  var lastFocus = null;

  function mediaHtml(m) {
    if (!m) return "";
    if (m.type === "youtube") {
      return '<div class="yt"><iframe src="https://www.youtube.com/embed/' + esc(m.id) +
             '" title="' + esc(m.caption || "video") + '" allowfullscreen ' +
             'allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture"></iframe></div>';
    }
    if (m.type === "video") {
      return '<video src="' + esc(m.src) + '" controls playsinline' +
             (m.poster ? ' poster="' + esc(m.poster) + '"' : "") + "></video>";
    }
    return '<img src="' + esc(m.src) + '" alt="' + esc(m.caption || "") + '" loading="lazy">';
  }

  function open(p) {
    var paras = Array.isArray(p.description) ? p.description : (p.description ? [p.description] : []);
    var meta = [p.role, p.year, p.status].filter(Boolean).join("  ·  ");

    sheet.innerHTML =
      '<div class="sheet-head">' +
        "<div><h2>" + esc(p.title) + "</h2>" +
        (meta ? '<div class="meta">' + esc(meta) + "</div>" : "") + "</div>" +
        '<button class="x" type="button" aria-label="Close">×</button>' +
      "</div>" +
      '<div class="sheet-body">' +
        ((p.media && p.media.length)
          ? '<div class="media">' + p.media.map(mediaHtml).join("") + "</div>"
          : "") +
        (paras.length ? "<h4>Overview</h4>" + paras.map(function (t) {
          return "<p>" + esc(t) + "</p>";
        }).join("") : "") +
        ((p.highlights && p.highlights.length)
          ? "<h4>What I built</h4><ul>" + p.highlights.map(function (h) {
              return "<li>" + esc(h) + "</li>";
            }).join("") + "</ul>"
          : "") +
        ((p.tags && p.tags.length)
          ? '<h4>Tech &amp; tools</h4><div class="tags">' + p.tags.map(function (t) {
              return '<span class="tag">' + esc(t) + "</span>";
            }).join("") + "</div>"
          : "") +
        ((p.links && p.links.length)
          ? '<div class="links">' + p.links.map(function (l) {
              return '<a class="btn' + (l.primary ? " primary" : "") + '" href="' + esc(l.url) +
                     '" target="_blank" rel="noopener">' + esc(l.label) + "</a>";
            }).join("") + "</div>"
          : "") +
      "</div>";

    lastFocus = document.activeElement;
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    sheet.querySelector(".x").focus();
    if (p.id) history.replaceState(null, "", "#" + p.id);
  }

  function close() {
    modal.hidden = true;
    document.body.style.overflow = "";
    history.replaceState(null, "", location.pathname + location.search);
    if (lastFocus) lastFocus.focus();
  }

  grid.addEventListener("click", function (e) {
    var card = e.target.closest(".card");
    if (card) open(items[+card.dataset.i]);
  });

  modal.addEventListener("click", function (e) {
    if (e.target === modal || e.target.closest(".x")) close();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.hidden) close();
  });

  /* deep link: portfolio.../vfx.html#fire-slash opens that project directly */
  if (location.hash) {
    var want = location.hash.slice(1);
    var hit = items.filter(function (p) { return p.id === want; })[0];
    if (hit) open(hit);
  }
})();
