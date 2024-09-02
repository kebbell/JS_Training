// TEST QUESTIONS DONE RANDOMLY TO KEEP ME ALERT //

// Question 1: Write a function named add that takes two arguments and returns their sum.
function add(a, b) {
  return a + b;
}
console.log(add(2 + 4));


// Question 2: How does a function expression differ from a function declaration?
// DECLARATION
function norwich(a, b) {
return a * b;
}
console.log(norwich('pukki' + ' ' + 'is' + ' ' + 'king'));

// EXPRESSION
const ncfc = function norwich(a, b) {
  return a * b;
}
console.log(norwich('pukki' + ' ' + 'is' + ' ' + 'king'));

// Question: What is an Immediately Invoked Function Expression (IIFE) and provide an example?

(function () {
  console.log('hello');
})();

