import { Link } from 'react-router-dom';
import './index.css';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Nav = () => {
    const [dropdown, setDropdown] = useState(false); 

    const handleDropdown = () => {
        if (!dropdown) setDropdown(true)
        else setDropdown(false);
    }

    return (

        <header >
            <Container>
                <Row>
                    <Col xs={8} >
                        <h1 className="py-3">
                            <Link className="title" to="/portfolio">
                                Ray Takemura    
                            </Link>
                        </h1>
                    </Col>
                    
                    <Col xs={4} >
                        <nav >
                            
                            <ul className="p-3 nav-elements d-flex flex-row justify-content-around">
                                <li className="py-3" id="nav-el">
                                    <Link to='/portfolio' className="nav-el">About me</Link>
                                </li>
                                <li className="py-3" id="nav-el">
                                    <Link to='/work' className="nav-el">Work</Link>
                                </li>
                                <li className="py-3" id="nav-el">
                                    <Link to='/resume' className="nav-el">Resume</Link>
                                </li>
                            </ul>

                            <div className="dropdown py-4 d-flex justify-content-center ">
                                <div>
                                    <i onClick={handleDropdown} className="fas fa-bars px-3"></i>
                                    {
                                        dropdown ? 
                                        <div className="dropdown-content d-flex flex-column">
                                            <Link to="/portfolio">About me</Link>
                                            <Link to="/work">Work</Link>
                                            <Link to='/resume' >Resume</Link>
                                        </div>
                                        :
                                        null
                                    }
                                </div>
                            </div>
                        </nav>
                    </Col>
                </Row>
                    
                
                {console.log(dropdown)}
            </Container>
            
        </header>
    )
}

export default Nav;