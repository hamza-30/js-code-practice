// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"

switch (month) {
    case "jan":
        console.log("January")
        break;

    case "feb":
        console.log("February")
        break;

    case "march":
        console.log("March")       //If there is no break keyword in the
        break;                     //matched case, all of the below cases
                                   //are also executed until break word is
                                   //reached except default case
    case "apr":
        console.log("April")
        break;

    default:
        console.log("default case Match")
        break;
}