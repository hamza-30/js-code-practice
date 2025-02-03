// Date

let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)

// let myCreatedDate = new Date(2025, 4, 23)
// let myCreatedDate = new Date(2025, 0, 23, 1, 49)
let myCreatedDate = new Date("01-14-2024")
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
// console.log(newDate)
// console.log(newDate.getMonth())
// console.log(newDate.getDay())
// console.log(newDate.getDate())
// console.log(newDate.getFullYear())

newDate.toLocaleString("default", {
    weekday: "long", 
})

console.log(newDate.toLocaleDateString)