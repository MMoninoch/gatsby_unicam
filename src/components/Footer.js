import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/";
import logoImage from "../images/logo2.png";

const useStyles = makeStyles((theme) => ({
  grid: {
    marginTop: 100,
    width: "100%",
    marginLeft: -8,
    marginRight: -8,
    marginBottom: -8,
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Box
      sx={{ bgcolor: "#311c71", color: "#FFF", py: 6, pr: 2 }}
      className={classes.grid}
      component="footer"
    >
      <Container>
        <Grid container spacing={8}>
          <Grid item xs={6} sm={6} md={4}>
            <img src={logoImage} alt="Logo" height="80" />
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <Typography variant="subtitle1" gutterBottom>
              Home
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              University
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Department
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              About us
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
                Contact us 
            </Typography>
            <Typography variant="body1" gutterBottom>
                - unicam@gmail.com
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
