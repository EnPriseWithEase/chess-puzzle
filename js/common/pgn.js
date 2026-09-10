/**
 * PGN handling module
 * Parses and manages PGN data
 */

import { parse } from '@mliebelt/pgn-parser';

function parsePGN(pgnString) {
    return parse(pgnString, { startRule: "game" });
}

function checkCastleRights(fen) {
    const castlingPart = fen.split(' ')[2];
    return castlingPart !== '-';
}

export { parsePGN, checkCastleRights };
