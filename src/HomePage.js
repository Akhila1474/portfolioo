import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const HomePage = () => {
  const fullText = "Akhila Kamandla";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1)); 
        index++;
      } else {
        clearInterval(interval); 
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
     id="home"
      sx={{
        position: "relative",
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        background: "linear-gradient(135deg, #1e1e2f, #2a2d3e)",
        overflow: "hidden",
        color: "white",
        paddingTop: "20vh",
      }}
    >
      <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <Typography variant="h2" gutterBottom>
          Hi, I'm <b style={{ color: "yellow" }}>{typedText}</b>
          <p style={{ fontSize: "18px", color: "white" }}>
            Software Developer | Problem Solver | MERN & Java Full-Stack Enthusiast
          </p>
        </Typography>
        <br />
        <Typography maxWidth="1200px" variant="h6" color="gray">
          Computer Science Engineering student at RGUKT-B with a strong foundation in Data Structures and Algorithms (DSA). Passionate about problem-solving and software development, with hands-on experience in projects like Bridal Glam, Library Management System, and News App. Proficient in core subjects like Operating Systems, Object-Oriented Programming, Database Management Systems, and Data Structures.
        </Typography>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
        <br />
        <a
          download="akhila.pdf"
          href="/akhila_kamandla.pdf"
          style={{
            display: "inline-block",
            marginTop: "16px",
            backgroundColor: "#1976d2",
            color: "white",
            padding: "12px 32px",
            borderRadius: "4px",
            textDecoration: "none",
            fontSize: "16px",
            fontWeight: "bold",
            textAlign: "center",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#1565c0")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#1976d2")}
        >
          Download Resume
        </a>
      </motion.div>
    </Box>
  );
};

export default HomePage;
