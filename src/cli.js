import readlineSync from 'readline-sync';

function welcomeUser() {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
}

export { welcomeUser };
