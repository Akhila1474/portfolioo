import React, { useState } from "react";
import { Grid, Card, CardMedia, CardContent, Typography, Button, Box,Collapse } from "@mui/material";
import { motion } from "framer-motion";
import { projects } from "../assets/info";

const Projects = () => {
  const [expanded, setExpanded] = useState(null);

  const handleExpandClick = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <Box id="projects" sx={{ padding: "50px", textAlign: "center", background: "#1e1e2f", color: "white" }}>
      <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: "bold", letterSpacing: 1, textTransform: "uppercase", fontSize: "2.5rem", mb: 4 }}
            >
              Projects
            </Typography>
      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <motion.div whileHover={{ scale: 1.01 }}>
              <Card sx={{ bgcolor: "#282c34", color: "white", maxWidth: 350, margin: "auto" }}>
                <CardMedia component="img" height="240" image={project.image} alt={project.title} />
                <CardContent>
                  <Typography variant="h6">{project.title}</Typography>
                  <Typography variant="body2" color="gray">{project.desc}</Typography>
                  <Collapse in={expanded === index} timeout="auto" unmountOnExit>
                    <Typography variant="body2" sx={{ mt: 1 }}>{project.description}</Typography>
                    <Typography variant="body2" sx={{ mt: 1, fontWeight: "bold" }}>Tech Stack: {project.techStack}</Typography>
                  </Collapse>
                  <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
                    <Button variant="outlined" color="primary" onClick={() => handleExpandClick(index)}>
                      {expanded === index ? "Less" : "More"}
                    </Button>
                    <Button  variant="contained" color="primary" href={project.github} target="_blank">GitHub</Button>
                    <Button variant="contained" color="secondary" href={project.demo} target="_blank">Live Demo</Button>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
