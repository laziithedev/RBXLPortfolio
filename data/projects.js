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
  name:  "kiyo",
  carrd: "https://kiyodev.carrd.co/"
};

window.PROJECTS = [

  /* ================== PROGRAMMING ================== */
  {
    id: "code-system",
    category: "programming",
    title: "Backend Reward Code System",
    year: "2026",
    role: "Commissioned",           // (optional)
    status: "Live",                 // (optional)
    badge: "",                 // (optional) corner label on the card
    summary: "Stores various reward codes in a file and allows players to redeem them for in-game rewards.",
    thumb: "media/programming/CodeSystem.png",
    tags: ["Luau", "Codes", "RemoteEvents", "DataStoreService"],
    description: [
      "This was a short commission that required me to make a code system GUI and backend that lets the player input a code. It checks through the database and verifies that the code exists, and then gives the rewards accordingly. ",
      "The system is designed to be easily expandable, allowing for new codes and rewards to be added without modifying the core codebase. It also includes rate limiting and validation to prevent abuse."
    ],
    highlights: [
      "Easily expandable code system - new codes and rewards can be added without modifying the core codebase",
      "Validation to prevent abuse - ensures that players cannot redeem codes multiple times or use invalid codes",
      "Rate limiting - prevents players from spamming the code redemption process"
    ],
    media: [
      // { type: "youtube", id: "REPLACE_WITH_VIDEO_ID" },
      // { type: "image", src: "media/programming/combat-1.png" }
    ],
    links: [
      { label: "Play on Roblox", url: "https://www.roblox.com/games/129524409768087/2-block-obby", primary: true },
      { label: "Source on GitHub", url: "https://github.com/" }
    ]
  },
  {
    id: "loading-screen",
    category: "programming",
    title: "Loading Screen",
    year: "2026",
    summary: "A loading screen that displays a progress bar and tips while the game loads.",
    thumb: "media/programming/LoadingScreen.png",
    tags: ["Luau", "UI", "TweenService", "RemoteEvents"],
    description: "This loading screen is designed to provide players with a visually appealing and informative experience while the game loads. It features a progress bar that fills up as the game assets are loaded, along with tips and hints to keep players engaged during the wait.",
    highlights: [
      "Progress bar that fills up as the game assets are loaded",
      "Tips and hints to keep players engaged during the wait",
    ],
    media: [],
    links: []
  },
  {
    id: "DataStore-Manager",
    category: "programming",
    title: "DataStore Manager",
    year: "2026",
    summary: "A system for managing and interacting with DataStore in a robust and efficient manner.",
    thumb: "media/programming/DataStoreSystem.png",
    tags: ["Luau", "DataStoreService", "ProfileService"],
    description: "This DataStore Manager is designed to provide a robust and efficient way to manage and interact with DataStore in Roblox. It includes features such as automatic data saving, error handling, and support for multiple data types.",
    highlights: [
      "Automatic data saving to ensure that player progress is not lost",
      "Error handling to gracefully handle any issues that may arise during data storage or retrieval",
    ],
    media: [],
    links: []
  },
  {
    id: "rng-roller",
    category: "programming",
    title: "RNG Roller",
    year: "2026",
    summary: "A system for generating random aura effects in a random and consistent manner.",
    thumb: "media/programming/RNGRoller.png",
    tags: ["Luau", "Random", "AuraEffects"],
    description: "This RNG Roller is designed to generate random aura effects in a random and consistent manner. It uses a combination of randomization techniques and predefined templates to create unique effects for each use case.",
    highlights: [
      "Random aura effects generated in a consistent manner",
      "Uses a combination of randomization techniques and predefined templates to create unique effects for each use case",
    ],
    media: [],
    links: []
  },
  {
    id: "inventory-system",
    category: "programming",
    title: "Inventory System",
    year: "2026",
    summary: "A system for managing and displaying player inventories in a user-friendly way.",
    thumb: "media/programming/InventorySystem.png",
    tags: ["Luau", "Inventory", "UI", "DataStoreService"],
    description: "This Inventory System is designed to provide a user-friendly way to manage and display player inventories in Roblox. It includes features such as item management, storage optimization, Deleting items, and more.",
    highlights: [
      "User-friendly way to manage and display player inventories",
      "Includes features such as item management, storage optimization, and more",
    ],
    media: [],
    links: []
  },


  /* ====================== VFX ====================== */
  {
    id: "fire-slash",
    category: "vfx",
    title: "Fire Slash Aura",
    year: "2026",
    badge: "Featured",
    summary: "Stylised fire aura effect with a burst, ground crack and trailing embers.",
    thumb: "media/vfx/FireAura.png",
    tags: ["ParticleEmitter", "Beams", "Trails", "Attachments"],
    description: "This effect was created for a RNG game, as one of the rare aura effects. The fire slash aura combines multiple particle systems and beam effects to create a dynamic and visually striking effect that reacts to the character's movements.",
    highlights: [
      "Stylised fire aura with a burst, ground crack and trailing embers",
      "Dynamic and visually striking effect that reacts to the character's movements",
      "Optimized for performance - uses efficient particle systems and beam effects to minimize impact on game performance"
    ],
    media: [
      // { type: "youtube", id: "REPLACE_WITH_VIDEO_ID" }
    ],
    links: []
  },
  {
    id: "star-explosion",
    category: "vfx",
    title: "Star Explosion",
    year: "2024",
    summary: "A vibrant explosion effect with a burst of light and debris.",
    thumb: "media/vfx/GodExpl.png",
    tags: ["ParticleEmitter", "Beams", "Trails", "Attachments"],
    description: "This effect was created for a RNG game, as one of the rare explosion effects. The star explosion combines multiple particle systems and beam effects to create a dynamic and visually striking effect that reacts to the character's movements.",
    media: [],
    links: []
  },
  {
    id: "lightspeed-dash",
    category: "vfx",
    title: "Lightspeed Dash",
    year: "2024",
    summary: "A fast-moving dash effect with a trail of light.",
    thumb: "media/vfx/Dash.png",
    tags: ["ParticleEmitter", "Beams", "Trails", "Attachments"],
    description: "This effect was created for a RNG game, as one of the rare dash effects. The lightspeed dash combines multiple particle systems and beam effects to create a dynamic and visually striking effect that reacts to the character's movements.",
    media: [],
    links: []
  },

  /* ================ BUILDING / MODELING ================ */
  {
    id: "hat-ugc",
    category: "building",
    title: "Hat UGC",
    year: "2026",
    badge: "Featured",
    summary: "Stylised hat created for the Roblox UGC program.",
    thumb: "media/building/hat.png",
    tags: ["Blender", "Studio", "PBR Textures", "Low-poly"],
    description: "This stylised hat was created for the Roblox UGC program. It features a low-poly design with PBR textures, optimized for performance in Roblox Studio, and a cartoony cell shaded look. The hat is designed to be visually appealing while maintaining a low part count to ensure smooth performance on all devices.",
    highlights: [
      "Stylised low-poly design with PBR textures",
      "Optimized for performance in Roblox Studio - low part count and efficient use of materials",
      "Cartoony cell shaded look - visually appealing while maintaining a low part count"
    ],
    media: [],
    links: []
  },

];
