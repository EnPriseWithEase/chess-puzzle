/**
 * Front side entry point
 * Puzzle mode for Anki cards
 */

import { createConfig, getUrlVars } from './common/config.js';
import { createInitialState } from './common/state.js';
import { initAudio } from './common/audio.js';
import { parsePGN } from './common/pgn.js';
import { initPuzzleMode } from './puzzle/puzzle.js';

import 'chessground/assets/chessground.base.css';
import '../css/style.css';

const urlVars = getUrlVars();
const config = createConfig(urlVars);
const state = createInitialState(config);
const audioMap = initAudio(config.muteAudio);

// Parse PGN
const parsedPGN = parsePGN(config.pgn);

// Initialize UI
document.documentElement.style.setProperty('--background-color', config.background);
const commentBox = document.getElementById('commentBox');
commentBox.style.fontSize = `${config.fontSize}px`;

if (config.ankiText) {
    document.getElementById('textField').innerHTML = config.ankiText;
} else {
    document.getElementById('textField').style.display = "none";
}

if (config.boardMode === 'Puzzle') {
    document.querySelector('#buttons-container').style.visibility = "hidden";
    document.getElementById('pgnComment').style.display = "none";
    if (!config.frontText || !config.ankiText) commentBox.style.display = "none";
}

console.log('Front side loaded:', { config, state });
initPuzzleMode(config, state, null, null, {});
