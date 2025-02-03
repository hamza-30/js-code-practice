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

// console.log(typeof anotherId)

//typeof 
//string: string
//number: number
//boolean: boolean
//null: object
//function: function
//object: object


// +++++++++++++++++++++++++++++++++++++++++++

//Stack (to store primitive), Heap (to store non-primitive)

let simplevalue = "amazon"

let anotherValue = simplevalue

console.log(simplevalue)
console.log(anotherValue)

let user1 = {
    email: "user @google.com",
    pin: "4235"
}

let user2 = user1

user2.email = "hamza@google.com"

console.log(user1.email)
console.log(user2.email)


//when we store a primitive datatype in another variable, we get a copy of
//it and any changes or updation affect the copy, not the original 
//variable.

//when we store a non primitive datatype in another variable, we get 
//the original reference of that non-primtive datatype and any changes
//or updation affect the new as well as original variable as well