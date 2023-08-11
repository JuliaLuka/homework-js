// 1
// function checkAge(age) {
//   if (age >= 18) {
//     return "You are an adult";
//   }
//   return "You are a minor";
// }

// console.log(checkAge(20)); // result "You are an adult"
// console.log(checkAge(8)); // result "You are a minor"

// 2
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }
//   return "Access denied, wrong password!";
// }
// console.log(checkPassword("mangohackzor")); // result "Access denied, wrong password!"
// console.log(checkPassword("polyhax")); // result "Access denied, wrong password!"
// console.log(checkPassword("jqueryismyjam")); // result "Welcome!"

// 3
// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return "Your order is empty!";
//   }
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
//   return "The order is accepted, our manager will contact you";
// }

// console.log(checkStorage(100, 50)); //result "The order is accepted, our manager will contact you"
// console.log(checkStorage(100, 130)); //result "Your order is too large, not enough goods in stock!"
// console.log(checkStorage(70, 0)); //result "Your order is empty!"

// 4
// const fruits = ["apple", "plum", "pear", "orange"];
// console.log(fruits); //result (4)['apple', 'plum', 'pear', 'orange']

// 5
// const fruits = ["apple", "plum", "pear", "orange"];

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];
// // const lastElement = fruits[3];

// console.log(firstElement); //result apple
// console.log(secondElement); //result plum
// console.log(lastElement); //result orange

// 6
// const fruits = ["apple", "plum", "pear", "orange"];
// fruits[1] = "peach";
// fruits[3] = "banana";

// console.log(fruits); //result (4)['apple', 'peach', 'pear', 'banana']

// 7
// const fruits = ["apple", "peach", "pear", "banana"];
// const fruitsArrayLength = fruits.length;
// console.log(fruitsArrayLength); //result 4

//8
// const fruits = ["apple", "peach", "pear", "banana"];
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[fruits.length - 1];
// console.log(fruits); //result (4)['apple', 'peach', 'pear', 'banana']
// console.log(lastElementIndex); //result 3
// console.log(lastElement); //result banana

//9
// function getExtremeElements(array) {
//   return [array[0], array[array.length - 1]];
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5])); //result (2)[1, 5]
// console.log(getExtremeElements(["Earth", "Mars", "Venus"])); //result (2)['Earth', 'Venus']
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"])); //result (2)['apple', 'banana']

// 10
// function splitMessage(message, delimiter) {
//   let words;
//   words = message.split(delimiter);
//   return words;
// }
// console.log(splitMessage("Mango hurries to the train", " ")); //result (5)['Mango', 'hurries', 'to', 'the', 'train']
// console.log(splitMessage("Mango", "")); //result (5)['M', 'a', 'n', 'g', 'o']
// console.log(splitMessage("best_for_week", "_")); //result (3)['best', 'for', 'week']

//11
// function calculateEngravingPrice(message, pricePerWord) {
//   return message.split(" ").length * pricePerWord;
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10)); //result 50
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20)); //result 100
// console.log(calculateEngravingPrice("Web-development is creative work", 40)); //result 160

// 12
// function makeStringFromArray(array, delimiter) {
//   //   let string;
//   return (string = array.join(delimiter));
//   //   return string;
// }
// console.log(
//   makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ")
// ); //result Mango hurries to the train
// console.log(makeStringFromArray(["M", "a", "n", "g", "o"], "")); //result Mango
// console.log(makeStringFromArray(["top", "picks", "for", "you"], "_")); //result top_picks_for_you

//13
// function slugify(title) {
//   const words = title.toLowerCase().split(" ");
//   return (slug = words.join("-"));
// }
// console.log(slugify("Arrays for begginers")); //result
// console.log(slugify("English for developer")); //result
// console.log(slugify("Ten secrets of JavaScript")); //result

// 14
// const fruits = ["apple", "plum", "pear", "orange", "banana"];
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls); //result (2) ['apple', 'plum']
// console.log(nonExtremeEls); //result (3) ['plum', 'pear', 'orange']
// console.log(lastThreeEls); //result (3) ['pear', 'orange', 'banana']

