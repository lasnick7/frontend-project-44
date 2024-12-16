import readlineSync from 'readline-sync';

// eslint-disable-next-line import/no-mutable-exports
let name;
function wellcomeUser() {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
}

export { wellcomeUser, name };

let randomNumber;
function askQuestion() {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  randomNumber = Math.floor(Math.random() * 100) + 1;
  // eslint-disable-next-line default-case
  const answer = readlineSync.question(`Question: ${randomNumber}\nYour answer: `);
  return answer;
}

export { askQuestion };

function isPrime(num) {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num !== 1;
}

function checkAnswer(answer) {
  if (isPrime(randomNumber)) {
    if (answer === 'yes') {
      console.log('Correct!');
      return true;
    }
    console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);
    return false;
  }
  if (answer === 'no') {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
  return false;
}

export { checkAnswer };
