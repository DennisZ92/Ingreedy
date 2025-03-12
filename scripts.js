const recipes = [
    { 
    name: "Tortellini in Sahnesoße", 
    image: "images/Tortellini.jpg", 
    link: "https://www.chefkoch.de/rezepte/1342861239100533/Tortellini-alla-panna.html",
    tags: ["Abendessen"],
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
    tags: ["Abendessen", "Low-carb"],
    ingredients: [
        { name: "Olivenöl", amount: 3, unit: "EL" },
        { name: "Zwiebel", amount: 1, unit: "groß" },
        { name: "Knoblauch", amount: 1, unit: "Zehe" },
        { name: "Paprika", amount: 1, unit: "Stk" },
        { name: "Tomaten", amount: 1, unit: "Dose" },
        { name: "Tomatenmark", amount: 2, unit: "EL" },
        { name: "Kreuzkümmel", amount: 1, unit: "TL" },
        { name: "Paprikapulver", amount: 1, unit: "TL" },
        { name: "Salz", amount: 1, unit: "TL" },
        { name: "Chilipulver", amount: 1, unit: "Prise" },
        { name: "Pfeffer", amount: 1, unit: "Prise" },
        { name: "Eier", amount: 4, unit: "Stk" },
        { name: "Petersilie", amount: 0.5, unit: "Bund" }
    ]
},
{ 
    name: "Wraps", 
    image: "images/wraps.jpg", 
    link: "https://amerikanisch-kochen.de/wraps-mit-hahnchenbrust-wraps-with-chickenbreast/1886",
    tags: ["Abendessen", "High-protein","Snack"],
    ingredients: [
        { name: "Hähnchenbrust", amount: 1, unit: "Stk" },
        { name: "Olivenöl", amount: 3, unit: "EL" },
        { name: "Tomate", amount: 1, unit: "groß" },
        { name: "Salat", amount: 1, unit: "Kopf" },
        { name: "Paprika", amount: 1, unit: "Stk" },
        { name: "Majonäse", amount: 100, unit: "g" },
        { name: "Zitronensaft", amount: 1, unit: "EL" },
        { name: "Zwiebel", amount: 1, unit: "Stk" },
        { name: "Knoblauchzehe", amount: 1, unit: "Stk" },
        { name: "Paprika edelsüß", amount: 0.5, unit: "TL" },
        { name: "Cayenne-Pfeffer", amount: 0.25, unit: "TL" },
        { name: "Salz", amount: 1, unit: "Prise" },
        { name: "Pfeffer", amount: 1, unit: "Prise" },
        { name: "Tortillas", amount: 2, unit: "Stk" }
    ]
},
{ 
    name: "Mozzarella Hühnchen", 
    image: "images/Mozzarella_Huehnchen.jpg", 
    link: "https://littlespicejar.com/30-minute-mozzarella-chicken/?utm_content=bufferfeeae&utm_medium=social&utm_source=pinterest.com&utm_campaign=buffer",
    tags: ["Abendessen", "High-protein"],
    ingredients: [
        { name: "Hähnchenbrust", amount: 4, unit: "Stk" },
        { name: "Olivenöl", amount: 1, unit: "EL" },
        { name: "Knoblauch", amount: 1, unit: "Zehen" },
        { name: "Zwiebeln", amount: 2, unit: "Stk" },
        { name: "Tomaten", amount: 4, unit: "Stk" },
        { name: "Italienische Kräuter", amount: 0.5, unit: "TL" },
        { name: "Mozzarella", amount: 4, unit: "Scheiben" }
    ]
},
{ 
    name: "Zwiebelhühnchen", 
    image: "images/zwiebelhuehnchen.jpg", 
    link: "https://www.crunchycreamysweet.com/french-onion-roasted-chicken-recipe/",
    tags: ["Abendessen", "High-protein","Low-carb"],
    ingredients: [
        { name: "Hühnerbrust", amount: 400, unit: "g" }, 
        { name: "Butter", amount: 2, unit: "TL" }, 
        { name: "Olivenöl", amount: 2, unit: "EL" }, 
        { name: "Zwiebeln", amount: 3, unit: "Stk" }, 
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
    tags: ["Abendessen", "Low-carb"],
    ingredients: [
        { name: "Zwiebel", amount: 120, unit: "g" }, 
        { name: "Olivenöl", amount: 4, unit: "EL" }, 
        { name: "Hackfleisch", amount: 500, unit: "g" }, 
        { name: "Paprika", amount: 2, unit: "Stk" }, 
        { name: "Zucchini", amount: 2, unit: "Stk" }, 
        { name: "Champignon", amount: 200, unit: "g" }, 
        { name: "Tomaten", amount: 320, unit: "g" }, 
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
    tags: ["Abendessen", "Low-carb"],
    ingredients: [
        { name: "Olivenöl", amount: 3, unit: "EL" }, 
        { name: "Hühnerbrust", amount: 400, unit: "g" }, 
        { name: "Zitronen", amount: 2, unit: "Stk" }, 
        { name: "Zwiebeln", amount: 1, unit: "Stk" }, 
        { name: "Knoblauch", amount: 2, unit: "Zehen" }, 
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
    tags: ["Abendessen","Snack", "High-protein"],
    ingredients: [
        { name: "Hühnerbrust", amount: 400, unit: "g" }, 
        { name: "Tortillas", amount: 8, unit: "Stk" }, 
        { name: "Paprika", amount: 3, unit: "Stk" }, 
        { name: "Zwiebel", amount: 1, unit: "Stk" }, 
        { name: "Pizzakäse", amount: 200, unit: "g" }, 
        { name: "BBQ-Rub", amount: 1, unit: "EL" }, 
        { name: "Limette", amount: 1, unit: "Stk" }, 
        { name: "Petersilie", amount: 1, unit: "Bund" }
    ]
}
];

    const selectedRecipes = new Set();
    const selectedTags = new Set();
    const shoppingList = {};

    function renderRecipes() {
        const recipeList = document.getElementById("recipe-list");
        recipeList.innerHTML = "";
        recipes.forEach((recipe, index) => {
            if (selectedTags.size === 0 || recipe.tags.some(tag => selectedTags.has(tag))) {
                const recipeItem = document.createElement("div");
                recipeItem.classList.add("recipe-item");
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
        selectedRecipes.forEach(index => {
            recipes[index].ingredients.forEach(ingredient => {
                const key = `${ingredient.name}-${ingredient.unit}`;
                if (shoppingList[key]) {
                    shoppingList[key].amount += ingredient.amount;
                } else {
                    shoppingList[key] = { amount: ingredient.amount, unit: ingredient.unit };
                }
            });
        });
        renderShoppingList();
    }

    function renderShoppingList() {
        const shoppingListEl = document.getElementById("shopping-list");
        shoppingListEl.innerHTML = "";
        Object.entries(shoppingList).forEach(([key, details]) => {
            const li = document.createElement("li");
            li.innerHTML = `<img src="icons/dash-circle.svg" class="remove-item" alt="Remove"> ${details.amount || ''} ${details.unit || ''} ${key.split('-')[0]}`;
            li.querySelector(".remove-item").addEventListener("click", () => {
                delete shoppingList[key];
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
        Object.keys(shoppingList).forEach(key => delete shoppingList[key]);
        renderShoppingList();
        document.querySelectorAll('.recipe-item.selected').forEach(item => {
            item.classList.remove('selected');
        });
    }

    function addItemToList() {
        const input = document.getElementById("item-input").value;
        const [name, amount, unit] = input.split(',').map(item => item.trim());
        if (name) {
            const key = `${name}-${unit || ''}`;
            if (shoppingList[key]) {
                shoppingList[key].amount += parseFloat(amount) || 0;
            } else {
                shoppingList[key] = { amount: parseFloat(amount) || '', unit: unit || '' };
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
