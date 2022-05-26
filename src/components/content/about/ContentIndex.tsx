import { Box, CardContent, Card, Container } from "@mui/material";
import IndexLink from "./base/IndexLink";
import Subindex from "./base/Subindex";

function ContentIndex(): JSX.Element {
  return (
    <Box style={{ float: "left" }}>
      <Container maxWidth="sm">
        <Card>
          <CardContent>
            <Subindex>
              <IndexLink href="#about_tldr" text="TLDR;" />
              <IndexLink href="#about_motivation" text="Motivation" />
              <IndexLink
                href="#about_simulation-3d-modeling"
                text="3D simulation"
              >
                <Subindex>
                  <IndexLink
                    href="#about_modeling-3d-enviroment"
                    text="Modeling 3D enviroment in Blender"
                  />
                  <IndexLink
                    href="#about_adding-game-controls"
                    text="Adding game controls in Unity"
                  />
                  <IndexLink
                    href="#about_sim-to-browser-unity"
                    text="Bridging simulation to browser (Unity-side)"
                  />
                </Subindex>
              </IndexLink>
              <IndexLink
                href="#about_client-side"
                text="Client-side integration"
              >
                <Subindex>
                  <IndexLink
                    href="#about_loading-unity-script"
                    text="Loading Unity Script"
                  />
                  <IndexLink
                    href="#about_sim-to-browser-js"
                    text="Bridging simulation to browser (browser-side)"
                  />
                  <IndexLink
                    href="#about_answer-sim-question"
                    text="Answer simulation question"
                  />
                </Subindex>
              </IndexLink>
              <IndexLink href="#about_server-side" text="Server-side API">
                <Subindex>
                  <IndexLink
                    href="#about_req-handling"
                    text="Request handling"
                  />
                </Subindex>
              </IndexLink>
              <IndexLink
                href="#about_machine-learning"
                text="Machine Learning"
              >
                <Subindex>
                  <IndexLink href="#about_ml-data" text="Data" />
                  <IndexLink href="#about_ml-training" text="Training" />
                  <IndexLink href="#about_ml-results" text="Results" />
                </Subindex>
              </IndexLink>
              <IndexLink href="#about_references" text="References" />
              <IndexLink href="#about_authors" text="Authors">
                <Subindex>
                  <IndexLink
                    href="#about_author-frederick-roman"
                    text="Frederick Roman"
                  />
                  <IndexLink
                    href="#about_author-homero-roman"
                    text="Homero Roman"
                  />
                </Subindex>
              </IndexLink>
            </Subindex>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default ContentIndex;
