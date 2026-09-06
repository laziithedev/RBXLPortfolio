# Roblox Dev Portfolio — project pages

Static GitHub Pages site that holds the detailed project write-ups linked from my Carrd portfolio.

**Live:** https://laziithedev.github.io/RBXLPortfolio/

| Page | URL to use in Carrd |
|---|---|
| Hub (all categories) | `https://laziithedev.github.io/RBXLPortfolio/` |
| Programming | `https://laziithedev.github.io/RBXLPortfolio/programming.html` |
| VFX | `https://laziithedev.github.io/RBXLPortfolio/vfx.html` |
| Building & Modeling | `https://laziithedev.github.io/RBXLPortfolio/building.html` |

---

## Adding a project

Everything lives in **`data/projects.js`**. Copy an existing block, change the values, save, commit, push. The page rebuilds itself — no HTML editing.

```js
{
  id: "my-project",              // unique, lowercase-with-dashes
  category: "vfx",               // "programming" | "vfx" | "building"
  title: "My Project",
  year: "2025",
  badge: "Featured",             // optional corner label
  summary: "One line shown on the card.",
  thumb: "media/vfx/my-project.png",
  tags: ["Luau", "Beams"],
  description: "Longer write-up. Use an array of strings for multiple paragraphs.",
  highlights: ["Bullet point", "Another bullet point"],
  media: [
    { type: "youtube", id: "dQw4w9WgXcQ" },        // the video id only
    { type: "image",   src: "media/vfx/shot.png" },
    { type: "video",   src: "media/vfx/clip.mp4" }
  ],
  links: [
    { label: "Play on Roblox", url: "https://...", primary: true }
  ]
}
```

Only `id`, `category` and `title` are required — delete any field you don't need.

### Images

Drop them in `media/programming/`, `media/vfx/` or `media/building/`.
Card thumbnails look best at **16:9** (1280×720 is plenty). Keep files under ~1 MB so pages load fast.

### Videos

Prefer YouTube (`{ type: "youtube", id: "..." }`) over uploading `.mp4` files — GitHub repos aren't built for video and large files make the site slow to clone and load.

---

## Changing your name / Carrd link

Top of `data/projects.js`:

```js
window.SITE = {
  name:  "laziithedev",
  carrd: "https://your-site.carrd.co"
};
```

Every "Back to portfolio" button on every page picks this up automatically.

## Deep-linking one project

Add the project `id` as a hash and it opens straight into that project's detail view:

```
https://laziithedev.github.io/RBXLPortfolio/vfx.html#fire-slash
```

## Previewing locally

Just double-click `index.html` — it works straight off the filesystem, no server needed.

## Files

```
index.html          hub page with the three category tiles
programming.html    ┐
vfx.html            ├ category pages (thin — they just set data-cat)
building.html       ┘
data/projects.js    ← the only file you edit
assets/css/style.css
assets/js/site.js   renderer + detail modal
media/              images and clips
```
