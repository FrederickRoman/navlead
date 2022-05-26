const trainVal = `def trainVal():
    ''' Train on the training set, and validate. '''
    setup(ARGS.seed)
    worldsCollection = WorldCollection() # Set up training environment
    trainDialogsBatcher = DialogBatcher(worldsCollection)
    valDialogsBatcher = DialogBatcher(worldsCollection, DialogBatcher.valFileName)
    vocab = read_vocab(ARGS.vocabFile)
    tok = Tokenizer(vocab=vocab, encoding_length=ARGS.maxInput)
    trainSpeaker(
        trainDialogsBatcher, valDialogsBatcher, worldsCollection, tok,
        ARGS.batchSize, ARGS.iters, ARGS.logEvery, ARGS.logDir)`;

export default trainVal;
