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
//     const
// }
