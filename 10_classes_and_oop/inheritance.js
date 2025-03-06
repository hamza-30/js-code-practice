class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const obj = new Teacher("hamza", "hamza@hotmail.com", "123")

obj.addCourse()

const newObj = new User("Imran")

newObj.logMe()
obj.logMe()

console.log(obj instanceof User)