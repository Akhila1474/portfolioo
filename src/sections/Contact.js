import React from "react";
import { Box, Typography, Grid, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import {contactInfo} from "../assets/info";

const Contacts = () => {
  return (
    <Box
    id="contact"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0f172a, #1e293b)",
        color: "white",
        textAlign: "center",
        p: 10,
      }}
    >
      <Box sx={{ maxWidth: "600px", width: "100%" }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: "2px",
            mb: 3,
          }}
        >
          Get in Touch
        </Typography>

        <Grid container spacing={2} justifyContent="center">
          {contactInfo.map((contact, index) => (
            <Grid item key={index}>
              <motion.a
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ textDecoration: "none" }}
              >
                <Box
                  sx={{
                    width: "60px",
                    height: "60px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                    transition: "0.3s",
                    "&:hover": {
                      background: "rgba(0, 212, 255, 0.2)",
                      boxShadow: "0px 0px 20px rgba(0, 212, 255, 0.6)",
                    },
                  }}
                >
                  <IconButton sx={{ color: "#00d4ff", fontSize: "1.5rem" }}>{contact.icon}</IconButton>
                </Box>
              </motion.a>
            </Grid>
          ))}
        </Grid>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            padding: "20px",
            textAlign: "center",
            marginTop: "30px",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              mb: 2,
              color: "#00d4ff",
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            Thank You!
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, fontSize: "1rem", color: "#e2e8f0" }}>
            I appreciate your time visiting my page. Let’s stay connected and create something amazing!
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontStyle: "italic", color: "#94a3b8", fontSize: "0.9rem" }}
          >
            "Great things happen when we connect and collaborate!"
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Contacts;
