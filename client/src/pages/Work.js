import WorkCards from "../components/WorkCards"
import { motion } from "framer-motion";


const Work = () => {
    return(

        <motion.main
        initial={{ x: 2000 }}
        animate={{ x: 0 }}
        transition={{ delay: 1 , type: 'spring', stiffness: 50 }}
        exit={{ x: '-100vw', transition: { ease: 'easeInOut'}}}
    >
            <div className="card-container">
                <WorkCards/>
            </div>
        </motion.main>

        
    );
}

export default Work;