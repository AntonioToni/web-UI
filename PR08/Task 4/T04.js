function Person(name, age) {
    this.name = name;
    this.age = age;
}
const marko = new Person("Marko", 26);

Person.prototype.toString = function pts() {
    return `${this.name +" "+ this.age +" "+ "godina"}`;
}


console.log(marko.toString());