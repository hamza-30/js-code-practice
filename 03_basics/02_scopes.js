//  var c = 23
let a = 53
const b = 60

if (true){
    let a = 10
    const b = 20
    let c = 30
}

// console.log(a);
// console.log(b);


function one(){
    const username = "hamza"

    function two(){
        const website = "youtube"
        console.log(username)
    }

    // console.log(website)

    two()
}

// one()

if(true){
    const username = "hamza"
    if(username === "hamza"){
        const website = "youtube"
        // console.log(username + website)
    }
    // console.log(website)
}

// console.log(username)


// *********************interesting**********************

console.log(addone(5))

function addone(num){
    return num + 1
}

addTwo(5)
const addTwo = function(num){
    return num + 2
}
