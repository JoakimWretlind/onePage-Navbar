import { useRef } from "react"
import { Section, Header } from "../sharedStyling"

const About = () => {
    const aboutRef = useRef(null);

    return (
        <Section id="about" ref={aboutRef}>
            <Header>about</Header>
        </Section>
    )
}

export default About