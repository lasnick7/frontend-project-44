/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';

function wellcomeUser() {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
}

export { wellcomeUser };
