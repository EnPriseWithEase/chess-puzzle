/**
 * Audio module
 * Handles sound effects for chess moves
 */

function initAudio(mute) {
    const sounds = ["Move", "checkmate", "move-check", "Capture", "castle", "promote", "Error", "computer-mouse-click"];
    const audioMap = new Map();
    sounds.forEach(sound => {
        const audio = new Audio(`_${sound}.mp3`);
        audio.preload = 'auto';
        audio.muted = mute;
        audioMap.set(sound, audio);
    });
    return audioMap;
}

function playSound(audioMap, soundName, config) {
    if (config.muteAudio) return;
    const audio = audioMap.get(soundName);
    if (audio) {
        audio.cloneNode().play().catch(e => console.error(`Could not play sound: ${soundName}`, e));
    }
}

export { initAudio, playSound };
