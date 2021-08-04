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
                            <Link className="title" to="/">
                                Ray Takemura    
                            </Link>
                        </h1>
                    </Col>
                    
                    <Col xs={4} >
                        <nav >
                            
                            <ul className="p-3 nav-elements d-flex flex-row justify-content-around">
                                <li className="py-3" id="nav-el">
                                    About me
                                </li>
                                <li className="py-3" id="nav-el">
                                    Work
                                </li>
                                <li className="py-3" id="nav-el">
                                    Resume
                                </li>
                            </ul>

                            <div className="dropdown py-4 d-flex justify-content-center ">
                                <div>
                                    <i onClick={handleDropdown} className="fas fa-bars px-3"></i>
                                    {
                                        dropdown ? 
                                        <div className="dropdown-content d-flex flex-column">
                                            <Link to="/">About me</Link>
                                            <span>hi</span>
                                            <span>hi2</span>
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