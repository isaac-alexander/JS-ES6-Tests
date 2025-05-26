/* Task 1
input 
const staffsDetails = [
  { name: "Jam Josh", age: 44, salary: 4000, currency: "USD" },
  { name: "Justina Kap", age: 34, salary: 3000, currency: "USD" },
  { name: "Chris Colt", age: 37, salary: 3700, currency: "USD" },
  { name: "Jane Doe", age: 24, salary: 4200, currency: "USD" }
];

output 
"I am Jam Josh a staff of Royal Suites."
"I am Justina Kap a staff of Royal Suites."
"I am Chris Colt a staff of Royal Suites."
"I am Jane Doe a staff of Royal Suites."

output 2 
"index 0 : I am Jam Josh a staff of Royal Suites."
"index 1 : I am Justina Kap a staff of Royal Suites."
"index 2 : I am Chris Colt a staff of Royal Suites."
"index 3 : I am Jane Doe a staff of Royal Suites."

calculate and print the total salaries for all staff: output "NGN 900"

print the names of people whose salaries are greater than or equal to 4000 from the array of staff details
*/

// 1. Loop through the staff array and print a sentence for each person.
// 2. Loop again and print the same sentence, this time including the index.
// 3. Calculate total salary by summing up all salary values and convert to NGN thousands.
// 4. Filter staff with salary >= 4000 and extract their names.
const staffsDetails = [
  { name: "Jam Josh", age: 44, salary: 4000, currency: "USD" },
  { name: "Justina Kap", age: 34, salary: 3000, currency: "USD" },
  { name: "Chris Colt", age: 37, salary: 3700, currency: "USD" },
  { name: "Jane Doe", age: 24, salary: 4200, currency: "USD" }
];

// Function to print basic intro for each staff
const getStaffInfo = (staffList) => {
  staffList.forEach(staff => {
    console.log(`I am ${staff.name} a staff of Royal Suites.`);
  });
};

// Function to print indexed intro
const getStaffInfoAndIndex = (staffList) => {
  staffList.forEach((staff, index) => {
    console.log(`index ${index} : I am ${staff.name} a staff of Royal Suites.`);
  });
};

// Function to calculate total salary in thousands (NGN)
const calculateSalary = (staffList) => {
  const total = staffList
    .map(staff => staff.salary)            // get salary
    .reduce((sum, salary) => sum + salary, 0); // sum all salaries
  return `NGN ${total / 1000}`;           // divide by 1000 for NGN in thousands
};

// Function to get names of staff earning >= 4000
const getHighEarners = (staffList) => {
  return staffList
    .filter(staff => staff.salary >= 4000)  // filter condition
    .map(staff => staff.name);              // return names
};

getStaffInfo(staffsDetails);
getStaffInfoAndIndex(staffsDetails);
calculateSalary(staffsDetails);
getHighEarners(staffsDetails).forEach(name => console.log(name));

///////////////////////////////////////////////////////////////////////////

/*Task 2
Square the value of every element in the array.
[1, 2, 3, 4, 5];
*/

// 1. Create a function that receives an array of numbers.
// 2. Use map() to return a new array where each number is squared.

const squareArray = (arr) => {
  return arr.map(num => num ** 2); // square each element using ES6 arrow function
};

const numbers = [1, 2, 3, 4, 5];
console.log(squareArray(numbers)); // Output: [1, 4, 9, 16, 25]

///////////////////////////////////////////////////////////////////////////

/* Task 3
Sum of every positive element
[1, -4, 12, 0, -3, 29, -150];
*/

// 1. Create a function that takes an array of numbers.
// 2. Use filter() to keep only positive numbers.
// 3. Use reduce() to sum them.

const sumPositiveNumbers = (arr) => {
  return arr
    .filter(num => num > 0)         // gets only positive numbers
    .reduce((sum, num) => sum + num, 0); // adds the numbers
};

