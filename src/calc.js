import readlineSync from 'readline-sync';

let name;
function welcomeUser() {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
}

export { welcomeUser };

let randomOperator;
let randomNumber1;
let randomNumber2;
let answer;
let rquestion;
function askQuestion() {
  console.log('What is the result of the expression?');
  randomOperator = Math.floor(Math.random() * 3);
  randomNumber1 = Math.floor(Math.random() * 100) + 1;
  randomNumber2 = Math.floor(Math.random() * 100) + 1;
  // eslint-disable-next-line default-case
  switch (randomOperator) {
    case 0:
      rquestion = `${randomNumber1} + ${randomNumber2}`;
      break;
    case 1:
      rquestion = `${randomNumber1} - ${randomNumber2}`;
      break;
    case 2:
      rquestion = `${randomNumber1} * ${randomNumber2}`;
      break;
  }
  answer = readlineSync.question(`Question: ${rquestion}\nYour answer: `);
  return answer;
}

export { askQuestion };

let correctAnswer;
function checkAnswer(answer) {
  correctAnswer = eval(rquestion);
  if (Number(correctAnswer) === Number(answer)) {
    console.log('Correct!');
    return true;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    return false;
  }
}

export { checkAnswer };

function playGame() {
  let winCount = 0;
  while (winCount < 3) {
    if (winCount == 0){
      welcomeUser();
    }
    const answer = askQuestion();
    if (checkAnswer(answer)) {
      winCount += 1;
    } else {
      winCount = 0;
    }
  }
  // eslint-disable-next-line no-restricted-globals, no-undef
  console.log(`Congratulations, ${name}!`);
}

export { playGame };
