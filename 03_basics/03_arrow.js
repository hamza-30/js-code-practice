const user = {
    username: "hamza",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
    
}
//this keyword refers to current context

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this) //current context of node environment is an empty object

// function chai(){
//     let username = "hamza"
//     console.log(this.username)
// }

// chai()

// const func = function(){
//     let username = "hamza"
//     console.log(this.username)
// }

const func = () => {
    let username = "hamza"
    console.log(this)
}
// func()

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

// const addTwo = (num1,num2) => (num1 + num2)

const addTwo = (num1,num2) => ({username: "hamza"})

// console.log(addTwo(3,4))

const myArray = ,5,3,2,6]
[1
// myArray.forEach()

