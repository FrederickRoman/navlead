const viewpointDataclass = `@dataclass
class Viewpoint:
    id: str = ""
    loc: Location = Location()
    height: int = 0
    neighbors: Optional[List[str]] = None
    targets: Optional[List[int]] = None`;

export default viewpointDataclass;
