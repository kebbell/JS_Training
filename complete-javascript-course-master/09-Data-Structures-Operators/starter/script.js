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
};

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

const restaurantCopy = {...restaurant};
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
