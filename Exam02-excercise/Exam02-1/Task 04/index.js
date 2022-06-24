const recContainer = document.getElementById("recipes");

function addRecipes(data) {
    data.forEach((recipe) => {
        const container = document.createElement("div"); //kreira div
        container.className = "recipe" //stavi da je class="recipe"

        const title = document.createElement("h2"); //kreira se element h2
        title.innerHTML = `${recipe.title}`; // u h2 stavljas title
        title.className = "title" //sad h2 sa title ce imat classname
        container.appendChild(title) // dodas u main div

        const ingredients = document.createElement("p");
        ingredients.innerHTML = `${recipe.ingredients}`;
        container.appendChild(ingredients);

        const servings = document.createElement("p");
        servings.innerHTML = `${recipe.servings}`;
        container.appendChild(servings);

        const instructions = document.createElement("p");
        instructions.innerHTML = `${recipe.instructions}`;
        container.appendChild(instructions);

        recContainer.appendChild(container);

    })
}

fetch("https://pwks-kolokvij2.herokuapp.com/recipes")
    .then((response) => response.json())
    .then((data) => {
        addRecipes(data);
    })

