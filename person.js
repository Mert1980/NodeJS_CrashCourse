//Module wrapper function
// (function (exports, require, module, _filename, _dirname){

// })
// console.log(__dirname, __filename);

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greeting(name, age){
        console.log(`My name is ${this.name} and I'm ${this.age} years old.`)
    }
}

module.exports = Person;