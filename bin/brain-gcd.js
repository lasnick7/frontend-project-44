#!/usr/bin/env node
import {
  wellcomeUser, askQuestion, checkAnswer, name,
} from '../src/games/gcd.js';
import playGame from '../src/playGame.js';

playGame(wellcomeUser, askQuestion, checkAnswer, name);
