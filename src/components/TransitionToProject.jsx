import { motion } from "framer-motion";

const animations = {
  initial: { scale: 10  },
  animate: { scale: 1  },
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
      transition={{ duration: .25, ease: "easeInOut" }}
      
      style={{overflow: 'hidden'}}
    >
      {children}
    </motion.div>
  );
};

export default TransitionToProject;