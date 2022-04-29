const countries = require("../countries.json")

function countriesEU(countries) {
    let EUcountries = countries.filter(country => country.region === "Europe")
    let names = EUcountries.map(element => element.name.common)
    console.log(names)
}

countriesEU(countries)