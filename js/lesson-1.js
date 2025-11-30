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

// function getNumbers(min, max) {
//   for (let index = max; index > min; index--) {
//     console.log(index);
//   }
// }

// getNumbers(10, 20);

// // Завдання 8
// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

// function min(a, b) {
//   if (typeof a !== "number" || typeof b !== "number" || isNaN(a) || isNaN(b)) {
//     return "Not a number!";
//   }

//   return a < b ? a : b;
// }
// console.log(min("kk", "oo"));
// console.log(min(5, 3));
// console.log(min(5, 13));

// // Завдання 9
// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true,
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm
// і повертає його результат (true/false).

// function isAdult(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return confirm("Are you adult?");
//   }
// }

// console.log(isAdult(56));
// console.log(isAdult(8));

// // Завдання 10

// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.

// function fizzBuzz(num) {
//   for (let i = 1; i <= num; i++) {
//     if (i % 15 === 0) {
//       console.log("fizzbuzz");
//     } else if (i % 3 === 0) {
//       console.log("fizz");
//     } else if (i % 5 === 0) {
//       console.log("buzz");
//     }
//   }
// }

// fizzBuzz(20);

// Завдання 11

// Оголоси функцію makeTransaction, яка очікує два параметри, значення яких будуть
// задаватися під час її виклику: • quantity— перший параметр, число, що містить кількість
// замовлених дроїдів • pricePerDroid — другий параметр, число, що містить вартість одного дроїда
// Доповни код функції так, щоб вона повертала рядок з повідомленням про покупку ремонтних дроїдів:
// "You ordered <quantity> droids worth <totalPrice> credits!", де:
// • <quantity> — це кількість замовлених дроїдів
// • <totalPrice> — це загальна вартість замовлення, тобто вартість усіх замовлених дроїдів

// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи.
// У консоль будуть виведені результати її роботи.

// function makeTransaction(quantity, pricePerDroid) {
//   const totalPrice = quantity * pricePerDroid;
//   return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
// }

// console.log(makeTransaction(5, 3000));

// Завдання 12

// Оголоси функцію getShippingMessage, яка очікує три параметри,
// значення яких будуть задаватися під час її виклику:
// • country — перший параметр, рядок, що містить країну доставки
// • price — другий параметр, число, що містить загальну вартість товару
// • deliveryFee — третій параметр, число, що містить вартість доставки товару

// Доповни код функції так, щоб вона повертала рядок з повідомленням про доставку товару в країну користувача:
// "Shipping to <country> will cost <totalPrice> credits", де:
// • <country> — це країни доставки
// • <totalPrice> — це загальна вартість замовлення, що включає вартість товару і його доставки

// function getShippingMessage(country, price, deliveryFee) {
//   const totalPrice = price + deliveryFee;
//   return `Shipping to ${country} will cost ${totalPrice} credits`;
// }

// console.log(getShippingMessage("Australia", 120, 50));

// Завдання 13
// Оголоси функцію getElementWidth, яка очікує три параметри,
// значення яких будуть задаватися під час її виклику:
// • content— перший параметр, ширина контенту
// • padding — другий параметр, значення горизонтального падінгу для кожної зі сторін
// • border — третій параметр, значення товщини бордера для кожної зі сторін
// Значення всіх параметрів будуть рядками формату Npx де N — це довільне число, ціле або дробове.

// Доповни код функції так, щоб вона повертала число —загальну ширину елемента.
// При розрахунку загальної ширини орієнтуйся на те, що значення box-sizing дорівнює border-box.

// function getElementWidth(content, padding, border) {
//   return parseFloat(content) + 2 * parseFloat(padding) + 2 * parseFloat(border);
// }
// console.log(getElementWidth("50px", "8px", "4px")); // 74
// console.log(getElementWidth("60px", "12px", "8.5px")); //101

// Завдання 14
// Оголоси функцію makeTransaction(quantity, pricePerDroid, customerCredits),
// яка складає та повертає повідомлення про купівлю ремонтних дроїдів.

// Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:

