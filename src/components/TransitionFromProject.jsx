import { motion } from "framer-motion";

const animations = {
  initial: { opacity: 0,  },
  animate: { opacity: 1,  },
  exit: { opacity: 0  },
  transitionEnd: {
    display: "none",
  },
};

const TransitionFromProject = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: .75, ease: "easeOut" }}
      
      style={{overflow: 'hidden'}}
    >
      {children}
    </motion.div>
  );
};

export default TransitionFromProject;