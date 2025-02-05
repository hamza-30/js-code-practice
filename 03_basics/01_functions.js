
function sayMyName(){
 console.log("H")
 console.log("A")
 console.log("M")
 console.log("Z")
 console.log("A")
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3 , 5)

// console.log("Result: ", result)

function loginUserMessage(username = "Hamza"){
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Hamza"))
// console.log(loginUserMessage("harry"))

function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(2,3,23,523))

const user = {  
    username: "hamza",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user)
handleObject({
    username: "imran",
    price: 300
})

const myNewArray = [200, 400 ,300, 100]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([2, 53, 24, 64, 24,23]))