const input = [1, -4, 12, 0, -3, 29, -150];
console.log(sumPositiveNumbers(input)); // Output: 42

//////////////////////////////////////////////////////////////////////////

/*
Task 4
const scores = [12, 55, 70, 47];
calculate and print the total: output "NGN 900"
*/

// 1. Create a function that takes an array of scores.
// 2. Use reduce() to calculate the total.
// 3. Return a string formatted as "NGN xxx" where xxx is the total score.

const calculateTotalScore = (scores) => {
  const total = scores.reduce((sum, score) => sum + score); // sum all numbers
  return `NGN ${total}`; 
};
const scores = [12, 55, 70, 47];

// Run and print result
console.log(calculateTotalScore(scores)); // Output: NGN 184


/*Task 5
return an array which will include all the cities having only the first letter of each city name capitalized.
const cities = [
  "miami",
  "barcelona",
  "madrid",
  "amsterdam",
  "berlin",
  "sao paulo",
  "lisbon",
  "mexico city",
  "paris"
]; */

/* Expected Ouput 1:
[
  "Miami",
  "Barcelona",
  "Madrid",
  "Amsterdam",
  "Berlin",
  "Sao paulo",
  "Lisbon",
  "Mexico city",
  "Paris"
 ];
*/

/* Expected Ouput 2:
[
  "1. Miami",
  "2. Barcelona",
  "3. Madrid",
  "4. Amsterdam",
  "5. Berlin",
  "6. Sao paulo",
  "7. Lisbon",
  "8. Mexico city",
  "9. Paris"
 ];
 */


// Step 1: Create Function  
// Step 2: Create an empty array
// Step 3: Loop through the array to get the element
// Step 4: Get the first character
// Step 5: Turn the first character to uppercase
// Step 6: Get the remaining character
// Step 7: Concatenate the first character to the remaining character
// Step 8: Push into the empty array/new array
// Step 9: Return the empty/new array
// Step 10: Log the argument

// Takes a city name and capitalizes only the first letter
const capitalizeFirstLetter = (cityName) => {
  const firstLetter = cityName.charAt(0).toUpperCase();
  const restOfName = cityName.slice(1);
  return firstLetter + restOfName;
};

// Return the cities with only the first letter capitalized
const getCapitalizedCities = (cityList) => {
  return cityList.map(city => capitalizeFirstLetter(city));
};

//Gets the index of each city and capitalizes the first letter
const getCapitalizedCitiesWithIndex = (cityList) => {
  return cityList.map((city, index) => `${index + 1}. ${capitalizeFirstLetter(city)}`);
};

const cities = [
  "miami",
  "barcelona",
  "madrid",
  "amsterdam",
  "berlin",
  "sao paulo",
  "lisbon",
  "mexico city",
  "paris"
];

console.log("Capitalized Cities:");
console.log(getCapitalizedCities(cities));

console.log("Capitalized Cities with Numbers:");
console.log(getCapitalizedCitiesWithIndex(cities));

/////////////////////////////////////////////////////////////////////////
//Task 6
// const array = [0, 1, , , , 5, 6];

//Expected output 
// Visited index 0 with value 0
// Visited index 1 with value 1
// Visited index 2 with value undefined
// Visited index 3 with value undefined
// Visited index 4 with value undefined
// Visited index 5 with value 5
// Visited index 6 with value 6


// Step 1: Create a function
// Step 2: Loop through array using for loop with index
// Step 3: Access value at each index
// Step 4: Log the index and its value even if undefined

const array = [0, 1, , , , 5, 6];

