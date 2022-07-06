import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <motion.main
      initial={{ x: 1500 }}
      animate={{ x: 0 }}
      transition={{ delay: 1, type: "spring", stiffness: 50 }}
      exit={{ x: "-100vw", transition: { ease: "easeInOut" } }}
    >
      <Container>
        <Row className="xy-align p-5 m-3 abt-me">
          <Col lg={4}>
            <img
              src={require(`../assets/images/profilePic/pfp.jpg`).default}
              alt="ray"
              className="pfp"
            />
          </Col>
          <Col lg={8}>
            <p className="prof-doc">
              I’m a full-stack web developer working on an enterprise web
              application at OpCenter, LLC. Every day, I collaborate with
              product managers and clients to re-architect the software. In
              addition, I also coach new developers and design project mock-ups
              using interface design tools, such as Figma and Draw.io.
              {/* <br />{" "}
              <br />
              My Hobby: Other coding, I love to play games. My favorite is
              Final Fantasy VII Remake, Super Smash Bros. Ultimate, and
              NieR:Automata. I can’t wait until Final Fantasy VII Rebirth comes
              out. */}
            </p>
          </Col>
        </Row>
      </Container>
    </motion.main>
  );
};

export default AboutMe;
