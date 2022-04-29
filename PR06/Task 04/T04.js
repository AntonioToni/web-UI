const countries = require("../countries.json")

function findCity(countries, city) {
    let country = countries.find(el => el.capital == city) ? countries.find(el => el.capital == city).name.common : null
    console.log(country);
}

findCity(countries, "Pyongyang")