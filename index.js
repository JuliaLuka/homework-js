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
// function isNumberInRange(start, end, number) {
//   const isInRange = start <= number && number <= end;
//   return isInRange;
// }

// console.log(isNumberInRange(10, 30, 17));
// // result true
// console.log(isNumberInRange(10, 30, 5));
// // result false

// 22
// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === "pro" || subType === "vip";
//   return canAccessContent;
// }

// console.log(checkIfCanAccessContent("pro"));
// // result true
// console.log(checkIfCanAccessContent("vip"));
// // result true
// console.log(checkIfCanAccessContent("starter"));
// // result false

// 23
// function isNumberNotInRange(start, end, number) {
//   const isInRange = start <= number && number <= end;
//   const isNotInRang = !isInRange;

//   return isNotInRang;
// }

// console.log(isNumberNotInRange(10, 30, 17));
// // result false
// console.log(isNumberNotInRange(10, 30, 5));
// // result false
// console.log(isNumberNotInRange(20, 50, 24));
// // result false

// 24
// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;

//   if (totalSpent >= 50000) {
//     discount = 0.1;
//   } else if (20000 <= totalSpent && totalSpent < 50000) {
//     discount = 0.05;
//   } else if (5000 <= totalSpent && totalSpent < 20000) {
//     discount = 0.02;
//   } else if (totalSpent < 5000) {
//     discount = 0;
//   }
//   return discount;
// }

// console.log(getDiscount(137000));
// // result 0.1
// console.log(getDiscount(46900));
// // result 0.05
// console.log(getDiscount(8250));
// // result 0.02
// console.log(getDiscount(1300));
// // result 0

// 25
// function checkStorage(available, ordered) {
//   let message;
//   message =
//     ordered > available
//       ? "Not enough goods in stock!"
//       : "The order is accepted, our manager will contact you";

//   return message;
// }

// console.log(checkStorage(100, 50));
// // result "The order is accepted, our manager will contact you"
// console.log(checkStorage(100, 130));
// // result "Not enough goods in stock!"
// console.log(checkStorage(200, 20));
// // result "The order is accepted, our manager will contact you"

// 26
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;

//   message =
//     password === ADMIN_PASSWORD
//       ? "Access is allowed"
//       : "Access denied, wrong password!";

//   return message;
// }

// console.log(checkPassword("jqueryismyjam"));
// // result "Access is allowed"
// console.log(checkPassword("angul4r1sl1f3"));
// // result "Access denied, wrong password!"
// console.log(checkPassword("r3actsux"));
// // result "Access denied, wrong password!"

// 27
// function getSubscriptionPrice(type) {
//   let price;

//   switch (type) {
//     case "starter":
//       price = 0;
//       break;

//     case "professional":
//       price = 20;
//       break;

//     case "organization":
//       price = 50;
//       break;
//   }
//   return price;
// }
// console.log(getSubscriptionPrice("professional"));
// // result 20
// console.log(getSubscriptionPrice("organization"));
// // result 50
// console.log(getSubscriptionPrice("starter"));
// // result 0

// 28
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;

//   switch (password) {
//     case null:
//       message = "Canceled by user!";
//       break;
//     case ADMIN_PASSWORD:
//       message = "Welcome!";
//       break;
//     default:
//       message = "Access denied, wrong password!";
//   }
//   return message;
// }

// console.log(checkPassword("mangohackzor")); // result "Access denied, wrong password!";
// console.log(checkPassword(null)); // result "Canceled by user!";
// console.log(checkPassword("polyhax")); // result "Access denied, wrong password!";
// console.log(checkPassword("jqueryismyjam")); // result  "Welcome!";

// 29
// function getShippingCost(country) {
//   let message;

//   switch (country) {
//     case "China":
//       message = "Shipping to China will cost 100 credits";
//       break;
//     case "Chile":
//       message = "Shipping to Chile will cost 250 credits";
//       break;
//     case "Australia":
//       message = "Shipping to Australia will cost 170 credits";
//       break;
//     case "Jamaica":
//       message = "Shipping to Jamaica will cost 120 credits";
//       break;
//     default:
//       message = "Sorry, there is no delivery to your country";
//   }
//   return message;
// }
// console.log(getShippingCost("Australia")); // result Shipping to Australia will cost 170 credits
// console.log(getShippingCost("Germany")); // result Sorry, there is no delivery to your country
// console.log(getShippingCost("China")); // result Shipping to China will cost 100 credits
// console.log(getShippingCost("Chile")); // result Shipping to Chile will cost 250 credits
// console.log(getShippingCost("Jamaica")); // result Shipping to Jamaica will cost 120 credits
// console.log(getShippingCost("Sweden")); // result Sorry, there is no delivery to your country

// 30
// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`;
//   return message;
// }
// console.log(getNameLength("Poly")); // result "Name Poly is 4 characters long"
// console.log(getNameLength("Harambe")); // result "Name Harambe is 6 characters long"
// console.log(getNameLength("Billy")); // result "Name Billy is 5 characters long"
// console.log(getNameLength("Joe")); // result "Name Joe is 3 characters long"

// 31
// const courseTopic = "JavaScript essentials";
// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// console.log(courseTopicLength); // result 21
// console.log(firstElement); // result J
// console.log(lastElement); // result s

// 32
// function getSubstring(string, length) {
//   const substring = string.slice(0, length);
//   return substring;
// }
// console.log(getSubstring("Hello world", 3)); // result "Hel"
// console.log(getSubstring("Hello world", 6)); // result "Hello"
// console.log(getSubstring("Hello world", 8)); // result "Hello wo"
// console.log(getSubstring("Hello world", 11)); // result "Hello world"
// console.log(getSubstring("Hello world", 0)); // result ""

// 33
// function formatMessage(message, maxLength) {
//   let result;
//   result =
//     message.length <= maxLength ? message : message.slice(0, maxLength) + "...";
//   return result;
// }

// console.log(formatMessage("Curabitur ligula sapien", 16)); // result "Curabitur ligula..."
// console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // result "Curabitur ligula sapien"
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // result "Nunc sed turpis..."
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // result "Nunc sed turpis a felis in nunc fringilla"

// 34
// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase();
//   return normalizedInput;
// }
// console.log(normalizeInput("Hello world")); // result "hello world"
// console.log(normalizeInput("This ISN'T SpaM")); // result "this isn't spam"
// console.log(normalizeInput("Big SALE")); // result "big sale"

// 35
// function checkForName(fullname, name) {
//   const result = fullname.includes(name);
//   return result;
// }

// console.log(checkForName("Egor Kolbasov", "Egor")); // result true
// console.log(checkForName("Egor Kolbasov", "egOr")); // result false
// console.log(checkForName("Vadim Nekrasov", "Dima")); // result false

// 36
// function checkForSpam(message) {
//   let result;

//   if (message.includes("spam") || message.includes("sale")) {
//     message = message.toLowerCase();
//     result = true;
//   } else {
//     result = false;
//   }
//   return result;
// }

// console.log(checkForSpam("JavaScript weekly newsletter")); // result false
// console.log(checkForSpam("Get best sale offers now!")); // result true
