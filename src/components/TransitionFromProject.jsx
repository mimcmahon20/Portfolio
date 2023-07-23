import { motion } from "framer-motion";

const animations = {
  initial: { opacity: 0, y: 2000  },
  animate: { opacity: 1, y: 0  },
  exit: { opacity: 0, x: 500  },
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
      transition={{ duration: .5, ease: "easeOut" }}
      
      style={{overflow: 'hidden'}}
    >
      {children}
    </motion.div>
  );
};

export default TransitionFromProject;