const countries = require("../countries.json")

function returnNames(countries) {
    let names = countries.map(element => element.name.common)
    console.log(names)
}

returnNames(countries)