import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  mar: {
    [theme.breakpoints.up("lg")]: {
      fontSize: 20,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 100,
    },
    marginTop: 170,
    marginBottom: 30,
  },
  bold: {
    fontWeight: 500,
    color: "#4527a0",
    "&:hover": {
      color: "#EB812D",
    },
  },
}));

const HeroSection = () => {
  const classes = useStyles();
  return (
    <Container>
      <Box>
        <Typography variant="h2" className={classes.mar} gutterBottom>
          Welcome to <span className={classes.bold}>Cambodia</span> Universities
          Search
        </Typography>
        <Typography variant="h6" gutterBottom>
          Picking the top universities in Phnom Penh among 100+ options with
          ease.
        </Typography>
        <br />
        <br />
        <Rating
          name="half-rating-read"
          defaultValue={4.5}
          precision={0.5}
          size="large"
          readOnly
          gutterBottom
        />
        <br />
        <Box display="flex" flexDirection="column">
          <Typography variant="body1">
            "Our community of thousands of students is a testament to the value
            and success of our educational site.
          </Typography>
          <Typography variant="body1">
            Join us and become part of a supportive community that will help you
            achieve your goals."
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;
