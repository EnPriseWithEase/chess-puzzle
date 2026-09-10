/**
 * Board initialization and utilities
 */

import { Chess, SQUARES } from 'chess.js';

function toDests(chess) {
    const dests = new Map();
    SQUARES.forEach(s => {
        const ms = chess.moves({ square: s, verbose: true });
        if (ms.length) dests.set(s, ms.map(m => m.to));
    });
    return dests;
}

function toColor(chess) {
    return chess.turn() === 'w' ? 'white' : 'black';
}

function getOpponentColor(chess) {
    return chess.turn() === 'w' ? 'b' : 'w';
}

function getLastMove(chess) {
    const allMoves = chess.history({ verbose: true });
    return allMoves.length > 0 ? allMoves[allMoves.length - 1] : false;
}

export { toDests, toColor, getOpponentColor, getLastMove };
