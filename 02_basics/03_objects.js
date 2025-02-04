// singleton
//Object.create

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Hamza",
    "full name": "Muhammad Hamza",
    [mySym]: "mykey1",
    age: 20,
    location: "Karachi",
    email: "hamza@google.com",
    isLoggedIn: false,
    lasLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(typeof JsUser[mySym])

JsUser.email = "hamza30@hotmail.com"
console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS User")
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())