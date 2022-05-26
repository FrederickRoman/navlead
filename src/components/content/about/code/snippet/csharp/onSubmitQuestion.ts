const onSubmitQuestion = `public void OnSubmitQuestion()
{
    string question = questionInputField.text;
    questionInputField.text = "";
    scrollView.AddQuestion(question);
    GameState gs = controller.collectGameState();
    controller.sendGameStateToJS(gs);
}`;

export default onSubmitQuestion;
