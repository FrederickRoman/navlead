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
              <IndexLink href="#about-tldr" text="TLDR;" />
              <IndexLink href="#about-tldr" text="Motivation" />
              <IndexLink
                href="#about-tldr"
                text="3D simulated enviroment reconstruction"
              >
                <Subindex>
                  <IndexLink href="#about-tldr" text="Modeling" />
                  <IndexLink href="#about-tldr" text="Interactions" />
                  <IndexLink
                    href="#about-tldr"
                    text="Compiling to run on browsers"
                  />
                </Subindex>
              </IndexLink>
              <IndexLink href="#about-tldr" text="Client-side integration">
                <Subindex>
                  <IndexLink href="#about-tldr" text="Loading Unity Script" />
                  <IndexLink
                    href="#about-tldr"
                    text="Client-Unity communication"
                  />
                  <IndexLink
                    href="#about-tldr"
                    text="Client-server communication"
                  />
                </Subindex>
              </IndexLink>
              <IndexLink href="#about-tldr" text="Server-side API">
                <Subindex>
                  <IndexLink href="#about-tldr" text="Request Handling" />
                </Subindex>
              </IndexLink>
              <IndexLink href="#about-tldr" text="Machine Learning modeling">
                <Subindex>
                  <IndexLink href="#about-tldr" text="Data" />
                  <IndexLink href="#about-tldr" text="Training" />
                  <IndexLink href="#about-tldr" text="Results" />
                </Subindex>
              </IndexLink>
              <IndexLink href="#about-tldr" text="References">
                <Subindex>
                  <IndexLink href="#about-tldr" text="Reference" />
                  <IndexLink href="#about-tldr" text="Reference" />
                </Subindex>
              </IndexLink>
              <IndexLink href="#about-tldr" text="Authors">
                <Subindex>
                  <IndexLink href="#about-tldr" text="Frederick Roman" />
                  <IndexLink href="#about-tldr" text="Homero Roman" />
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
