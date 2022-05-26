import Image from "next/image";
import CodeSection from "@/components/code/CodeSection";
import ExternalLink from "@/components/link/ExternalLink";
import { Box, Stack, Typography } from "@mui/material";
import voxeldeskFloorPlan from "@/public/img/voxeldesk_floorplan.png";
import blenderBedroom from "@/public/img/blender_bedroom.png";
import unityHouse from "@/public/img/unity_house_interior.png";
import ImgContainer from "@/components/container/ImgContainer";
import HREFS from "@/constants/hrefs";
import onSubmitQuestion from "../code/snippet/csharp/onSubmitQuestion";
import sendGameStateToJS from "../code/snippet/csharp/sendGameStateToJS";
import sendToJS from "../code/snippet/js/sendToJS";
import receiveAnswerFromJS from "../code/snippet/csharp/receiveAnswerFromJS";
import sunHouseModelImg from "@/public/img/sun_house_side_view.png";
import sunHousePhotoImg from "@/public/img/sun_house_wiki.jpg";
import SunHouseTourVideo from "../video/SunHouseTourVideo";
import playerMove from "../code/snippet/csharp/playerMove";
import navlead2dPanels from "@/public/img/navlead_2d_panels.png";
import livingRoomCamera from "@/public/img/living_room_camera.png";
import targetPopupBed from "@/public/img/target_popup_bed.png";
import mainScene from "@/public/img/main_scene.png";
import dialogPopup from "@/public/img/dialog_popup.png";
import congratulationsPanel from "@/public/img/congratulations_panel.png";
import trigger from "../code/snippet/csharp/trigger";
import unityKeyboard from "@/public/img/unity_keyboard.png";
import keyUI from "../code/snippet/csharp/keyUI";
import processKey from "../code/snippet/csharp/processKey";
import unityKeyboard2 from "@/public/img/unity_keyboard_2.png";
import simToClient from "@/public/img/sim_to_client.svg";

function Modeling3dEnviroment(): JSX.Element {
  return (
    <>
      <Typography variant="h3" py={1} id="about_modeling-3d-enviroment">
        Modeling 3D enviroment in Blender
      </Typography>
      <Box py={1}>
        <Stack spacing={8}>
          <Typography variant="h6">
            The 3D virtual enviroment used in the demo is based on Frank Lloyd
            Wright's final design: the Circular Sun House.
          </Typography>
          <ImgContainer>
            <Image
              src={sunHousePhotoImg}
              placeholder="blur"
              layout="responsive"
              alt="Circular Sun House wikimedia photo"
            />
          </ImgContainer>
          <Typography variant="h6">
            It is also known as the Norman Lykes House and it is located in
            Phoenix, Arizona. This is not typical house. Despite of its name, we
            think that the Circular Sun House resembles more a snail that
            anything else; with the head being the long corridor that links the
            suits of the private area, and the shell being the public area that
            has a kitchen and an office above it. Here is a tour of the house by
            Architectural Digest (and you be the judge):
          </Typography>
          <SunHouseTourVideo />
          <Typography variant="h6">
            So why did we choose this odd house for the demo? Simply put, we
            needed data to train the navigation AI and the &nbsp;
            <ExternalLink href={HREFS.cvdnPage}>CVDN dataset</ExternalLink>
            &nbsp; includes this house.
          </Typography>
          <Typography variant="h6">Now to the actual modeling.</Typography>
          <Typography variant="h6">
            First we had to decided how of the house we needed (and wanted) to
            model. To that aim, we did quick a 3D sketch of the floor plan. We
            did the sketch with &nbsp;
            <ExternalLink href={HREFS.voxelDesk}>Voxeldesk</ExternalLink>.
            Voxeldesk is an online voxel-art editor thats makes 3D art (such as
            this sketch) easy to create, and it was developed by us too. So this
            is our first draft of the Circular Sun House layout.
          </Typography>
          <ImgContainer>
            <Image
              src={voxeldeskFloorPlan}
              layout="responsive"
              placeholder="blur"
              alt="Floor plan sketch in Voxeldesk"
            />
          </ImgContainer>
          <Typography variant="h6">
            Granted this is very rough sketch; but it got us to realize that we
            didn't need the exterior the house and even the ceiling. It also got
            us to realize that building such a curvy house would be too hard
            with voxels. Since we needed a bigger boat, we got Blender.
          </Typography>
          <Typography variant="h6">
            <ExternalLink href={HREFS.blender}>Blender</ExternalLink>&nbsp; is a
            free and open-source professional-level 3D editor with a strong
            community of developers. For these reasons, Blender is the main tool
            for modeling the 3D house in this demo. The walls, floor, and
            objects throughout the house are modeled in great detail using the
            power of Blender. We carefully placed the 3D objects in the house to
            match the locations shown in the &nbsp;
            <ExternalLink href={HREFS.cvdnPage}>CVDN dataset</ExternalLink>.
            This is how creating a bedroom in Blender looks like:
          </Typography>
          <Typography variant="h6">
            For navigation <br /> • The doorways are marked and there are no
            doors <br />
            • The floor has a unique distinctive color so users can learn to
            distinguish walkable surfaces. <br />
            • The placement of the furniture avoid leaving tight spaces where
            you could get stuck. <br />
          </Typography>
          <Typography variant="h6">
            For efficiency <br /> • The house and objects are low-poly to
            optimize for space, download, and rendering time over the web.
            <br />• The underlying structure of repeated objects is linked,
            instead of copied, across these objects for efficiency.
          </Typography>
          <Typography variant="h6">
            This is how creating a bedroom in Blender looks like:
          </Typography>
          <ImgContainer>
            <Image
              src={blenderBedroom}
              layout="responsive"
              placeholder="blur"
              alt="Bedroom 3D modeling in Blender"
            />
          </ImgContainer>
          <Typography variant="h6">
            And this is how the house looks from above:
          </Typography>
          <ImgContainer>
            <Image
              src={sunHouseModelImg}
              placeholder="blur"
              layout="responsive"
              alt="Circular Sun House CG model in Blender"
            />
          </ImgContainer>
        </Stack>
      </Box>
    </>
  );
}

