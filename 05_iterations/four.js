//for-in

const myObject = {
    js: 'javascript',
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
        // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java"]

for (const key in programming){
    // console.log(programming[key])
}

// const map = new Map()
// map.set('KHI', "Karachi")
// map.set('LHR', "Lahore")
// map.set('SR', "Saudi Riyal")

// for (const key in map) {
//     console.log(key)     //map is not iterable
// }