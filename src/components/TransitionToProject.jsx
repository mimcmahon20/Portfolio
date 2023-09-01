import { motion } from "framer-motion";

const animations = {
  initial: { x: 0, y: 0  },
  animate: { x: 0 },
  exit: { x: 0 },
  transitionEnd: {
    transition: { duration: 0.5, ease: "easeIn" },
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