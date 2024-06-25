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
const amplitude = calcTempAmplitude(temperatures); // REMEBER TTO ALWAYS CALL THE FUNCTION
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
const amplitudeNew = calcTempAmplitudeNew(temperatures); // REMEBER TTO ALWAYS CALL THE FUNCTION
console.log(amplitudeNew)
*/

// DEBUGGING

const measureKelvin = function() {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: prompt('Degrees celsius:')
  }

  const kelvin = measurement.value + 273;
  return kelvin;
}

console.log(measureKelvin);