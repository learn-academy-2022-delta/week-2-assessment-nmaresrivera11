// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]


// b) Create the function that makes the test pass.



//QUESTION #1

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

// Expected output: "15 is divisible by three"
// Expected output: "0 is divisible by three"
// Expected output: "-7 is not divisible by three"

/* Psuedo Code:
- First I want to do a test because it Jest makes sense
- Declare a function named "divisible"
- It's parameters will input a number
- Decide if it is evenly divisible by 3
- Return whether the the number is or is not divisible by 3
*/

//Jest Test
describe("divisible", () => {
  it("takes a number and determines whether it is evenly divisible by three or not", ()=> {
    expect(divisible(num1)).toEqual(`15 is divisible by three`)
    expect(divisible(num2)).toEqual(`0 is divisible by three`)
    expect(divisible(num3)).toEqual(`-7 is not divisible by three`)
  })
})
//ReferenceError: divisible is not defined

// b) Create the function that makes the test pass.
const num1 = 15
const num2 = 0
const num3 = -7

const divisible = (value) => {
    if(value % 3 === 0) {
        return `${value} is divisible by three`
    } else if(value % 3 !== 0) {
        return `${value} is not divisible by three`
    } else {
        "try again"
    }
}
// console.log(divisible(num1)) // Output: "15 is divisible by three"
// console.log(divisible(num2)) // Output: "0 is divisible by three"
// console.log(divisible(num3)) // Output: "-7 is not divisible by three"



//QUESTION #2

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized. 

// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

/* Psuedo Code:
- I want to declare a function called sentenceCased
- sentenceCased will take an array of words
- using (.map) to iterate over each string inside the array
- call on the first index [0] give it the (.toUpperCase) then I want to add my substring(1) to be not capitalized after
- the return will be joined and then split to turn it back to an array separated by commas
*/

// a) Create a test with expect statements for each of the variables provided.

describe("sentenceCased", () => {
  it("takes in an array of words and returns an array with all the words capitalized", () => {
    expect(sentenceCased(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
    expect(sentenceCased(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
  })
})
// ReferenceError: sentenceCased is not defined

// // b) Create the function that makes the test pass.
const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]

const sentenceCased = (array) => {
  let eachItem = array.map(value => {
    return value[0].toUpperCase() + value.substring(1) //substring returns part of the string between given start and end index; only given a start will end at last index
  })
  return eachItem.join(" ").split(" ")
}
// console.log(sentenceCased(randomNouns1)) //["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// console.log(sentenceCased(randomNouns2)) //["temperature", "database", "chopsticks", "mango", "deduction"]



//QUESTION #3

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.
/* Psuedo Code:
- First I want to create a function that will find the first index of the first vowel in a string
- Name function firstVowel
- Declare what vowels are
- A for loop will return the index in which the first vowel is in
- I want the loop to go through the length of the string and see which inncludes the given vowels
- Then return the first index that our given strings have a vowel at
*/

// a) Create a test with expect statements for each of the variables provided.
describe("firstVowel", () => {
  it("takes in a string and returns the first index of a vowel", () => {
    expect(firstVowel(vowelTester1)).toEqual(1)
    expect(firstVowel(vowelTester2)).toEqual(0)
    expect(firstVowel(vowelTester3)).toEqual(2)
  })
})
// ReferenceError: firstVowel is not defined

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// b) Create the function that makes the test pass.


const firstVowel = (value) => {
let vowels1 = ("aeiou")
    for(let i=0; i < value.length; i++) {
        if(vowels1.includes(value[i])){
         return i
        }
    }  
  }
// console.log(firstVowel(vowelTester1)) // 1
// console.log(firstVowel(vowelTester2)) // 0
// console.log(firstVowel(vowelTester3)) // 2