const logVisitedIndexes = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Visited index ${i} with value ${arr[i]}`);
  }
};

logVisitedIndexes(array);

//////////////////////////////////////////////////////////////////////////

//Task 7
//const array1 = [5, 12, 8, 130, 44];

//return first element greater than 10 
// Expected output: 12

// Task 7 - Find first element greater than 10

// Step 1: Create a function
// Step 2: Use the find() method
// Step 3: Inside find(), return true if the number is greater than 10
// Step 4: Return the result

const array1 = [5, 12, 8, 130, 44];

const findFirstGreaterThanTen = (arr) => {
  return arr.find(num => num > 10);
};

console.log(findFirstGreaterThanTen(array1)); // Output: 12


///////////////////////////////////////////////////////////////////////////

// Task 8
// const inventory = [
//   { name: "apples", quantity: 2 },
//   { name: "bananas", quantity: 0 },
//   { name: "cherries", quantity: 5 },
// ];

// return element with name of cherries

// // Expected output: { name: 'cherries', quantity: 5 }


// return true of false if Apple is in the array of fruits 
// Input: ["Banana", "Orange", "Strawberry", "Blueberry"]


// Step 1: Create a function to find an item by name
// Step 2: Use the find() method to match name with 'cherries'
// Step 3: Return the matched object
// Step 4: Create a function to check if 'Apple' exists in fruits array
// Step 5: Use includes() and toLowerCase() for case-insensitive comparison
// Step 6: Return true or false

const findCherries = (items) => {
  return items.find(item => item.name === "cherries");
};


const isApplePresent = (fruitList) => {
  return fruitList.some(fruit => fruit.toLowerCase() === "apple");
};

const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

const fruits = ["Banana", "Orange", "Strawberry", "Blueberry"];

console.log(findCherries(inventory)); // { name: 'cherries', quantity: 5 }
console.log(isApplePresent(fruits));  // false

//////////////////////////////////////////////////////////////////////////

// Task 9
// Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
// [3, 6, 8, 2]


// Step 1: Create a function
// Step 2: Use the filter() method
// Step 3: Inside filter(), return true if number is >= 5
// Step 4: Return the filtered array

const numbers_1 = [3, 6, 8, 2];

const filterFiveOrGreater = (arr) => {
  return arr.filter(num => num >= 5);
};

console.log(filterFiveOrGreater(numbers_1)); // Output: [6, 8]

////////////////////////////////////////////////////////////////////////

// Task 10
// Given an array of numbers, return a new array that only includes the even numbers.
// [3, 6, 8, 2]

// Task 10 - Filter even numbers

// Step 1: Create a function
// Step 2: Use the filter() method
// Step 3: Inside filter(), return true if number is divisible by 2
// Step 4: Return the filtered array

const numbers_2 = [3, 6, 8, 2];

const filterEvenNumbers = (arr) => {
  return arr.filter(num => num % 2 === 0);
};

console.log(filterEvenNumbers(numbers_2)); // Output: [6, 8, 2]

/////////////////////////////////////////////////////////////////////////

// Task 11
// Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
// ["dog", "wolf", "by", "family", "eaten", "camping"]

// Task 11 - Filter words with 5 characters or fewer

// Step 1: Create a function
// Step 2: Use the filter() method
// Step 3: Inside filter(), check if word length is <= 5
// Step 4: Return the filtered array

const words = ["dog", "wolf", "by", "family", "eaten", "camping"];

const filterShortWords = (arr) => {
  return arr.filter(word => word.length <= 5);
};

console.log(filterShortWords(words)); // Output: ["dog", "wolf", "by", "eaten"]

//////////////////////////////////////////////////////////////////////////

// Task 12
// Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.
// [
//     { name: "Angelina Jolie", member: true },
//     { name: "Eric Jones", member: false },
//     { name: "Paris Hilton", member: true },
//     { name: "Kayne West", member: false },
//     { name: "Bob Ziroll", member: true }
// ]

// Task 12 - Filter club members

// Step 1: Create a function
// Step 2: Use the filter() method
// Step 3: Inside filter(), return true if person is a member
// Step 4: Return the filtered array

const people = [
  { name: "Angelina Jolie", member: true },
  { name: "Eric Jones", member: false },
  { name: "Paris Hilton", member: true },
  { name: "Kayne West", member: false },
  { name: "Bob Ziroll", member: true }
];

const getClubMembers = (arr) => {
  return arr.filter(person => person.member === true);
};

console.log(getClubMembers(people));
/* 
[
  { name: 'Angelina Jolie', member: true },
  { name: 'Paris Hilton', member: true },
  { name: 'Bob Ziroll', member: true }
]
*/



//////////////////////////////////////////////////////////////////////////

// Task 13
// Make a filtered list of all the people who are old enough to see The Matrix (older than 18)
// [
//     { name: "Angelina Jolie", age: 80 },
//     { name: "Eric Jones", age: 2 },
//     { name: "Paris Hilton", age: 5 },
//     { name: "Kayne West", age: 16 },
//     { name: "Bob Ziroll", age: 100 }
// ]

// Task 13 - Filter people old enough to watch The Matrix (age > 18)

// Step 1: Create a function
// Step 2: Use the filter() method
// Step 3: Inside filter(), return true if age > 18
// Step 4: Return the filtered array

const people_2 = [
  { name: "Angelina Jolie", age: 80 },
  { name: "Eric Jones", age: 2 },
  { name: "Paris Hilton", age: 5 },
  { name: "Kayne West", age: 16 },
  { name: "Bob Ziroll", age: 100 }
];

const oldEnoughForMatrix = (arr) => {
  return arr.filter(person => person.age > 18);
};

console.log(oldEnoughForMatrix(people_2));
/* :
[
  { name: 'Angelina Jolie', age: 80 },
  { name: 'Bob Ziroll', age: 100 }
]
*/


//////////////////////////////////////////////////////////////////////////

// Task 14
// Get all male characters
// Get all female characters
// const characters = [
//   {
//     name: "Luke Skywalker",
//     height: 172,
//     mass: 77,
//     eye_color: "blue",
//     gender: "male",
//   },
//   {
//     name: "Darth Vader",
//     height: 202,
//     mass: 136,
//     eye_color: "yellow",
//     gender: "male",
//   },
//   {
//     name: "Leia Organa",
//     height: 150,
//     mass: 49,
//     eye_color: "brown",
//     gender: "female",
//   },
//   {
//     name: "Anakin Skywalker",
//     height: 188,
//     mass: 84,
//     eye_color: "blue",
//     gender: "male",
//   },
// ];

// Task 14 - Filter characters by gender

// Step 1: Create a function for male characters
// Step 2: Use filter() to return characters where gender is 'male'
// Step 3: Create a function for female characters
// Step 4: Use filter() to return characters where gender is 'female'

const getMaleCharacters = (arr) => {
  return arr.filter(char => char.gender === "male");
};


const getFemaleCharacters = (arr) => {
  return arr.filter(char => char.gender === "female");
};

const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];

console.log(getMaleCharacters(characters));
console.log(getFemaleCharacters(characters));

/*
[
  { name: 'Luke Skywalker', ... },
  { name: 'Darth Vader', ... },
  { name: 'Anakin Skywalker', ... }
]

[
  { name: 'Leia Organa', ... }
]
*/


//////////////////////////////////////////////////////////////////////////

// Task 15
// function that filters valid emails based on the presence of “@”.
//  Input ["alice@gmail.com", "bob@", "charlie@domain.com", "dave"]
//  Output ["alice@gmail.com", "bob@", "charlie@domain.com"]

// Task 15 - Filter valid emails (must contain '@')

// Step 1: Create a function
// Step 2: Use the filter() method
// Step 3: Inside filter(), check if email includes '@'
// Step 4: Return the filtered array

const emails = ["alice@gmail.com", "bob@", "charlie@domain.com", "dave"];

const filterValidEmails = (arr) => {
  return arr.filter(email => email.includes("@"));
};


console.log(filterValidEmails(emails));
// Output: ["alice@gmail.com", "bob@", "charlie@domain.com"]
