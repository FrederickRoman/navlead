const unitySimToclientWindow = `// script.js
function processGameStateFromUnity(message) {
  var evtPayload = { detail: message };
  var msgFromUnityEvt = new CustomEvent("askNavGuide", evtPayload);
  window.dispatchEvent(msgFromUnityEvt);
}

function sendAnswerToUnity(answer) {
  console.log("Sending question to Unity");
  myGameInstance.SendMessage("Controller", "onAnswerFromJS", answer);
}`;

export default unitySimToclientWindow;