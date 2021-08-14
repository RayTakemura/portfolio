import { motion } from "framer-motion";
import ResumePreview from "../components/ResumePreview";

const Resume = () => {
  return (
    <motion.div
      initial={{ x: 1500 }}
      animate={{ x: 0 }}
      transition={{ delay: 1 , type: 'spring', stiffness: 50 }}
      exit={{ x: '-100vw', transition: { ease: 'easeInOut'}}}
    >
      <div className="my-5">
        <ResumePreview />
      </div>
    </motion.div>
  );
}

export default Resume;