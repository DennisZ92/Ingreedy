const recipes = [
    { 
        name: "Tortellini in Sahnesoße", 
        image: "images/Tortellini.jpg", 
        link: "https://www.chefkoch.de/rezepte/1342861239100533/Tortellini-alla-panna.html",
        tags: ["Hauptgericht"],
        ingredients: [
            { name: "Tortellini", amount: 500, unit: "g" }, 
            { name: "Kochschinken", amount: 200, unit: "g" }, 
            { name: "Butter", amount: 1, unit: "EL" }, 
            { name: "Sahne", amount: 600, unit: "ml" }, 
            { name: "Eigelb", amount: 2, unit: "Stk" }, 
            { name: "Käse", amount: 120, unit: "g" }, 
            { name: "Muskat", amount: 1, unit: "TL" }, 
            { name: "Salz", amount: 1, unit: "TL" }
        ]
    },
    { 
        name: "Shakshuka", 
        image: "images/shakshuka.jpg", 
        link: "https://feinschmeckerle.de/2017/03/19/shakshuka-kitchen-impossible/",
        tags: ["Hauptgericht", "Low-Carb"],
        ingredients: [
            { name: "Olivenöl", amount: 3, unit: "EL" },
            { name: "Zwiebel", amount: 1, unit: "Stk" },
            { name: "Knoblauch", amount: 1, unit: "Zehe" },
            { name: "Paprika", amount: 1, unit: "Stk" },
            { name: "gehackte Tomate", amount: 1, unit: "Dose" },
            { name: "Tomatenmark", amount: 2, unit: "EL" },
            { name: "Kreuzkümmel", amount: 1, unit: "TL" },
            { name: "Paprikapulver", amount: 1, unit: "TL" },
            { name: "Salz", amount: 1, unit: "TL" },
            { name: "Chilipulver", amount: 1, unit: "Prise" },
            { name: "Pfeffer", amount: 1, unit: "Prise" },
            { name: "Ei", amount: 4, unit: "Stk" },
            { name: "Petersilie", amount: 0.5, unit: "Bund" }
        ]
    },
    { 
        name: "Wraps", 
        image: "images/wraps.jpg", 
        link: "https://amerikanisch-kochen.de/wraps-mit-hahnchenbrust-wraps-with-chickenbreast/1886",
        tags: ["Hauptgericht", "High-protein", "Snack"],
        ingredients: [
            { name: "Hähnchenbrust", amount: 400, unit: "g" },
            { name: "Olivenöl", amount: 3, unit: "EL" },
            { name: "Tomate", amount: 1, unit: "Stk" },
            { name: "Salat", amount: 1, unit: "Kopf" },
            { name: "Paprika", amount: 1, unit: "Stk" },
            { name: "Mayonnaise", amount: 100, unit: "g" },
            { name: "Zitronensaft", amount: 1, unit: "EL" },
            { name: "Zwiebel", amount: 1, unit: "Stk" },
            { name: "Knoblauch", amount: 1, unit: "Zehe" },
            { name: "Paprikapulver", amount: 0.5, unit: "TL" },
            { name: "Cayenne-Pfeffer", amount: 0.25, unit: "TL" },
            { name: "Salz", amount: 1, unit: "Prise" },
            { name: "Pfeffer", amount: 1, unit: "Prise" },
            { name: "Tortilla", amount: 2, unit: "Stk" }
        ]
    },
    { 
        name: "Mozzarella Hühnchen", 
        image: "images/Mozzarella_Huehnchen.jpg", 
        link: "https://littlespicejar.com/30-minute-mozzarella-chicken/?utm_content=bufferfeeae&utm_medium=social&utm_source=pinterest.com&utm_campaign=buffer",
        tags: ["Hauptgericht", "High-protein","Low-Carb"],
        ingredients: [
            { name: "Hähnchenbrust", amount: 600, unit: "g" },
            { name: "Olivenöl", amount: 1, unit: "EL" },
            { name: "Knoblauch", amount: 1, unit: "Zehe" },
            { name: "Zwiebel", amount: 2, unit: "Stk" },
            { name: "Tomate", amount: 4, unit: "Stk" },
            { name: "Italienische Kräuter", amount: 0.5, unit: "TL" },
            { name: "Mozzarella", amount: 200, unit: "g" }
        ]
    },
    { 
        name: "Zwiebelhühnchen", 
        image: "images/zwiebelhuehnchen.jpg", 
        link: "https://www.crunchycreamysweet.com/french-onion-roasted-chicken-recipe/",
        tags: ["Hauptgericht", "High-protein", "Low-Carb"],
        ingredients: [
            { name: "Hähnchenbrust", amount: 400, unit: "g" }, 
            { name: "Butter", amount: 1, unit: "EL" }, 
            { name: "Olivenöl", amount: 2, unit: "EL" }, 
            { name: "Zwiebel", amount: 3, unit: "Stk" }, 
            { name: "Hühnerbrühe", amount: 1, unit: "L" }, 
            { name: "Stärke", amount: 1, unit: "EL" }, 
            { name: "Salz", amount: 1, unit: "Prise" }, 
            { name: "Pfeffer", amount: 1, unit: "Prise" }, 
            { name: "Paprikapulver", amount: 1, unit: "Prise" }
        ]
    },
    { 
        name: "Pizzasuppe", 
        image: "images/Pizzasuppe.jpg", 
        link: "https://www.essen-ohne-kohlenhydrate.info/rezepte/pizzasuppe/",
        tags: ["Hauptgericht", "Low-Carb"],
        ingredients: [
            { name: "Zwiebel", amount: 2, unit: "Stk" }, 
            { name: "Olivenöl", amount: 4, unit: "EL" }, 
            { name: "Hackfleisch", amount: 500, unit: "g" }, 
            { name: "Paprika", amount: 2, unit: "Stk" }, 
            { name: "Zucchini", amount: 2, unit: "Stk" }, 
            { name: "Champignon", amount: 200, unit: "g" }, 
            { name: "Tomate", amount: 320, unit: "g" }, 
            { name: "Passierte Tomaten", amount: 400, unit: "g" }, 
            { name: "Sahne", amount: 120, unit: "ml" }, 
            { name: "Frischkäse", amount: 120, unit: "g" }, 
            { name: "Oregano", amount: 4, unit: "Prise" }, 
            { name: "Gemüsebrühe", amount: 600, unit: "ml" }, 
            { name: "Basilikum", amount: 1, unit: "Bund" }, 
            { name: "Salz", amount: 1, unit: "Prise" }, 
            { name: "Pfeffer", amount: 1, unit: "Prise" }, 
            { name: "Italienische Kräuter", amount: 1, unit: "Prise" }
        ]
    },
    { 
        name: "Zitronenhähnchen", 
        image: "images/Zitronenhaehnchen.png", 
        link: "https://www.youtube.com/watch?v=a_B_vL3iHQM&ab_channel=JamieOliver",
        tags: ["Hauptgericht", "Low-Carb","High-Protein"],
        ingredients: [
            { name: "Olivenöl", amount: 3, unit: "EL" }, 
            { name: "Hähnchenbrust", amount: 400, unit: "g" }, 
            { name: "Zitrone", amount: 2, unit: "Stk" }, 
            { name: "Zwiebel", amount: 1, unit: "Stk" }, 
            { name: "Knoblauch", amount: 2, unit: "Zehe" }, 
            { name: "Tomatenmark", amount: 1, unit: "EL" }, 
            { name: "Petersilie", amount: 1, unit: "Bund" }, 
            { name: "Pfeffer", amount: 1, unit: "Prise" }, 
            { name: "Paprikapulver", amount: 1, unit: "Prise" }, 
            { name: "Salz", amount: 1, unit: "Prise" }, 
            { name: "Kurkuma", amount: 1, unit: "Prise" }, 
            { name: "Cayenne-Pfeffer", amount: 1, unit: "Prise" }
        ]
    },
    { 
        name: "Quesadillas", 
        image: "images/quesadillas.jpg", 
        link: "https://www.youtube.com/watch?v=TTagMrBZ1z8&ab_channel=LauraintheKitchen",
        tags: ["Hauptgericht", "Snack", "High-protein"],
        ingredients: [
            { name: "Hähnchenbrust", amount: 400, unit: "g" }, 
            { name: "Tortilla", amount: 8, unit: "Stk" }, 
            { name: "Paprika", amount: 3, unit: "Stk" }, 
            { name: "Zwiebel", amount: 1, unit: "Stk" }, 
            { name: "geriebener Käse", amount: 200, unit: "g" }, 
            { name: "BBQ-Rub", amount: 1, unit: "EL" }, 
            { name: "Limette", amount: 1, unit: "Stk" }, 
            { name: "Petersilie", amount: 1, unit: "Bund" }
        ]
    },

    {
        name: "Garlic Chilli Noodles",
        image: "images/Garlic_Chilli_Noodles.png",
        link: "https://www.youtube.com/watch?v=bG8KpOvN5V8",
        tags: ["Hauptgericht"],
        ingredients: [
            { name: "Tofu", amount: 100, unit: "g" },
            { name: "Knoblauch", amount: 5, unit: "Zehe" },
            { name: "Ingwer", amount: 20, unit: "g" },
            { name: "Frühlingszwiebel", amount: 3, unit: "Stk" },
            { name: "Avocadoöl", amount: 3, unit: "EL" },
            { name: "Sojasoße dunkel", amount: 3, unit: "TL" },
            { name: "Nudeln", amount: 150, unit: "g" },
            { name: "Gochugaru", amount: 1, unit: "EL" },
            { name: "Vegane Austernsauce", amount: 1, unit: "EL" }
        ]
    },
    {
        name: "Baked Potato",
        image: "images/Baked_Potato.png",
        link: "",
        tags: ["Beilage"],
        ingredients: [
            { name: "Kartoffel", amount: 1, unit: "Stk" },
            { name: "Olivenöl", amount: 1, unit: "EL" },
            { name: "Salz", amount: 1, unit: "TL" }
        ]
    },
    {
        name: "Southwest Wrap",
        image: "images/Southwest_Wrap.png",
        link: "https://tastesbetterfromscratch.com/crispy-southwest-wrap/",
        tags: ["Hauptgericht"],
        ingredients: [
            { name: "Hackfleisch", amount: 454, unit: "g" },
            { name: "Salz", amount: 1, unit: "Prise" },
            { name: "Pfeffer", amount: 1, unit: "Prise" },
            { name: "Chilipulver", amount: 2.5, unit: "TL" },
            { name: "Kreuzkümmel", amount: 1.5, unit: "TL" },
            { name: "Knoblauchpulver", amount: 0.5, unit: "TL" },
            { name: "Wasser", amount: 2, unit: "EL" },
            { name: "Schwarze Bohnen", amount: 1, unit: "Dose" },
            { name: "Mais", amount: 150, unit: "g" },
            { name: "Paprika", amount: 0.5, unit: "Stk" },
            { name: "Frühlingszwiebel", amount: 1, unit: "Stk" },
            { name: "Reis gekocht", amount: 200, unit: "g" },
            { name: "Cheddar", amount: 150, unit: "g" },
            { name: "Sour Cream", amount: 120, unit: "g" },
            { name: "Tortilla", amount: 8, unit: "Stk" }
        ]
    },
    {
        name: "Rosenkohl",
        image: "images/Rosenkohl.png",
        link: "",
        tags: ["Beilage"],
        ingredients: [
            { name: "Rosenkohl", amount: 500, unit: "g" },
            { name: "Bacon", amount: 150, unit: "g" },
            { name: "Knoblauch", amount: 2, unit: "Zehe" }
        ]
    },
    {
        name: "Mujadarra",
        image: "images/Mujadarra.png",
        link: "https://www.afamilyfeast.com/mujadarra/",
        tags: ["Beilage"],
        ingredients: [
            { name: "Linsen", amount: 200, unit: "g" },
            { name: "Reis", amount: 200, unit: "g" },
            { name: "Zwiebel", amount: 3, unit: "Stk" }
        ]
    },
    {
        name: "Gefüllte Zwiebeln",
        image: "images/Gefuellte_Zwiebeln.png",
        link: "https://www.facebook.com/watch/?ref=saved&v=1430710058837180",
        tags: ["Hauptgericht"],
        ingredients: [
            { name: "Zwiebel", amount: 6, unit: "Stk" },
            { name: "Hackfleisch", amount: 400, unit: "g" },
            { name: "Reis", amount: 180, unit: "g" },
            { name: "Petersilie", amount: 5, unit: "EL" },
            { name: "Tomatenmark", amount: 1, unit: "EL" },
            { name: "Paprikamark", amount: 2, unit: "TL" },
            { name: "Granatapfelsirup", amount: 6, unit: "EL" },
            { name: "Olivenöl", amount: 80, unit: "ml" },
            { name: "Butter", amount: 120, unit: "g" },
            { name: "Knoblauch", amount: 3, unit: "Zehe" },
            { name: "Thymian", amount: 4, unit: "Zweig" }
        ]
    },
    {
        name: "Tortellini Suppe",
        image: "images/Tortellini_Suppe.png",
        link: "https://www.facebook.com/watch/?ref=saved&v=2186372045178020",
        tags: ["Hauptgericht"],
        ingredients: [
            { name: "Hackfleisch", amount: 450, unit: "g" },
            { name: "Zwiebel", amount: 1, unit: "Stk" },
            { name: "Karotte", amount: 3, unit: "Stk" },
            { name: "Staudensellerie", amount: 3, unit: "Stange" },
            { name: "Pfeffer", amount: 0.5, unit: "TL" },
            { name: "Italienische Kräuter", amount: 2, unit: "TL" },
            { name: "Tomatenmark", amount: 3, unit: "EL" },
            { name: "Mehl", amount: 60, unit: "g" },
            { name: "Rinderbrühe", amount: 1700, unit: "ml" },
            { name: "Tortellini", amount: 570, unit: "g" },
            { name: "Sahne", amount: 480, unit: "ml" },
            { name: "Parmesan", amount: 50, unit: "g" },
            { name: "Spinat", amount: 120, unit: "g" }
        ]
    },
    {
        name: "Hühnchen Shawarma",
        image: "images/Huehnchen_Shawarma.png",
        link: "https://www.facebook.com/reel/1857379525184933",
        tags: ["Hauptgericht","High-Protein","Low-Carb"],
        ingredients: [
            { name: "Hähnchenschenkel", amount: 680, unit: "g" },
            { name: "Zitrone", amount: 2, unit: "Stk" },
            { name: "Knoblauch", amount: 6, unit: "Zehe" },
            { name: "Kreuzkümmel", amount: 1, unit: "EL" },
            { name: "Chilipulver", amount: 2, unit: "TL" },
            { name: "Paprikapulver", amount: 2, unit: "TL" },
            { name: "Kurkuma", amount: 1, unit: "TL" },
            { name: "Zwiebelpulver", amount: 1, unit: "TL" },
            { name: "Pfeffer", amount: 1, unit: "TL" },
            { name: "Salz", amount: 1, unit: "TL" },
            { name: "Tomatenmark", amount: 2, unit: "EL" },
            { name: "Griechischer Joghurt", amount: 180, unit: "g" },
            { name: "Zwiebel", amount: 1, unit: "Stk" },
            { name: "Petersilie", amount: 3, unit: "EL" },
            { name: "Knoblauchknolle", amount: 1, unit: "Stk" },
            { name: "Mayonnaise", amount: 3, unit: "EL" },
            { name: "Olivenöl", amount: 4, unit: "EL" }
        ]
    },
    {
        name: "Zwiebel Pasta",
        image: "images/Zwiebel_pasta.png",
        link: "https://www.facebook.com/watch/?ref=saved&v=1493500685009580",
        tags: ["Hauptgericht"],
        ingredients: [
            { name: "Zwiebel", amount: 3, unit: "Stk" },
            { name: "Knoblauch", amount: 2, unit: "Zehe" },
            { name: "Getrocknete Tomaten", amount: 100, unit: "g" },
            { name: "Sahne", amount: 200, unit: "ml" },
            { name: "Farfalle", amount: 500, unit: "g" },
            { name: "Petersilie", amount: 0.5, unit: "Bund" },
            { name: "Basilikum", amount: 0.5, unit: "Bund" },
            { name: "Zitronensaft", amount: 1, unit: "EL" }
        ]
    },
    {
        name: "Chilli Hühnchen",
        image: "images/Chilli_Huehnchen.png",
        link: "https://www.facebook.com/watch/?ref=saved&v=1844801169065888",
        tags: ["Hauptgericht","High-Protein"],
        ingredients: [
            { name: "Hähnchenbrust", amount: 600, unit: "g" },
            { name: "Ei", amount: 2, unit: "Stk" },
            { name: "Mehl", amount: 50, unit: "g" },
            { name: "Paprika", amount: 2, unit: "Stk" },
            { name: "Knoblauch", amount: 2, unit: "Zehe" },
            { name: "Chili", amount: 1, unit: "Stk" },
            { name: "Sojasoße", amount: 4, unit: "EL" },
            { name: "Tomatenmark", amount: 2, unit: "EL" },
            { name: "Reis", amount: 300, unit: "g" }
        ]
    },
    {
        name: "Paprikash",
        image: "images/Paprikash.png",
        link: "",
        tags: ["Hauptgericht","High-Protein"],
        ingredients: [
            { name: "Hähnchenbrust", amount: 600, unit: "g" },
            { name: "Zwiebel", amount: 2, unit: "Stk" },
            { name: "Paprika", amount: 2, unit: "Stk" },
            { name: "Paprikapulver", amount: 2, unit: "EL" },
            { name: "Chiliflocken", amount: 1, unit: "TL" },
            { name: "Gehackte Tomaten", amount: 425, unit: "g" },
            { name: "Hühnerbrühe", amount: 250, unit: "ml" },
            { name: "Sour Cream", amount: 150, unit: "g" },
            { name: "Nudeln", amount: 300, unit: "g" }
        ]
    },
    {
        name: "Reis Hack Pfanne",
        image: "images/Reis_Hack_Pfanne.png",
        link: "https://www.facebook.com/watch/?ref=saved&v=737544619315115",
        tags: ["Hauptgericht","High-Protein"],
        ingredients: [
            { name: "Tomatenmark", amount: 1, unit: "EL" },
            { name: "Taco-Gewürz", amount: 30, unit: "g" },
            { name: "Hackfleisch", amount: 500, unit: "g" },
            { name: "Rinderbrühe", amount: 750, unit: "ml" },
            { name: "geriebener Käse", amount: 70, unit: "g" },
            { name: "Reis", amount: 300, unit: "g" }
        ]
    },
    {
        name: "Gemüsedöner",
        image: "images/Gemuesedoener.png",
        link: "",
        tags: ["Hauptgericht"],
        ingredients: [
            { name: "Fladenbrot", amount: 1, unit: "Stk" },
            { name: "Salat", amount: 1, unit: "Kopf" },
            { name: "Naturjoghurt", amount: 200, unit: "g" },
            { name: "Hirtenkäse", amount: 200, unit: "g" },
            { name: "Knoblauch", amount: 2, unit: "Zehe" },
            { name: "Tomate", amount: 2, unit: "Stk" },
            { name: "Gurke", amount: 1, unit: "Stk" },
            { name: "Paprika", amount: 1, unit: "Stk" },
            { name: "Zucchini", amount: 1, unit: "Stk" },
            { name: "Zwiebel", amount: 1, unit: "Stk" },
            { name: "Tomatenmark", amount: 1, unit: "EL" },
            { name: "Dill", amount: 0.5, unit: "Bund" },
            { name: "Petersilie", amount: 0.5, unit: "Bund" }
        ]
    },
    {
        name: "Pasta Carbonara",
        image: "images/Carbonara.png",
        link: "",
        tags: ["Hauptgericht"],
        ingredients: [
            { name: "Sahne", amount: 200, unit: "ml" },
            { name: "Hühnerbrühe", amount: 200, unit: "ml" },
            { name: "Brokkoli", amount: 300, unit: "g" },
            { name: "Kirschtomate", amount: 250, unit: "g" },
            { name: "Bacon", amount: 125, unit: "g" },
            { name: "Nudeln", amount: 300, unit: "g" },
            { name: "Parmesan", amount: 60, unit: "g" }
        ]
    },
    {
        name: "Königsberger Klopse",
        image: "images/Koenigsberger_Klopse.png",
        link: "",
        tags: ["Hauptgericht"],
        ingredients: [
            { name: "Hackfleisch", amount: 450, unit: "g" },
            { name: "Zwiebel", amount: 1, unit: "Stk" },
            { name: "Senf", amount: 1, unit: "EL" },
            { name: "Semmelbrösel", amount: 40, unit: "g" },
            { name: "Petersilie", amount: 0.5, unit: "Bund" },
            { name: "Sahne", amount: 300, unit: "ml" },
            { name: "Kapern", amount: 50, unit: "g" },
            { name: "Rinderbrühe", amount: 12, unit: "g" }
        ]
    }
];

