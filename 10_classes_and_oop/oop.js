const user = {
    username: 'hitesh',
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database")
        // console.log(`Username: ${this.username}`)
        console.log(this)
    }
}

// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }
    // return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor)
// console.log(userTwo)

/*
Step 1: when new keyword is used, an empty object is created
Step 2: a constructor function is called due to new keyword
Step 3: all of the arguments of constructor are injected into this keyword
Step 4: available in function
*/