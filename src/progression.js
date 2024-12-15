import readlineSync from 'readline-sync';

let name;
function welcomeUser() {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
}

export { welcomeUser };

let answer;
let correctAns;
function askQuestion() {
  const progressionColl = [];
  let progressionStep;
  let progressionString = '';
  let progressionStart;
  let progressionLength;
  let replacerIndex;
  const getRandomArbitrary = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  progressionLength = getRandomArbitrary(5, 10);
  replacerIndex = getRandomArbitrary(0, progressionLength);
  progressionStart = Math.floor(Math.random() * 100) + 1;
  progressionStep = Math.floor(Math.random() * 100) + 1;
  for (let i = 1; i <= progressionLength; i += 1) {
    progressionColl.push(progressionStart);
    progressionStart += progressionStep;
  }
  for (let k = 0; k < progressionColl.length; k += 1) {
    if (k === replacerIndex) {
      progressionString += ' ..';
    } else {
      progressionString += ` ${progressionColl[k]}`;
    }
  }
  console.log('What number is missing in the progression?');
  // eslint-disable-next-line default-case
  answer = readlineSync.question(`Question:${progressionString}\nYour answer: `);
  correctAns = progressionColl[replacerIndex];
  return answer;
}

export { askQuestion };

function checkAnswer(answer) {
  if (Number(correctAns) === Number(answer)) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAns}'.`);
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
