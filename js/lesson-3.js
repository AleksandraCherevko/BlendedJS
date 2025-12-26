// Завдання 1:
// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5];
// const newArr = numbers.map((number) => number * number);
// console.log(newArr);

// Завдання 2:

// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];

// const newArr = data.flatMap((data) => data.values);
// console.log(newArr);

// Завдання 3

// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

// const people = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// const newArr = people.find((people) => (people.age < 20 ? "true" : "false"));
// console.log(newArr);

// Завдання 4
// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];
// const newArr = numbers.every((number) => number % 2 === 0);
// console.log(newArr);

// Завдання 5

// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];
// const newArr = numbers.some((number) => number % 2 === 0);
// console.log(newArr);

// Завдання 6

// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];
// const newArr = numbersArray.toSorted();
// console.log(newArr);

// Завдання 7

// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ["banana", "orange", "apple", "pear"];
// const newArr = stringArray.toSorted();
// console.log(newArr);

// Завдання 8

//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// const newArr = users.toSorted((a, b) => a.age - b.age);
// console.log(newArr);

// Завдання 9

// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// const newArr = user.filter((user) => user.age > 20);
// console.log(newArr);

// Завдання 10
// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];
// const newArr = numbers.reduce((total, number) => {
//   return total + number;
// }, 0);

// console.log(newArr);

// Завдання 11

// Розроби клас Calculator, який дозволяє виконувати арифметичні
//  операції над числом за допомогою методів класу, підтримуючи
// ланцюжковий виклик (method chaining).
//
// Вимоги до класу Calculator
// - Метод number(value)
// Встановлює початкове значення для наступних обчислень.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
// - метод getResult, Повертає поточний результат усіх операцій.
// Не змінює значення, просто повертає його.
// - метод add - Додає value до поточного значення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
// - метод subtract - Віднімає value від поточного значення. Повертає this.
// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
// - метод multiply -Множить поточне значення на value. Повертає this.
// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка

// class Calculator {
//   constructor() {
//     this.value = 0;
//   }

//   number(value) {
//     this.value = value;
//     return this;
//   }

//   add(value) {
//     this.value += value;
//     return this;
//   }

//   subtract(value) {
//     this.value -= value;
//     return this;
//   }

//   multiply(value) {
//     this.value *= value;
//     return this;
//   }

//   divide(value) {
//     if (value === 0) {
//       throw new Error("Ділення на 0 неможливе");
//     }
//     this.value /= value;
//     return this;
//   }

//   getResult() {
//     return this.value;
//   }
// }

// const calc = new Calculator();

// const result = calc
//   .number(10) // Встановлюємо початкове значення 10
//   .add(5) // Додаємо 5 (10 + 5 = 15)
//   .subtract(3) // Віднімаємо 3 (15 - 3 = 12)
//   .multiply(4) // Множимо на 4 (12 * 4 = 48)
//   .divide(2) // Ділимо на 2 (48 / 2 = 24)
//   .getResult(); // Отримуємо результат: 24

// console.log(result); // 24

// Завдання 12:
// Напиши клас Client який створює об'єкт з властивостями login email.
// Оголоси приватні властивості #login #email, доступ до яких зроби
// через геттер та сеттер login email

// class Client {
//   #login;
//   #email;

//   constructor(params) {
//     this.#login = params.login;
//     this.#email = params.email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     if (newEmail === "") {
//       console.log("Error!");
//       return;
//     }

//     this.#email = newEmail;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(newLogin) {
//     if (newLogin === "") {
//       console.log("Error!");
//       return;
//     }

//     this.#login = newLogin;
//   }
// }

// const client = new Client({ login: "user123", email: "test@mail.com" });

// client.login = "newUser";
// client.email = "new@mail.com";

// console.log(client.login); // newUser
// console.log(client.email); // new@mail.com

// Завдання 13:

//  Наслідування у класах!
// Cтворіть клас `Person`, який містить наступні властивості:
//  - `name` - ім'я людини;
//  - `age`- вік людини;
//  - `gender` - стать людини;
//  - `email`- електронна пошта людини.

// Крім того, клас `Person` має мати метод `getDetails()`,
// який повертає об'єкт з ім'ям, віком, статтю
//та електронною поштою людини.

//
// Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
//  - salary - зарплата співробітника;
//  - department - відділ, в якому працює співробітник.
// Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.

// class Person {
//   #name;
//   #age;
//   #gender;
//   #email;

//   constructor(name, age, gender, email) {
//     this.#name = name;
//     this.#age = age;
//     this.#gender = gender;
//     this.#email = email;
//   }

//   getDetails() {
//     return {
//       name: this.#name,
//       age: this.#age,
//       gender: this.#gender,
//       email: this.#email,
//     };
//   }
// }

