const dialogDataclass = `@dataclass
class QuestionAnswer:
    q: str
    a: Optional[str]

@dataclass
class Dialog(QuestionAnswer):
    worldId: str
    viewpointId: str
    end: str
    target: Optional[str]
    nextSteps: Optional[List[str]] = None
    direction: Vector2D = Vector2D(0, 1) # Default to looking North`;

export default dialogDataclass;
