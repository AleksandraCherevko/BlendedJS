// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

// const styles = ["jazz", "blues"];
// const mus = styles.push("rock-n-roll");

// const index = styles.indexOf("blues");
// styles[index] = "classic";
// console.log(styles);

// function logItems(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(`${i+1}: ${array[i]}`);
//   }
// }

// logItems(styles);

// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(array) {
//   const name = prompt("Enter your name");

//   if (array.includes(name)) {
//     alert(`Welcome, ${name}!`);
//   } else {
//     alert("User not found");
//   }
// }

// checkLogin(logins);

// function checkLogin(array) {
//   const name = prompt("Enter your name");
//   for (const login of array) {
//     if (login === name) {
//       alert(`Welcome, ${name}!`);
//       return;
//     }
//   }
//   alert("User not found");
// }

// checkLogin(logins);

// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// function caclculateAverage() {
//   let total = 0;
//   let count = 0;
//   for (const arg of arguments) {
//     if (typeof arg === "number" && !isNaN(arg)) {
//       total += arg;
//       count++;
//     }
//   }
//   return count > 0 ? total / count : 0;
// }

// console.log(caclculateAverage(1, 2, 3, 4, 5));

// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

// function arrSum(array) {
//   const newArr = [];
//   for (let i = 0; i < array.length - 1; i++) {
//     newArr.push(array[i] + array[i + 1]);
//   }
//   return newArr;
// }
// console.log(arrSum(someArr)); // [33, 45, 39, 17, 25, 27, 29].

// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// const numbers = "2,4,5";

// function findSmallestNumber(numbers) {
//   for (const number of numbers) {
//     if (!Array.isArray(numbers)) {
//       return "Sorry, it's not an array";
//     }
//   }
//   return Math.min(...numbers);
// }
// console.log(findSmallestNumber(numbers));
