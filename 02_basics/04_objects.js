// const tinderUser = new Object() //Singleton Object
const tinderUser = {}

tinderUser.name = "Larry"
tinderUser.age = 23
tinderUser.email = "larry2@gmail.com"
tinderUser.isLoggedIn = true

// console.log(tinderUser)

const regularUser = {
    email: "larry32@gmail.com",
    fullName: {
        userfullname: {
            firstName: "Larry",
            lastName: "Jones"
        }
    }
}

// console.log(regularUser.fullName?.userfullname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3)

const users = [
    {
        name: "Larry",
        age: 21
    },
    {
        name: "David",
        age: 19
    },
    {
        name: "Henry",
        age: 24
    }
]

// console.log(users[0].name)

// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty("name"))


//Destructuring of Objects

const course = {
    coursename: "JS in urdu",
    price: "999",
    courseInstructor: "hamza"
}

//course.courseInstructor

const {courseInstructor: instructor} = course //this eradicates the need of providing object reference again and again
console.log(instructor)   

//JSON Topic

// {
//    "name": "hamza",
//     "coursename": "JS in urdu",  //one type of JSON format
//     "price": "free"
// }

[
    {},
    {},  //another type of JSON format
    {}
]
