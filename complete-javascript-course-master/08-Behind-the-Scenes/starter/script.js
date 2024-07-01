'use strict';

function calcAge(birthYear) {
  const age = 2024 - birthYear;

  function printAge() {
    const output = `${firstName} you're ${age} years old, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `Oh, and you're a millennial, ${firstName}`;
      console.log(str);
    } else {const newStr =`${firstName} is not a millenial as he was born in the year ${birthYear}.`;
  console.log(newStr);}
  }
  printAge(); // REMEMBER TO CALL THE FUNCTION!1

  return age;
}

const firstName = 'Sam';
calcAge(1997);

