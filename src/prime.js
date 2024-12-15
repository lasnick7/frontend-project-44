/* eslint-disable linebreak-style */
import readlineSync from 'readline-sync';

let name;
function welcomeUser() {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
}

export { welcomeUser };

let randomNumber;
let answer;
function askQuestion() {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  randomNumber = Math.floor(Math.random() * 100) + 1;
  // eslint-disable-next-line default-case
  answer = readlineSync.question(`Question: ${randomNumber}\nYour answer: `);
  return answer;
}

export { askQuestion };

function checkAnswer(answer) {
  const isPrime = (num) => {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) return false;
    }
    return num !== 1;
  };
  if (isPrime(randomNumber)) {
    if (answer === 'yes') {
      console.log('Correct!');
      return true;
    }
    console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`);
    console.log(`Let's try again, ${name}!`);
    return false;
  }
  if (!isPrime(randomNumber)) {
    if (answer === 'no') {
      console.log('Correct!');
      return true;
    }
    // eslint-disable-next-line no-useless-escape
    console.log(`'${answer}' is wrong answer ;(. Correct answer was \'yes\'.`);
    console.log(`Let's try again, ${name}!`);
    return false;
  }
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
