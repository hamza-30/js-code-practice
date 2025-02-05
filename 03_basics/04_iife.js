//Immediately Invoked Function Expressions

//To prevent the pollution of global scope declarations, immediately invoked functions are used

//immediately invoked functions are executed immediately after defined

(function greeting() {
    //named iife
    console.log("hello world")
})(); // ';' necessary to stop the context

((name) => {
    console.log(`hello world ${name}`)
})("hamza")
