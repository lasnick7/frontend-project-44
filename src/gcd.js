import readlineSync from 'readline-sync';

let name;
function welcomeUser() {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
}

export { welcomeUser };

let randomNumber1;
let randomNumber2;
let answer;
let question;
function askQuestion() {
  console.log('Find the greatest common divisor of given numbers.');
  randomNumber1 = Math.floor(Math.random() * 100) + 1;
  randomNumber2 = Math.floor(Math.random() * 100) + 1;
  question = `${randomNumber1} ${randomNumber2}`;
  // eslint-disable-next-line default-case
  answer = readlineSync.question(`Question: ${question}\nYour answer: `);
  return answer;
}

export { askQuestion };

let correctAnswer;
function checkAnswer(answer) {
  const getGcd = (a, b) => {
    if (!b) {
      return a;
    }
    return getGcd(b, a % b);
  };
  correctAnswer = getGcd(randomNumber1, randomNumber2);
  if (Number(correctAnswer) === Number(answer)) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${name}!`);
  return false;
}

export { checkAnswer };

function playGame() {
  let winCount = 0;
  while (winCount < 3) {
    if (winCount === 0) {
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
