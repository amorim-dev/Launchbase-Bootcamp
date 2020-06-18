// Challenge 1-1: First steps with JS - to strengthen some concepts, among them:
// Variables, Conditionals, Operators

// BMI calculation

const name = 'Bianca Amorim';
const weigth = 62;
const height = 1.55;

const IMC = weigth / (height * height)


if (IMC >= 30) {
    console.log('Bianca, you are overweight')
} else {
    console.log('Bianca, you are not overweight')
}