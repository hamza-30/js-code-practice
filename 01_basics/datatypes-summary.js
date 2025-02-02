// Primtive Datatype

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt(for
// very big values/scientific values

 const score = 100
 const scoreValue = 100.3

 const isLoggedIn = false
 const outsideTemp = null
 let userEmail; //undefined by default

 const id = Symbol('123')
 const anotherId = Symbol('123')

//  console.log(id === anotherId)

 const bigNumber = 234254222245245425122n
// Reference type (Non-primitive)

// Array, Objects, Functions

const heros = ["mehmed", "osman", "orhan"]

let myObj = {
    name: "hamza",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof anotherId)

//typeof 
//string: string
//number: number
//boolean: boolean
//null: object
//function: function
//object(without function call): object
//object(with function call): function