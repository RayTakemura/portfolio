import {Container, Row, Col} from 'react-bootstrap';

const AboutMe = () => {

    return (
        <main>
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
                            I'm a full-stack web developer with excellent problem-solving skills; 
                            I have strong attention to detail with the ability to deliver appropriate 
                            and efficient solutions. My critical thinking ability and hungriness 
                            to solve problems have allowed my teams to finish our projects 
                            quickly and elegantly. The finished projects have user-friendly 
                            UI with many use-cases tested. Learning new skills and library is 
                            exciting and I am ready to learn more every day.
                        </p>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

export default AboutMe;