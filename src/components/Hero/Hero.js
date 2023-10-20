import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi there! <br />
        I'm Asad
      </SectionTitle>
      <SectionText>
        Software Developer with good understanding of complex, up-to-date
        development technologies and considerations.
      </SectionText>
      <Button
        onclick={() => (window.location = "https://github.com/AsadullohR")}
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