// class Employee extends Person {
//   #salary;
//   #department;

//   constructor(name, age, gender, email, salary, department) {
//     super(name, age, gender, email);
//     this.#salary = salary;
//     this.#department = department;
//   }

//   getEmployeeDetails() {
//     return {
//       salary: this.#salary,
//       department: this.#department,
//     };
//   }
// }

// const employee = new Employee(
//   "Anna",
//   28,
//   "female",
//   "anna@mail.com",
//   3000,
//   "IT"
// );

// console.log(employee.getDetails());
// // { name: 'Anna', age: 28, gender: 'female', email: 'anna@mail.com' }

// console.log(employee.getEmployeeDetails());
// // { salary: 3000, department: 'IT' }

// Завдання 14:

// Напиши стрілочну функцію getUserNames(users),
// яка прийматиме один параметр users — масив об’єктів користувачів.
// Функція має повертати масив імен усіх користувачів (властивість name) із масиву users.

// Візьми код нижче і встав після оголошення своєї функції для перевірки
// коректності її роботи. У консоль будуть виведені результати її викликів.

// const getUserNames = (users) => {
//   return users.map((user) => user.name);
// };

// console.log(
//   getUserNames([
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       balance: 2811,
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       balance: 3821,
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       balance: 3793,
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       balance: 2278,
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       balance: 3951,
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       balance: 1498,
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       balance: 2764,
//     },
//   ])
// ); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]

// Завдання 15:

// Напиши стрілочну функцію getUsersWithFriend(users, friendName) , яка прийматиме два параметра:

// перший параметр users — масив об’єктів користувачів
// другий параметр friendName — ім’я друга для пошуку.
// Функція має повертати масив усіх користувачів із масиву users,
// у яких є друг з іменем friendName. Друзі кожного користувача
// зберігаються у властивості friends. Якщо користувачів, у яких є такий друг немає, то функція має повернути порожній масив.

// Поради:

// Метод filter() можна використовувати для створення нового масиву з елементами,
// які задовольняють певну умову.
// Використовуй метод includes() для перевірки, чи масив friends містить friendName.
// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності
// її роботи. У консоль будуть виведені результати її роботи.

// const allUsers = [
//   {
//     name: "Moore Hensley",
//     friends: ["Sharron Pace"],
//   },
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"],
//   },
//   {
//     name: "Ross Vazquez",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//   },
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//   },
//   {
//     name: "Carey Barr",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//   },
//   {
//     name: "Blackburn Dotson",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"],
//   },
// ];

// const getUsersWithFriend = (users, friendName) => {
//   return users.filter((user) => user.friends.includes(friendName));
// };

// console.log(getUsersWithFriend(allUsers, "Briana Decker"));
// // [
// //   {
// //     name: "Sharlene Bush",
// //     friends: ["Briana Decker", "Sharron Pace"]
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"]
// //   }
// // ]

// console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
// // [
// //   {
// //     name: "Elma Head",
// //     friends: ["Goldie Gentry", "Aisha Tran"]
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"]
// //   }
// // ]

// console.log(getUsersWithFriend(allUsers, "Adrian Cross")); // []

// Завдання 16:

// Напиши стрілочну функцію sortByDescendingFriendCount(users) ,
// яка прийматиме один параметр users — масив об’єктів користувачів.

// Функція має повертати масив усіх користувачів, відсортованих
// за спаданням кількостій їх друзів (властивість friends).

// Візьми код нижче і встав після оголошення своєї функції для перевірки
// коректності її роботи. У консоль будуть виведені результати її роботи.

// const sortByDescendingFriendCount = (users) =>
//   [...users].sort((a, b) => b.friends.length - a.friends.length);

// console.log(
//   sortByDescendingFriendCount([
//     {
//       name: "Moore Hensley",
//       friends: ["Sharron Pace"],
//       gender: "male",
//     },
//     {
//       name: "Sharlene Bush",
//       friends: ["Briana Decker", "Sharron Pace"],
//       gender: "female",
//     },
//     {
//       name: "Ross Vazquez",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       gender: "male",
//     },
//     {
//       name: "Elma Head",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       gender: "female",
//     },
//     {
//       name: "Carey Barr",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       gender: "male",
//     },
//     {
//       name: "Blackburn Dotson",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       gender: "male",
//     },
//     {
//       name: "Sheree Anthony",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       gender: "female",
//     },
//   ])
// );
// [
//   {
//     name: "Ross Vazquez",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"],
//     gender: "female"
//   },
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     gender: "female"
//   },
//   {
//     name: "Moore Hensley",
//     friends: ["Sharron Pace"],
//     gender: "male"
//   }
// ]