// quantity — кількість замовлених дроїдів
// pricePerDroid — ціна одного дроїда
// customerCredits — сума коштів на рахунку клієнта

// Доповни функцію таким чином:

// Оголоси змінну для зберігання загальної суми замовлення (загальна вартість усіх замовлених дроїдів)
//  і задай їй вираз розрахунку цієї суми.
// Додай перевірку, чи зможе клієнт оплатити замовлення:
// якщо сума до сплати перевищує кількість кредитів на рахунку клієнта,
// функція має повертати рядок "Insufficient funds!"
// в іншому випадку функція має повертати рядок "You ordered <quantity> droids worth <totalPrice> credits!",
// де <quantity> це кількість замовлених дроїдів, а <totalPrice> це їх загальна вартість.

// function makeTransaction(quantity, pricePerDroid, customerCredits) {
//   const totalPrice = quantity * pricePerDroid;
//   return totalPrice > customerCredits
//     ? "Insufficient funds!"
//     : `You ordered ${quantity} droids worth ${totalPrice} credits!`;
// }

// console.log(makeTransaction(5, 3000, 23000));

// Завдання 15
// Оголоси функцію formatMessage(message, maxLength), яка приймає рядок (параметр message)
// та перевіряє його довжину відповідно до заданої максимальної довжини (параметр maxLength).

// Доповни код функції таким чином, що:

// Якщо довжина рядка дорівнює або менша за maxLength, то функція повертає початковий рядок без змін.
// Якщо довжина перевищує maxLength, то функція обрізає рядок
// до maxLength символів, додає трикрапку "..." в кінці та повертає обрізану версію.

// function formatMessage(message, maxLength) {
//   if (message.length <= maxLength) {
//     return message;
//   } else if (message.length > maxLength) {
//     return message.slice(0, maxLength) + "...";
//   }
// }

// console.log(formatMessage("Curabitur ligula sapien", 16));

// Завдання 16
// Функція checkForSpam(message) приймає рядок (параметр message),
// перевіряє його на вміст заборонених слів spam і sale, і повертає результат перевірки.
// Слова в рядку параметра message можуть бути в довільному регістрі, наприклад SPAM або sAlE.

// Доповни код функції таким чином, що:

// Якщо знайдено заборонене слово (spam або sale), то функція повертає буль true
// Якщо в рядку відсутні заборонені слова, функція повертає буль false

// function checkForSpam(message) {
//   return message.toLowerCase().includes("spam") ||
//     message.toLowerCase().includes("sale")
//     ? true
//     : false;
// }

// function checkForSpam(message) {
//   const normolize = message.toLowerCase();
//   return normolize.includes("spam") || normolize.includes("sale");
// }
// console.log(checkForSpam("JavaScript weekly newsletter")); // false
// console.log(checkForSpam("Get best sale offers now!")); // true

// Завдання 17
// Оголоси функцію getShippingCost(country),
// яка повинна перевіряти можливість доставки товару в країну користувача (параметр country)
// і повертати повідомлення про результат. Обов'язково використовуй інструкцію switch.

// Формат рядка, що повертається "Shipping to <country> will cost <price> credits",
// де замість <country> і <price> необхідно підставити відповідні значення.

// Список країн і вартість доставки:

// China — 100 кредитів
// Chile — 250 кредитів
// Australia — 170 кредитів
// Jamaica — 120 кредитів

// Зі списку видно, що доставка можлива не скрізь.
// Якщо зазначена країна відсутня у списку, то функція повинна повернути рядок "Sorry, there is no delivery to your country".

// function getShippingCost(country) {
//   switch (country) {
//     case "China":
//       return "Shipping to China will cost 100 credits";
//       break;
//     case "Chile":
//       return "Shipping to Chile will cost 250 credits";
//       break;
//     case "Australia":
//       return "Shipping to Australia will cost 170 credits";
//       break;
//     case "Jamaica":
//       return "Shipping to Jamaica will cost 120 credits";
//       break;
//     default:
//       return "Sorry, there is no delivery to your country";

//       break;
//   }
// }

// console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
