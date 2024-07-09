'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
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

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const airline = 'Tap Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
// const passenger = 'sTeven';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// const passenger = 'MARTIN';
// const passengerLowercase = (passenger) =>
//   passenger.charAt(0).toUpperCase() + passenger.slice(1).toLowerCase();

// console.log(passengerLowercase(passenger));

// const player = 'JACKSON'
// const playerCorrect = player[0].toUpperCase() + player.slice(1).toLowerCase();
// console.log(playerCorrect);

const runners = 'PALMER';
const runnersCorrect =
  runners[0].toUpperCase() + runners.slice(1).toLowerCase();
console.log(runnersCorrect);

const teamPlayersSurnames = 'ANDERSON';
const teamPlayersSurnamesCorrect =
  teamPlayersSurnames[0].toUpperCase() +
  teamPlayersSurnames.slice(1).toLowerCase();

console.log(teamPlayersSurnamesCorrect);

const email = 'smithcrawl@example.com';
const loginEmail = '  SMITHCrawl@example.com';

const correctEmail = loginEmail.toLowerCase().trim();

console.log(correctEmail);
console.log(email === correctEmail);

// replacing
const priceGB = '8764,73£';
console.log(priceGB);
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement = `All passengers come to boarding door 23. Boarding door 23!`;
console.log(announcement.replaceAll('door', 'gate').replaceAll('23', '45'));

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));




