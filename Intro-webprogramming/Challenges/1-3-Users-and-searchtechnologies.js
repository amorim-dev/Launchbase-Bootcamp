// Challenge 1-5: First steps with JS - to strengthen some concepts, among them:
// function and repetition structures

// Create a programS like examples in:
//https://github.com/Rocketseat/bootcamp-launchbase-desafios-01/blob/master/desafios/01-3-funcoes-e-estruturas-de-repeticao.md


//Users and Technologies

// Create a program that stores an array of users (objects),
// each user has a name and their technologies (new array)
const users = [
    { name: "Carlos", technologies: ["HTML", "CSS"] },
    { name: "Jasmine", technologies: ["JavaScript", "CSS"] },
    { name: "Tuane", technologies: ["HTML", "Node"] }

]

// Scroll through the list of users with a repetition structure 
//by printing the user information on screen    
for (let user of users) {
  console.log(`${user.name}, work with ${user.technologies.join(' and ')}`)
    } 



// Search for technology

// Based on the previous challenge, use the same user list built.
// Create a function that receives data from a user object and returns IF the user works with CSS or not. 
// This function must return a true / false boolean

// Scroll through the user's technology array until you find if it works with CSS
// IF found, return true of the function, otherwise return false
function checkifuseruseCSS(user) {
    for (let technology of user.technologies) {
            if (technology == 'CSS') return true
        }
    
        return false
    }
    
//If YES, print the user information on screen:    
for (let i = 0; i < users.length; i++) {
        const userworkwithCSS = checkifuseruseCSS(users[i])
    
        if(userworkwithCSS) {
            console.log(`${users[i].name} work with CSS`)
        }
    } 
