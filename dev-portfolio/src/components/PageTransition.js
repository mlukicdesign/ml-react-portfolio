// PageTransition.js
import React from "react";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, },
  animate: { opacity: 1, transistion: { duration: 2 } },
  exit: { opacity: 0 },
};

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
