#!/usr/bin/env node
import {
  wellcomeUser, askQuestion, checkAnswer, name,
} from '../src/games/calc.js';
import playGame from '../src/playGame.js';

playGame(wellcomeUser, askQuestion, checkAnswer, name);
