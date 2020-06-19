// Challenge 1-4: First steps with JS - to strengthen some concepts, among them:
// Objects and Vectors (Arrays)

// Create a program with an object to store programmer data
// and print the first specialty like the exemṕle in:
// https://github.com/Rocketseat/bootcamp-launchbase-desafios-01/blob/master/desafios/01-2-lidando-com-objetos-e-vetores.md  

const programmer = {
    name: "Carlos",
    age: "32 years old",
    technologies: [
        {name: "C++", specialist: "Desktop"},
        {name: "JavaScript", specialist: "Web/Mobile"}
    ]
}

console.log(` Programmer ${programmer.name} are ${programmer.age} and use ${programmer.technologies[0].name} technology with a specialty in ${programmer.technologies[0].specialist} `)


