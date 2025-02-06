//for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num)
}

const greetings = "Hello world"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}

//Maps

const map = new Map()
map.set('KHI', "Karachi")
map.set('USA', "United States")
map.set('Fr', "France")

// console.log(map)

// for (const [key, value] of map) {
//     console.log(key, ':', value)
// }

const myObj = {
    game1 : 'NFS',
    game2 : 'Spiderman'
}

// for (const [key, value] of myObj){
//     console.log(key, ':-', value)    //for-of loop does not iterate on object
// }

