const cardinalDirection = `@classmethod
def getCardinalDirectionAlongVector(cls, vector):
    index = 0
    vector = vector/np.linalg.norm(vector)
    for i,dir in enumerate(cls.allDirections):
        dirVector = np.array([dir.x,dir.y])
        theta = np.degrees(np.arccos(np.dot(vector,dirVector)))
        if abs(theta) <= 22.5: # 360/16 = 22.5 degrees
            index = i
            break
    return index`;

export default cardinalDirection;