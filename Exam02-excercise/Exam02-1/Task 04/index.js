const recContainer = document.getElementById("recipes");

function addRecipes(data) {
    data.forEach((recipe) => {
        const container = document.createElement("div");
        container.className = "recipe"

        const title = document.createElement("h2");
        title.innerHTML = `${recipe.title}`;
        container.appendChild(title)

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

