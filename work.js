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
