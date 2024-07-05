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

cons




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
