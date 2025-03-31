import React from "react";
import { Card, CardContent, Typography, Box, Grid } from "@mui/material";
import { motion } from "framer-motion";
import WorkIcon from "@mui/icons-material/Work";
import ServiceNowImage from "../assets/experience.png"; 

const WorkExperience = () => {
  return (
    <Box id="work-experience" sx={{ padding: "50px", background: "linear-gradient(135deg, #1e1e2f, #2a2a3c)", color: "white" }}>
      <Typography 
              variant="h4" 
              gutterBottom 
              sx={{textAlign:"center",fontWeight: "bold", letterSpacing: 1, textTransform: "uppercase" }}
            >
              Work Experience
            </Typography>
      
      <br />
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6}>
          <motion.div>
            <Card sx={{ bgcolor: "#282c34", color: "white", maxWidth: 600, margin: "auto", boxShadow: 5 }}>
              <CardContent>
                <Box display="flex" gap={2}>
                  <WorkIcon fontSize="large" color="primary" />
                  <Typography variant="h5" fontWeight="bold">
                    ServiceNow (Admin)
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ mt: 2 }}>
                  As a ServiceNow Administrator, you worked on automating workflows and improving incident management processes:
                </Typography>
                <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold" }}>
                  🔹 Automated Workflow for Service Catalog Items
                </Typography>
                <Typography variant="body1">
                  - Designed a streamlined ordering process with managerial approval and real-time status notifications.<br />
                  - Ensured efficiency by automating task assignments and tracking order progress.
                </Typography>
                <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold" }}>
                  🔹 Priority 1 (P1) Incident Management
                </Typography>
                <Typography variant="body1">
                  - Implemented automated manager assignment to handle critical incidents swiftly.<br />
                  - Integrated Service Level Management (SLM) to ensure timely resolutions and compliance.
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
        
        <Grid item xs={12} md={6} display="flex" justifyContent="center">
          <motion.img 
            src={ServiceNowImage} 
            alt="ServiceNow Work" 
            style={{ width: "80%", maxWidth: "600px", borderRadius: "10px" }}
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default WorkExperience;
