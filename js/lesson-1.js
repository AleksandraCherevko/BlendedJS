// Завдання 1:
// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().

// let enterNumber = prompt("Enter number");
// const number = Number(enterNumber);
// number === 10 ? alert("Вірно") : alert("Невірно");

// Завдання 2:
// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * 60);

// function checkNum(min) {
//   if (min >= 0 && min < 15) {
//     alert(`${min} входить у першу чверть`);
//   } else if (min >= 15 && min < 30) {
//     alert(`${min} входить у другу чверть`);
//   } else if (min >= 30 && min < 45) {
//     alert(`${min} входить у третю чверть`);
//   } else {
//     alert(`${min} входить у четверту чверть`);
//   }
// }

// checkNum(min);

// // console.log(checkNum(4));
// console.log(checkNum(16));

// Завдання 3:
// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

// function checkSeason() {
//   const askNum = prompt("Enter the num");
//   let num = askNum;
//   let result;

//   switch (num) {
//     case "1":
//       result = "зима";
//       break;
//     case "2":
//       result = "весна";
//       break;
//     case "3":
//       result = "осінь";
//       break;
//     case "4":
//       result = "літо";
//       break;
//     default:
//       result = "Вибачте, але ви маєте ввести значення від 1 до 4 включно";
//   }
//   console.log(result);
// }

// checkSeason();

// Завдання 4

// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

// function timeCheck() {
//   const inputValue = prompt("enter minutes");
//   const num = Number(inputValue);

//   const hours = Math.floor(num / 60);
//   const minutes = Math.floor(num / 60);

//   const formattedHours = String(hours).padStart(2, "0");
//   const formattedMinutes = String(minutes).padStart(2, "0");

//   console.log(`${formattedHours}:${formattedMinutes}`);
// }
// timeCheck();

// Завдання 5

// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"

// function userLoggin() {
//   const login = prompt("Enter your login");

//   if (login === null || login === "") {
//     alert("Скасовано");
//     return;
//   }

//   if (login === "Адмін") {
//     const password = prompt("Enter your password");

//     if (password === null || password === "") {
//       alert("Скасовано");
//     } else if (password === "Я головний") {
//       console.log("Вітаю!");
//     } else {
//       alert("Невірний пароль");
//     }
//   } else {
//     alert("Я вас не знаю");
//   }
// }

// userLoggin();

// Завдання 6

// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.

// let min = 0;
// const max = 20;

// while (min <= max) {
//   console.log(min);
//   min += 1;
// }

// Завдання 7

// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

function getNumbers(min, max) {
  for (let index = max; index > min; index--) {
    console.log(index);
  }
}

getNumbers(10, 20);
