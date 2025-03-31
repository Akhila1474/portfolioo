import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import { hobbies } from "../assets/info";


const Hobbies = () => {
  return (
    <Box
      id="hobbies"
      sx={{
        padding: "50px",
        background: "linear-gradient(135deg, #1e1e2f, #2a2a3c)",
        color: "white",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", letterSpacing: 1, textTransform: "uppercase", mb: 4 }}>
        My Hobbies
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
        {hobbies.map((hobby, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card sx={{ 
              background: hobby.bg, 
              color: "white", 
              width: 260, 
              height: 260, 
              display: "flex", 
              flexDirection: "column", 
              justifyContent: "center", 
              alignItems: "center", 
              textAlign: "center", 
              boxShadow: 10, 
              borderRadius: "20px", 
              cursor: "pointer", 
              transition: "0.3s ease-in-out", 
              '&:hover': { transform: "translateY(-5px)", boxShadow: "15px 15px 30px rgba(0,0,0,0.3)" }
            }}>
              <CardContent>
                <Box sx={{ fontSize: 50, mb: 2 }}>{hobby.icon}</Box>
                <Typography variant="h6" fontWeight="bold">{hobby.title}</Typography>
                <Typography variant="body2" sx={{ mt: 1, fontSize: "14px", opacity: 0.9 }}>{hobby.description}</Typography>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default Hobbies;
