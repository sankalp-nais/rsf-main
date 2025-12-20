export const products: Record<string, ProductData> = {
  /* -------------------------------------------------------
     PRODUCT 1 — Aluminium Foil
  ------------------------------------------------------- */
  "aluminium-foil": {
    title: "Alu-Freshh Aluminium Foil",
    description:
      "Premium quality aluminium foil available in various sizes for cooking, baking, and food storage.",

    images: [
      { src: "/assets/images/Aluminium foil1.jpg", alt: "Standard Foil" },
      { src: "/assets/images/Aluminium foil2.jpg", alt: "Foil Usage" },
      { src: "/assets/images/Aluminium foil3.jpg", alt: "Foil Packaging" },
    ],

    compare_images: [
      { src: "/assets/images/foil_After.jpg", alt: "Standard Foil" },
      { src: "/assets/images/foil_before.jpg", alt: "Alu-Freshh Foil" },
    ],

    productOptions: [
      { id: 1, title: "Alu-Freshh Aluminium Foil", count: 11 },
      { id: 2, title: "Alu-Freshh Aluminium Foil Bulk", count: 2 },
      { id: 3, title: "Alu-Freshh Extra Thick Foil", count: 1 },
      { id: 4, title: "Alu-Freshh Foil Backed Paper", count: 1 },
    ],

    productsByOption: {
      1: {
        title: "Alu-Freshh Aluminium Foil",
        description: "Premium aluminium foil in multiple lengths for cooking, baking and storage.",
        features: [
          "Food-grade quality aluminium",
          "Heat resistant up to 600°C",
          "Moisture and odor barrier",
          "Perfect for cooking, grilling, and baking",
          "Recyclable and eco-friendly",
          "Easy to tear and wrap",
        ],
        variations: [
          { id: 1, length: "9 meters", packaging: "Wrapped with protective cover" },
          { id: 2, length: "18 meters", packaging: "Standard box" },
          { id: 3, length: "72 meters", packaging: "Box with plastic cutter" },
        ],
        specifications: [
          { label: "Material", value: "Food Grade Aluminium" },
          { label: "Thickness", value: "11 microns" },
        ],
      },

      2: {
        title: "Alu-Freshh Aluminium Foil Bulk",
        description: "Bulk rolls designed for commercial kitchens and high-usage environments.",
        features: [
          "Bulk rolls for commercial kitchens",
          "Cost-effective packaging",
        ],
        variations: [
          { id: 1, length: "200 meters", packaging: "Industrial carton" },
          { id: 2, length: "500 meters", packaging: "Bulk box" },
        ],
        specifications: [
          { label: "Usage", value: "Commercial / Bulk" },
        ],
      },

      3: {
        title: "Alu-Freshh Extra Thick Foil",
        description: "Extra-thick heavy-duty foil with superior puncture resistance.",
        features: [
          "Extra thick foil for heavy-duty use",
          "High puncture resistance",
        ],
        variations: [
          { id: 1, length: "25 meters", packaging: "Premium box", thickness: "14 microns" },
        ],
        specifications: [
          { label: "Thickness", value: "14 microns" },
        ],
      },

      4: {
        title: "Alu-Freshh Foil Backed Paper",
        description: "Foil-backed paper product for insulation and heat retention applications.",
        features: [
          "Foil-backed paper for insulation",
          "Superior heat retention",
        ],
        variations: [
          { id: 1, length: "10 meters", packaging: "Paper roll box" },
        ],
        specifications: [
          { label: "Material", value: "Aluminium + Food Grade Paper" },
        ],
      },
    },
  },

  /* -------------------------------------------------------
     PRODUCT 2 — Cling Film
  ------------------------------------------------------- */
  "cling-film": {
    title: "Cling Film — FreshWrap",
    description:
      "High-quality stretchable cling film ideal for food wrapping and storage.",

    images: [
      { src: "/assets/images/clingfilm5.jpg", alt: "Cling Film Roll" },
      { src: "/assets/images/clingfilm4.jpg", alt: "Cling Film Roll" },
      { src: "/assets/images/clingfilm1.jpg", alt: "Cling Film Roll" },
      { src: "/assets/images/clingfilm (2).jpg", alt: "Cling Film Roll" },
    ],

    compare_images: [
      { src: "/assets/images/After_cling.jpg", alt: "Standard Cling" },
      { src: "/assets/images/Before_cling.jpg", alt: "Alu-Freshh Cling" },
    ],

    productOptions: [
      { id: 1, title: "Cling Film 30m", count: 5 },
      { id: 2, title: "Cling Film 50m", count: 3 },
    ],

    productsByOption: {
      1: {
        title: "Cling Film 30m",
        description: "Food-safe stretch film ideal for everyday home use (30m).",
        features: [
          "Food-safe stretch film",
          "Excellent sealing strength",
        ],
        variations: [
          { id: 1, length: "30 meters", packaging: "Box packaging" },
        ],
        specifications: [
          { label: "Material", value: "Food Grade PVC" },
        ],
      },

      2: {
        title: "Cling Film 50m",
        description: "Longer, high-elasticity roll for family or extended use (50m).",
        features: [
          "Longer roll for family use",
          "High elasticity",
        ],
        variations: [
          { id: 1, length: "50 meters", packaging: "Box packaging" },
        ],
        specifications: [
          { label: "Thickness", value: "9–12 microns" },
        ],
      },
    },
  },

  /* -------------------------------------------------------
     PRODUCT 3 — Toilet Roll
  ------------------------------------------------------- */
  "toilet-roll": {
    title: "Toilet Roll — FreshWrap",
    description:
      "Premium toilet tissue combining comfort, strength, and hygiene.",

    images: [
      { src: "/assets/images/toiletroll2.jpg", alt: "Toilet Roll" },
      { src: "/assets/images/toiletroll.jpg", alt: "Toilet Roll" },
      { src: "/assets/images/toiletroll1.jpg", alt: "Toilet Roll" },
    ],

    compare_images: [
      { src: "/assets/images/toiletrollAfter.jpg", alt: "Standard Toilet Roll" },
      { src: "/assets/images/toiletrollBefore.jpg", alt: "Alu-Freshh Toilet Roll" },
    ],

    productOptions: [
      { id: 1, title: "Toilet Roll Standard", count: 5 },
    ],

    productsByOption: {
      1: {
        title: "Toilet Roll Standard",
        description: "Soft, strong toilet tissue available in standard and larger sheet counts.",
        features: [
          "Soft and gentle",
          "Strong when wet",
          "Septic-safe",
        ],
        variations: [
          { id: 1, length: "200 sheets/roll", packaging: "2-ply" },
          { id: 2, length: "400 sheets/roll", packaging: "3-ply" },
        ],
        specifications: [
          { label: "Material", value: "100% Virgin Pulp" },
        ],
      },
    },
  },

  /* -------------------------------------------------------
     PRODUCT 4 — Food Wrapping Paper
  ------------------------------------------------------- */
  "food-wrapping-paper": {
    title: "Food Wrapping Paper",
    description:
      "Attractive printed food wrapping paper perfect for professional food presentation and branding.",

    images: [
      { src: "/assets/images/foodwrapper.jpg", alt: "food wrapping paper" },
      { src: "/assets/images/foodwrapper1.jpg", alt: "food wrapping paper" },
      { src: "/assets/images/foodwrapper3.jpg", alt: "food wrapping paper" },
      { src: "/assets/images/foodwrapper7.jpg", alt: "food wrapping paper" },
    ],

    compare_images: [
      { src: "/assets/images/toilet-roll.png", alt: "Standard Paper" },
      { src: "/assets/images/toilet-roll.png", alt: "Alu-Freshh Paper" },
    ],

    productOptions: [
      { id: 1, title: "Alu-Freshh Food Wrapping Printed Paper", count: 2 },
      { id: 2, title: "Alu-Freshh Food Wrapping Plain Paper", count: 2 },
    ],

    productsByOption: {
      1: {
        title: "Alu-Freshh Food Wrapping Printed Paper",
        description: "Attractive printed food wrapping paper perfect for professional food presentation and branding.",
        features: [
          "Eye-catching food-safe prints",
          "Grease resistant",
          "Professional appearance",
          "Brand promotion ready",
          "Customizable designs",
          "Food-safe printing ink",
        ],
        variations: [
          { id: 1, length: "", packaging: "Roll-Format" },
          { id: 2, length: "", packaging: "Pre-cut stacked sheets" },
        ],
        specifications: [
          { label: "Material", value: "Food Grade Paper" },
          { label: "Thickness", value:"38-42 GSM"},
          { label: "Packing", value:"Protective wrapping"},

        ],
      },

      2:  {
        title: "Alu-Freshh Food Wrapping Plain Paper",
        description: "Plain food wrapping paper offering simple, economical, and effective food packaging solution.",
        features: [
          "Unprinted design",
          "Maximum versatility",
          "Economic choice",
          "Grease resistant",
          "Hygienic packaging",
          "Clean appearance",
        ],
        variations: [
          { id: 1, length: "", packaging: "Roll with cutter" },
          { id: 2, length: "", packaging: "Pre-cut clean stack" },
        ],
        specifications: [
          { label: "Material", value: "Food Grade Paper" },
          { label: "Thickness", value:"38-42 GSM"},
          { label: "Packing", value:"Protective wrapping"},

        ],
      },
    },
  },

  /* -------------------------------------------------------
     PRODUCT 5 — Pro Foil
  ------------------------------------------------------- */
  "pro-foil": {
    title: "Pro-Foil",
    description:
      "Professional-grade extra-strength aluminium foil for commercial kitchen applications.",

    images: [
      { src: "/assets/images/profoil3.jpeg", alt: "Pro-Foil" },
      { src: "/assets/images/profoil2.jpg", alt: "Pro-Foil" },
      { src: "/assets/images/profoil1.jpg", alt: "Pro-Foil" },
    ],

    compare_images: [
      { src: "/assets/images/profoilafter.jpg", alt: "Standard ProFoil" },
      { src: "/assets/images/profoilbefore.jpg", alt: "Alu-Freshh ProFoil" },
    ],

    productOptions: [
      { id: 1, title: "Pro Foil", count: 1 },
    ],

    productsByOption: {
      1: {
        title: "Pro Foil",
        description: "Professional-grade extra-strength aluminium foil for commercial kitchen applications.",
        features: [
          "Commercial grade quality",
          "Extra strength construction",
          "Heavy-duty use approved",
          "High heat resistance",
          "Puncture proof",
          "Professional quality",
        ],
        variations: [
          { id: 1, length: "30 meters", packaging: "Commercial Lengths" },
        ],
        specifications: [
          { label: "Material", value: "Premium Aluminium" },
          { label: "Thickness", value: "20 microns" },
           { label: "Packaging", value: "Industrial packaging" },
        ],
      },
    },
  },

  /* -------------------------------------------------------
     PRODUCT 6 — Tissues
  ------------------------------------------------------- */
  "tissues": {
    title: "Tissues",
    description:
      "Soft, absorbent napkin tissues ideal for dining and everyday use.",

    images: [
      { src: "/assets/images/tissue1.jpg", alt: "Tissues" },
      { src: "/assets/images/tissue2.jpg", alt: "Tissues" },
      { src: "/assets/images/tissue.jpg", alt: "Tissues" },
    ],

    compare_images: [
      { src: "/assets/images/tissue_After.jpg", alt: "Standard Tissues" },
      { src: "/assets/images/tissue_Before.jpg", alt: "Alu-Freshh Tissues" },
    ],

    productOptions: [
      { id: 1, title: "Napkin Tissues", count: 2 },
      { id: 2, title: "Printed Napkin Tissues", count: 2 },
      { id: 3, title: "Facial Tissues", count: 2 },
      { id: 4, title: "Alu-Lite Napkin Tissues", count: 2 },
    ],

    productsByOption: {
      1: {
        title: "Napkin Tissues",
        description: "Soft, absorbent napkin tissues ideal for dining and everyday use.",
        features: [
          "Ultra-soft texture",
          "High absorbency",
          "2-ply quality",
          "Hygienic",
          "Eco-Friendly",
          "Resturant Quality",
        ],
        variations: [
          { id: 1, length: "", packaging: "Roll-Format" },
          { id: 2, length: "", packaging: "Pre-cut stacked sheets" },
        ],
        specifications: [
          { label: "Material", value: "Virgin pulp" },
          { label: "Thickness", value:"2-ply"},
          { label: "Packing", value:"Wrapped packs"},

        ],
      },

      2:  {
        title: "Alu-Freshh Food Wrapping Plain Paper",
        description: "Plain food wrapping paper offering simple, economical, and effective food packaging solution.",
        features: [
          "Unprinted design",
          "Maximum versatility",
          "Economic choice",
          "Grease resistant",
          "Hygienic packaging",
          "Clean appearance",
        ],
        variations: [
          { id: 1, length: "", packaging: "Roll with cutter" },
          { id: 2, length: "", packaging: "Pre-cut clean stack" },
        ],
        specifications: [
          { label: "Material", value: "Virgin pulp with safe ink" },
          { label: "Thickness", value:"2-ply"},
          { label: "Packing", value:"Custom packs"},

        ],
      },

      3:  {
        title: "Facial Tissues",
        description: "Extra soft facial tissues gentle on skin, perfect for daily use.",
        features: [
          "Dermatologically tested",
          "Ultra-soft",
          "Strong absorption",
          "Skin gentle",
          "Compact box",
          "Hypoallergenic",
        ],
        variations: [
          { id: 1, length: "", packaging: "100 tissues/box" },
          { id: 2, length: "", packaging: "200 tissues/box" },
        ],
        specifications: [
          { label: "Material", value: "Premium virgin pulp" },
          { label: "Thickness", value:"2-ply"},
          { label: "Packing", value:"Pop-up boxes"},

        ],
      },

      4:  {
        title: "Alu-Lite Napkin Tissues",
        description: "Quality Alu-Lite brand napkin tissues offering great value for money.",
        features: [
          "Value pricing",
          "Good absorbency",
          "Soft texture",
          "Daily use",
          "Family packs",
          "Reliable quality",
        ],
        variations: [
          { id: 1, length: "", packaging: "150 sheets/pack" },
          { id: 2, length: "", packaging: "300 sheets/pack" },
        ],
        specifications: [
          { label: "Material", value: "Quality pulp" },
          { label: "Thickness", value:"2-ply"},
          { label: "Packing", value:"Economy packs"},

        ],
      },
    },
  },

  /* -------------------------------------------------------
     PRODUCT 7 — Alu Lite
  ------------------------------------------------------- */
  "alu-lite": {
    title: "Alu Lite",
    description:
      "Eco-friendly Alu-Lite aluminium foil for environmentally conscious users seeking quality and sustainability.",

    images: [
      { src: "/assets/images/alulite.jpg", alt: "Alu-Lite" },
      { src: "/assets/images/alulite1.jpg", alt: "Alu-Lite" },
      { src: "/assets/images/alulite.jpg", alt: "Alu-Lite" },
    ],

    compare_images: [
      { src: "/assets/images/foil_after.jpg", alt: "Standard Foil" },
      { src: "/assets/images/foil_before.jpg", alt: "Alu-Freshh Foil" },
    ],

    productOptions: [
      { id: 1, title: "Alu-Lite Eco Foil", count: 3 },
    ],

    productsByOption: {
      1: {
        title: "Alu-Lite Eco Foil",
        description: "Eco-friendly Alu-Lite aluminium foil for environmentally conscious users seeking quality and sustainability.",
        features: [
          "Eco-friendly material",
          "Sustainable and recyclable",
          "Good quality performance",
          "Cost-effective choice",
          "Daily use suitable",
          "Green choice for environment",
        ],
        variations: [
          { id: 1, length: "72 meters", packaging: "Recyable Box" },
          { id:2, length: "75 meters", packaging: "Eco-Friendly Box"},
          { id: 3, length: "1 Kg", packaging: "Eco-Bulk Packaging", },
        ],
        specifications: [
          { label: "Material", value: "Premium Aluminium" },
          { label: "Thickness", value: "9-11 microns" },
          { label: "Packaging", value: "Eco-friendly box" },
        ],
      },
    },
  },
  

  /* -------------------------------------------------------
     PRODUCT 8 — Inter Folded Sheets
  ------------------------------------------------------- */
  "inter-folded-sheets": {
    title: "Inter Folded Sheets",
    description:
      "Eco-friendly Alu-Lite aluminium foil for environmentally conscious users seeking quality and sustainability.",

    images: [
      { src: "/assets/images/foldedsheets.jpg", alt: "Interfolded" },
      { src: "/assets/images/foldedsheets4.jpg", alt: "Interfolded" },
      { src: "/assets/images/foldedsheets1.jpg", alt: "Interfolded" },
      { src: "/assets/images/foldedsheets6.jpg", alt: "Interfolded" },
    ],

    compare_images: [
      { src: "/assets/images/interfoldedsheets.jpg", alt: "Standard Sheets" },
      { src: "/assets/images/interfoldedsheets1.jpg", alt: "Alu-Freshh Sheets" },
    ],

    productOptions: [
      { id: 1, title: "Alu-Freshh Inter-Folded Sheets", count: 3 },
    ],

    productsByOption: {
      1: {
        title: "Alu-Freshh Inter-Folded Sheets",
        description: "Pre-cut inter-folded aluminium sheets for convenient one-at-a-time dispensing in homes and commercial kitchens.",
        features: [
          "Inter-folded design",
          "One-at-a-time dispensing",
          "Hygienic handling",
          "Uniform sheet sizes",
          "Time-saving convenience",
          "Professional quality",
        ],
        variations: [
          { id: 1, length: "200 sheets per pack", packaging: "Pop-up dispencer Box" },
          { id:2, length: "500 sheets per pack", packaging: "Commercial dispencer Box"},
          { id: 3, length: "32x27cm", packaging: "Large Dispencer Box", },
        ],
        specifications: [
          { label: "Material", value: "Food Grade Aluminium" },
          { label: "Thickness", value: "11-14 microns" },
          { label: "Packaging", value: "Pop-up dispenser box" },
        ],
      },
    },
  },

   /* -------------------------------------------------------
     PRODUCT 9 — Foil Container
  ------------------------------------------------------- */
  "foil-container": {
    title: "Foil Container",
    description:
      "Premium aluminium foil casserole containers perfect for serving, cooking, and storing hot dishes.",

    images: [
      { src: "/assets/images/container1.jpg", alt: "Containers" },
      { src: "/assets/images/container3.jpg", alt: "Containers" },
      { src: "/assets/images/container.jpg", alt: "Containers" },
      { src: "/assets/images/container5.jpg", alt: "Containers" },
    ],

    compare_images: [
      { src: "/assets/images/After.jpg", alt: "Standard Containers" },
      { src: "/assets/images/Before.jpg", alt: "Alu-Freshh Containers" },
    ],

    productOptions: [
      { id: 1, title: "Alu-Freshh Foil Casserole", count: 1 },
      { id: 2, title: "Alu Lite Casserole", count: 1 },
      { id: 3, title: "Brandroof Casserole", count: 1 },
    ],

    productsByOption: {
      1: {
        title: "Alu-Freshh Foil Casserole",
        description: "Pre-cut inter-folded aluminium sheets for convenient one-at-a-time dispensing in homes and commercial kitchens.",
        features: [
          "Oven safe up to 200°C",
          "Elegant design",
          "Perfect for casseroles and serving",
          "Disposable convenience",
          "Excellent heat retention",
          "Stackable storage",
        ],
        variations: [
          { id: 1, length: "", packaging: "Various Capabilities" },
        ],
        specifications: [
          { label: "Material", value: "Food Grade Aluminium" },
          { label: "Thickness", value: "55 microns" },
          { label: "Packaging", value: "Nested stacks" },
        ],
      },

      2: {
        title: "Alu Lite Casserole",
        description: "Lightweight yet durable Alu-Lite casserole containers for everyday use.",
        features: [
          "Lightweight design",
          "Cost-effective",
          "Good heat retention",
          "Disposable",
          "Oven compatible",
          "Easy handling",
        ],
        variations: [
          { id: 1, length: "", packaging: "Standard Sizes" },
        ],
        specifications: [
          { label: "Material", value: "Food Grade Aluminium" },
          { label: "Thickness", value: "45 microns" },
          { label: "Packaging", value: "Stack Packing" },
        ],
      },

       3: {
        title: "Brandroof Casserole",
        description: "Premium BrandRoof casserole containers offering superior quality and professional design.",
        features: [
          "Premium quality",
          "Enhanced durability",
          "Professional appearance",
          "Leak-proof design",
          "High-end finish",
          "Reliable performance",
        ],
        variations: [
          { id: 1, length: "", packaging: "Premium Sizes" },
        ],
        specifications: [
          { label: "Material", value: " Premium Food Grade Aluminium" },
          { label: "Thickness", value: "60 microns" },
          { label: "Packaging", value: "Quality Packing" },
        ],
      },
    },
  },


};