const ingredientCategories = {
    "Zwiebel": "Gemüse",
    "Frühlingszwiebel": "Gemüse",
    "Knoblauch": "Gemüse",
    "Knoblauchknolle": "Gemüse",
    "Paprika": "Gemüse",
    "Tomate": "Gemüse",
    "Kirschtomate": "Gemüse",
    "Zucchini": "Gemüse",
    "Champignon": "Gemüse",
    "Karotte": "Gemüse",
    "Staudensellerie": "Gemüse",
    "Spinat": "Gemüse",
    "Rosenkohl": "Gemüse",
    "Kartoffel": "Gemüse",
    "Salat": "Gemüse",
    "Gurke": "Gemüse",
    "Brokkoli": "Gemüse",
    "Chili": "Gemüse",
    "Ingwer": "Gemüse",
    "Petersilie": "Gemüse",
    "Basilikum": "Gemüse",
    "Dill": "Gemüse",
    "Thymian": "Gemüse",
    "Zitrone": "Gemüse",
    "Limette": "Gemüse",
    "Mais": "Gemüse",

    "Hähnchenbrust": "Fleisch",
    "Hähnchenschenkel": "Fleisch",
    "Hackfleisch": "Fleisch",
    "Kochschinken": "Fleisch",
    "Bacon": "Fleisch",
    "Tofu": "Fleisch",

    "Sahne": "Milchprodukte",
    "Käse": "Milchprodukte",
    "Mozzarella": "Milchprodukte",
    "Frischkäse": "Milchprodukte",
    "Cheddar": "Milchprodukte",
    "Sour Cream": "Milchprodukte",
    "Griechischer Joghurt": "Milchprodukte",
    "Naturjoghurt": "Milchprodukte",
    "Hirtenkäse": "Milchprodukte",
    "Parmesan": "Milchprodukte",
    "geriebener Käse": "Milchprodukte",
    "Butter": "Milchprodukte",
    "Ei": "Milchprodukte",
    "Eigelb": "Milchprodukte",
    "Mayonnaise": "Milchprodukte",

    "Tortellini": "Trockenwaren",
    "Tortilla": "Trockenwaren",
    "Nudeln": "Trockenwaren",
    "Farfalle": "Trockenwaren",
    "Reis": "Trockenwaren",
    "Reis gekocht": "Trockenwaren",
    "Linsen": "Trockenwaren",
    "Mehl": "Trockenwaren",
    "Semmelbrösel": "Trockenwaren",
    "Fladenbrot": "Trockenwaren",
    "Stärke": "Trockenwaren",

    "Salz": "Gewürze",
    "Pfeffer": "Gewürze",
    "Muskat": "Gewürze",
    "Kreuzkümmel": "Gewürze",
    "Paprikapulver": "Gewürze",
    "Chilipulver": "Gewürze",
    "Cayenne-Pfeffer": "Gewürze",
    "Kurkuma": "Gewürze",
    "Oregano": "Gewürze",
    "Italienische Kräuter": "Gewürze",
    "BBQ-Rub": "Gewürze",
    "Gochugaru": "Gewürze",
    "Knoblauchpulver": "Gewürze",
    "Zwiebelpulver": "Gewürze",
    "Chiliflocken": "Gewürze",
    "Taco-Gewürz": "Gewürze",

    "Tomatenmark": "Konserven",
    "Paprikamark": "Konserven",
    "Passierte Tomaten": "Konserven",
    "Gehackte Tomaten": "Konserven",
    "gehackte Tomate": "Konserven",
    "Getrocknete Tomaten": "Konserven",
    "Schwarze Bohnen": "Konserven",
    "Kapern": "Konserven",
    "Gemüsebrühe": "Konserven",
    "Hühnerbrühe": "Konserven",
    "Rinderbrühe": "Konserven",
    "Sojasoße dunkel": "Konserven",
    "Sojasoße": "Konserven",
    "Vegane Austernsauce": "Konserven",

    "Olivenöl": "Sonstiges",
    "Avocadoöl": "Sonstiges",
    "Zitronensaft": "Sonstiges",
    "Wasser": "Sonstiges",
    "Granatapfelsirup": "Sonstiges",
    "Senf": "Sonstiges"
};

