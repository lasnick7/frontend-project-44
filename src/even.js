import readlineSync from 'readline-sync';

let name;
function welcomeUser() {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
}

export { welcomeUser };

let answer;
let randomNumber;
function askQuestion() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  randomNumber = Math.floor(Math.random() * 100) + 1;
  answer = readlineSync.question(`Question: ${randomNumber}\nYour answer: `);
  return answer;
}

export { askQuestion };

function checkAnswer(answer) {
  if (randomNumber % 2 === 0) {
    if (answer === 'yes') {
      console.log('Correct!');
      return true;
    }
    console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`);
    console.log(`Let's try again, ${name}!`);
    return false;
  }
  if (randomNumber % 2 !== 0) {
    if (answer === 'no') {
      console.log('Correct!');
      return true;
    }
    console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
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