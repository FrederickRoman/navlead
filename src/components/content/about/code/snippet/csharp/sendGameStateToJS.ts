const sendGameStateToJS =`[DllImport("__Internal")]
private static extern void SendToJS(string message);

public void sendGameStateToJS(GameState gs)
{
    string jsonGameState = gs.getJsonString();
#if !UNITY_EDITOR && UNITY_WEBGL
    SendToJS(jsonGameState);
#endif
}`

export default sendGameStateToJS;