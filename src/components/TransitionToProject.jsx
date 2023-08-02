import { motion } from "framer-motion";

const animations = {
  initial: { y: 0, opacity: 0, scale: 0  },
  animate: { y: 0, opacity: 1, scale: 1 },
  exit: { opacity: 0 },
  transitionEnd: {
    display: "none",
  },
};

const TransitionToProject = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: .5, ease: "easeOut" }}
      
      style={{overflow: 'hidden'}}
    >
      {children}
    </motion.div>
  );
};

export default TransitionToProject;