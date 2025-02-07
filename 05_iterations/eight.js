//array .reduce() method

const myNums = [23,42,52,66,21,1]

// const myTotal = myNums.reduce(function (acc, currVal) {
//     console.log(`acc: ${acc} currVal: ${currVal}`)
//     return acc + currVal
// }, 0)


const myTotal = myNums.reduce( (acc,curr) => acc + curr, 0)

console.log(myTotal)

const shoppingCart = [
    {
        itemName: "JS Course",
        price: 2999
    },
    {
        itemName: "Python Course",
        price: 9999
    },
    {
        itemName: "Mobile Dev Course",
        price: 5999
    },
    {
        itemName: "Data Science Course",
        price: 12999
    }
]

const priceToPay = shoppingCart.reduce((acc,obj) => acc + obj.price,0)
console.log(priceToPay)