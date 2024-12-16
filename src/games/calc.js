import readlineSync from 'readline-sync';

// eslint-disable-next-line import/no-mutable-exports
let name;
function wellcomeUser() {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
}

export { wellcomeUser, name };

let randomOperator;
let randomNumber1;
let randomNumber2;
let evalQuestion;
function askQuestion() {
  console.log('What is the result of the expression?');
  randomOperator = Math.floor(Math.random() * 3);
  randomNumber1 = Math.floor(Math.random() * 100) + 1;
  randomNumber2 = Math.floor(Math.random() * 100) + 1;
  // eslint-disable-next-line default-case
  switch (randomOperator) {
    case 0:
      evalQuestion = `${randomNumber1} + ${randomNumber2}`;
      break;
    case 1:
      evalQuestion = `${randomNumber1} - ${randomNumber2}`;
      break;
    case 2:
      evalQuestion = `${randomNumber1} * ${randomNumber2}`;
      break;
  }
  const answer = readlineSync.question(`Question: ${evalQuestion}\nYour answer: `);
  return answer;
}

export { askQuestion };

let correctAnswer;
function checkAnswer(answer) {
  // eslint-disable-next-line no-eval
  correctAnswer = eval(evalQuestion);
  if (Number(correctAnswer) === Number(answer)) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
  return false;
}

export { checkAnswer };
