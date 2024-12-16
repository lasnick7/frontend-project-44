import readlineSync from 'readline-sync';

let name;
function welcomeUser() {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
}

export { welcomeUser };

function getRandomNumber(min, max) {
  newMin = Math.ceil(min);
  newMax = Math.floor(max);
  return Math.floor(Math.random() * (newMax - newMin + 1)) + newMin;
}

let correctAnswer;
function askQuestion() {
  const progressionColl = [];
  const progressionLength = getRandomNumber(5, 10);
  const replacerIndex = getRandomNumber(0, progressionLength - 1);
  const startElement = Math.floor(Math.random() * 100) + 1;
  const progressionStep = Math.floor(Math.random() * 100) + 1;
  for (let i = 1; i <= progressionLength; i += 1) {
    progressionColl.push(startElement + (progressionStep * i));
  }
  const replacedElement = progressionColl[replacerIndex];
  progressionColl[replacerIndex] = '..';
  const progressionString = progressionColl.join(' ');
  console.log('What number is missing in the progression?');
  // eslint-disable-next-line default-case
  const answer = readlineSync.question(`Question: ${progressionString}\nYour answer: `);
  correctAnswer = replacedElement;
  return answer;
}

export { askQuestion };

function checkAnswer(answer) {
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
      return;
    }
  }
  // eslint-disable-next-line no-restricted-globals, no-undef
  console.log(`Congratulations, ${name}!`);
}

export { playGame };
