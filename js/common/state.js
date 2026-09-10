/**
 * State management module
 * Maintains global application state
 */

function createInitialState(config) {
    return {
        ankiFen: "",
        boardRotation: "black",
        playerColour: "white",
        opponentColour: "black",
        solvedColour: "limegreen",
        errorTrack: null,
        count: 0,
        pgnState: true,
        chessGroundShapes: [],
        expectedLine: [],
        expectedMove: null,
        lastMove: null,
        errorCount: 0,
        promoteChoice: 'q',
        promoteAnimate: true,
        debounceTimeout: null,
        navTimeout: null,
        isStockfishBusy: false,
        analysisFen: null,
        analysisToggledOn: false,
        pgnPath: null,
        mirrorState: null,
        blunderNags: ['$2', '$4', '$6', '$9'],
        puzzleComplete: false,
    };
}

export { createInitialState };
