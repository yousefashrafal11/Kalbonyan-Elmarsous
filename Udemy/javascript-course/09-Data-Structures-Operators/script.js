'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

  // 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

  const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  
  // ES6 enhanced object literals
  const openingHours = {
    // thu: {
    [weekdays[3]]: {
      open: 12,
      close: 22,
    },
    [weekdays[4]]: {
      open: 11,
      close: 23,
    },
    [weekdays[5]]: {
      open: 0, // Open 24 hours
      close: 24,
    },
  };

  const getCode = str => str.slice(0,3).toUpperCase();

  for(const flight of flights.split('+')){
    // console.log(flight);
    const [type, from, to, time] = flight.split(';')
    // console.log(type, from, to, time);
    const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll('_', ' ')} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
    console.log(output);
  }
  
  /* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/
  /*
  document.body.append(document.createElement('textarea'));
  document.body.append(document.createElement('button'));
  
  document.querySelector('button').addEventListener('click', function () {
    const text = document.querySelector('textarea').value;
    // console.log(text);
    const rows = text.split('\n');
    // console.log(rows);
    
    for(const [i, row] of rows.entries()){
      const [first, second] = row.toLowerCase().trim().split('_');
      // console.log(first, second);
      const  output = `${first}${second.replace(
        second[0],
        second[0].toUpperCase()
      )} `;
      console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);

    }
  });
*/
  /*
  // Split and join
console.log('a+very+nice+string'.split('+')); //The split() method takes a pattern and divides a String into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Youssef Ashraf'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');//The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
console.log(newName);

const capitalizeName = function (name){
  const names = name.split(' ');
  const namesUpper = [];

  for(const n of names){

    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));

  }
  console.log(namesUpper);
}

capitalizeName('jessica ann smith davis');
capitalizeName('youssef ashraf');

const message = "Go to gate 23!";
//The padStart() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string.
console.log(message.padStart(25, '+' ).padEnd(35, '+'));
console.log('Youssef'.padStart(25, '+' ))

const maskCreditCard = function(number){
  const str = number + '';
  const last = str.slice(-4);

  return last.padStart(str.length, '*');
}

console.log(maskCreditCard(861486486));
console.log(maskCreditCard(5656489648941921));
console.log(maskCreditCard('81468709849645604088464'));

// Repeat
const message2 = 'Bad waether... All Departues Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function(n) {
  console.log(`there are ${n} planes in line ${'✈'.repeat(n)}`);
} 

planesInLine(3);
planesInLine(7);
planesInLine(12);
*/

  /*
  // Working With String - part 2
  const airline = 'TAP Air Portugal';
  console.log(airline.toLowerCase());
  console.log(airline.toUpperCase());

  // FIX capitalization in name
  const passenger = "YoUsSF"; // Youssef
  const passengerLower = passenger.toLowerCase();
  console.log(passengerLower);
  const passengerCorrect = passengerLower[0].toUpperCase();
  console.log(passengerCorrect);
  const passengerCorrect1 = passengerLower[0].toUpperCase() + passengerLower.slice(1)
  console.log(passengerCorrect1);
  
  // comparing Emails
  const email = "hello@youssef.io";
  const loginEmail = '  Hello@Youssef.Io ';
////////
  // console.log(loginEmail);
  // const lowerEmail = loginEmail.toLowerCase();
  // console.log(lowerEmail);
  // const trimedEmail = lowerEmail.trim(); //The trim() method removes whitespace from both ends of a string and returns a new string
  // console.log(trimedEmail);
//////////////
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
  console.log(email === normalizedEmail);

  const priceGB = '288,97£';
  console.log(priceGB );
  const priceUS = priceGB.replace('£', '$').replace(',', '.');
  console.log(priceUS);
  
  const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
  console.log(announcement.replace('door', 'gate'));
  console.log(announcement.replaceAll('door', 'gate'));
  console.log(announcement.replaceAll(/door/g, 'gate'));//here same result replaceAll() function

  const plane = "Airbus A320neo";
  console.log(plane.includes('A320'));// The includes() method performs a case-sensitive search to determine whether one string may be found within another string, returning true or false as appropriate.

  console.log(plane.includes('bus'));
  console.log(plane.startsWith('bus'));//The startsWith() method determines whether a string begins with the characters of a specified string, returning true or false as appropriate.
  
  if(plane.startsWith('Airbus') && plane.endsWith('neo')){
    console.log('Part of the New Airbus family');
  }
  
  // Practice exercise
  const checkBaggage = function (items){
    const baggage = items.toLowerCase();
    if(baggage.includes('knife') || baggage.includes('gun')){
      console.log('You are NOT allowed on board');
    }else{
      console.log('welcome aboard!');
    }
  }
  
  checkBaggage('I have a laptop, some Food and a pocket Knife');
  checkBaggage('Socks and camera');
  checkBaggage('Got some snacks and a gun for protection');
 */

/*
  ///////////////////////////////////////
// Working With Strings - Part 1
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('Air')); //The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
console.log(airline.lastIndexOf('P')); //The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present.
// console.log(airline.indexOf('portugal'));



console.log(airline.slice(8));
console.log(airline.slice(4, 7));

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(1,3));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2)); //and then it will start counting from the end. Or actually start extracting from the end.  So these are the last two letters from Portugal.
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat 😬');
  else console.log('You got lucky 😎');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('Youssef'));
console.log(typeof new String('Youssef'));
console.log(typeof new String('Youssef').slice(1));
*/

/*
///////////////////////////////////////
// Maps: Iteration
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);
console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt('Your answer'));
// const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// Convert map to array
console.log([...question]);
// console.log(question.entries());
// console.log(question);
console.log([...question.keys()]);
console.log([...question.values()]);
*/

