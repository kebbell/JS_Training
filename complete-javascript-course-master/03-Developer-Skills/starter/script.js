// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// PROBLEM 1: WE WORK FOR A COMPANY BUILDING A SMART HOME THERMOMETER. OUR MOST RECENT TASK IS THIS: "GIVEN AN ARRAY OF TEMPERATURES OF ONE DAY, CALCULATE THE TEMPERATUR AMPLITUDE. KEEP IN MIND THAT SOMETIMES THERE MIGHT BE A SENSOR ERROR."

/*
const temperatures = [3, -2, -1, -6, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currTemp = temps[i];
    if(typeof currTemp !== 'number') continue; // !== means, is not the same so this continue loop will skip over anything that isnt a number

    if (currTemp > max) max = currTemp;
    if (currTemp < min) min = currTemp;
  }
  console.log(max, min);
  return max - min; // ALWAYS RETURN WHAT YOU WANT LOGGED SO IN THIS CASE THE TEMP AMPLITUDE
};

//calcTempAmplitude([3, 7, 9, 23, 8, 1, 5, 32]);
const amplitude = calcTempAmplitude(temperatures); // REMEBER TO ALWAYS CALL THE FUNCTION
console.log(amplitude)

// PROBLEM 2: FUNCTION SHOULD NOW RECIEVE 2 ARRAYS OF TEMPERATURES

const calcTempAmplitudeNew = function (t1, t2) {

  const temps = t1.concat(t2);
  console.log(temps);

let max = temps[0];
let min = temps[0];

for (let i = 0; i < temps.length; i++) {
  const currTemp = temps[i];
  if(typeof currTemp !== 'number') continue; // !== means, is not the same so this continue loop will skip over anything that isnt a number

  if (currTemp > max) max = currTemp;
  if (currTemp < min) min = currTemp;
}
console.log(max, min);
return max - min; // ALWAYS RETURN WHAT YOU WANT LOGGED SO IN THIS CASE THE TEMP AMPLITUDE
};

//calcTempAmplitude([3, 7, 9, 23, 8, 1, 5, 32]);
const amplitudeNew = calcTempAmplitudeNew(temperatures); // REMEBER TO ALWAYS CALL THE FUNCTION
console.log(amplitudeNew)
*/

// DEBUGGING

/*
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // B = FIND THE BUG (VALUE IS A PROMPT WHICH IS A STRING)
    // value: prompt('Degrees celsius:')

    // C = FIX
    // value: Number(prompt('Degrees celsius:')), COMMENTTED OUT AS PROMPT IS ANNOYING
    value: 10, // SAME AS ABOVE
  };

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A = IDENNTIFY BUG

console.log(measureKelvin());


// USING A DEBUGGER
const calcTempAmplitudeBug = function (t1, t2) {

  const temps = t1.concat(t2);
  console.log(temps);

let max = 0;
let min = 0;

for (let i = 0; i < temps.length; i++) {
  const currTemp = temps[i];
  if(typeof currTemp !== 'number') continue; // !== means, is not the same so this continue loop will skip over anything that isnt a number

  // debugger; CAN GET YOU STRAIGHT TO THE DEBUGGER SECTION WITHIN SOURCE IN INSPECT
  if (currTemp > max) max = currTemp;
  if (currTemp < min) min = currTemp;
}
console.log(max, min);
return max - min; // ALWAYS RETURN WHAT YOU WANT LOGGED SO IN THIS CASE THE TEMP AMPLITUDE
};

//calcTempAmplitude([3, 7, 9, 23, 8, 1, 5, 32]);
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]); 
// A = IDENTIFY BUG
console.log(amplitudeBug)
*/

///////////////////////////////////////////////////////////////////

// CODING CHALLENGE

// TEST 9

const temp = [17, 21, 23];

console.log(`...${temp[0]}ºC on day 1 ...${temp[1]}ºC on day 2 ...${temp[2]}ºC on day 3`);

const tempNew = [12, 5, -5, 0, 4];

console.log(`...${tempNew[0]}ºC on day 1 ...${tempNew[1]}ºC on day 2 ...${tempNew[2]}ºC on day 3 ...${tempNew[3]}ºC on day 4 ... ${tempNew[4]}ºC on day 5`);


// BELOW IS THE ANSWER

// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with ºC
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string
// - Log string to console

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function(arr) {
  let str = '';
  for(let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}ºC in ${i+1} days ... `;
  }
  console.log('...' + str);
};

printForecast(data1);