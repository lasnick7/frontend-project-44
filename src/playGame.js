function playGame(welcome, ask, check, name) {
  let winCount = 0;
  while (winCount < 3) {
    if (winCount === 0) {
      welcome();
    }
    const answer = ask();
    if (check(answer)) {
      winCount += 1;
    } else {
      winCount = 0;
      return;
    }
  }
  // eslint-disable-next-line no-restricted-globals, no-undef
  console.log(`Congratulations, ${name}!`);
}

export default playGame;
