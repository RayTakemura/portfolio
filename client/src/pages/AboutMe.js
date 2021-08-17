import {Container, Row, Col} from 'react-bootstrap';
import { motion } from 'framer-motion';

const AboutMe = () => {

    return (
        <motion.main
            initial={{ x: 1500 }}
            animate={{ x: 0 }}
            transition={{ delay: 1 , type: 'spring', stiffness: 50 }}
            exit={{ x: '-100vw', transition: { ease: 'easeInOut'}}}
        >
            <Container >
                <Row className="xy-align p-5 m-3 abt-me">
                    <Col lg={4}>
                        <img 
                            src="https://media-exp1.licdn.com/dms/image/C5603AQHP8dHaBIobfg/profile-displayphoto-shrink_800_800/0/1624494725959?e=1633564800&v=beta&t=aZJ3oE0mYy_rlIaLijWgFncqgWR23GrQq2ylZN7tYtM"
                            alt="ray"
                            className="pfp"
                        />
                    </Col>
                    <Col lg={8}>
                        <p className="prof-doc">
                        I'm a full-stack web developer with excellent problem-solving skills. I have a strong attention to detail with the ability to deliver appropriate and efficient solutions. My critical thinking ability and hunger to solve problems have allowed my teams to finish our projects quickly and elegantly. The finished projects have user-friendly UI with many use cases tested. As shown in my field of study, I enjoy learning and growing. I am eager to learn more every day.
                        </p>
                    </Col>
                </Row>
            </Container>
        </motion.main>
    )
}

export default AboutMe;