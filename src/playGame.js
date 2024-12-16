function playGame(welcome, ask, check) {
  let winCount = 0;
  const userName = welcome();
  while (winCount < 3) {
    const answer = ask();
    if (check(answer)) {
      winCount += 1;
    } else {
      winCount = 0;
      return;
    }
  }
  // eslint-disable-next-line no-restricted-globals, no-undef
  console.log(`Congratulations, ${userName}!`);
}

export default playGame;