// Завдання 17:

// Напиши стрілочну функцію getTotalBalanceByGender(users, gender),
// яка прийматиме два параметра:

// перший параметр users — масив об’єктів користувачів,
// другий параметр gender — рядок, що зберігає стать.
// Функція має використовувати ланцюжок виклику методів та повертати загальний баланс
// користувачів (властивість balance), стать яких (властивість gender) збігається зі значенням параметра gender.

// Візьми код нижче і встав після оголошення своєї
//  функції для перевірки коректності її роботи.
//  У консоль будуть виведені результати її роботи.

// const getTotalBalanceByGender = (users, gender) => {
//   return users
//     .filter((user) => user.gender === gender)
//     .map((user) => user.balance)
//     .reduce((total, balance) => total + balance, 0);
// };

// const clients = [
//   {
//     name: "Moore Hensley",
//     gender: "male",
//     balance: 2811,
//   },
//   {
//     name: "Sharlene Bush",
//     gender: "female",
//     balance: 3821,
//   },
//   {
//     name: "Ross Vazquez",
//     gender: "male",
//     balance: 3793,
//   },
//   {
//     name: "Elma Head",
//     gender: "female",
//     balance: 2278,
//   },
//   {
//     name: "Carey Barr",
//     gender: "male",
//     balance: 3951,
//   },
//   {
//     name: "Blackburn Dotson",
//     gender: "male",
//     balance: 1498,
//   },
//   {
//     name: "Sheree Anthony",
//     gender: "female",
//     balance: 2764,
//   },
// ];

// console.log(getTotalBalanceByGender(clients, "male")); // 12053

// console.log(getTotalBalanceByGender(clients, "female")); // 8863

// Завдання 18:

// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return  this.discount;
//   },
//   setDiscount(value) {
//      this.discount = value;
//   },
//   getOrders() {
//     return  this.orders;
//   },
//   addOrder(cost, order) {
//      this.balance -= cost - cost *  this.discount;
//      this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// Завдання 19:

// Створи клас Storage, який створюватиме об'єкти для управління
// складом товарів. Клас очікує лише один аргумент — початковий масив товарів,
// який записується до створеного об'єкта в приватну властивість items.

// Оголоси наступні методи класу:

// getItems() — повертає масив поточних товарів у приватній властивості items.
// addItem(newItem) — приймає новий товар newItem і додає його до масиву
// товарів у приватну властивість items об'єкта.
// removeItem(itemToRemove) — приймає рядок з назвою товару itemToRemove
// і видаляє його з масиву товарів у приватній властивості items об'єкта.

// Візьми код нижче з ініціалізацією екземпляра й викликами методів і встав
// його після оголошення класу для перевірки коректності роботи.
// У консоль будуть виведені результати їх роботи. Будь ласка, нічого там не змінюй.

// class Storage {
//   #items;

//   constructor(items) {
//     this.#items = items;
//   }
//   getItems() {
//     return this.#items;
//   }
//   addItem(newItem) {
//     this.#items.push(newItem);
//   }

//   removeItem(itemToRemove) {
//     const i = this.#items.indexOf(itemToRemove);

//     if (i !== -1) {
//       this.#items.splice(i, 1);
//     }
//   }
// }

// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// storage.removeItem("Nanitoids");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// Завдання 20:

// Напиши клас StringBuilder, який приймає один параметр initialValue — довільний рядок,
// який записується у приватну властивість value об'єкта, що створюється.

// Оголоси наступні методи класу:

// getValue() — повертає поточне значення приватної властивості value.
// padEnd(str) — отримує параметр str (рядок) і додає його в кінець
// значення приватної властивості value об'єкта, який викликає цей метод.
// padStart(str) — отримує параметр str (рядок) і додає його на початок значення
// приватної властивості value об'єкта, який викликає цей метод.
// padBoth(str) — отримує параметр str (рядок) і додає його на початок
// і в кінець значення приватної властивості value об'єкта, який викликає цей метод.
// Візьми код нижче з ініціалізацією екземпляра й викликами методів
// і встав його після оголошення класу для перевірки коректності роботи.
//  У консоль будуть виведені результати їх роботи. Будь ласка, нічого там не змінюй.

// class StringBuilder {
//   #value;

//   constructor(initialValue) {
//     this.#value = initialValue;
//   }
//   getValue() {
//     return this.#value;
//   }

//   padStart(str) {
//     this.#value = str + this.#value;
//   }

//   padEnd(str) {
//     this.#value += str;
//   }

//   padBoth(str) {
//     this.padStart(str);
//     this.padEnd(str);
//   }
// }

// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="
