const trainSpeakerPart3 = `# Evaluation
print(f"......... Evaluating on {batchSize} random dialogs ..........")
bleu_scores = []
losses = []
dialogs = valDialogsBatcher.getRandomBatch(batchSize)
insts, probs, loss, word_accu, sent_accu = speaker.valid(dialogs)

trueInstrs = ""
candidates = []
for i in range(len(dialogs)):
    inst = insts[i]
    trueInstrs = dialogs[i].a
    refs = [[tok.split_sentence(trueInstrs)]]
    candidates = [[tok.index_to_word[word_id] for word_id in inst]]
    bleu_score = compute_bleu(refs, candidates, smooth=False)[0]
    bleu_scores.append(bleu_score)
    losses.append(loss)

# Save the model according to the best score
bleu_score = mean(bleu_scores)
loss = mean(losses)

if bleu_score > bestScore:
    bestScore = bleu_score
    print(f'Save the model with BEST score {bestScore}')
    speaker.save(iter, join(logDir, 'bestScore'))

if loss < bestLoss:
    bestLoss = loss
    print(f'Save the model with BEST loss {loss}')
    speaker.save(iter, join(logDir, 'bestLoss'))`

export default trainSpeakerPart3;