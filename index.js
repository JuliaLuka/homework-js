// // 1
// const productName = "Droid";
// const pricePerItem = 2000;

// console.log(productName);
// console.log(pricePerItem);

//2
// let productName = "Droid";
// let pricePerItem = 2000;

// productName = "Repair droid";
// console.log(productName);

// pricePerItem = 3500;
// console.log(pricePerItem);

// 3
// const topSpeed = 160;
// console.log(topSpeed);
// const distance = 617.54;
// console.log(distance);
// const login = "mango935";
// console.log(login);
// const isOnline = true;
// console.log(isOnline);
// const isAdmin = false;
// console.log(isAdmin);

// 4
// const pricePerItem = 3500;
// const orderedQuantity = 4;
// const totalPrice = pricePerItem * orderedQuantity;
// console.log(totalPrice);

// 5
// const productName = "Droid";
// const pricePerItem = 3500;
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
// console.log(message);

// 6
// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
// console.log(message);

// 7
// function sayHi() {
//     console.log("Hello, this is my first function!");
// }
// sayHi();

// 8
// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
// }
// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// 9
// function add(a, b, c) {
//   return a + b + c;
// }
// add(2, 5, 8);

// let result = add(15, 27, 10);
// console.log(result);
// result = add(10, 20, 30);
// console.log(result);
// result = add(5, 10, 15);
// console.log(result);

// 10
// function makeMessage(name, price) {
//   const message = `You picked ${name}, price per item is ${price} credits`;
//   return message;
// }
// console.log(makeMessage("Julia", 10));

// 11
// function calculateTotalPrice(orderedQuantity, pricePerItem) {
//   const totalPrice = orderedQuantity * pricePerItem;
//   return totalPrice;
// }
// console.log(calculateTotalPrice(7, 10));

// 12
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
//   const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
//   return message;
// }
// console.log(makeOrderMessage(2, 100, 50));
// 250

// 13
// function isAdult(age) {
//   const passed = age >= 18;
//   return passed;
// }
// console.log(isAdult(17));
// // false
// console.log(isAdult(40));
// // true

// 14
// function isValidPassword(password) {
//   const SAVED_PASSWORD = "jqueryismyjam";
//   const isMatch = SAVED_PASSWORD === password;
//   return isMatch;
// }

// console.log(isValidPassword("mangodab3st"));
// //false
// console.log(isValidPassword("kiwirul3z"));
// //false
// console.log(isValidPassword("jqueryismyjam"));
// //true

// 15
// function checkAge(age) {
//   let message;
//   if (age >= 18) {
//     message = "You are an adult";
//   } else {
//     message = "You are a minor";
//   }
//   return message;
// }

// console.log(checkAge(16));
// // false "You are a minor"
// console.log(checkAge(31));
// // true "You are an adult"

// 16
// function checkStorage(available, ordered) {
//   let message;

//   if (available < ordered) {
//     message = "Not enough goods in stock!";
//   } else {
//     message = "Order is processed, our manager will contact you.";
//   }
//   return message;
// }

// console.log(checkStorage(100, 50));
// // result "Order is processed, our manager will contact you."
// console.log(checkStorage(100, 130));
// // result "Not enough goods in stock!"
// console.log(checkStorage(200, 20));
// // result "Order is processed, our manager will contact you."

// 17
// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

// console.log(a);
// // a(5)+ a(2) = 7
// console.log(b);
// // b(10)- b(4) = 6
// console.log(c);
// // c(15)* c(3) = 45
// console.log(d);
// // d(20)/ d(10) = 2

// 18
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   let totalPrice = pricePerDroid * orderedQuantity;
//   if (totalPrice > customerCredits) {
//     message = `Insufficient funds!`;
//   } else {
//     customerCredits -= totalPrice;
//     message = `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left`;
//   }
//   return message;
// }

// console.log(makeTransaction(3000, 5, 23000));
// // result "You ordered 5 droids, you have 8000 credits left"
// console.log(makeTransaction(5000, 10, 8000));
// // result "Insufficient funds!"

// 19
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;

//   if (password === null) {
//     message = "Canceled by user!";
//   } else if (password === ADMIN_PASSWORD) {
//     message = "Welcome!";
//   } else {
//     message = "Access denied, wrong password!";
//   }

//   return message;
// }

// console.log(checkPassword("mangohackzor"));
// // "Access denied, wrong password!";
// console.log(checkPassword(null));
// // "Canceled by user!";
// console.log(checkPassword("jqueryismyjam"));
// // "Welcome!";

// 20
// function checkStorage(available, ordered) {
//   let message;

//   if (ordered === 0) {
//     message = "There are no products in the order!";
//   } else if (ordered > available) {
//     message = "Your order is too large, there are not enough items in stock!";
//   } else {
//     message = "The order is accepted, our manager will contact you";
//   }

//   return message;
// }

// console.log(checkStorage(100, 50));
// // "The order is accepted, our manager will contact you";
// console.log(checkStorage(100, 130));
// // "Your order is too large, there are not enough items in stock!";
// console.log(checkStorage(70, 0));
// // "There are no products in the order!";

// 21
function isNumberInRange(start, end, number) {}