// 15
// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];
// const allClients = oldClients.concat(newClients);
// console.log(allClients); //result (6) ['Mango', 'Ajax', 'Poly', 'Kiwi', 'Peach', 'Houston']

// 16
// function makeArray(firstArray, secondArray, maxLength) {
//   const newArray = firstArray.concat(secondArray);
//   if (newArray.length > maxLength) {
//     return newArray.slice(0, maxLength);
//   }
//   return newArray;
// }
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); //result (3) ['Mango', 'Poly', 'Ajax']
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); //result (4) ['Mango', 'Poly', 'Houston', 'Ajax']
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); //result (3) ['Mango', 'Ajax', 'Chelsea']
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); //result (2) ['Earth', 'Jupiter']
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); //result (4) ['Earth', 'Jupiter', 'Neptune', 'Uranus']
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); //result []

// 17
// const start = 3;
// const end = 7;
// for (let i = start; i <= end; i += 1) {
//   console.log(i);
// }
//result if i+=1 / 3,4,5,6,7
//result if i+=2 / 3,5,7
//result if i+=3 / 3,6

// 18 ????????
// function calculateTotal(number) {
//   let total = 0;
//   for (let i = 1; i <= number; i += 1) {
//     total += i; // total + i = total;
//   }
//   return total;
// }
// console.log(calculateTotal(1)); //result 1
// console.log(calculateTotal(3)); //result 6 (1+2+3=6)
// console.log(calculateTotal(10)); //result 28 (1+2+3+4+5+6+7=28)

// 19
// const fruits = ["apple", "plum", "pear", "orange"];
// for (let i = 0; i < fruits.length; i += 1) {
//   const fruit = fruits[i];
//   console.log(fruit); //result apple plum pear orange
// }

// 20
// function calculateTotalPrice(order) {
//   let total = 0;
//   for (i = 0; i < order.length; i += 1) {
//     total += order[i]; // total + order[i] = total;
//   }
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])); //result 12 + 85 + 37 + 4 = 138
// console.log(calculateTotalPrice([164, 48, 291])); //result 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); //result 1116

// 21
// function findLongestWord(string) {
//   const words = string.split(" ");
//   let longestWord = "";

//   for (let i = 0; i < words.length; i += 1) {
//     if (words[i].length > longestWord.length) {
//       longestWord = words[i];
//     }
//   }
//   return longestWord;
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // result jumped
// console.log(findLongestWord("Google do a roll")); // result Google
// console.log(findLongestWord("May the force be with you")); // result force

// 22
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   return numbers;
// }
// console.log(createArrayOfNumbers(1, 3)); // result (3) [1, 2, 3]
// console.log(createArrayOfNumbers(14, 17)); // result (4) [14, 15, 16, 17]
// console.log(createArrayOfNumbers(29, 34)); // result (6) [29, 30, 31, 32, 33, 34]

// 23
// function filterArray(numbers, value) {
//   const newArray = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       newArray.push(numbers[i]);
//     }
//   }
//   return newArray;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5];
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5];
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // [];
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76];
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76];

// 24
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
//   return fruits.includes(fruit);
// }
// console.log(checkFruit("plum")); // true
// console.log(checkFruit("mandarin")); // false
// console.log(checkFruit("pear")); // true
// console.log(checkFruit("Pear")); // false

// 25
// function getCommonElements(array1, array2) {
//   const result = [];
//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       result.push(array1[i]);
//     }
//   }
//   return result;
// }
// console.log(getCommonElements([1, 2, 3], [2, 4])); //result [2];
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); //result [1, 2];
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // result [12, 27, 3];
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // result [10, 30, 40];
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // result [];

// 26
// function calculateTotalPrice(order) {
//   let total = 0;

//   for (let i of order) {
//     total += i;
//   }

//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4])); // 138
// console.log(calculateTotalPrice([164, 48, 291])); // 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // 1116

// 27
// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   const number = numbers[i];

//   //рефакторинг
//   for (let i of numbers) {
//     const number = i;

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // result [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // result [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // result []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // result [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // result [24, 41, 76]

// 28
// function getEvenNumbers(start, end) {
//   const newArray = [];
//     for (let i of newArray) {
//       newArray =
//   }
// }
