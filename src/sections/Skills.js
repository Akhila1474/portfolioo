import React from "react";
import { Box, Typography, Grid, Card, CardContent, LinearProgress, Avatar } from "@mui/material";
import { motion } from "framer-motion";
import { skills } from "../assets/info";

const Skills = () => {
  return (
    <Box 
      id="skills" 
      sx={{ 
        padding: "60px", 
        background: "linear-gradient(135deg, #1b1b2f, #2a2a3d)", 
        color: "white", 
        textAlign: "center" 
      }}
    >
      <Typography 
        variant="h4" 
        gutterBottom 
        sx={{ fontWeight: "bold", letterSpacing: 1, textTransform: "uppercase" }}
      >
         Skills & Expertise 
      </Typography>
      <br/>
      
      <Grid container spacing={4} justifyContent="center">
        {skills.map((category, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div 
              transition={{ duration: 0.3 }}
            >
              <Card 
                sx={{
                  bgcolor: "rgba(40, 44, 52, 0.85)", 
                  color: "white", 
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.4)", 
                  padding: "20px",
                  backdropFilter: "blur(12px)", 
                  borderRadius: "15px",
                  textAlign: "left"
                }}
              >
                <CardContent>
                  <Box display="flex" alignItems="center" gap={1} sx={{ mb: 2 }}>
                    {category.icon}
                    <Typography variant="h6" fontWeight="bold" sx={{ flexGrow: 1 }}>
                      {category.category}
                    </Typography>
                  </Box>

                  {category.skills.map((skill, idx) => (
                    <Box key={idx} sx={{ textAlign: "left", mt: 2 }}>
                      <Box display="flex" alignItems="center" gap={1}>
                        <Avatar 
                          src={`/images/${skill.name.toLowerCase()}.png`} 
                          alt={skill.name} 
                          sx={{ width: 24, height: 24, bgcolor: "transparent" }} 
                        />
                        <Typography variant="body1" sx={{ fontWeight: "bold", fontSize: "14px" }}>
                          {skill.name}
                        </Typography>
                      </Box>

                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1 }}
                      >
                        <LinearProgress 
                          variant="determinate" 
                          value={skill.level} 
                          sx={{ 
                            height: 10, 
                            borderRadius: 5, 
                            background: "rgba(255,255,255,0.1)",
                            "& .MuiLinearProgress-bar": { 
                              background: "linear-gradient(90deg, #ff8a00, #e52e71)"
                            }
                          }} 
                        />
                      </motion.div>
                    </Box>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
