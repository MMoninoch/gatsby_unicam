import React from "react";
import { Link } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Divider } from "@mui/material";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Hidden,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import Menu from "@material-ui/icons/Menu";
import Logo from "../images/logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
    [theme.breakpoints.up("xxlg")]: {
      position: "sticky",
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: 90,
      paddingRight: 90,
    },
    backgroundColor: "#FFFFFF",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    color: "black",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  item: {
    paddingRight: 70,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

const drawerWidth = 240;

const Navbar = () => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { label: "Home", to: "/" },
    { label: "University", to: "/university" },
    { label: "Department", to: "/department" },
    { label: "About us", to: "/about" },
  ];

  const uniItems = [
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

  const drawer = (
    <div>
      <List>
        {menuItems.map((item) => (
          <ListItem button key={item.label} component={Link} to={item.to}>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  const unidrawer = (
    <div>
      <Box
        component="nav"
        className={classes.drawer}
        aria-label="sidebar"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Divider />
        <List>
          {uniItems.map((item) => (
            <Link to={item.to} key={item.label} style={{ textDecoration: "none", display: "block" }}>
              <ListItem button>
                <ListItemText primary={item.label} />
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider className={classes.divider} />
        <Box p={2}></Box>
      </Box>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/">
              <img src={Logo} alt="Logo" height="60" />
            </Link>
          </Typography>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
          <Hidden smDown>
            <div className={classes.item}>
              {menuItems.map((item) => (
                <Button
                  color="black"
                  key={item.label}
                  component={Link}
                  to={item.to}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </Hidden>
          <Button
            style={{
              backgroundColor: "#4527a0",
              color: "#FFF",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
            size="large"
            component={Link}
            to="/register"
          >
            Register
          </Button>
        </Toolbar>
      </AppBar>
      <nav>
        <Hidden mdUp implementation="css">
          <Drawer
            variant="temporary"
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
            {unidrawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
};

export default Navbar;
