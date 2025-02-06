const userEmail = []

if(userEmail) {
    console.log("Got user email")
}
else{
    console.log("Don't have user email")
}

// falsy values

// false, 0,  -0, BigInt 0n, "", null, undefined, NaN  

//truthy values
// "0", 'false', "string", [], {}, function(){}

// if(userEmail.length == 0){
//     console.log("Array is empty")        //to check if array is empty
// }

const emptyObj = {}

// if (Object.keys(emptyObj).length === 0){
//     console.log("obj is empty")           //to check if obj is empty
// }


// Nullish Coalescing Operator (??): null, undefined

let val1
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

console.log(val1)

//Ternary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("greater than 80") : console.log("less than 80")