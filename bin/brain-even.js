#!/usr/bin/env node
import {
  wellcomeUser, askQuestion, checkAnswer,
} from '../src/games/even.js';
import playGame from '../src/playGame.js';

playGame(wellcomeUser, askQuestion, checkAnswer);
