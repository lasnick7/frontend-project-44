import readlineSync from 'readline-sync';

var name;
function welcomeUser() {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
}

export { welcomeUser };

var randomNumber;
var answer;
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
    }
    if (answer === 'yes' && isPrime(randomNumber)) {
        console.log('Correct!');
        return true;
    } if (answer === 'no' && isPrime(randomNumber)) {
        // eslint-disable-next-line no-template-curly-in-string
        console.log(`'${answer}' is wrong answer ;(. Correct answer was \'yes\'.`);
        console.log(`Let's try again, ${name}!`);
        return false;
    } if (answer === 'no' && !(isPrime(randomNumber))) {
        console.log('Correct!');
        return true;
    } if (answer === 'yes' && !(isPrime(randomNumber))) {
        // eslint-disable-next-line no-template-curly-in-string
        console.log(`'${answer}' is wrong answer ;(. Correct answer was \'no\'.`);
        console.log(`Let's try again, ${name}!`);
        return false;
    } else {
        console.log(`'${answer}' is wrong answer ;(.`);
        console.log(`Let's try again, ${name}!`);
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