import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  open: { opacity: 1, height: "auto" },
  closed: { opacity: 0, height: 0 },
};

// const Accordion = ({ title, body }) => {
const Accordion = ({ name, children }) => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div style={{ marginRight: "2rem" }}>
      <h3
        role="button"
        style={{ cursor: "pointer" }}
        onClick={() => setIsToggled((prevState) => !prevState)}
      >
        {name}
      </h3>
      <AnimatePresence>
        {isToggled && (
          <motion.div
            variants={variants}
            initial="closed"
            animate="open"
            exit="closed"
            style={{ overflow: "hidden", display: "grid" }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
