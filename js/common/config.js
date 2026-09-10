/**
 * Configuration module
 * Handles URL parameters and default configuration
 */

function getUrlVars() {
    const urlVars = {};
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, (m, key, value) => {
        urlVars[key] = decodeURIComponent(value).replace("#!/0", "");
    });
    return urlVars;
}

function getUrlParam(urlVars, name, defaultValue) {
    return urlVars[name] !== undefined ? urlVars[name] : defaultValue;
}

function createConfig(urlVars) {
    return {
        pgn: getUrlParam(urlVars, "PGN", `[Event "?"]\n    [Site "?"]\n    [Date "2025.09.17"]\n    [Round "?"]\n    [White "White"]\n    [Black "Black"]\n    [Result "*"]\n\n    1. e4 e5 (1... f5 2. exf5 Nf6) 2. f4 exf4 *\n    `),
        fontSize: getUrlParam(urlVars, "fontSize", 16),
        ankiText: getUrlParam(urlVars, "userText", null),
        frontText: getUrlParam(urlVars, "frontText", 'false') === 'true',
        muteAudio: getUrlParam(urlVars, "muteAudio", 'false') === 'true',
        showDests: getUrlParam(urlVars, "showDests", 'true') === 'true',
        handicap: parseInt(getUrlParam(urlVars, "handicap", 1), 10),
        strictScoring: getUrlParam(urlVars, "strictScoring", 'false') === 'true',
        acceptVariations: getUrlParam(urlVars, "acceptVariations", 'true') === 'true',
        disableArrows: getUrlParam(urlVars, "disableArrows", 'false') === 'true',
        flipBoard: getUrlParam(urlVars, "flip", 'false') === 'true',
        boardMode: getUrlParam(urlVars, "boardMode", 'Puzzle'),
        background: getUrlParam(urlVars, "background", "#2C2C2C"),
        mirror: getUrlParam(urlVars, "mirror", 'true') === 'true',
        randomOrientation: getUrlParam(urlVars, "randomOrientation", 'false') === 'true',
        autoAdvance: getUrlParam(urlVars, "autoAdvance", 'false') === 'true',
        handicapAdvance: getUrlParam(urlVars, "handicapAdvance", 'false') === 'true',
        timer: parseInt(getUrlParam(urlVars, "timer", 0), 10) * 1000,
        increment: parseInt(getUrlParam(urlVars, "increment", 0), 10) * 1000,
        timerAdvance: getUrlParam(urlVars, "timerAdvance", 'false') === 'true',
        timerScore: getUrlParam(urlVars, "timerScore", 'false') === 'true',
    };
}

export { getUrlVars, getUrlParam, createConfig };
