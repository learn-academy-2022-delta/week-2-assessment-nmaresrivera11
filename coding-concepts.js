// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Delta 2022"
console.log(cohort.split(""))

// a) Your answer:
// (.split) is a method that will split up a string into an array by whatever parameter you give it. In this example, (.split("")) is given an empty string so it will separate the value by letter.
// b) Verify and explain:
// The given output returned ['D', 'e', 'l', 't', 'a', ' ', '2', '0', '2', '2']. As I stated because of the ("") we provided the method, it will turn the string into an array by separated with "" by each letter.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer:
// The output will read "Hello, LEARN Student".
// b) Verify and explain:
// Undefined was returned because I failed to realize at first glance the console.log/ or return is missing within the code which ties them together. Right now it does not know what to do with the information given. So, it cannot string interpolate the given "name" with Hello,

// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
console.log(multBy2)

// a) Your answer:
// The (.map) will iterate * 2 over each index value within the array. It will also return a new array with the action given over each array item. This output will be [8, 10, 12, 14, 16]
// b) Verify and explain:
// [8, 10, 12, 14, 16] is given due to the (.map) method.


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
console.log(onlyOdds)

// a) Your answer:
// The (.filter) will search through the array for for the values that return odds because of the bang operator assigned. This will give only the odds within the array. [11, 13, 15].
// b) Verify and explain:
// [11, 13, 15] is given because it filtered through the array % 2 and returned only the values that were not evenly divisible by 2.


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer:
// The return will be "Javascript" because it is calling on the languages key and the index [0] if its value pair. The key: Languages Value : ["javascript", "Ruby"] and the [0] of this is "Javascript"
// b) Verify and explain:
// Output: "Javascript" 


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Bravo",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer:
// It will give name which is not given a value but just a place holder, a value of "George". Adding this will return {"George", "Bravo", 2022}
// b) Verify and explain:
// Learn { student: 'George', cohort: 'Bravo', year: 2022 } is the output. The key is returned as well because it is calling on the whole class not just the key's values within the object.