function AddingGameControls(): JSX.Element {
  return (
    <>
      <Typography variant="h3" py={1} id="about_adding-game-controls">
        Adding game controls in Unity
      </Typography>
      <Box py={1}>
        <Stack spacing={8}>
          <Typography variant="h6">
            Our simulation wouldn’t be very useful, if we could navigate in the
            scene. For this we used Unity.
          </Typography>
          <Typography variant="h6">
            <ExternalLink href={HREFS.unityPage}>Unity</ExternalLink> &nbsp; is
            a cross-platform game engine that allows us not only to interact
            with the environment but also add physical properties such as
            gravity and rigid body collision. Below is a shot of what the
            starting room of the house looked like in Unity:
          </Typography>
          <ImgContainer>
            <Image
              src={unityHouse}
              layout="responsive"
              placeholder="blur"
              alt="House 3D simulation in Unity"
            />
          </ImgContainer>
          <Typography variant="h6">
            With Unity, we wanted to achieve two goals: add 3D motion controls
            and a 2D UI. The 2D UI would allow us to select a target and ask for
            guidance along the journey.
          </Typography>
          <Typography variant="h4">Motion Controls</Typography>
          <Typography variant="h6">
            For the player&apos;s movement, the player object has a script which
            updates the player&apos;s position based on the WASD keys. This
            movement is smoothed out over the frame rate at the “Update” runtime
            hook. The code for player movement is as follows:
          </Typography>
          <CodeSection
            codeName="PlayerMove.cs"
            codeText={playerMove}
            codeLang="csharp"
          />
          <Typography variant="h6">
            Here “_charController” is the CharacterController component attached
            to the player object. This component allows the movement of the
            player to be constrained by object collisions and also to react to
            gravity like a rigid body.
          </Typography>
          <Typography variant="h4">Unity 2D UI</Typography>
          <Typography variant="h6">
            Navlead makes use of several 2D Panels overlayed on top of the
            display canvas. Each of these panels provides a visual interface to
            necessary functionality for the simulation. In total, there are 5
            main simulation states as illustrated by the diagram below:
          </Typography>
          <ImgContainer>
            <Image
              src={navlead2dPanels}
              placeholder="blur"
              layout="responsive"
              alt="Navlead 2D panels used in the simulation"
            />
          </ImgContainer>
          <Typography variant="h6">
            Before the simulation starts, the Splash Screen is active and shows
            the camera view of the living room as the camera looks around the
            room. Then, when the user clicks on “Start,” the Target Popup
            becomes active for selecting a target. Clicking on “Ready” starts
            the simulation and places the player at the start position of the
            Main Scene. From there, the player may open the Dialog Popup for
            asking questions or click on the reset button which will prompt the
            user to select a new target. Targets have triggers attached to them,
            so when a user reaches the desired target the Congratulations Panel
            congratulates the player and gives the option to re-start the
            simulation
          </Typography>
          <Typography variant="h6">
            In order to manage the state of the simulation, a central controller
            of type UIController has a reference to the UI panels and is able to
            open or close the panels according to different actions in the
            simulation. However, there is no explicit notion of a simulation
            state; meaning that the controller does not explicitly save what is
            the current simulation state. As shown in the diagram above, except
            for the splash screen, the panels can be opened from the main scene
            and can lead back to it.
          </Typography>
          <Typography variant="h4">The Splash Screen</Typography>
          <Typography variant="h6">
            When the simulation loads, the first screen that the user can
            interact with is the splash screen. This panel, branded by the
            Navlead logo, has a single button for enabling the user to start the
            simulation. The background of the splash screen demonstrates how the
            3D environment will look like even before the user decides to click
            on “Start.” This rotating background is achieved by having a camera
            in the simulation rotate inside the living room.
          </Typography>
          <ImgContainer>
            <Image
              src={livingRoomCamera}
              placeholder="blur"
              layout="responsive"
              alt="Camera rotation in the simulation living room for splash screen"
            />
          </ImgContainer>
          <Typography variant="h6">
            As shown here, the splash screen camera has a fixed position but a
            constant angle of rotation demonstrating how it looks like to look
            around inside the living room. The splash screen panel is a 2D UI so
            the way that the camera view is loaded in the background is through
            a special kind of image called a “Render Texture” which, as the name
            suggests, is rendered at runtime.
          </Typography>
          <Typography variant="h4">The Target Popup</Typography>
          <Typography variant="h6">
            Once the user clicks on “Start,” the next panel that the user
            interacts with is the Target Popup. It is at this point that the
            user can choose the target for the simulation. Each target is shown
            as a rotating 3D object using the same “Render Texture” technique
            described above for the splash screen. The key piece of
            functionality of the Target Popup is the dropdown with a list of all
            the targets.
          </Typography>
          <ImgContainer>
            <Image
              src={targetPopupBed}
              placeholder="blur"
              layout="responsive"
              alt="Target popup selecting and showing a bed"
            />
          </ImgContainer>
          <Typography variant="h6">
            The Target Popup saves a private variable with the name of the
            current target selected. By default, the selected target is “Bed 1.”
            In order for this variable to be updated when the user clicks on an
            item in the dropdown, we attach a listener to the dropdown for the
            “onValueChanged” event. This way, whenever the user changes the
            selected value of the dropdown, the corresponding variable for the
            current target is also updated. Clicking on “Ready” at this point
            closes the Target Popup and opens the Main Scene.
          </Typography>
          <Typography variant="h4">The Main Scene</Typography>
          <Typography variant="h6">
            It is at the Main Scene that most of the action happens. Here the
            user is able to use the mouse or drag in a mobile device to turn
            around the place. Also, to be able to move, the player can use the
            WASD keys or the arrow buttons labelled with their appropriate keys.
          </Typography>
          <ImgContainer>
            <Image
              src={mainScene}
              placeholder="blur"
              layout="responsive"
              alt="Main scene showing a bedroom with action button on the screen corners"
            />
          </ImgContainer>
          <Typography variant="h6">
            The arrow movement keys are semi-transparent so as to not obstruct
            the view while still being big enough for a user to tap on them with
            their fingers in the mobile device. The Main Scene also contains a
            button on the upper left for resetting the simulation. This also has
            the effect of opening up the Target Popup since a target needs to be
            selected in order to start the simulation. The Main Scene also
            contains button on the upper right for opening up the Dialog Popup.
            It is at the Dialog Popup that the user can ask questions to the
            NavLead Net at any point during the simulation. The Dialog Popup
            provides a closing button for returning to the Main Scene so the
            user can continue the search for the target. When the player is
            close enough to the target, a corresponding trigger activates
            opening up the Congratulations Panel.
          </Typography>
          <Typography variant="h4">The Dialog Popup</Typography>
          <Typography variant="h6">
            The user is able to ask questions to the NavLed Net through the
            Dialog Popup.
          </Typography>
          <ImgContainer>
            <Image
              src={dialogPopup}
              placeholder="blur"
              layout="responsive"
              alt="Dialog popup"
            />
          </ImgContainer>
          <Typography variant="h6">
            This panel contain a text input field for entering questions. On a
            computer with a keyboard, the user can type their questions and then
            send them by clicking on the airplane-shaped “send” button. And on a
            mobile device the user can tap on the keyboard icon for opening up
            an on-screen keyboard to tap each letter at a time. Pressing enter
            on the keyboard has the same effect as clicking on the send button.
            Once the question is submitted, Unity sends the GameState to the
            front-end to request the Django backend for an answer. The area
            below the text input field shows the conversation history with the
            latest question and answer at the top. While Unity is still waiting
            for the response from the NavLeadNet, the answer has the placeholder
            of “… waiting for response …” As more questions and answers are
            added to the conversation history, a sidebar appears to allow the
            user to scroll down to older questions. The Dialog Popup can be
            closed by clicking on the “X” button on the upper right corner.
            Closing the dialog still preserves the conversation history in case
            the user still wishes to go back to it.
          </Typography>
          <Typography variant="h4">The Congratulations Panel</Typography>
          <Typography variant="h6">
            Finally, in order to notify the user that they have found the
            target, the Congratulations Panel is a semi-transparent screen that
            displays the message “Congratulations! You found the target!” and
            enables the user to go back to the Target Popup by exposing the
            “Play Again” button.
          </Typography>
          <ImgContainer>
            <Image
              src={congratulationsPanel}
              placeholder="blur"
              layout="responsive"
              alt="Congratulations panel"
            />
          </ImgContainer>
          <Typography variant="h6">
            As mentioned above, this Congratulations Panel is activated whenever
            the player enters the trigger surrounding the target object. Each
            target has a trigger that can check whether the player has entered
            it. The code for doing precisely just this is as follows:
          </Typography>
          <CodeSection
            codeName="Trigger.cs"
            codeText={trigger}
            codeLang="csharp"
          />
          <Typography variant="h6">
            Triggers expose the “OnTriggerEnter” runtime hook that runs when the
            trigger detects that the player has entered it. In this code
            snippet, the trigger checks whether it is in charge of the current
            target. If so, it calls the UIController to display the
            Congratulations Panel.
          </Typography>
          <Typography variant="h4">Unity Keyboard</Typography>
          <Typography variant="h6">
            In order to enable mobile devices to input text in the Dialog popup,
            we implemented our own custom keyboard. This keyboard works with
            clicks, taps, and is able to scale with different screen sizes.
          </Typography>
          <ImgContainer>
            <Image
              src={unityKeyboard}
              placeholder="blur"
              layout="responsive"
              alt="In-game Unity keyboard (alphabet)"
            />
          </ImgContainer>
          <Typography variant="h6">
            The way this keyboard is implemented is by having an input button
            for each key. A UI panel called “Keyboard Panel” acts as the parent
            of all the keys and has a list with references to all these keys.
            Each key can have one of three states and saves as a private string
            the value the key takes for each state. The Keyboard panel takes
            care of managing the state of the entire keyboard. The following is
            the script attached to each key:
          </Typography>
          <CodeSection codeName="Key.cs" codeText={keyUI} codeLang="csharp" />
          <Typography variant="h6">
            As mentioned before, each key can have one of 3 states; the default,
            when the shift key is pressed, and when the numbers key is pressed.
            Upon awakening, each key makes sure to save a reference to its
            parent keyboard and its child text. When a key is pressed, the
            “KeyPressed” function sends the name of the key to the Keyboard
            parent for handling. The key also exposes functions for setting its
            text to one of the 3 states mentioned above. At the parent Keyboard,
            the “ProcessKey” function takes care of updating the state of the
            keyboard, adding or removing characters from the input field
            according to the key that was pressed.
          </Typography>
          <CodeSection
            codeName="ProcessKey.cs"
            codeText={processKey}
            codeLang="csharp"
          />
          <Typography variant="h6">
            The key “&lt;&#x7E;” stands for delete and calls the
            “RemoveInputChar” function to delete the last character in the input
            field. The “shift” key prompts the keyboard to loop through the list
            of keys and call the function “SetToShiftText” to update each key to
            the shift state. Similarly, when the key “?12” is pressed, the
            letters in the keyboard are replaced with numbers and the “?12” key
            becomes the “abc” key for restoring the keyboard to its default
            state. The following image shows the keyboard in the state when the
            numbers key is pressed.
          </Typography>
          <ImgContainer>
            <Image
              src={unityKeyboard2}
              placeholder="blur"
              layout="responsive"
              alt="In-game Unity keyboard (numbers and special characters)"
            />
          </ImgContainer>
          <Typography variant="h6">
            Finally, pressing “enter” has the same effect as submitting the
            question and closing the keyboard.
          </Typography>
        </Stack>
      </Box>
    </>
  );
}

