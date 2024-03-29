"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

// here we are change variable name so not working
// if (passTest) hasDriverLicense = true;

if (passTest) hasDriversLicense = true;

if (hasDriversLicense) console.log("I Can Drive :D");
*/

//////  Functions   /////////

// this is first kind from function
/*
function logger() {
  console.log("My name is Youssef");
}

// here I can say / calling / running / invoking function
logger();
logger();
logger();

function fruitProcessr(apples, oranges) {
  console.log(apples, oranges);
  const juice = `juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessr(5, 8);

console.log(appleJuice);
// don't forget, you can call main function direct like that

console.log(fruitProcessr(3, 9));

// also you can make add new value to parameters like that

const appleOrangeJuice = fruitProcessr(2, 4);
console.log(appleOrangeJuice);
//Number that is built in function 
const num = Number("23");
console.log(num);
*/
//////  Declarations Functions Expressions   /////////
/*
//Function Declaration
function calAge1(birthYear) {
  // const age = 2037 -  birthYear;
  return 2037 - birthYear;
}
const age1 = calAge1(1991);
// console.log(age1);

//Function Expression
const calcAge2 = function calAge1(birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);

console.log(age1, age2);
*/

/*
const calcAge2 = function calAge1(birthYear) {
  return 2037 - birthYear;
};

// Arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;

const age3 = calcAge3(1991);
console.log(age3);

// this is name function ( yearsUntilRetirement )
const yearsUntilRetirement = (birthYear) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return retirement;
};
// this is the first way in print result
console.log(yearsUntilRetirement(1991));
// this is the second way in the print result
const yearsUntil = yearsUntilRetirement(1991);
console.log(yearsUntil);
*/

/*
function cutFuritPieces(fruit) {
  return fruit * 4;
}

function fruitProcesor(apples, oranges) {
  const applePiesces = cutFuritPieces(apples);
  const orangePiesces = cutFuritPieces(oranges);

  const juice = `Juice with ${applePiesces} pieces of apple and ${orangePiesces} pieces of oragne.`;
  return juice;
}
console.log(fruitProcesor(2, 3));
*/

/*
const calcAge = function(birthYear){
  return    2037 - birthYear;
}

const yearsUntilRetirement = function(birthYear) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  return retirement;
};

console.log(yearsUntilRetirement(1992, "Youssef"));
console.log(yearsUntilRetirement(1965, "Ashraf"));
*/

///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.
TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉
GOOD LUCK 😀
*/

/*
const calcAverage  = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
}

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(576, 111);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
*/

///////////////////////////////////////
// Introduction to Arrays
/*
const friend1 = "Ahmed";
const friend2 = "Ali";
const friend3 = "Sayed";
const friend4 = "Osama";

const friends = ["Ahmed", "Ali", "Sayed", "Osama"];
console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const firstName = "Youssef";
const youssef = [firstName, "Ashraf El Sayed", 2037 - 1992, "Teacher", friends];
console.log(youssef);
console.log(youssef.length);

//Exercise

const calcAge = function calAge1(birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);
*/

/*
// add elements
const friends = ["Ahmed", "Ali", "Sayed", "Osama"];
// friends.push("Jamal");
const newLenght = friends.push("Jamal");
console.log(friends);
console.log(newLenght);

friends.unshift("Younes");
console.log(friends);

// Remove elements
friends.pop(); // last
const poped = friends.pop();
console.log(poped);
console.log(friends);

friends.shift(); //First
console.log(friends);
console.log(friends.indexOf("Sayed"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Sayed")); //includes Test Data if found or not
console.log(friends.includes("Bob"));
console.log(friends.includes(23)); // here is true becase it's found

//here not found
// if (friends.includes("Bob")) {
//   console.log("You have a friend called Bob");
// }

if (friends.includes("Sayed")) {
  console.log("You have a friend called Sayed");
}
*/

///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.
TEST DATA: 125, 555 and 44
HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉
GOOD LUCK 😀
*/

/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);

///////////////////////////////////////
// Introduction to Objects
const jonasArray = [
  "Hassan Atata",
  "Ali Tofaha",
  2037 - 1991,
  "teacher",
  ["Youssef", "Hasona", "zaghlol"],
];
const jonas = {
  firstName: "Hassan Atata",
  lastName: "Ali Tofaha",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Youssef", "Hasona", "zaghlol"],
};
*/

/*
const jonas = {
  firstName: "Hassan Atata",
  lastName: "Ali Tofaha",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Youssef", "Hasona", "zaghlol"],
};
console.log(jonas);
console.log(jonas.lastName);
console.log(jonas["lastName"]); // this same called key object

const nameKey = "Name"; // here make storge (Name) and calling it by concatenation exteremely good

console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

// console.log(jonas . "last" + nameKey); //this is rong way

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
);
// console.log(jonas.interestedIn); // when we try to access a property on an object that does not exist. So Jonas does not have a property called 'interested in', right?

//And I hope that you did understand the big difference between using the dot notation and the bracket notation and why the bracket notation gave us the correct result.
console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );
}
jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);
// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);
*/

///////////////////////////////////////
// Object Methods

/*
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYeah: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,
  // calcAge: function (birthYeah) {
  //   return 2037 - birthYeah;
  // },
  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYeah;
  // },
  calcAge: function () {
    this.age = 2037 - this.birthYeah;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      jonas.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

// console.log(jonas.calcAge(1992));
// console.log(jonas["calcAge"](1992));

console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);
// // Challenge
// // "Jonas is a 46-year old teacher, and he has a driver's license"
console.log(jonas.getSummary());
*/

///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)
1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
GOOD LUCK 😀
*/
/*
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);
// "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`
  );
}

*/

///////////////////////////////////////
// Iteration: The for Loop
/*
// console.log("Lifting weights repetition 1 🏋️‍♀️");
// console.log("Lifting weights repetition 2 🏋️‍♀️");
// console.log("Lifting weights repetition 3 🏋️‍♀️");
// console.log("Lifting weights repetition 4 🏋️‍♀️");
// console.log("Lifting weights repetition 5 🏋️‍♀️");
// console.log("Lifting weights repetition 6 🏋️‍♀️");
// console.log("Lifting weights repetition 7 🏋️‍♀️");
// console.log("Lifting weights repetition 8 🏋️‍♀️");
// console.log("Lifting weights repetition 9 🏋️‍♀️");
// console.log("Lifting weights repetition 10 🏋️‍♀️");
// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 30; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

*/

///////////////////////////////////////
// Looping Arrays, Breaking and Continuing
/*
const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];
const types = [];
// console.log(jonas[0])
// console.log(jonas[1])
// ...
// console.log(jonas[4])
// jonas[5] does NOT exist

for (let i = 0; i < jonas.length; i++) {
  // Reading from jonas array
  console.log(jonas[i], typeof jonas[i]);

  // Filling types array
  // types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}
console.log(types);
const years = [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);
// continue and break
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;
  console.log(jonas[i], typeof jonas[i]);
}
console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;
  console.log(jonas[i], typeof jonas[i]);
}
*/

///////////////////////////////////////
// Looping Backwards and Loops in Loops
/*
const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];
// 0, 1, ..., 4
// 4, 3, ..., 0
for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
  }
}
*/
///////////////////////////////////////
// The while Loop
/*
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}
let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
  rep++;
}
let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end...');
}
*/

///////////////////////////////////////
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!
TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉
4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array
GOOD LUCK 😀
*/

/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);
const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
*/
