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
            { name: "Parmesan", amount: 4, unit: "EL" }, 
            { name: "Muskat", amount: 1, unit: "TL" }, 
            { name: "Salz", amount: 1, unit: "TL" }
        ]
    },
    { 
        name: "Shakshuka", 
        image: "images/shakshuka.jpg", 
        link: "https://feinschmeckerle.de/2017/03/19/shakshuka-kitchen-impossible/",
        tags: ["Hauptgericht", "Low-carb"],
        ingredients: [
            { name: "Olivenöl", amount: 3, unit: "EL" },
            { name: "Zwiebel", amount: 1, unit: "Stk" },
            { name: "Knoblauch", amount: 1, unit: "Zehe" },
            { name: "Paprika", amount: 1, unit: "Stk" },
            { name: "Tomate", amount: 1, unit: "Dose" },
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
            { name: "Hähnchenbrust", amount: 1, unit: "Stk" },
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
            { name: "Hähnchenbrust", amount: 4, unit: "Stk" },
            { name: "Olivenöl", amount: 1, unit: "EL" },
            { name: "Knoblauch", amount: 1, unit: "Zehe" },
            { name: "Zwiebel", amount: 2, unit: "Stk" },
            { name: "Tomate", amount: 4, unit: "Stk" },
            { name: "Italienische Kräuter", amount: 0.5, unit: "TL" },
            { name: "Mozzarella", amount: 4, unit: "Scheibe" }
        ]
    },
    { 
        name: "Zwiebelhühnchen", 
        image: "images/zwiebelhuehnchen.jpg", 
        link: "https://www.crunchycreamysweet.com/french-onion-roasted-chicken-recipe/",
        tags: ["Hauptgericht", "High-protein", "Low-carb"],
        ingredients: [
            { name: "Hähnchenbrust", amount: 400, unit: "g" }, 
            { name: "Butter", amount: 2, unit: "TL" }, 
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
        tags: ["Hauptgericht", "Low-carb"],
        ingredients: [
            { name: "Zwiebel", amount: 120, unit: "g" }, 
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
        tags: ["Hauptgericht", "Low-carb","High-Protein"],
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
            { name: "Pizzakäse", amount: 200, unit: "g" }, 
            { name: "BBQ-Rub", amount: 1, unit: "EL" }, 
            { name: "Limette", amount: 1, unit: "Stk" }, 
            { name: "Petersilie", amount: 1, unit: "Bund" }
        ]
    },

    // Neue Rezepte

    {
        name: "Garlic Chilli Noodles",
        image: "images/garlic_chilli_noodles.png",
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
        image: "images/baked_potato.png",
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
        image: "images/southwest_wrap.png",
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
        image: "images/rosenkohl.png",
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
        image: "images/mujadarra.png",
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
        image: "images/gefuellte_zwiebeln.png",
        link: "https://www.facebook.com/watch/?ref=saved&v=1430710058837180",
        tags: ["Hauptgericht", "Low-Carb"],
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
        image: "images/tortellini_suppe.png",
        link: "https://www.facebook.com/watch/?ref=saved&v=2186372045178020",
        tags: ["Hauptgericht"],
        ingredients: [
            { name: "Hackfleisch", amount: 450, unit: "g" },
            { name: "Zwiebel", amount: 1, unit: "Stk" },
            { name: "Karotte", amount: 3, unit: "Stk" },
            { name: "Staudensellerie", amount: 3, unit: "Stange" },
            { name: "Pfeffer", amount: 0.5, unit: "TL" },
            { name: "Italienische Kräuter", amount: 2, unit: "TL" },
            { name: "Tomatenmark", amount: 170, unit: "g" },
            { name: "Mehl", amount: 60, unit: "g" },
            { name: "Rinderbrühe", amount: 1700, unit: "ml" },
            { name: "Tortellini", amount: 570, unit: "g" },
            { name: "Sahne", amount: 480, unit: "ml" },
            { name: "Spinat", amount: 120, unit: "g" },
            { name: "Parmesan", amount: 50, unit: "g" }
        ]
    },
    {
        name: "Hühnchen Shawarma",
        image: "images/huehnchen_shawarma.png",
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
        image: "images/zwiebel_pasta.png",
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
        image: "images/chilli_huehnchen.png",
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
        image: "images/paprikash.png",
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
        image: "images/reis_hack_pfanne.png",
        link: "https://www.facebook.com/watch/?ref=saved&v=737544619315115",
        tags: ["Hauptgericht","High-Protein"],
        ingredients: [
            { name: "Tomatenmark", amount: 30, unit: "g" },
            { name: "Taco-Gewürz", amount: 30, unit: "g" },
            { name: "Hackfleisch", amount: 500, unit: "g" },
            { name: "Rinderbrühe", amount: 750, unit: "ml" },
            { name: "geriebener Käse", amount: 70, unit: "g" },
            { name: "Reis", amount: 300, unit: "g" }
        ]
    },
    {
        name: "Gemüsedöner",
        image: "images/gemuesedoener.png",
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
        image: "images/carbonara.png",
        link: "",
        tags: ["Hauptgericht"],
        ingredients: [
            { name: "Sahne", amount: 200, unit: "g" },
            { name: "Hühnerbrühe", amount: 200, unit: "ml" },
            { name: "Brokkoli", amount: 300, unit: "g" },
            { name: "Kirschtomate", amount: 250, unit: "g" },
            { name: "Bacon", amount: 125, unit: "g" },
            { name: "Nudeln", amount: 300, unit: "g" },
            { name: "Hartkäse", amount: 60, unit: "g" }
        ]
    },
    {
        name: "Königsberger Klopse",
        image: "images/koenigsberger_klopse.png",
        link: "",
        tags: ["Hauptgericht"],
        ingredients: [
            { name: "Hackfleisch gemischt", amount: 450, unit: "g" },
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

    const selectedRecipes = new Set();
    const selectedTags = new Set();

    const recipeShoppingList = {};
    const manualShoppingList = {};

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
                const key = `${ingredient.name}-${ingredient.unit}`;

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

        Object.entries(combinedShoppingList).forEach(([key, details]) => {
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
        const [name, amount, unit] = input.split(",").map(item => item.trim());

        if (name) {
            const key = `${name}-${unit || ""}`;
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
