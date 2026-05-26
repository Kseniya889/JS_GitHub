// variant 1
let operations = ['add', 'sub', 'mult', 'div'];
let question1 = prompt(`Вибери операцію ${operations.join(', ')}`, 'add');
let a = Number(prompt('Вкажи перше число'));
let b = Number(prompt('Вкажи друге число'));

switch (question1) { 
  case 'add':
    alert(`Результат розрахунку, ${a} + ${b} = ${a + b}`);
  break;
  case 'sub':
    alert(`Результат розрахунку, ${a} - ${b} = ${a - b}`);
  break;
  case 'mult':
    alert(`Результат розрахунку, ${a} * ${b} = ${a * b}`);
  break;
  case 'div':
     if (b === 0) {
      alert('На нуль ділити не можна!!!')
    } else {
    alert(`Результат розрахунку, ${a} / ${b} = ${a / b}`);
    }
    break;
}






// variant 2
let operations = ['add', 'sub', 'mult', 'div'];
let question1 = prompt(`Вибери операцію ${operations.join(', ')}`, 'add');
// let answer1 = alert(`Ви обрали ${question1}`);

let a = Number(prompt('Вкажи перше число'));
let b = Number(prompt('Вкажи друге число'));

function add (a,b) {
  return `${a} + ${b} = ${a + b}`;
}
function sub (a,b) {
  return `${a} - ${b} = ${a - b}`;
}
function mult (a,b) {
  return `${a} * ${b} = ${a * b}`;
}
function div (a,b) {
  if (b === 0) {
      alert('На нуль ділити не можна!!!')
    } else {
    return `${a} / ${b} = ${a / b}`;
    }
}

switch (question1) { 
  case 'add':
    alert(`Результат розрахунку, ${add (a,b)}`);
  break;
  case 'sub':
    alert(`Результат розрахунку, ${sub (a,b)}`);
  break;
  case 'mult':
    alert(`Результат розрахунку, ${mult (a,b)}`);
  break;
  case 'div':
    alert(`Результат розрахунку, ${div (a,b)}`);
    break;
  default:
  alert("Невідома операція");
}