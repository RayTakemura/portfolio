import './index.css'
import github from '../../assets/images/icons/github.svg';
import linkedin from '../../assets/images/icons/linkedin.svg';

const Footer = () => {
    return (
        <footer className=" d-flex justify-content-between">
            <div>
                <a href="https://www.linkedin.com/in/ray-takemura-57156b18b/">
                    <img style={{width:"28px"}} className="linkedin" src={linkedin} alt="linkedin"/>
                </a>
                <a href="https://github.com/RayTakemura">
                    <img style={{width:"28px"}} className="github" src={github} alt="github"/>
                </a>
                
            </div>
            
            <div className="px-2">
                <span className="align-middle">&copy; Ray Takemura</span>
            </div>
            
        </footer>
    )
}

export default Footer;