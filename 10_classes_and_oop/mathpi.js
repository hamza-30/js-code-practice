const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descripter)

// console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI);


const obj = {
    name: "ginger tea",
    price: 250,
    isAvailable: true,

    orderTea: function(){
        console.log("tea not made")
    }
}

console.log(Object.getOwnPropertyDescriptor(obj, "name"))

Object.defineProperty(obj, "name", {
    enumerable: false
})

// console.log(Object.getOwnPropertyDescriptor(obj, "name"))

for (const [key, value] of Object.entries(obj)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`)
    }
    
}
