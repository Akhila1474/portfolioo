import React, { useState } from "react";
import { Box, Typography, Card, CardContent, Dialog, DialogTitle, DialogContent, Button } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { motion } from "framer-motion";
import { educationData } from "../assets/info";

const Education = () => {
  const [open, setOpen] = useState(false);
  const [selectedEducation, setSelectedEducation] = useState(null);

  const handleOpen = (edu) => {
    setSelectedEducation(edu);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedEducation(null);
  };

  return (
    <Box id="education" sx={{ padding: "50px", background: "#1e1e2f", color: "white", textAlign: "center" }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: "bold", letterSpacing: 1, textTransform: "uppercase", fontSize: "2.5rem", mb: 4 }}
      >
        Education
      </Typography>
      <Timeline position="alternate">
        {educationData.map((edu, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <SchoolIcon />
              </TimelineDot>
              {index !== educationData.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <motion.div whileTap={{ scale: 0.98 }} onClick={() => handleOpen(edu)}>
                <Card
                  sx={{
                    bgcolor: "#282c34",
                    color: "white",
                    textAlign: "left",
                    boxShadow: 10,
                    padding: "20px",
                    cursor: "pointer",
                    backdropFilter: "blur(10px)",
                    borderRadius: "10px",
                    
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold" sx={{ fontSize: "1.2rem" }}>
                      {edu.institution}
                    </Typography>
                    <Typography variant="body2" color="gray" sx={{ fontSize: "1rem" }}>
                      {edu.duration}
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 1, fontSize: "1.1rem" }}>
                      {edu.degree}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1, fontWeight: "bold", color: "#ffcc00", fontSize: "1rem" }}>
                      CGPA: {edu.cgpa}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 2, color: "lightgray", fontStyle: "italic" }}>
                      Click for more details
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        
          <DialogTitle sx={{ fontWeight: "bold", background: "#282c34",fontSize: "1.5rem",color:"white" }}>{selectedEducation?.institution}</DialogTitle>
          <DialogContent sx={{ padding: "30px",  }}>
            
            <Typography  sx={{ mt: 2, }}>
              <b>Course</b> : {selectedEducation?.degree} 
            </Typography>
            <Typography >
              <b>Duration</b> : {selectedEducation?.duration} 
            </Typography>
            <Typography >
              <b>CGPA:</b> {selectedEducation?.cgpa}
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "1rem", }}>
              {selectedEducation?.description}
            </Typography>
            <Button
              onClick={handleClose}
              sx={{
                mt: 3,
                color: "#1976d2",
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: 1,
                fontSize: "1rem",
              }}
            >
              Close
            </Button>
          </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Education;
