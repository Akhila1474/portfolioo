import React from "react";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";

const Navbar = () => {

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 20; 
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
        }
      };

      
  return (
    <AppBar position="fixed" sx={{ background: "#1e1e2f" }}>
      <Toolbar>
        <Typography onClick={() => handleScroll("home")} variant="h6" sx={{ flexGrow: 1,cursor:"pointer",color:"yellow" }}>
          <b>Akhila's Portfolio</b>
        </Typography>
        <Box>
        <Button color="inherit" onClick={() => handleScroll("education")}>
          Education
        </Button>
        <Button color="inherit" onClick={() => handleScroll("skills")}>
          Skills
        </Button>
        <Button color="inherit" onClick={() => handleScroll("projects")}>
          Projects
        </Button>
        <Button color="inherit" onClick={() => handleScroll("contact")}>
          Contact
        </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
