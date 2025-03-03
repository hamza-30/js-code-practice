// let myName = "hamza      "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.hamza = function(){
    console.log(`hamza is present in all objects`);
}

Array.prototype.heyHamza = function(){
    console.log("hamza says hello")
}

// heroPower.hamza()
// myHeros.hamza()
// myHeros.heyHamza()
// heroPower.heyHamza()


//inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport= {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = "chaiAurCode      "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True Length is: ${this.trim().length}`)
}

anotherUsername.trueLength()
"hamza".trueLength()
"iceTea".trueLength()