const receiveAnswerFromJS = `public void receiveAnswerFromJS(string answer)
{
    qaExchangeList.UpdateLastAnswer(answer);
    updateScrollView();
}`

export default receiveAnswerFromJS;