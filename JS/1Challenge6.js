// Challenge 1-6: First steps with JS - to strengthen some concepts, among them:
// function and repetition structures

// Create a programS like exemṕles in:
//https://github.com/Rocketseat/bootcamp-launchbase-desafios-01/blob/master/desafios/01-3-funcoes-e-estruturas-de-repeticao.md


// Sum of expenses and revenues
//Create a program that calculates the sum of revenues and expenses of users and at the end returns the balance (revenues - expenses).


const users = [
    {
      name: "Salvio",
      revenues: [115.3, 48.7, 98.3, 14.5],
      expenses: [85.3, 13.5, 19.9]
    },
    {
      name: "Marcio",
      revenues: [24.6, 214.3, 45.3],
      expenses: [185.3, 12.1, 120.0]
    },
    {
      name: "Lucia",
      revenues: [9.8, 120.3, 340.2, 45.3],
      expenses: [450.2, 29.9]
    }
  ];

// Scroll through the user array and for each user call a function called calculateBalance 
// that receives as a parameter the user's incomes and expenses
  function calculateBalance(revenues, expenses) {
    const sumRevenues = sumNumbers(revenues)
    const sumExpenses = sumNumbers(expenses)
    
    return sumRevenues - sumExpenses
}

//Create a second function that takes as an parameter an array of numbers and returns the sum of them
// and use it to calculate the sum of income and expenses within the function calculateBalance
function sumNumbers(numbers) {
    let sum = 0

    for (let number of numbers) {
        sum = sum + number
    }

    return sum
}

//The calculateBalance function must use the somaNumbers function to calculate the sum of income and expenses
// and at the end return the user's balance, that is, income - expenses.

//At the end, print their respective balance and IF the balance is POSITIVE or NEGATIVE
for (let user of users) {
    const balance = calculateBalance(user.revenues, user.expenses)

    if (balance > 0) {
        console.log(`${user.name} has a POSITIVE balance of ${balance.toFixed(2)}`)
    } else {
        console.log(`${user.name} has a NEGATIVE balance of ${balance.toFixed(2)}`)
    }
}

// toFixed(2) - numObj.toFixed() - The number of digits to appear after the decimal point