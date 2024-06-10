/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/

function tellFortune(numberOfChildren, parentName, location, job) {
  console.log(
    `You will be a ${job} in ${location}, and married to ${parentName} with ${numberOfChildren} kids.`
  );
}
tellFortune("software engineer", "Jordan", "muna", 35);
/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/

function calculateDogAge(dogAge) {
  age = 7 * dogAge;
  console.log(`Your doggie is ${age} years old in dog years!`);
}
calculateDogAge(1);

/*
3 
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/

function calculateSupply(age, amountPerDay) {
  const maxAge = 100;
  const remainingYears = maxAge - age;
  const amountNeeded = remainingYears * 365 * amountPerDay;
  console.log(
    `You will need ${amountNeeded} cups of tea to last you until the ripe old age of ${maxAge}`
  );
}
calculateSupply(30, 3);

/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/

function greet(name) {
  console.log(`Hello ${name}`);
}
greet("Ahmad");

// 5
// what is the error:

// function double(cat) {
//   return 2 * x;
// }

// ********************* here you use undefine variable "x"

// function double(7) {
//     return 2 * 7;
//   }

// ********************* here we can't number as variable

// function double('7') {
//   return 2 * 'x';
// }

// ********************* here we can't string as variable to be default variable

/*
6
fix these functions:
*/

// func double1(x {
//   return 2 * x ;
// }

// you have to write function not 'func' and close circle braket
function double1(x) {
  return 2 * x;
}

// functiondouble2 x)
// return 2 * x;
// }

// you have to write function not 'func' and close circle braket
function double2(x) {
  return 2 * x;
}

// function (x) double3 {
//   return 2 * x;
// }

function double3(x) {
  return 2 * x;
}

// 7
// Write a function called cube that:
// accept 1 parameter and calculate the cube of this number

// Ex: cube(4)
// => 64
// */
function cube(number) {
  return Math.pow(number, 3);
}
console.log(cube(9));
/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/

function multiply(a, b) {
  return a * b;
}
multiply(5, 5);

/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"
  
Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/

function canIGetADrivingLicense(age) {
  if (age >= 20) {
    console.log("yes you can");
  } else {
    const ageafter = 20 - age;
    console.log(`"please come back after ${ageafter} years to get one"`);
  }
}

/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/

function sameLength(firstString, secondString) {
  if (firstString.length === secondString.length) {
    console.log("True");
  } else {
    console.log("False");
  }
}

/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/

function largerNubmer(fNumber, snumber) {
  if (!isNaN(fNumber) && !isNaN(snumber)) {
    if (fNumber > snumber) {
      console.log(`First Number Is Larger ${fNumber}`);
    } else if (fNumber < snumber) {
      console.log(`Second Number Is Larger ${snumber}`);
    } else {
      console.log(`First Number and Second Number are Equal ... `);
    }
  }
}
largerNubmer(89, 34);

/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/
function smalestNumber(fNumber, sNumber, tNumber) {
  if (!isNaN(fNumber) && !isNaN(sNumber) && !isNaN(tNumber)) {
    if (fNumber < sNumber) {
      if (fNumber < tNumber) {
        console.log(`First Number Is Larger ${fNumber}`);
      } else {
        console.log(`Third Number Is Larger ${tNumber}`);
      }
    } else if (sNumber < fNumber) {
      if (sNumber < tNumber) {
        console.log(`Second Number Is Larger ${sNumber}`);
      } else {
        console.log(`Third Number Is Larger ${tNumber}`);
      }
    } else if (tNumber < fNumber) {
      console.log(`Third Number Is Larger ${tNumber}`);
    } else {
      console.log(`All three Numbers are Equal ... `);
    }
  }
}
smalestNumber(89, 34, 9);

/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/

function shorterString(str1, str2, str3, str4, str5) {
  const strings = [str1, str2, str3, str4, str5];
  let shortest = strings[0];
  for (let i = 1; i < strings.length; i++) {
    if (strings[i].length < shortest.length) {
      shortest = strings[i];
    }
  }
  return shortest;
}

console.log(shorterString("air", "school", "car", "by", "github")); // Output: by

/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/

function longerString(...str) {
  const strings = [...str];
  let smallest = strings[0];
  for (let index = 0; index < strings.length; index++) {
    if (smallest > strings[index]) {
      smallest = strings[index];
    }
  }
  console.log(`the longest string is ${smallest}`);
}

longerString("3a", "a33", "a3434");
/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(3));

/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/

function isEven(number) {
  if (number % 2 === 0) {
    return false;
  } else {
    return true;
  }
}
console.log(isEven(3));

/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/

function positive(number) {
  if (number < 0) {
    return number * -1;
  } else {
    return number;
  }
}
console.log(positive(-7));
/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/

function fullName(fName, lName) {
  return fName + " " + lName;
}
console.log(fullName("Ahmad", "Alhraki"));
/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/

function average(...number) {
  let numbers = [...number];
  const sumOfNumbers = number.reduce((acc, item, index) => {
    return acc + item;
  });
  console.log(sumOfNumbers);
}
average(1, 2, 4, 6, 54);
/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/

function randomNumber() {
  return Math.random() * (1 - 0) + 0;
}
console.log(randomNumber());
/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/
function randomBetweenNumbers(min, max) {
  return Math.random() * (max - min) + min;
}
console.log(randomBetweenNumbers(1, 5));
/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/

function scoreInUniversity(score) {
  if (score >= 95 && score <= 100) {
    return "A";
  } else if (score >= 85 && score <= 94) {
    return "B";
  } else if (score >= 70 && score <= 84) {
    return "C";
  } else if (score >= 50 && score <= 69) {
    return "D";
  } else if (score >= 0 && score <= 49) {
    return "F";
  } else {
    return "Invalid score";
  }
}

// Example usage:
console.log(scoreInUniversity(97));

/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/
function counter() {
  let count = 0;
  return function () {
    return count++;
  };
}

// Example usage:
const increment = counter();
console.log(increment()); // Output: 0
console.log(increment()); // Output: 1
console.log(increment()); // Output: 2
console.log(increment()); // Output: 3

/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/

function counter() {
    let count = 0;
    const increment = function() {
        return count++;
    };
    const resetCounter = function() {
        const lastCount = count;
        count = 0;
        return `${lastCount} - The counter has been reset.`;
    };
    return { increment, resetCounter };
}

// Create a counter instance
const myCounter = counter();

console.log(myCounter.increment()); // Output: 0
console.log(myCounter.increment()); // Output: 1
console.log(myCounter.increment()); // Output: 2

console.log(myCounter.resetCounter()); // Output: 3 - The counter has been reset.

console.log(myCounter.increment()); // Output: 0
console.log(myCounter.increment()); // Output: 1
