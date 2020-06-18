// Challenge 1-2: First steps with JS - to strengthen some concepts, among them:
// Variables, Conditionals, Operators

// Retirement calculation

const name = "Luciana";
const sex = "F";
const age = 51;
const contribution = 33;

const contributioncalculation = age + contribution

const mancanretire = sex == 'M' && contribution >= 35 && contributioncalculation >= 95
const womancanretire = sex == 'F' && contribution >= 30 && contributioncalculation >= 85


if ( mancanretire || womancanretire) {
    console.log(`${name}, you can retire!`)
} else {
    console.log(`${name}, you can't retire!`)
}
