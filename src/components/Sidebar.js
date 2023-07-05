import React from "react";
import { Link } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  sidebar: {
    borderRight: `1px solid black`,
    [theme.breakpoints.up("lg")]: {
      marginLeft: "5rem",
    },
    marginLeft: "3rem",
    display: "block",
  },
  link: {
    textDecoration: "none",
    display: "block",
    paddingLeft: "10px",
    borderLeft: "3px solid transparent",
    transition: "border-color 0.2s ease",
  },
  activeLink: {
    borderLeft: "3px solid black",
  },
}));

const menuItems = [
  { label: "Royal University of Phnom Penh", to: "/rupp" },
  { label: "University of Puthisastra", to: "/uop"},
  { label: "The University of Cambodia", to: "/tuof"},
  { label: "Institute of Technology of Cambodia", to: "/itc"},
  { label: "Paññasastra University of Cambodia",to: "/puc"},
  { label: "Royal Academy of Cambodia", to: "/rac"},
  { label: "Paragon International University", to: "/piu"},
  { label: "Royal University of Agriculture", to: "/rua"},
  { label: "Cambodian Mekong University", to: "/cmu"},
  { label: "Royal University of Law and Economics", to: "/rule" },
  { label: "Build Bright University", to: "/bbu"},
  { label: "International University", to: "/iu"},
  { label: "National University of Management", to: "/num"},
  { label: "Norton University", to: "/nu"},
  { label: "Université des Sciences de la Santé", to: "/udsdls"},
  { label: "Western University Cambodia", to: "/wuc"},
  { label: "American University of Phnom Penh", to: "/aupp"},
  { label: "Royal University of Fine Arts", to: "/rufa"},
  { label: "National University of Battambang", to: "/nub"},
  { label: "École Royale d'Administration", to: "/erd" },
  { label: "Asian Euro University", to: "/aeu"},
  { label: "Cambodia University for Specialties", to: "/cufs" },
  { label: "National Polytechnic Institute of Cambodia", to: "/npic" },
  { label: "Svay Rieng University", to: "/sru" },
  { label: "CamEd Business School", to: "/cbs" },
  { label: "Economics and Finance Institute",to: "/eafi" },
  { label: "University of Management and Economics", to: "/ume" },
  { label: "Chea Sim University of Kamchaymear", to: "/csuk" },
  { label: "IIC University of Technology", to: "/iut" },
  { label: "Angkor University", to: "/angu"},
  { label: "Phnom Penh International University", to: "/ppiu"},
  { label: "Life University, Cambodia", to: "/luc" },
  { label: "University of Southeast Asia", to: "/usa" },
  { label: "Mean Chey University", to: "/mcu" },
  { label: "Vanda Institute", to: "/vi" },
  { label: "East Asian Management University", to: "/eamu" },
  { label: "National Institute of Education", to: "/nie" },
  { label: "Human Resources University", to: "/hru" },
  { label: "Panha Chiet University", to: "/pcu" },
  { label: "Dewey International University", to: "/diu" },
  { label: "National Institute of Business", to: "/nib" },
  { label: "Preah Sihanouk Raja Buddhist University", to: "/psrbu" },
  { label: "Beltei International University", to: "/biu" },
  { label: "Khemarak University", to: "/ku" },
  { label: "Angkor Khemara University", to: "/aku" },
  { label: "Limkokwing University of Creative Technology, Cambodia", to: "/luctc" },
  { label: "Chenla University", to: "/cu" },
  { label: "Prek Leap National College of Agriculture", to: "/plnca" },
  { label: "Kampong Cham National School Agriculture", to: "/kcnsa" },
];

const Sidebar = () => {
  const classes = useStyles();
  const isMediumScreen = useMediaQuery("(max-width:980px)");

  return (
    <Box className={classes.sidebar} style={{ display: isMediumScreen ? "none" : "block" }}>
      <Typography variant="h5" gutterBottom>
        University
      </Typography>
      {menuItems.map((item) => (
        <Link
          to={item.to}
          key={item.label}
          style={{ textDecoration: "none", marginBottom: "1rem" }}
          activeClassName={classes.activeLink}
          className={classes.link}
        >
          <Typography variant="body1" gutterBottom style={{ paddingLeft: "10px" }}>
            {item.label}
          </Typography>
        </Link>
      ))}
      <Box>
        
      </Box>
    </Box>
  );
};

export default Sidebar;
