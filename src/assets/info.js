import MenuBookIcon from "@mui/icons-material/MenuBook";
import CodeIcon from "@mui/icons-material/Code";
import ExploreIcon from "@mui/icons-material/Explore";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

import StorageIcon from "@mui/icons-material/Storage";
import LanguageIcon from "@mui/icons-material/Language";
import BuildIcon from "@mui/icons-material/Build";
import PsychologyIcon from "@mui/icons-material/Psychology";

import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";



export const educationData = [
  {
    institution: "Rajiv Gandhi University of Knowledge Technologies-Basar",
    duration: "2021-2025",
    degree: "Computer Science and Engineering",
    cgpa: "8.4",
    description: "Developed strong problem-solving and programming skills. Worked on multiple projects in full-stack development, cloud computing, and machine learning. Participated in hackathons and coding competitions.",
  },
  {
    institution: "Rajiv Gandhi University of Knowledge Technologies-Basar",
    duration: "2019-2021",
    degree: "Pre-University Course",
    cgpa: "8.6",
    description: "After my SSC, I pursued MPC (Mathematics, Physics, and Chemistry) in my intermediate. This helped me develop strong analytical and problem-solving skills, especially in logical reasoning and numerical concepts. It laid the foundation for my technical knowledge and prepared me for higher studies in engineering.",
  },
  {
    institution: "ZPHS Raghunathpur",
    duration: "2018-2019",
    degree: "Secondary School Education",
    cgpa: "10",
    description: "During my SSC, I learned important subjects like Mathematics, Physics, Biology, Social Studies, and Languages. These subjects helped me build a strong foundation in logical thinking, problem-solving, and communication skills. SSC played a crucial role in shaping my future academic journey.",
  },
];



export const projects = [
    {
      title: "Food Delivery App",
      desc:"An platform connecting brides with vendors for Mehendi, saree, makeup, and jewelry rentals, ensuring seamless service discovery and booking",
      description: "Bridal Glam is an exclusive online platform designed to connect brides with top-tier vendors offering services like Mehendi, saree draping, makeup, and rental jewelry. The platform allows vendors to create detailed profiles showcasing their work and providing external contact links, ensuring easy access for brides searching for the perfect services. With efficient search functionality and seamless profile management, Bridal Glam simplifies the bridal planning process, making it hassle-free and enjoyable.",
      techStack: "HTML, CSS, JavaScript",
      image: "https://cdn.dribbble.com/users/84536/screenshots/6934449/website-launch-announcement-dribbble.gif",
      github: "#",
      demo: "#"
    },
    {
      title: "Library Management System",
      desc:"A system for managing books, allowing administrators to oversee records while enabling students to search, borrow, and return books",
      description: "The Library Management System is a Java-based application designed to streamline book management for administrators and students. Administrators can efficiently manage books and student records, while students can search for books, borrow, and return them seamlessly. The system ensures smooth library operations with a structured and user-friendly interface.",
      techStack: "Java, JDBC, OOPs, MySQL",
      image: "https://pub-5d8aff725acf4e3f9f11593eeae3c846.r2.dev/production/2866/2866-1-original.jpg",
      github: "#",
      demo: "#"
    },
    {
      title: "News App",
      desc:"A real-time news application with category-based filtering and a search feature, providing users with an intuitive and personalized news experience",
      description: "The News App is a user-friendly platform that delivers real-time news from various sources. It features category-based filtering and a search option, allowing users to easily find relevant news. The app ensures a seamless and engaging news-reading experience with an intuitive interface.",
      techStack: "React.js, REST API",
      image: "https://user-images.githubusercontent.com/11162404/34581203-a09789a6-f15d-11e7-8b5e-3ef16645eeab.png",
      github: "#",
      demo: "#"
    }
  ];
  

export const hobbies = [
  {
    title: "Reading",
    icon: <MenuBookIcon fontSize="large" />, 
    description: "I enjoy reading books to gain knowledge and explore different perspectives.",
    bg: "linear-gradient(135deg, #ffcc00, #ff9900)",
  },
  {
    title: "Coding",
    icon: <CodeIcon fontSize="large" />, 
    description: "I love solving problems, building projects, and learning new technologies.",
    bg: "linear-gradient(135deg, #3498db, #2c3e50)",
  },
  {
    title: "Exploring New Technologies",
    icon: <ExploreIcon fontSize="large" />, 
    description: "I am always excited to explore and experiment with emerging tech trends.",
    bg: "linear-gradient(135deg, #ff5733, #c70039)",
  },
  {
    title: "Playing Chess",
    icon: <SportsEsportsIcon fontSize="large" />, 
    description: "Chess enhances my strategic thinking and problem-solving skills.",
    bg: "linear-gradient(135deg, #8e44ad, #5e3370)",
  },
];


export const skills = [
  { 
    category: "Programming Languages", 
    icon: <CodeIcon fontSize="large" color="primary" />, 
    skills: [{ name: "C", level: 90 }, { name: "C++", level: 70 }, { name: "Java", level: 80 }] 
  },
  { 
    category: "Web Technologies", 
    icon: <LanguageIcon fontSize="large" color="success" />, 
    skills: [{ name: "HTML", level: 90 }, { name: "CSS", level: 95 }, { name: "JavaScript", level: 80 }] 
  },
  { 
    category: "Tools & Others", 
    icon: <BuildIcon fontSize="large" color="warning" />, 
    skills: [{ name: "Canva", level: 75 }, { name: "Git", level: 85 }, { name: "GitHub", level: 85 }] 
  },
  { 
    category: "Database", 
    icon: <StorageIcon fontSize="large" color="secondary" />, 
    skills: [{ name: "MySQL", level: 80 }, { name: "MongoDB", level: 100 }] 
  },
  { 
    category: "Behavioral Skills", 
    icon: <PsychologyIcon fontSize="large" color="error" />, 
    skills: [{ name: "Self-learning", level: 90 }, { name: "Problem Solving", level: 85 }, { name: "Observation", level: 88 }, { name: "Multi-Tasking", level: 80 }] 
  },
  { 
    category: "Relevant Coursework", 
    icon: <MenuBookIcon fontSize="large" color="info" />, 
    skills: [{ name: "Operating Systems", level: 85 }, { name: "OOP", level: 90 }, { name: "DBMS", level: 88 }, { name: "DSA", level: 95 }] 
  }
];



export const contactInfo = [
  { icon: <EmailIcon />, label: "Email", link: "mailto: kamandlaakhila@gmail.com" },
  { icon: <PhoneIcon />, label: "Phone", link: "tel:+916305740216" },
  { icon: <LinkedInIcon />, label: "LinkedIn", link: "https://in.linkedin.com/in/akhila-kamandla-628581255" },
  { icon: <GitHubIcon />, label: "GitHub", link: "https://github.com/Akhila1474" },
];