/*
// STRINGS
const airline = 'Tap Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('o'));
console.log(airline.lastIndexOf('g'));

console.log(airline.indexOf('Portugal'));
console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(airline.indexOf(' ') + 1));
console.log(airline.slice(airline.indexOf('g')));

console.log(airline.slice(-2));
console.log(airline.slice(6, -5));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E')
    console.log('Middle Seat');
  else console.log('Well Done');
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E'); 
checkMiddleSeat('38A');










































///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

/*
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1. 
const events = [...new Set(gameEvents.values())];
console.log(events);
// 2.
gameEvents.delete(64);
console.log(gameEvents);

// 3.
console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(`An event happened, on average, every ${time / gameEvents.size} minutes`);


// 4.
for (const [min, event] of gameEvents.entries()) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}


// AN OVERVIEW

// WHICH DATA STRUCTURE TO USE?

// SOURCE OF DATA (PROGRAM, UI OR EXTERNAL SOURCE) > COLLECTION OF DATA > DATA STRUCTURE (MAPS, SETS, OBJECTS, ARRAYS)

// SIMPLE = ARRAYS & SETS
// KEY/VALUE PAIRS = MAPS & OBJECTS

// OTHER BUILT-IN DATA STRUCTURES = WEAKMAP, WEAKSET
// NOT BUILT-IN DATA STRUCTURES = STACKS, QUEUES, TREES, HASH TABLES, LINKED LISTS

// ARRAYS VS SETS
// SIMPLE LISTS OF VALUES WHEN THE VALUE DOESN'T NEED TO BE DESCRIBED

// ARRAYS
// USE WHEN YOU NEED TO ORDER LISTS OF VALUES (MIGHT CONTAIN DUPLICATES)
// USE WHEN YOU NEED TO MANIPULATE DATA

// SETS
// USE WHEN YOU NEED TO WORK WITH UNIQUE VALUES
// USE WHEN HIGH-PERFORMANCE IS REALLY IMPORTANT
// USE TO REMOVE DUPLICATES FROM ARRAYS

// OBJECTS VS MAPS

// OBJECTS
// MORE "TRADITIONAL" KEY/VALUE STORE
// EASIER TO WRITE AND ACCESS VALUES WITH . AND [ ]
// USE WHEN YOU NEED TO USE FUNCTIONS (METHODS)
// USE WHEN WORKING WITH JSON (CAN CONVERT TO MAP)

// MAPS
// BETTER PERFORMANCE
// KEYS CAN HAVE ANY DATA TYPE
// EASY TO ITERATE
// EASY TO COMPUTE SIZE
// USE WHEN YOU SIMPLY NEED TO MAP KEYS TO VALUES
// USE WHEN YOU NEED KEYS THAT ARE NOT STRINGS

/*
// MORE MAPS

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

// const answer = Number(prompt('Your answer'));
console.log(answer);
const answer = 3;

console.log(question.get(answer === question.get('correct')));

// for (const [key, value] of question) {
//   if (typeof answer === true) {
//     console.log(`${value}`);
//   } else {
//     console.log(`${value}`);
//   }
// }

// Convert map to array
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);

// console.log(question.entries());

/*
// MAPS
// Maps can be any type of key (string, number, boolean, object, etc), but an object is only a string key.

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');

rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']);

console.log(rest.set('open', 11).set('close', 23));

rest.set(true, 'we are open :D');
rest.set(false, 'we are closed :D');

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
console.log(rest.size);
// rest.clear();
// console.log(rest);

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
// rest.set([1, 2], 'Test');
console.log(rest);
console.log(rest.get(arr));


/*
// SETS

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]); // SETS ARE ALSO ITERABLES
// An iterable is an object that can be looped over.
console.log(ordersSet);

console.log(ordersSet.size); // SIZE IS THE SAME AS LENGTH IN ARRAYS

console.log(ordersSet.has ('Pizza')); // ASKING DOES IT HAVE
console.log(ordersSet.add ('Garlic Bread')); // ADDS
ordersSet.delete('Risotto')
console.log(ordersSet);

// NO POSSIBLE WAY OF GETTING VALUES OUT OF A SET

for(const order of ordersSet) console.log(order);

// EXAMPLE
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffUnique = [...new Set(staff)]

console.log(staffUnique);
console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

//////////////////////////////////////
// CODING CHALLENGE 2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
/*

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

////////////////////////////////
// CODING CHALLENGE 2

// 1.
for (const [i, players] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${players}`);
}

// 2.
const odds = Object.values(game.odds);
console.log(odds); // OBJECT.VALUES(GAME.ODDS) - SHOWS THE OBJECT VALUES
let average = 0; // This line declares a variable average and initializes it to 0.
for (const odd of odds) average += odd; // This is a for...of loop that iterates over each value in the odds array. For each odd value, it adds it to the average variable.
average /= odds.length; // This line calculates the average by dividing the average variable by the length of the odds array.
console.log(average);

// 3.

for(const [team, odd] of Object.entries(game.odds)) // This line starts a for...of loop that iterates over each key-value pair in the game.odds object. The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs. 
{
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
} 


// console.log(`Odds of victory for ${game.team1}: ${game.odds.team1}`);
// console.log(`Odd of draw: ${game.odds.x}`);
// console.log(`Odds of victory for ${game.team2}: ${game.odds.team2}`);


/*

// PROPERTY NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
} 
console.log(openStr);

// PROPERTY VALUES
const values = Object.values(openingHours);
console.log(values);

// ENTIRE OBJECT
const entries = Object.entries(openingHours)
// console.log(entries);

// [ KEY, VALUE ]
for (const [key, {open, close}] of entries) {
  console.log(`On ${key}, we open at ${open} and close at ${close} `);
}


// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

/*
// WITH OPTIONAL CHAINING
console.log(restaurant.openingHours.mon?.open); // QUESTION MARK IS USED TO CHECK IF THE VARIABLE EXISTS - IF NOT, IT WONT PROCEED WITH THE REST OF THE CODE
console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`Open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [{ name: 'Jonas', email: 'b5H8h@example.com' }];

console.log(users[0]?.name ?? 'Users array empty'); // LOOK TO USE NULLISH EVERY TIME ??

/*
// FOR OF
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

for(const item of menu) console.log(item);

for(const item of menu.entries()) {
  console.log(item);
}

for(const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

console.log(...menu.entries());
*/

