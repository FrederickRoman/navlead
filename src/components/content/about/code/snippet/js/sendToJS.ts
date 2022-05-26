const sendToJS = `mergeInto(LibraryManager.library, {
    SendToJS: function (message){
      window["processGameStateFromUnity"](Pointer_stringify(message));
    }
  });`

export default sendToJS;