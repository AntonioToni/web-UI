const countries = require("../countries.json")

function countryEUarea(countries) {
    let EUcountries = countries.filter(country => country.region === "Europe")
    let area = EUcountries.map(area => area.area)
    let totalarea = area.reduce((previousValue, currentValue) => previousValue + currentValue)
    console.log(totalarea)
}

countryEUarea(countries)