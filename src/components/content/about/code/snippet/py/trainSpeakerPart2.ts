const trainSpeakerPart2 = `for idx in range(0, nIters, logEvery):
    interval = min(logEvery, nIters - idx)
    for iter in range(interval):
        # Randomly choose a train batch
        dialogs = trainDialogsBatcher.getRandomBatch(batchSize)
        stepByStepDialogs = worldsCollection.convertToStepByStepInstructions(dialogs, 
            DialogBatcher.maxNextSteps)
        speaker.train(stepByStepDialogs)	# Train 1 iter with step by step instructions
        speaker.train(dialogs)   		# Train 1 iter with natural conversations`

export default trainSpeakerPart2;