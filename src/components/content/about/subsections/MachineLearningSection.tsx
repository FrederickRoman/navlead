import Image from "next/image";
import ExternalLink from "@/components/link/ExternalLink";
import {
  Box,
  Grid,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import instructionDiagram from "@/public/img/instructions_diagram.png";
import sampleDataDialog from "@/public/video/sample_dialog.gif";
import ImgContainer from "@/components/container/ImgContainer";
import HREFS from "@/constants/hrefs";
import CvdnSampleVideo from "../video/CvdnSampleVideo";
import seq2seqEncoderDiagram from "@/public/img/seq2seq_encoder.png";
import seq2seqDecoderDiagram from "@/public/img/seq2seq_decoder.png";
import navleadNetMainDiagram from "@/public/img/navleadnet_main_diagram.svg";
import pytorchLogo from "@/public/img/pytorch_logo.svg";
import trainVal from "../code/snippet/py/trainVal";
import CodeSection from "@/components/code/CodeSection";
import trainSpeaker from "../code/snippet/py/trainSpeaker";
import worldClass from "../code/snippet/py/worldClass";
import viewpointDataclass from "../code/snippet/py/viewpointDataclass";
import dialogDataclass from "../code/snippet/py/dialogDataclass";
import trainSpeakerPart1 from "../code/snippet/py/trainSpeakerPart1";
import trainSpeakerPart2 from "../code/snippet/py/trainSpeakerPart2";
import trainSpeakerPart3 from "../code/snippet/py/trainSpeakerPart3";
import cardinalDirection from "../code/snippet/py/cardinalDirection";
import LineChart from "@/components/chart/LineChart";
import {
  BLUE_SCORE,
  INTERVAL_STEP_SIZE,
  LOSS,
  WORD_ACCURACY,
} from "../chart/data/NavleadNetMetrics";
import DataAugAnimation from "../animation/DataAugAnimation";
import StepsAnimation from "../animation/StepsAnimation";

function DataSection(): JSX.Element {
  return (
    <Box component="section">
      <Typography variant="h3" py={1} id="about_ml-data">
        Data
      </Typography>
      <Stack spacing={8}>
        <Stack spacing={8}>
          <Typography variant="h4" py={1}>
            Base dataset &#x28;CVDN&#x29;
          </Typography>
          <Box py={1}>
            <Stack spacing={8}>
              <Typography variant="h6">
                NavLead is trained using the text dialogues from the &nbsp;
                <ExternalLink href={HREFS.cvdnPage}>CVDN</ExternalLink>
                &nbsp; dataset. CVDN is a dataset of more than 2,000 human-human
                dialogs situated in simulated, photorealistic home environments.
                In each dialogue, 2 people work together to reach a target. The
                first person is the Navigator and can move around the 3D
                environment as well as ask questions to the Guide. The Guide is
                also a person, and observes the 3D environment through the
                screen of the Navigator, but unlike the Navigator, the Guide
                does not interact with the environment. Instead, the Guide has
                access to pictures of the environment along the next steps along
                the shortest path towards the target. The Guide’s role, then, is
                to provide good answers to the Navigator’s questions, so the
                Navigator can reach the target as quickly as possible. The video
                below shows a full demo of this interaction:
              </Typography>
              <CvdnSampleVideo />
              <Typography variant="h6">
                The following is an example of a single question-answer exchange
                with &ldquo;picture&rdquo; as a target:
              </Typography>
              <ImgContainer>
                <Image
                  src={sampleDataDialog}
                  layout="responsive"
                  alt="Sample dialog from CVDN"
                />
              </ImgContainer>
            </Stack>
          </Box>
        </Stack>
        <Stack spacing={8}>
          <Typography variant="h4" py={1}>
            Augmenting dataset &#x28;CVDN&#x29;
          </Typography>
          <Box py={1}>
            <Stack spacing={8}>
              <Typography variant="h6">
                In order to generate more data for training, the &nbsp;
                <ExternalLink href={HREFS.cvdnPage}>CVDN</ExternalLink>
                &nbsp; dataset is augmented during training with paths having
                random start and end locations. On each training iteration, we
                train once with the augmented data and then with the original
                data point. The augmented datapoint is generated by taking the
                original datapoint at that iteration and randomly selecting a
                location with a target in the same environment and then randomly
                selecting a starting location. Non-connected locations are
                excluded. Once start and end locations are selected, a set of
                text instructions is generated from the shortest path by mapping
                the movements from location to location to the closest cardinal
                direction. The possible set of generated instructions per step
                is illustrated in the following diagram:
              </Typography>
              <Typography variant="h6" style={{ textAlign: "center" }}>
                Diagram showing the mapping from vector direction to word
                instructions (relative to the traveler)
              </Typography>
              <ImgContainer>
                <Image
                  src={instructionDiagram}
                  layout="responsive"
                  placeholder="blur"
                  alt="Diagram showing the mapping from vector direction to word instructions"
                />
              </ImgContainer>
              <Typography variant="h6" style={{ textAlign: "center" }}>
                Synthetic dialog creation for random initial location and target
              </Typography>
              <Grid container justifyContent="center" alignItems="center">
                <Grid item>
                  <DataAugAnimation />
                </Grid>
                <Grid item>
                  <StepsAnimation />
                </Grid>
              </Grid>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}

function ArchitectureSubsection(): JSX.Element {
  return (
    <Stack spacing={8}>
      <Typography variant="h4" py={1}>
        Architecture &#x28;seq2seq with attention using LSTMs&#x29;
      </Typography>
      <ImgContainer>
        <Image
          src={navleadNetMainDiagram}
          layout="responsive"
          alt="navlead process diagram"
        />
      </ImgContainer>
      <Box py={1}>
        <Stack spacing={8}>
          <Typography variant="h6">
            For training, NavLead takes in as input the question as a string of
            characters along with the coordinates and direction the Navigator is
            facing when asking the question. Then, NavLead outputs a sequence of
            words that correspond to the inferred answer. The way NavLead
            achieves this is by training a &nbsp;
            <ExternalLink href={HREFS.seq2seq}>
              sequence-to-sequence &#x28;Seq2Seq&#x29;
            </ExternalLink>
            &nbsp; machine learning model. Seq2Seq takes in a sequence and
            outputs other sequence. It is typically used for language processing
            and some applications include language translation and conversation
            generation. NavLead in particular implements a Seq2Seq with
            attention using LSTMs. LSTM stands for Long Short-Term Memory and is
            especially powerful for processing long sequences of data like the
            words in a conversation. The way this is achieved is by outputting a
            context vector on each step of the inference. The context vector
            from the previous step is then used to infer the next word.
          </Typography>
          <Typography variant="h5">
            Understanding the encoder-decoder sequence to sequence architecture
          </Typography>
          <Typography variant="h6">
            In particular, NavLead implements a Seq2Seq model in two main parts.
            The first part is called the Encoder and has the task of
            representing the environmental context. For NavLead, the
            environmental context is the question asked, the position and
            direction of the Navigator and the features describing the next 5
            steps along the shortest path. The encoder generates a
            representation by mapping these values into a context vector. This
            is achieved through an attention layer between the features
            describing the Navigator along with the question and the features
            describing the next 5 steps; which is then followed by a
            bidirectional LSTM cycle. In short, the encoder maps from the
            question and the environment features into a context vector that
            will later be used to initialize the decoder. The following diagram
            represents the Encoder:
          </Typography>
          <ImgContainer>
            <Image
              src={seq2seqEncoderDiagram}
              layout="responsive"
              placeholder="blur"
              alt="Sequence-to-sequence encoder diagram"
            />
          </ImgContainer>
          <Typography variant="h6">
            With the context vector, the decoder now has information about the
            question, location, target, and the next 5 steps which it can use to
            generate the answer. To accomplish this, the decoder uses another
            cycle of LSTMs with attention where the attention layer captures the
            relationship between the context vector and the and the last word to
            generate the next word. The cycle starts with the &lt;BOS&gt; tag
            which stands for “Beginning of Sentence” to indicate that we are
            starting a new inference. The inferred word is then used as input to
            predict the next word and so on until the decoder predicts the
            &lt;EOS&gt; “End of Sentence.” The following diagram represents the
            decoder:
          </Typography>
          <ImgContainer>
            <Image
              src={seq2seqDecoderDiagram}
              layout="responsive"
              placeholder="blur"
              alt="Sequence-to-sequence decoder diagram"
            />
          </ImgContainer>
          <Typography variant="h5">Training Configuration</Typography>
          <Typography variant="h6">
            NavLeadNet is written in &nbsp;
            <ExternalLink href={HREFS.pytorchPage}>Pytorch</ExternalLink>.
            Pytorch is an open source machine learning framework
          </Typography>
          <Box my={5}>
            <Grid container justifyContent="center" alignItems="center">
              <Grid item>
                <Image
                  src={pytorchLogo}
                  width={275}
                  height={100}
                  alt="Pytorch logo"
                />
              </Grid>
            </Grid>
          </Box>
          <Typography variant="h6">
            NavleadNet has a sequence-to-sequence architecture with:
          </Typography>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item>
              <Table sx={{ width: 280, border: "1px solid black" }}>
                <TableBody>
                  <TableRow>
                    <TableCell align="right">Optimizer</TableCell>
                    <TableCell align="right">RMSprop</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="right">Learning Rate</TableCell>
                    <TableCell align="right">0.0001</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="right">Dropout</TableCell>
                    <TableCell align="right">0.5</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="right">Loss</TableCell>
                    <TableCell align="right">
                      Cross entropy with teacher forcing
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Grid>
          </Grid>
          <Typography variant="h6">
            The loss function used is &nbsp;
            <ExternalLink href={HREFS.crossEntropy}>Cross Entropy</ExternalLink>
            &nbsp; with &nbsp;
            <ExternalLink href={HREFS.teacherForcing}>
              Teacher Forcing
            </ExternalLink>
            &nbsp; where a good text answer is that which is as close as
            possible to the text answer provided by the human Guide. For
            example, for a vocabulary of 4 words [left, right, up, down], an
            untrained model would predict uniform probabilities of [1/4, 1/4,
            1/4, 1/4]. With teacher forcing, a single word would be the correct
            answer, let&apos;s say in this case the word “right.” This means
            that the correct distribution is [0,1,0,0]. Therefore, the
            cross-entropy loss for this toy example would be
            -0*1/4-1*1/4-0*1/4-0*1/4 = -1/4 Since the goal is to minimize the
            loss, this has the effect of favoring predictions where the model is
            more confident of the right answer.
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
}

function TrainLoopSubsection(): JSX.Element {
  return (
    <Stack spacing={8}>
      <Typography variant="h4" py={1}>
        Training loop
      </Typography>
      <Typography variant="h6">
        The CVDN dataset is split into 1299 training, 94 seen validation, and
        260 unseen validation dialogs. And, as mentioned above, data
        augmentation is performed at runtime interleaving training of augmented
        data with the original data at each iteration. The function &nbsp;
        <code>trainVal</code> &nbsp; contains all the necessary steps for
        training and evaluation as follows:
      </Typography>
      <CodeSection
        codeName="trainVal.py"
        codeText={trainVal}
        codeLang="python"
      />
      <Typography variant="h6">
        Here &nbsp;
        <code>WorldCollection</code> &nbsp; refers to a data structure for
        storing information about each house in the CVDN dataset. The basic
        steps performed in trainVal are those of initializing the training
        environment, loading the houses into the &nbsp;
        <code>WorldCollection</code>, &nbsp; loading the dialogs with help from
        the &nbsp;
        <code>DialogBatcher</code>, &nbsp; reading the vocabulary for the
        tokenizer, and finally calling on &nbsp;<code>trainSpeaker</code>&nbsp;
        with all these information to run the training loop for NavLead. More in
        detail, the function &nbsp;<code>setup</code>&nbsp; sets the random seed
        for all random number generators used. Also, the &nbsp;
        <code>WorldCollection</code>&nbsp; is a class that contains a dictionary
        that maps from world id to an instance of a &nbsp;
        <code>World</code>. Here houses are referred to as instances of the
        &nbsp;
        <code>World</code>&nbsp; class. Each &nbsp;
        <code>World</code>&nbsp; is simply a collection of information about a
        particular house:
      </Typography>
      <CodeSection
        codeName="World.py"
        codeText={worldClass}
        codeLang="python"
      />
      <Typography variant="h6">
        The two most important pieces of information that the World holds about
        a house is the name and the viewpoints in that house. While the 3D space
        in the house is continuous, the CVDN dataset divides up the areas in the
        house into discrete locations called viewpoints. For instance, the
        entrance to a room can be a viewpoint. Each room can potentially have
        multiple viewpoints, so it is common for a house with many rooms to have
        hundreds of these viewpoints. In order to organize the information about
        each viewpoint, they are saved as instances of the &nbsp;
        <code>Viewpoint</code>&nbsp; data class.
      </Typography>
      <CodeSection
        codeName="Viewpoint.py"
        codeText={viewpointDataclass}
        codeLang="python"
      />
      <Typography variant="h6">
        As shown here, each &nbsp;
        <code>Viewpoint</code>&nbsp; contains information about its location in
        3D space and a list of neighbors as well as targets at that location. Of
        these, the list of neighbors is critical for being able to determine the
        path between two viewpoints. For example, when doing data augmentation,
        a function called &nbsp;
        <code>getShortestPath</code>&nbsp; runs &nbsp;
        <ExternalLink href={HREFS.dijkstraAlgorithm}>
          Dijkstra algorithm
        </ExternalLink>
        &nbsp; and returns the list of viewpoints to traverse in order to reach
        the end viewpoint given a start viewpoint. Moreover, each viewpoint
        instance records the names of the targets at that location. Targets are
        recognizable 3D objects like a bed or a plant. A room may contain
        multiple targets or no targets at all.
      </Typography>
      <Typography variant="h6">
        Looking back at the &nbsp;
        <code>trainVal</code>&nbsp; function, as was mentioned before, the
        &nbsp;
        <code>DialogBatcher</code>&nbsp; is a data structure that stores a list
        of dialogs for a particular set of houses. Since the training and
        validation sets are two separate sets of dialogs, an instance of &nbsp;
        <code>DialogBatcher</code>&nbsp; is created for each. The dialogs
        themselves are organized by the &nbsp;
        <code>Dialog</code>&nbsp; data structure as follows:
      </Typography>
      <CodeSection
        codeName="Dialog.py"
        codeText={dialogDataclass}
        codeLang="python"
      />
      <Typography variant="h6">
        In a few words, a &nbsp;
        <code>Dialog</code>&nbsp; consists of a question, an answer, the world
        id and viewpoint where the question was asked along with the target and
        optionally the next steps taken towards the end viewpoint with the
        target. The &nbsp;
        <code>Dialog</code>s are extracted from the question-answer exchanges in
        the CVDN dataset when the &nbsp;
        <code>DialogBatcher</code>&nbsp; is instantiated.
      </Typography>
      <Typography variant="h6">
        Then, when the &nbsp;
        <code>trainVal</code>&nbsp; has loaded the training data and validation
        data, &nbsp;
        <code>trainSpeaker</code>&nbsp; takes care of actually running the
        training loop to train the NavLead neural network to produce answers
        from questions.
      </Typography>
      <Typography variant="h6">
        The full set of steps for training can be found in the &nbsp;
        <code>trainSpeaker</code>&nbsp; function as follows:
      </Typography>
      <CodeSection
        codeName="trainSpeaker.py"
        codeText={trainSpeaker}
        codeLang="python"
      />
      <Typography variant="h6">
        The training of NavLead can be divided into 3 main parts. <br />
        1. Instantiation and setup of the model.
        <br /> 2. The training loop at each interval where we interleave
        training of the CVDN data with data augmented online at each iteration.
        <br /> 3. Validation at the end of each interval.
      </Typography>
      <Typography variant="h6">
        On the first part, we create an instance of &nbsp;<code>Speaker</code>
        &nbsp; and assign it the &nbsp;<code>worldsCollection</code>&nbsp;
        environment.
      </Typography>
      <CodeSection
        codeName="trainSpeaker.py (part 1)"
        codeText={trainSpeakerPart1}
        codeLang="python"
      />
      <Typography variant="h6">
        As mentioned above, the &nbsp;<code>Speaker</code>&nbsp; class is a
        sequence-to-sequence model that takes in as input a text question and
        outputs a text answer. Under the hood, it is implemented as an
        encoder-decoder network. At each step, when walking inside the house,
        the encoder encodes the 3D location, the direction, the mobility, the
        targets nearby, the requested target and finally the question into a
        context vector. This context vector is then used by the decoder to
        produce the text answer on word at a time. The direction is represented
        a 2D unit vector whose origin is the current location. The mobility
        refers to 8 Booleans that indicate for each cardinal direction whether
        or not the player can move in that direction (North, South, West, East,
        Northwest, Southwest, Southeast, and Northeast). For instance, if all
        Booleans are true, then that means that the player can move in all
        directions. In order to determine whether it is possible to move along a
        cardinal direction, we loop through the neighboring viewpoints
        calculating the direction vector from the current location to the
        neighbor. With this, vector we can determine which is the closest
        cardinal direction that matches this vector by comparing the angle
        between the vectors. The class method &nbsp;
        <code>getCardinal Direction AlongVector</code>&nbsp; takes care of this
        task as follows:
      </Typography>
      <CodeSection
        codeName="getCardinalDirectionAlongVector.py"
        codeText={cardinalDirection}
        codeLang="python"
      />
      <Typography variant="h6">
        The idea is that using the dot product we can extract the angle between
        the direction vector and a cardinal vector. If we compare against all
        cardinal vectors we can decide which is the closest cardinal vector and
        hence decide what direction the player is able to move from a location.
      </Typography>
      <Typography variant="h6">
        Going back to &nbsp;
        <code>train Speaker</code>, on the second part we have the bulk of the
        training. At each iteration a random batch of dialogs is selected for
        training using the &nbsp;
        <code>get Random Batch</code>&nbsp; function provided by the Dialog
        Batcher As mentioned before, on each training step, the &nbsp;
        <code>convert To Step By Step Instructions</code>&nbsp; takes in the
        current dialogs and generates new step-by-step instructions between 2
        random locations in the same house as the training dialogs. These
        augmented dialogs are used for training before training on the real
        dialogs at each iteration.
      </Typography>
      <CodeSection
        codeName="trainSpeaker.py (part 2)"
        codeText={trainSpeakerPart2}
        codeLang="python"
      />
      <Typography variant="h6">
        Then on part 3, at the end of each interval, the model is evaluated on a
        set of random dialogs from the validation set. The &nbsp;
        <ExternalLink href={HREFS.blueScore}>BLEU score</ExternalLink>, loss,
        and accuracy are calculated using these validation dialogs. The BLEU
        score is a metric typically used in machine translation for comparing 2
        text sequences. In our case, it is used to judge how close the generated
        text is to the reference human text answer. The BLEU score itself
        computes the modified precision metric using n-grams instead of matching
        word by word between the 2 sentences.
      </Typography>
      <CodeSection
        codeName="trainSpeaker.py (part 3)"
        codeText={trainSpeakerPart3}
        codeLang="python"
      />
      <Typography variant="h6">
        It is also during this part that we save the model with the best average
        BLEU score as well as the model with the best average loss. In practice,
        the model with best loss tends to give better results because the BLEU
        score is a less stable metric than the loss since it is based on
        matching of n-grams whereas the loss takes into account the cross
        entropy of the predicted probabilities making it a more continuous
        metric.
      </Typography>
    </Stack>
  );
}

function ResultsSubsection(): JSX.Element {
  const labels: number[] = Array(LOSS.length)
    .fill(null)
    .map((_, index) => INTERVAL_STEP_SIZE * index);
  const blueScore: number[] = [...BLUE_SCORE];
  const loss: number[] = [...LOSS];
  const wordAccuracy: number[] = [...WORD_ACCURACY];
  return (
    <Stack spacing={8}>
      <Typography variant="h3" py={1} id="about_ml-results">
        Results
      </Typography>
      <Stack spacing={8}>
        <Typography variant="h6">
          The &nbsp;
          <ExternalLink href={HREFS.blueScore}>BLEU score</ExternalLink>, loss,
          and accuracy are calculated using these validation dialogs. The BLEU
          score is a metric typically used in machine translation for comparing
          2 text sequences. In our case, it is used to judge how close the
          generated text is to the reference human text answer. The BLEU score
          itself computes the modified precision metric using n-grams instead of
          matching word by word between the 2 sentences.
        </Typography>
        <ImgContainer>
          <LineChart
            title="Loss"
            labels={labels}
            data={loss}
            styling={{ borderColor: "darkred", backgroundColor: "red" }}
          />
        </ImgContainer>
        <ImgContainer>
          <LineChart
            title="Word accuracy"
            labels={labels}
            data={wordAccuracy}
            styling={{ borderColor: "darkgreen", backgroundColor: "green" }}
          />
        </ImgContainer>
        <ImgContainer>
          <LineChart
            title="BLUE score"
            labels={labels}
            data={blueScore}
            styling={{ borderColor: "darkblue", backgroundColor: "blue" }}
          />
        </ImgContainer>
      </Stack>
    </Stack>
  );
}

function TrainingSection(): JSX.Element {
  return (
    <Box component="section" id="about_ml-training">
      <Typography variant="h3" py={1}>
        Training
      </Typography>
      <Stack spacing={4}>
        <ArchitectureSubsection />
        <TrainLoopSubsection />
      </Stack>
    </Box>
  );
}

function MachineLearningSection(): JSX.Element {
  return (
    <Box component="section" id="about_machine-learning">
      <Stack spacing={4}>
        <Typography
          variant="h2"
          sx={{ textAlign: "center", fontWeight: "medium" }}
        >
          Machine Learning modeling
        </Typography>
        <Stack spacing={4}>
          <DataSection />
          <TrainingSection />
          <ResultsSubsection />
        </Stack>
      </Stack>
    </Box>
  );
}

export default MachineLearningSection;
