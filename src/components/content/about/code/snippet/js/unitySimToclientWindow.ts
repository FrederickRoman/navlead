const unitySimToclientWindow = `// Add these lines at the end the script.js produced by Unity

/**
 * Receives game state from Unity simulation
 * and dispatches it with askNavGuide through window
 * @param {Object} gameState - The user (traveler) game state
 * @returns {void}
 */
function processGameStateFromUnity(gameState) {
  var evtPayload = { detail: gameState };
  var msgFromUnityEvt = new CustomEvent("askNavGuide", evtPayload);
  window.dispatchEvent(msgFromUnityEvt);
}

/**
 * Sends answer to Unity simulation game instance that calls onAnswerFromJS
 * @param {string} answer - Navigation guide's answer
 * @returns {void}
 */
function sendAnswerToUnity(answer) {
  myGameInstance.SendMessage("Controller", "onAnswerFromJS", answer);
}

window.processGameStateFromUnity = processGameStateFromUnity;
window.sendAnswerToUnity = sendAnswerToUnity;
`;

export default unitySimToclientWindow;