function SimuationToBrowserUnitySide(): JSX.Element {
  return (
    <>
      <Typography variant="h3" py={1} id="about_sim-to-browser-unity">
        Bridging simulation to browser (simulation-side)
      </Typography>
      <Box py={1}>
        <Stack spacing={8}>
          <Typography variant="h6">
            Now that we have a simulation, we need to publish it. And one way to
            do that is serving it through browsers.
          </Typography>
          <Typography variant="h6">
            <ExternalLink href={HREFS.unityDocsJs}>
              Fortunately Unity can compile to run on web browsers
            </ExternalLink>
            . It does so by using &nbsp;
            <ExternalLink href={HREFS.webGlPage}>WebGL</ExternalLink>&nbsp; and
            &nbsp;
            <ExternalLink href={HREFS.webAsmPage}>Web Assembly</ExternalLink>
            &nbsp;.Virtual and Augmented reality are two emerging technologies
            that greatly benefit of WebGL and Web Assembly for running
            applications on the web.
          </Typography>
          <Typography variant="h6">
            The compiled simulation will send and receive messages from and to
            the browser as follows:
          </Typography>
          <ImgContainer>
            <Image
              src={simToClient}
              layout="responsive"
              alt="Simulation to client communication sequence diagram"
            />
          </ImgContainer>
          <Typography variant="h6">
            When a user clicks the send button to submit a question, the
            &#x201C;OnSubmitQuestion&#x28;&#x29;&#x201D; callback is called.
            This function adds the question to the current list of questions.
            Then, it collects the state of the game in a data class called
            GameState. The GameState consists of the current question, the
            target, the location, and the direction vector of the player.
          </Typography>
          <CodeSection
            codeName="OnSubmitQuestion.cs"
            codeText={onSubmitQuestion}
            codeLang="csharp"
          />
          <Typography variant="h6">
            In order to send the game state to the JavaScript front-end for
            processing, the function &#x201C;sendGameStateToJS&#x201D;
            transforms the GameState into a JSON string representation and calls
            on the SendToJS bridge between Unity and the front-end.
          </Typography>
          <CodeSection
            codeName="sendGameStateToJS.cs"
            codeText={sendGameStateToJS}
            codeLang="csharp"
          />
          <Typography variant="h6">
            The bridge is written in &#x201C;jslib&#x201D; which stands for
            JavaScript Library and is a subset of the JavaScript language that
            Unity can expose to the rest of the C# code. Functions in jslib can
            access the browser window of a WebGL-enabled application and make
            calls to function in the webpage. It is through this ability that
            the &#x201C;SendToJS&#x201D; is able to call the
            &#x201C;processGameStateFromUnity&#x201D; function in the webpage
            front-end.
          </Typography>
          <CodeSection
            codeName="SendToJS.jslib"
            codeText={sendToJS}
            codeLang="javascript"
          />
          <Typography variant="h6">
            Once the game state along with the question has been sent to the
            Next.js front-end, the request needs to be processed, sent to the
            Django back end, and then the text answer needs to be sent from the
            webpage front-end back into Unity. In order for Unity to receive the
            answer, the game Controller exposes the callback
            &#x201C;onAnswerFromJS&#x28;string answer&#x29;&#x201D; which as the
            name suggests takes care of receiving the answer and instructing the
            Dialog Popup to update the list of questions and answers to include
            the new answer.
          </Typography>
          <CodeSection
            codeName="receiveAnswerFromJS.cs"
            codeText={receiveAnswerFromJS}
            codeLang="csharp"
          />
        </Stack>
      </Box>
    </>
  );
}

function SimulatedEnviromentSection(): JSX.Element {
  return (
    <Box component="section" id="about_simulation-3d-modeling">
      <Stack spacing={8}>
        <Typography
          variant="h2"
          py={1}
          sx={{ textAlign: "center", fontWeight: "medium" }}
        >
          3D simulation
        </Typography>
        <Stack spacing={8}>
          <Modeling3dEnviroment />
          <AddingGameControls />
          <SimuationToBrowserUnitySide />
        </Stack>
      </Stack>
    </Box>
  );
}

export default SimulatedEnviromentSection;
