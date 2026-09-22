// Product catalogue for Jusrsmartkart home storage organizers
export const formatINR = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

export const PRODUCTS = [
  {
    id: "jusrsmartkart-storage-box",
    name: "Jusrsmartkart Foldable Storage Box",
    colorway: "Black with tan trim",
    price: 250,
    mrp: 500,
    rating: 4.8,
    reviews: 214,
    badge: "Bestseller",
    tone: "charcoal",
    short:
      "A roomy fabric organizer with a lift-up lid, soft lining and a front label window for effortless sorting.",
    image: "/ProductImage/IMG_3460.jpeg",
    gallery: [
      "/ProductImage/IMG_3460.jpeg",
      "/ProductImage/IMG_3461.jpeg",
      "/ProductImage/IMG_3462.jpeg",
      "/ProductImage/IMG_3463.jpeg",
      "/ProductImage/IMG_3465.jpeg",
      "/ProductImage/IMG_3466.jpeg",
      "/ProductImage/IMG_3467.jpeg",
    ],
    dimensions: "40 × 29 × 23 cm",
    material: "Durable fabric with reinforced trim",
    highlights: [
      "Lift-up lid for quick access",
      "Roomy compartment for clothes and linens",
      "Front label window for easy sorting",
      "Folds flat when not in use",
    ],
  },
];

export const FEATURES = [
  {
    icon: "hook",
    title: "Easy access",
    text: "Lift the lid and see what you need at a glance.",
  },
  {
    icon: "mesh",
    title: "Neat sorting",
    text: "Keep seasonal pieces and daily essentials together.",
  },
  {
    icon: "zip",
    title: "Protective lid",
    text: "A covered top helps keep stored items dust-free.",
  },
  {
    icon: "structure",
    title: "Roomy interior",
    text: "Use the generous compartment for linens, toys or clothing.",
  },
  {
    icon: "side",
    title: "Stackable shape",
    text: "Build a tidy storage system on shelves or in wardrobes.",
  },
  {
    icon: "portable",
    title: "Folds flat",
    text: "Store it away neatly when the organizer is not in use.",
  },
];

export const getById = (id) => PRODUCTS.find((p) => p.id === id);
export const getFeatured = () => PRODUCTS;
