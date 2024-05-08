import React from "react";
import { motion } from "framer-motion";

const ToggleButton = ({ setOpen }) => {
  return (
    <button
      onClick={() => setOpen((prev) => !prev)}
      className="z-[999] fixed w-12 h-12 top-7 left-7 bg-transparent border-none cursor-pointer flex items-center justify-center"
    >
      <svg width="30" height="30" viewBox="0 0 30 30">
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 5 7 L 25 7" },
            open: { d: "M 5 23 L 25 7" },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          d="M 5 15 L 25 15"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 5 23 L 25 23" },
            open: { d: "M 5 7 L 25 23" },
          }}
        />
      </svg>
    </button>
  );
};

export default ToggleButton;
