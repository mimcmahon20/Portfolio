import { motion } from "framer-motion";

const animations = {
  initial: { x: window.innerWidth, y: 0  },
  animate: { x: 0 },
  exit: { x: -window.innerWidth },
  transitionEnd: {
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const TransitionToProject = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: .3, ease: "easeIn" }}
      style={{overflow: 'hidden'}}
    >
      {children}
    </motion.div>
  );
};

export default TransitionToProject;