//map
//map and filter chaining

const array = [32,53,123,653,73,235,2]
const values = array.map( (item) => {
    return (item / 2)
} )

console.log(values)

const array2 = [53,66,23,85,345,34,67,23]
const newArray = array2.map( (element) => {
    return element + 1
}).map( (element) => {
   return element + 2
}).filter( (element) => {
    return (element % 2) == 0
})

console.log(newArray)

const arraywithObj = [
    {
    name: "Hamza",
    age: 20,
    semester: "5th",
    university: "University of Karachi"
    },
    {
    name: "Tuaha",
    age: 25,
    semester: "8th",
    university: "Bahria University"
    }
]

const arrayValue = arraywithObj.map((obj) => {
    return `${obj.name} ${obj.age}`
})

console.log(arrayValue)