// Challenge 1-3: First steps with JS - to strengthen some concepts, among them:
// Objects and Vectors (Arrays)

// Construction and printing objects

const company = [
    {
        name: "Rocketseat",
        color: "Purple",
        focus: "Software engineer",
        address: {
            street: "Guilherme Gembala",
            number: 260
        }
    }
];

console.log(`The company ${company[0].name} is located in the street ${company[0].address.street}, ${company[0].address.number}. `)
