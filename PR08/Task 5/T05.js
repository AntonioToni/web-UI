function pokemonbycol(quest){
    var color = "https://pokeapi.co/api/v2/pokemon-color/" + quest;
    fetch(color)
        .then(response => response.json())
        .then(pokemon => {
            pokemon.pokemon_species.map((x) => {
                console.log(x["name"])
            })
        })
        .catch(console.error())
}

pokemonbycol("yellow")