/*
///////////////////////////////////
// CODING CHALLENGE

// TEST DATA 

/* 
We're building a football betting app!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

/*

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// const players1 = [
//   ...game.players[0]
// ];
// const players2 = [ 
//   ...game.players[1]
// ];

const [players1, players2] = game.players;

// const gk = players1[0]; // THE GOALKEEPER
// const fieldPlayers = [...players1.slice(1)]; // THE REMAINING FIELD PLAYERS - SLICE REMOVES THE FIRST ELEMENT

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']
console.log(players1Final);

const {team1, x: draw, team2} = game.odds;

// const team1 = game.odds.team1
// const team2 = game.odds.team2
// const draw = game.odds.draw

console.log(players1, players2);
console.log(gk, fieldPlayers);


const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
  }
  printGoals(...game.scored);


  team1 < team2 && console.log('Team 1 is more likely to win');
  team1 > team2 && console.log('Team 2 is more likely to win');


// MY VERSION WITH TURNARY OPERATOR
// const likely = game.odds.team1 < game.odds.team2 ? 'Bayern Munich' : 'Borrussia Dortmund';

// console.log(`The likely winner is ${likely}`);

// game.odds.team1 < game.odds.team2 ? console.log('Bayern Munich') : console.log('Borrussia Dortmund');



















/*
////////////////////////////
//

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',  
}

// OR ASSIGNMENT OPERATOR
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// NULLISH ASSIGNMENT OPERATOR
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);















/*
////////////////////////////
// NULLISH COALESCING OPERATOR

restaurant.numGuests = 0
const guests = restaurant.numGuests || 10;
console.log(guests);

// SHORT CIRCUITING NULLISH VALUES SO YOU CAN USE 0
// NULLISH: null and undefined (NOT 0 or '') - DEFINED ABOVE
const guestCorrect = restaurant.numGuests ?? 10; // NULLISH COALESCING
console.log(guestCorrect);

/*
///////////////////////////////////
// SHORT CIRCUITING (&& AND ||)

// SHORT CIRCUITING WHEN TRUE
console.log('--- OR ----');
// Use ANY DATA TYPE, return ANY DATA TYPE, short-circuited
console.log(3 || 'Jonas');
console.log('' || 'jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 21;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// SHORTCIRCUITING WHEN FALSE
console.log('--- AND ----');

console.log(0 && 'Jonas');

console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'jonas');

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza ('mushrooms', 'onion', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza ('mushrooms', 'onion', 'spinach');

//
/*

// Destructuring

// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFoods] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFoods);

// Objects
const { sat, ...thisWeekdays } = restaurant.openingHours;
console.log(thisWeekdays);

// 2 Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) 
    sum += numbers[i]
    console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23,5,7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'spinach');

restaurant.orderPizza('mushrooms');

/*
const arr = [7, 8, 9];
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray);

// SPREAD OPERATOR
restaurant.orderDelivery({
  time: '22:30',
  address: 'Ballamodha',
  mainIndex: 2,
  starterIndex: 2,
}); // ARGUMENTS DONT HAVE TO BE IN ORDER

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

const newMenu = [...restaurant.mainMenu, 'Gnnocci', 'Ramen'];
console.log(newMenu);

// COPY ARRAY
const mainMenuCopy = [...restaurant.mainMenu];

// JOIN 2 OR MORE ARRAYS
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

const extras = [...restaurant.categories, ...restaurant.name];

console.log(menu, extras);

// ITERABLES: ARRAYS, STRINGS, MAPS, SETS. NOT OBJECTS

const ingredients = [
  //   prompt('Let\'s make pasta! Ingredient 1?'),
  //   prompt('Ingredient 2?'),
  //   prompt('Ingredient 3?'),
];

// console.log(ingredients);

// SPREAD OPERATOR
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients); // MUCH QUICKER THAN ORIGINAL CODE

// OBJECTS

const newRestaurant = { ...restaurant, founded: 1998, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);







//////////////////////////////////////////
// DESTRUCTORING OBJECTS
/*
const { name, openingHours, categories } = restaurant;

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// DEFAULT VALUES
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// MUTATING VARIALES
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

// TO REASSIGN USE PARRAMETES
({ a, b } = obj);
console.log(a, b); // OW A & B TAKE THE NEW VALUES

// NESTED OBJECTS

const {fri} = openingHours;
console.log(fri);

const {fri: {open, close}} = openingHours;
console.log(open, close);

/*
////////////////////////////////////////
// DESTRUCTURING THE ARRAY

const arr = [2, 4, 6];

const a = arr[0];
const b = arr[1];
const c = arr[2];


const [x, y, z] = arr; // MUCH SHORTER QUICKER WAY OF DOING THE ABOVE
// REMEMBER TO DECLARE THE VARIABLE WITH CONST
console.log(a, b, c, x, y, z);

let [main, , secondary] = restaurant.categories; // , , = SKIPS
console.log(main, secondary);

// SWITCHING VARIABLES
// IF YOU WANT TO SWITCH IT

// CAN DO - WITHOUT DESTRUCTURING
const temp = main;
main = secondary;
secondary = temp;
// console.log(main, secondary);

// DESTRUCTURING
[main, secondary] = [secondary, main];
console.log(main, secondary);

// RECIEVE 2 RETTURN VALUES FROM A FUNCTION
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
// constt [i, ,j] = nested;
// console.log(i, j);

// DESTRUCTING WHEN NESTED
const [i, , [j, k]] = nested;
console.log(i, j, k);

// DEFAULT VALUES
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // R HAS NO VALUE SO IT TAKES FROM THE R = 1

*/