const ingredientAliases = {
    "zwiebeln": "Zwiebel",
    "zwiebel": "Zwiebel",
    "frühlingszwiebeln": "Frühlingszwiebel",
    "frühlingszwiebel": "Frühlingszwiebel",
    "knoblauchzehe": "Knoblauch",
    "knoblauchzehen": "Knoblauch",
    "knoblauch": "Knoblauch",
    "paprikas": "Paprika",
    "paprika": "Paprika",
    "tomaten": "Tomate",
    "tomate": "Tomate",
    "kirschtomaten": "Kirschtomate",
    "kirschtomate": "Kirschtomate",
    "eier": "Ei",
    "ei": "Ei",
    "kartoffeln": "Kartoffel",
    "kartoffel": "Kartoffel",
    "zitronen": "Zitrone",
    "zitrone": "Zitrone",
    "limetten": "Limette",
    "limette": "Limette",
    "champignons": "Champignon",
    "champignon": "Champignon",
    "möhren": "Karotte",
    "möhre": "Karotte",
    "karotten": "Karotte",
    "karotte": "Karotte",
    "gurken": "Gurke",
    "gurke": "Gurke",
    "paprikamark": "Paprikamark",
    "tomatenmark": "Tomatenmark",
    "passierte tomaten": "Passierte Tomaten",
    "gehackte tomaten": "Gehackte Tomaten",
    "gehackte tomate": "gehackte Tomate",
    "getrocknete tomaten": "Getrocknete Tomaten",
    "hähnchenbrust": "Hähnchenbrust",
    "hühnerbrust": "Hähnchenbrust",
    "hackfleisch": "Hackfleisch",
    "tortillas": "Tortilla",
    "tortilla": "Tortilla",
    "nudel": "Nudeln",
    "nudeln": "Nudeln",
    "linsen": "Linsen",
    "reis": "Reis",
    "reis gekocht": "Reis gekocht",
    "sahne": "Sahne",
    "butter": "Butter",
    "käse": "Käse",
    "geriebener käse": "geriebener Käse",
    "mozzarella": "Mozzarella",
    "parmesan": "Parmesan",
    "frischkäse": "Frischkäse",
    "cheddar": "Cheddar",
    "sour cream": "Sour Cream",
    "naturjoghurt": "Naturjoghurt",
    "griechischer joghurt": "Griechischer Joghurt",
    "salz": "Salz",
    "pfeffer": "Pfeffer",
    "oregano": "Oregano",
    "basilikum": "Basilikum",
    "petersilie": "Petersilie",
    "dill": "Dill",
    "thymian": "Thymian",
    "olivenöl": "Olivenöl",
    "avocadoöl": "Avocadoöl",
    "zitronensaft": "Zitronensaft",
    "wasser": "Wasser",
    "senf": "Senf"
};

