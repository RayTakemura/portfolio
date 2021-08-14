import './index.css'
import github from '../../assets/icons/github.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <motion.footer className=" d-flex justify-content-between"
            initial={{y: 250 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 30 }}
        >
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
            
        </motion.footer>
    )
}

export default Footer;