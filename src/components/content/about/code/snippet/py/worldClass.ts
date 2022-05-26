const worldClass = `class World():
worldName:str = ""
viewpoints: Optional[Dict[str,Viewpoint]] = None

def __init__(self, worldName=worldName):
    self.worldName = worldName
    self.viewpoints = World.loadConnectivity(worldName)
    self.loadTargets(worldName)`;

export default worldClass;