/*
/////////////////////////////////////////////
// Maps: Fundamentals

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,
  order (startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]}
      and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta (ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1,'Firenze, Italy');
console.log(rest.set(2,'Lisbon', 'Portugal'));

rest
.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
.set('open', 11)
.set('close', 23)
.set(true, 'We are open :D')
.set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

// const time = 21;
const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));
*/


/*
///////////////////////////////////////////
// Sets

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
console.log(ordersSet.add('Garlic Bread'));
console.log(ordersSet.add('Garlic Bread'));
console.log(ordersSet.delete('Risotto'));
// console.log(ordersSet.clear());
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
console.log(staff);
const staffUnique = new Set(staff);
console.log(staffUnique);

console.log(
  new Set(
    [
      'Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'
  ]).size
);

console.log(new Set('YoussefAshrafElsayed').size);
const printSet = ['youssefAshrafElsayed'];
const print = new Set(printSet);
console.log(print);
*/

/*
////////////////////////////////////////////
//Looping Objects: Object Keys, Values, and Entries

// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `We are open on ${properties.length} days `;

// for(const day of Object.keys(openingHours)){
for(const day of properties){
  openStr += `${day}, `;
}
console.log(openStr);

// Property Values
const values = Object.values(openingHours);
console.log(values);

//Entire Object
const entries = Object.entries(openingHours);
console.log(entries);

// [key, value]
for (const [day, {open, close}] of entries){
  console.log(`On ${day} we open at ${open} and close at ${close}`)
}
*/

/*
/////////////////////////////////////
//  Optional Chaining (?.)

if(restaurant.openingHours && restaurant.openingHours.mon)console.log(restaurant.openingHours.mon.open);

// WITH optional chaining
// console.log(restaurant.openingHours.mon.open); // here we have error 
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);
// if(restaurant.openingHours.mon)console.log(restaurant.openingHours.mon.open);
// if(restaurant.openingHours.fri)console.log(restaurant.openingHours.fri.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days){
  // const open = restaurant.openingHours[day]?.open || 'Closed'; // here not defined 0 
  const open = restaurant.openingHours[day]?.open ?? 'Closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Method
console.log(restaurant.order?.(0,1) ?? 'method does not exist');
console.log(restaurant.orderTest1?.(0,1) ?? 'method does not exist');

// Array
const users = [{name:'Youssef', email: 'hello@youssef.io'}];
// const users = [];
console.log(users[0]?.name ?? 'User Array empty');

if (users.length > 0)console.log(users[0].name);
else console.log('User Array empty');
*/

/*
///////////////////////////////////
//  Looping Arrays: The for-of Loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]

for(const item of menu) console.log(item);

for(const item of menu.entries()){
  console.log(`${item[0] + 1}: ${item[1]}`); // we make + 1 to start item from 1 instead of start 0
}

for(const [i, el] of menu.entries()){
  console.log(`${i + 1} : ${el}`);
}
*/

/*
//////////////////////////////////////
//  Logical Assignment Operators
const rest1 = {
  name: 'capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// Or assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

//nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

//And assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>'; 
// rest2.owner = rest2.owner && '<ANONYMOUS>'; 
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);
*/

/*
///////////////////////////////////////////////
//The Nullish Coalescing Operator (??)
restaurant.numGuests = 0;
const guests =  restaurant.numGuests || 10;
console.log(guests);

//Nullish: null and undefind (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/

/*
///////////////////////////////////////////////////////
// Short Circuiting (&& and ||)

console.log(3 || 'Youssef');
console.log('' || 'Youssef');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests2);

console.log('---- AND ----');
console.log(0 && 'Youssef');
console.log(7 && 'Youssef');
console.log('Youssef' && 23 && null  && 'Hello');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('muchrooms', 'spinach');
*/

/*
////////////////////////////////////////////////////
// Rest Pattern and Parameters
// 1) Destructuring
//SPREAD, because on RIGHT slide of =
const arr = [1, 2, ...[3, 4]];
// console.log(arr);

//REST, because on LEFT  side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2)Functions
const add = function (...numbers) {
  // console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 6, 7);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('muchrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('muchrooms');
*/

/*
//////////////////////////////////////
// The Spread Operator (...)
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]]; // this way to get data
console.log(badNewArr);

const newArr = [1, 2, ...arr]; // So new array, and you see that we get the exact same result here.
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 array
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

console.log(menu);

//Iterables: arrays, strings, maps, and sets,but not objects.
const str = 'Youssef';
const letter = [...str, '', 'S.'];
console.log(letter);
console.log(str);
// console.log(`${...str} Schmedtmann`); //that's because this is not a place

// Real-world Example
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3?'),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients); //this best way So indeed, always go with this more modern ES6 syntax here. It's an amazing addition to the language.

// Objects
const newRestaurant = {
  founderIn: 1198,
  ...restaurant,
  founder: 'Guiseppe',
};
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

/*
/////////////////////////////////////////
// Destructuring Objects
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  //here make set name to all object and calling all object by new name
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//Defult values
const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);

//Mutating Variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

//Nested Objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/

/*
/////////////////////////////////////
//Destructuring Arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondery] = restaurant.categories;
console.log(main, secondery);

// const temp = main;
// main = secondery;
// secondery = temp;
// console.log(main, secondery);//here make reverse from get data array

[main, secondery] = [secondery, main];
console.log(main, secondery);

// console.log(restaurant.order(2, 0));
/// Receive 2 return values from a function ///
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//nested destrcuturing
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

//Defult values
// const [p, q, r] = [8, 9]; //here undefined therd parmter
const [p = 1, q = 1, r = 1] = [8, 9]; //here we make defult value
console.log(p, q, r);
*/