const categoryOrder = [
    "Gemüse",
    "Fleisch",
    "Milchprodukte",
    "Trockenwaren",
    "Gewürze",
    "Konserven",
    "Sonstiges"
];

const selectedRecipes = new Set();
const selectedTags = new Set();

const recipeShoppingList = {};
const manualShoppingList = {};

function normalizeIngredientName(name) {
    if (!name) return "";
    const cleaned = name.trim().toLowerCase();
    return ingredientAliases[cleaned] || name.trim();
}

function getCategoryForIngredient(name) {
    const normalizedName = normalizeIngredientName(name);
    return ingredientCategories[normalizedName] || "Sonstiges";
}

function renderRecipes() {
    const recipeList = document.getElementById("recipe-list");
    recipeList.innerHTML = "";

    recipes.forEach((recipe, index) => {
        if (selectedTags.size === 0 || recipe.tags.some(tag => selectedTags.has(tag))) {
            const recipeItem = document.createElement("div");
            recipeItem.classList.add("recipe-item");

            if (selectedRecipes.has(String(index))) {
                recipeItem.classList.add("selected");
            }

            recipeItem.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.name}" data-index="${index}">
                <div class="recipe-info">
                    <h3><a href="${recipe.link}" target="_blank">${recipe.name}</a></h3>
                </div>
                <div class="checkmark">&#10003;</div>
            `;

            recipeItem.querySelector("img").addEventListener("click", toggleRecipeSelection);
            recipeList.appendChild(recipeItem);
        }
    });
}

function toggleRecipeSelection(event) {
    const index = event.target.dataset.index;
    const recipeItem = event.target.closest(".recipe-item");

    if (selectedRecipes.has(index)) {
        selectedRecipes.delete(index);
        recipeItem.classList.remove("selected");
    } else {
        selectedRecipes.add(index);
        recipeItem.classList.add("selected");
    }

    updateShoppingList();
}

function updateShoppingList() {
    Object.keys(recipeShoppingList).forEach(key => delete recipeShoppingList[key]);

    selectedRecipes.forEach(index => {
        recipes[index].ingredients.forEach(ingredient => {
            const normalizedName = normalizeIngredientName(ingredient.name);
            const key = `${normalizedName}-${ingredient.unit}`;

            if (recipeShoppingList[key]) {
                recipeShoppingList[key].amount += ingredient.amount;
            } else {
                recipeShoppingList[key] = {
                    amount: ingredient.amount,
                    unit: ingredient.unit
                };
            }
        });
    });

    renderShoppingList();
}

function renderShoppingList() {
    const shoppingListEl = document.getElementById("shopping-list");
    shoppingListEl.innerHTML = "";

    const combinedShoppingList = {};

    function addToCombinedList(sourceList) {
        Object.entries(sourceList).forEach(([key, details]) => {
            if (!combinedShoppingList[key]) {
                combinedShoppingList[key] = {
                    amount: details.amount,
                    unit: details.unit
                };
            } else {
                const currentAmount = parseFloat(combinedShoppingList[key].amount);
                const newAmount = parseFloat(details.amount);

                if (!isNaN(currentAmount) && !isNaN(newAmount)) {
                    combinedShoppingList[key].amount = currentAmount + newAmount;
                }
            }
        });
    }

    addToCombinedList(recipeShoppingList);
    addToCombinedList(manualShoppingList);

    const sortedEntries = Object.entries(combinedShoppingList).sort(([keyA], [keyB]) => {
        const nameA = keyA.split("-")[0];
        const nameB = keyB.split("-")[0];

        const categoryA = getCategoryForIngredient(nameA);
        const categoryB = getCategoryForIngredient(nameB);

        const categoryIndexA = categoryOrder.indexOf(categoryA);
        const categoryIndexB = categoryOrder.indexOf(categoryB);

        if (categoryIndexA !== categoryIndexB) {
            return categoryIndexA - categoryIndexB;
        }

        return nameA.localeCompare(nameB, "de");
    });

    sortedEntries.forEach(([key, details]) => {
        const li = document.createElement("li");
        const name = key.split("-")[0];
        const amountText = details.amount !== "" && details.amount !== undefined ? details.amount : "";
        const unitText = details.unit || "";

        li.innerHTML = `<img src="icons/dash-circle.svg" class="remove-item" alt="Remove"> ${amountText} ${unitText} ${name}`;

        li.querySelector(".remove-item").addEventListener("click", () => {
            delete recipeShoppingList[key];
            delete manualShoppingList[key];
            renderShoppingList();
        });

        shoppingListEl.appendChild(li);
    });
}

function toggleTagSelection(event) {
    const tag = event.target.value;

    if (selectedTags.has(tag)) {
        selectedTags.delete(tag);
        event.target.classList.remove("selected");
    } else {
        selectedTags.add(tag);
        event.target.classList.add("selected");
    }

    renderRecipes();
}

function clearShoppingList() {
    selectedRecipes.clear();

    Object.keys(recipeShoppingList).forEach(key => delete recipeShoppingList[key]);
    Object.keys(manualShoppingList).forEach(key => delete manualShoppingList[key]);

    renderShoppingList();
    renderRecipes();
}

function addItemToList() {
    const input = document.getElementById("item-input").value;
    const [rawName, amount, unit] = input.split(",").map(item => item.trim());

    if (rawName) {
        const normalizedName = normalizeIngredientName(rawName);
        const key = `${normalizedName}-${unit || ""}`;
        const parsedAmount = parseFloat(amount);

        if (manualShoppingList[key]) {
            if (!isNaN(parsedAmount)) {
                const currentAmount = parseFloat(manualShoppingList[key].amount) || 0;
                manualShoppingList[key].amount = currentAmount + parsedAmount;
            }
        } else {
            manualShoppingList[key] = {
                amount: !isNaN(parsedAmount) ? parsedAmount : "",
                unit: unit || ""
            };
        }

        renderShoppingList();
        document.getElementById("item-input").value = "";
    }
}

document.querySelectorAll('#tag-selection button').forEach(button => {
    button.addEventListener('click', toggleTagSelection);
});

document.getElementById('clear-list').addEventListener('click', clearShoppingList);
document.getElementById('add-item').addEventListener('click', addItemToList);

document.addEventListener("DOMContentLoaded", renderRecipes);
