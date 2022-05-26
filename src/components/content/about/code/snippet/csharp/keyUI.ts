const keyUI = `using UnityEngine;
using TMPro;

public class Key : MonoBehaviour
{
    [SerializeField] private string originalText;
    [SerializeField] private string shiftText;
    [SerializeField] private string numbersText;

    private Keyboard keyboard_;    
    private TMP_Text keyTextField_;

    void Awake()
    {
        keyboard_ = transform.parent.gameObject.GetComponent<Keyboard>();
        keyTextField_ = transform.Find("Text (TMP)").GetComponent<TMP_Text>();
    }

    public void KeyPressed()
    {
        string keyText = keyTextField_.text;
        keyboard_.ProcessKey(keyText);
    }

    public void SetToOriginalText()
    {
        keyTextField_.text = originalText;
    }

    public void SetToShiftText()
    {
        keyTextField_.text = shiftText;
    }

    public void SetToNumbersText()
    {
        keyTextField_.text = numbersText;
    }
}`;

export default keyUI;