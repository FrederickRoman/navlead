const trigger = `using UnityEngine;

public class Trigger : MonoBehaviour
{
    [SerializeField] private TargetPopup targetPopup;
    [SerializeField] private string triggerTarget;
    [SerializeField] private UIController controller;

    void OnTriggerEnter(Collider other)
    {
        if (targetPopup.getTarget() == triggerTarget)
        {
            controller.OnOpenCongratulations(triggerTarget);
        }
    }
}`;

export default trigger;
