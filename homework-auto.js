// 1 метод indexOf и slice
/* Функція getFileName(file) приймає один параметр
file - рядок з іменем файлу. Ім'я файлу може бути з розширенням, наприклад: styles.css, app.js або без, наприклад: styles, app.
Використовуючи методи indexOf та slice, доповни код функції таким чином, щоб:
Вона перевіряла наявність розширення в імені файлу (назва розширення відокремлюється від імені файла крапкою)
Якщо ім'я файлу не містить розширення, то функція повертала новий підрядок, що містить ім'я файлу без змін
В іншому разі функція повертала підрядок з іменем файлу, але без розширення */
// function getFileName(file) {
//   //   Знаходимо індекс останньої крапки в рядку (розширення файлу)
//   const fileWithDot = file.indexOf(".");
//   // Перевіряємо, чи існує крапка (розширення)
//   if (fileWithDot !== -1) {
//     // Якщо є крапка, повертаємо підрядок без розширення
//     return file.slice(0, fileWithDot);
//   }
//   // Якщо немає крапки, повертаємо той самий рядок (без змін)
//   return file;
// }
// console.log(getFileName("styles.css")); //"styles"
// console.log(getFileName("app.js")); //"app"
// console.log(getFileName("app")); //"app"
// console.log(getFileName("index.js")); //"index"
// console.log(getFileName("index.html")); //"index"
// console.log(getFileName("index.css")); //"index"
// console.log(getFileName("index")); //"index"

//2 метод trim()
/* Функція createFileName(name, ext) приймає два параметри:
name - рядок, що зберігає ім'я файлу без розширення, яке вводить користувач. 
Воно може містити зайві пробіли на початку або в кінці рядка, наприклад "order ", " finance " тощо
ext - рядок, що зберігає розширення, наприклад "txt", "xml" тощо
Використовуючи синтаксис шаблонних рядків і метод trim(), 
доповни код функції таким чином, щоб вона повертала повне (об'єднане) 
ім'я файлу з доданим розширенням, зазначеним у параметрі ext у форматі ім'я.розширення. 
Також повне ім'я файлу не повинно містити зайвих пробілів на початку або наприкінці.
 */
// function createFileName(name, ext) {
//   return `${name.trim()}.${ext}`;
// }

// console.log(createFileName(" order ", "txt")); //"order.txt"
// console.log(createFileName("report ", "csv")); //"report.csv"
// console.log(createFileName(" presentation", "xml")); //"presentation.xml"

//3 Цикл while
/* Функція calculateTotal(number) приймає ціле число (параметр number). 
Доповни код функції так, щоб вона повертала суму всіх цілих чисел від одиниці до цього числа включно. 
Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6. */
// function calculateTotal(number) {
//   let total = 0; //Iніціалізуємо змінну для зберігання суми чисел
//   let currentNumber = 0; // Починаємо з числа 0
//   while (currentNumber <= number) {
//     // Поки поточне число менше або рівне введеному числу
//     total += currentNumber; // Додаємо поточне число до загальної суми
//     currentNumber += 1; // Збільшуємо поточне число на 1 для переходу до наступного числа
//   }
//   return total;
// }
// console.log(calculateTotal(1)); //1
// console.log(calculateTotal(3)); //повертає 6
// console.log(calculateTotal(0)); //повертає 0
// console.log(calculateTotal(18)); //повертає 171
// console.log(calculateTotal(24)); //повертає 300

// 4 Цикл for
// function calculateTotal(number) {
//   let total = 0;

//   for (i = 0; i <= number; i += 1) {
//     total += i;
//   }
//   return total;
// }
// console.log(calculateTotal(1)); //повертає 1
// console.log(calculateTotal(0)); //повертає 0
// console.log(calculateTotal(7)); //повертає 28
// console.log(calculateTotal(18)); //повертає 171
// console.log(calculateTotal(24)); //повертає 300

// 5
/*Функція calculateEvenTotal(number) приймає ціле число(параметр number). 
Доповни код функції так, щоб вона повертала суму всіх парних цілих чисел від одиниці
до цього числа включно.Парні числа — це ті, що можна поділити на 2 без остачі
(як це зробити розглядалося у темі Арифметичні операції у модулі 1).
Наприклад, якщо number дорівнює 6, то сума - це 2 + 4 + 6, тобто 12.*/
function calculateEvenTotal(number) {
  let total = 0;

  for (i = 0; i <= number; i % 2) {
    total += i;
  }
  return total;
}
console.log(calculateEvenTotal(1)); // 0
console.log(calculateEvenTotal(3)); // 2
console.log(calculateEvenTotal(7)); // 12
console.log(calculateEvenTotal(18)); // 90
console.log(calculateEvenTotal(27)); // 182
