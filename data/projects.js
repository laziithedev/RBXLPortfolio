/* ============================================================
   THIS IS THE ONLY FILE YOU NEED TO EDIT TO ADD PROJECTS.

   Copy a block, change the values, save, commit. That's it.
   Fields marked (optional) can be deleted entirely.

   category  must be exactly one of: "programming" | "vfx" | "building"
   id        lowercase-with-dashes, unique. Lets you deep-link a single
             project, e.g.  .../vfx.html#fire-slash
   thumb     card image, 16:9 looks best. Put files in media/<category>/
   media     detail-view gallery, any mix of:
               { type:"image",   src:"media/vfx/shot1.png", caption:"..." }
               { type:"youtube", id:"dQw4w9WgXcQ" }          <- the id only
               { type:"video",   src:"media/vfx/clip.mp4" }
   ============================================================ */

/* Your name + the Carrd site every "Back to portfolio" button points at.
   Change these two lines once and every page updates. */
window.SITE = {
  name:  "laziithedev",
  carrd: "https://YOUR-CARRD-SITE.carrd.co"
};

window.PROJECTS = [

  /* ================== PROGRAMMING ================== */
  {
    id: "combat-system",
    category: "programming",
    title: "Server-Authoritative Combat System",
    year: "2025",
    role: "Solo programmer",           // (optional)
    status: "Shipped",                 // (optional)
    badge: "Featured",                 // (optional) corner label on the card
    summary: "Hit detection, cooldowns and damage validation running fully on the server.",
    thumb: "media/programming/combat.png",
    tags: ["Luau", "OOP", "RemoteEvents", "Raycasting"],
    description: [
      "Replace this with a paragraph on what the system does and why you built it.",
      "A second paragraph is optional - use it for the interesting technical problem you had to solve."
    ],
    highlights: [
      "Client-side prediction with server reconciliation so hits feel instant but can't be spoofed",
      "Modular ability system - a new move is one ModuleScript, no core edits",
      "Rate limiting and sanity checks on every remote"
    ],
    media: [
      // { type: "youtube", id: "REPLACE_WITH_VIDEO_ID" },
      // { type: "image", src: "media/programming/combat-1.png" }
    ],
    links: [
      { label: "Play on Roblox", url: "https://www.roblox.com/games/0000000000", primary: true },
      { label: "Source on GitHub", url: "https://github.com/laziithedev" }
    ]
  },
  {
    id: "inventory-datastore",
    category: "programming",
    title: "Inventory & Save System",
    year: "2025",
    summary: "Session-locked DataStore wrapper with retries, migrations and zero data loss.",
    thumb: "media/programming/inventory.png",
    tags: ["Luau", "DataStoreService", "ProfileService"],
    description: "Short write-up goes here.",
    highlights: [
      "Session locking prevents duplication across servers",
      "Versioned schema with automatic migration on load"
    ],
    media: [],
    links: []
  },

  /* ====================== VFX ====================== */
  {
    id: "fire-slash",
    category: "vfx",
    title: "Fire Slash Ability",
    year: "2025",
    badge: "Featured",
    summary: "Layered particle burst, trail and screen shake built for a combat ability.",
    thumb: "media/vfx/fire-slash.png",
    tags: ["ParticleEmitter", "Beams", "Trails", "Editable Meshes"],
    description: "Describe the look you were going for and how you got there.",
    highlights: [
      "Hand-authored flipbook sheet for the core burst",
      "Beam-based ground crack that fades with a custom transparency curve",
      "Pooled emitters so repeated casts never spike memory"
    ],
    media: [
      // { type: "youtube", id: "REPLACE_WITH_VIDEO_ID" }
    ],
    links: []
  },
  {
    id: "magic-portal",
    category: "vfx",
    title: "Magic Portal",
    year: "2024",
    summary: "Looping portal effect with distortion, sparks and a spawn-in flourish.",
    thumb: "media/vfx/portal.png",
    tags: ["ParticleEmitter", "Blender", "After Effects"],
    description: "Short write-up goes here.",
    media: [],
    links: []
  },

  /* ================ BUILDING / MODELING ================ */
  {
    id: "medieval-town",
    category: "building",
    title: "Medieval Town Hub",
    year: "2025",
    badge: "Featured",
    summary: "Fully modelled lobby hub with baked lighting and a sub-3k part budget.",
    thumb: "media/building/town.png",
    tags: ["Blender", "Studio", "PBR Textures", "Level Design"],
    description: "Describe the brief, the scale, and the constraints you worked to.",
    highlights: [
      "Modular kit - walls, roofs and props snap on a 4-stud grid",
      "Optimised to hold 60 FPS on mobile"
    ],
    media: [],
    links: []
  },
  {
    id: "weapon-pack",
    category: "building",
    title: "Low-Poly Weapon Pack",
    year: "2024",
    summary: "Twelve stylised weapons modelled and textured for a fantasy RPG.",
    thumb: "media/building/weapons.png",
    tags: ["Blender", "Substance", "Low-poly"],
    description: "Short write-up goes here.",
    media: [],
    links: []
  }

];
