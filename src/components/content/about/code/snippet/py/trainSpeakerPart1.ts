const trainSpeakerPart1 = `def trainSpeaker(trainDialogsBatcher, valDialogsBatcher, worldsCollection, tok,
    batchSize, nIters, logEvery, logDir):
    speaker = Speaker(tok)
    speaker.env = worldsCollection`

export default trainSpeakerPart1;