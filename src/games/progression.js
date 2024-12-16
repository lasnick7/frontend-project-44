import readlineSync from 'readline-sync';

// eslint-disable-next-line import/no-mutable-exports
let globalName;
function wellcomeUser() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  globalName = name;
  return name;
}

export { wellcomeUser };

function getRandomNumber(min, max) {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
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
  console.log(`Let's try again, ${globalName}!`);
  return false;
}

export { checkAnswer };
