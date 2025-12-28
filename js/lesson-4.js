// 1 - отримай body елемент і виведи його в консоль;
// 2 - отримай елемент id="title" і виведи його в консоль;
// 3 - отримай елемент class="list" і виведи його в консоль;
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// 20 - очисти список

const body = document.querySelector("body");
console.log(body);

const title = document.querySelector("#title");
console.log(title);

const list = document.querySelector(".list");
console.log(list);

const items = document.querySelectorAll("li");
console.log(items);

const dataTopic = document.querySelectorAll("[data-topic]");
console.log(dataTopic);

const firstDataTopicEl = document.querySelector("li[data-topic]");
console.log(firstDataTopicEl);

const lastDataTopicEl = dataTopic[dataTopic.length - 1];
console.log(lastDataTopicEl);
const titles = document.querySelectorAll("h3");
const mainTitle = document.querySelector("#title");
console.log(mainTitle.textContent);

const mainTitleSiblingEl = mainTitle.nextElementSibling;
console.log(mainTitleSiblingEl);

const thirdTitleEl = document.querySelectorAll("h3");
console.log(thirdTitleEl);

thirdTitleEl.forEach((title) => {
  title.classList.add("active");
});
console.log(thirdTitleEl);

const navEl = document.querySelector('li[data-topic="navigation"]');
console.log(navEl.dataset.topic);

navEl.setAttribute("style", "backgroundColor");
console.log(navEl.getAttribute("style"));

navEl.style.backgroundColor = "yellow";

const navText = navEl.querySelector("p");
navText.textContent = "Я змінив тут текст!";

const currentTopic = "manipulation";
const newEl = document.querySelector(`[data-topic='${currentTopic}']`);
console.log(newEl);

newEl.style.backgroundColor = "lightblue";

const completedTitle = document.querySelector(".completed");
console.log(completedTitle);

completedTitle.closest("li").remove();

const newTextEl = document.createElement("p");
newTextEl.textContent = "Об'єктна модель документа (Document Object Model)";
mainTitle.append(newTextEl);

const newTitle = document.createElement("h3");
const newText = document.createElement("p");
const newItem = document.createElement("li");
newTitle.textContent = "Властивість innerHTML";
newText.textContent =
  "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";
list.append(newItem);
newItem.prepend(newTitle, newText);

const markup = `
  <li>
    <h3>Властивість innerHTML</h3>
    <p>
      Ще один спосіб створити DOM-елементи і помістити їх в дерево —
      це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу
    </p>
  </li>
`;

list.insertAdjacentHTML("beforeend", markup);
list.innerHTML = "";
