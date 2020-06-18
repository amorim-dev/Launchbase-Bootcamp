// Challenge 1-1: First steps with JS - to strengthen some concepts, among them:
// Variables, Conditionals, Operators

// BMI calculation

const name = 'Bianca Amorim';
const weigth = 62;
const height = 1.55;

const IMC = weigth / (height * height)

let message = ""


if (IMC >= 30) {
    message = ('Bianca, you are overweight')
} else {
    message = ('Bianca, you are not overweight')
}

console.log(message)