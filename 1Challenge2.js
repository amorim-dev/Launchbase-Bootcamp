// Challenge 1-1: First steps with JS - to strengthen some concepts, among them:
// Variables, Conditionals, Operators

// Retirement calculation

const name = "Luciana";
const sex = "F";
const age = 61;
const contribution = 33;

if (sex == "F") {
    if (contribution >= 30) {
        console.log(`${name} you can retire`) 
    } else {
        console.log(`${name} you can't retire yet`)
    }
} 

if (sex == "M") {
    if (contribution >= 35) {
        console.log(`${name} you can retire`) 
    } else {
        console.log(`${name} you can't retire yet`)
    }
} 


