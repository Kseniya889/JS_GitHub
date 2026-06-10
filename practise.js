/*
// 1.
let func1 = () => "Привіт, Ксюша!";
console.log(func1());

let func2 = (a) => a*a;
console.log(func2(5));

let func3 = (b) => b%2 === 0 ? "парне" : "непарне";
console.log(func3(10));

// Максимум із двох: функція приймає два числа і повертає більше.
let func4 = (c,d) => Math.max(c,d)
  console.log(func4(8, 5));

let func5 = (c,d) => c>d ? c : d;
  console.log(func4(2, 5));

  // Довжина рядка: функція приймає рядок і повертає його довжину.
let func6 = str => str.length;
  console.log(func6("gdh"));

  // Фільтр масиву: за допомогою filter і стрілкової функції залиш тільки числа більше 10.
let arr = [3, 5, 18, 10, 2, 15];
const func7 = arr.filter(num=> num>10);
console.log(func7.join());

// залишити тільки парні числа (num % 2 === 0),
let arr2 = [2, 5, 3, 10, 8];
let func8 = arr2.filter(num1 => (num1%2 === 0));
console.log(func8.join(", "));

// залишити тільки менші за 10 (num < 10)
let arr3 = [2, 66, 15, 10, 8];
let func9 = arr3.filter(num2 => (num2<10));
console.log(func9.join(", "));

// Мапінг масиву: за допомогою map і стрілкової функції помнож кожне число масиву на 2.
let arr4 = [2, 6, 18, 10, 8];
let func10 = arr4.map(num3 => num3*2);
console.log(func10);

// Перетворення у рядки: зроби масив рядків типу "Число: X".
let arr5 = [2, 6, 18, 10, 8];
let func11 = arr5.map(num3 => "Число:" + num3);
console.log(func11);

// Довжина слів: масив слів перетвори у масив їх довжин.
let arr6 = ["Гарбуз", "Капуста", "Хек", "Яблуко", "Лимон"];
let func12 = arr6.map(str => str.length);
console.log(func12);

// Об’єкти з числами: кожне число перетвори на об’єкт {value: число, square: квадрат}.
let arr7 = [2, 6, 18, 10, 8];;
let func13 = arr7.map(num3 => ({value: num3, square: num3*num3}));
console.log(func13);

// Модифікація масиву об’єктів: є масив {name: "JS", level: "easy"} → зроби новий масив, де до кожного об’єкта додається поле length з довжиною name.
let arr8 = [{name: "JS", level: "easy"}];
let func14 = arr8.map(item => ({
  name: item.name, 
  level: item.level, 
  length: item.name.length}));
console.log(func14);

// Калькулятор: зроби об’єкт із стрілковими функціями (add, sub, mult, div) і викликай потрібну залежно від введеної операції.
let obj = {
  add: (a,b,c) => a+b, 
  sub: (a,b,c) => a-b-c, 
  mult: (a,b,c) => a*b, 
  div: (a,b,c) => a/c,
};

let question3 = prompt ("Оберіть операцію: " + Object.keys(obj).join(", "));
let a = Number(prompt("Напиши перше число"));
let b = Number(prompt("Напиши друге число"));
let c = Number(prompt("Напиши третє число"));

console.log(obj[question3](a,b,c));



// Функція‑генератор повідомлення: стрілкова функція приймає ім’я і повертає рядок "Привіт, <ім’я>!".
let question4 = prompt("Назви своє ім'я");
let func15 = name => (`Привіт, ${name}!`);
console.log(func15(question4));


// Вивести числа: за допомогою for виведи числа від 1 до 10.
for (let f = 0; f<=10; f++) {
  console.log(f);
}
*/


// Сума чисел: знайди суму чисел від 1 до 100.
// 1 variant
let sum = 0;
for (let f = 0; f<100; f++) {
 sum += f
}
console.log(sum);

// 2 variant
let n = 99;
console.log((n*(n+1))/2);


// Парні числа: виведи всі парні числа від 1 до 20.
for (let l=1; l<=20; l++) {
  if (l%2 === 0) {
  console.log(l)
  }
}

// Перетворення типів: зроби цикл, який проходить масив рядків чисел (["5","10","15"]) і перетворює їх у числа.
const arr = ["5", "10", "15"];
  for (const arrToNum of arr) {
    console.log(Number(arrToNum));
  }

// Факторіал: обчисли факторіал числа за допомогою while.
let factorial = 2;
let startNum = 1;
let i=1;

while (i<=n) {
  startNum *= factorial;
  i++;
 
}
 console.log(startNum);