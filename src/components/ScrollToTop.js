import React, { useState, useEffect } from "react";
import { Fab, Tooltip } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { motion } from "framer-motion";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
      transition={{ duration: 0.3 }}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1000,
        display: visible ? "block" : "none", 
      }}
    >
      <Tooltip title="Back to Top" arrow>
        <Fab
          onClick={scrollToTop}
          color="primary"
          size="medium"
          sx={{
            background: "rgba(0, 212, 255, 0.7)",
            backdropFilter: "blur(10px)",
            boxShadow: "0px 4px 15px rgba(0, 212, 255, 0.5)",
            "&:hover": {
              background: "rgba(0, 212, 255, 1)",
            },
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Tooltip>
    </motion.div>
  );
};

export default ScrollToTop;
