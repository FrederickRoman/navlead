const processKey = `public void ProcessKey(string keyText)
{
    if (keyText == "")
    {
        return;
    }
    else if (keyText == "<~")
    {
        dialogPopup.RemoveInputChar();
    }
    else if(keyText == "enter")
    {
        dialogPopup.OnSubmitQuestion();
        Toggle();
    }
    else if (keyText == "shift")
    {
        ToggleShift();
    }
    else if (keyText == "?12") //numbers
    {
        isShiftPressed = false;
        SetToNumberKeys();
    }
    else if (keyText == "abc")
    {
        ResetKeys();
    }
    else if (keyText == "space")
    {
        dialogPopup.AddInputChar(" ");
    }
    else
    {
        dialogPopup.AddInputChar(keyText);
        if (isShiftPressed)
        {
            ToggleShift();
        }
    }
}`;

export default processKey;