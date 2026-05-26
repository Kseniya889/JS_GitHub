// variant 1
let ans1 = "Понеділок";
let ans2 = "Весна";
let ans3 = 20;
let ans4 = 11;
let ans5 = 1991;

let answer1 = prompt('Який сьогодні день тижня?');
let answer2 = prompt('Яка зараз пора року?');
              answer2 = answer2.charAt(0).toUpperCase() + answer2.slice(1).toLowerCase()
              alert(answer2)
let answer3 = Number(prompt('Яке сьогодні число?'));
let answer4 = Number(prompt('Скільки буде, якщо 3*3+2?'));
let answer5 = Number(prompt('Якого року пролошено незалежність в Україні?'));

let score = 0;

if (answer1 === ans1) score++;
if (answer2 === ans2) score++;
if (answer3 === ans3) score++;
if (answer4 === ans4) score++;
if (answer5 === ans5) score++;

alert(`Ваш результат ${score} з 5 питань`)



// variant 2
let right_Ans = [
  "понеділок",
  "весна",
  20,
  11,
  1991
]

let questions = [
  prompt('Який сьогодні день тижня?').toLowerCase(),
  prompt('Яка зараз пора року?').toLowerCase(),
  Number(prompt('Яке сьогодні число?')),
  Number(prompt('Скільки буде, якщо 3*3+2?')),
  Number(prompt('Якого року пролошено незалежність в Україні?')),
]

let score1 = 0;

if (right_Ans[0] === questions[0]) {
  score1++;
}
if (right_Ans[1] === questions[1]) {
  score1++;
}
if (right_Ans[2] === questions[2]) {
  score1++;
}
if (right_Ans[3] === questions[3]) {
  score1++;
}
if (right_Ans[4] === questions[4]) {
  score1++;
}

alert(`Ваш результат ${score1} з 5 питань`)