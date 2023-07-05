import React from "react";
import {
  Typography,
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Grid,
  Container,
} from "@mui/material";
import { makeStyles } from "@material-ui/core/";
import venti from "../images/venti.jpg";
import kazuha from "../images/kazuha.jpg";
import albedo from "../images/albedo.jpg";
import raiden from "../images/raiden.jpg";

const useStyles = makeStyles((theme) => ({
  grid: {
    marginTop: 100,
  },
}));

const Testimonials = () => {
  const classes = useStyles();
  const testimonialsData = [
    {
      id: 1,
      image: venti,
      name: "IamVenti",
      title: "RUPP Year-2",
      text: "This website has been a great help of me finding my own university to settle with",
    },
    {
      id: 2,
      image: kazuha,
      name: "lmaoKazuzha",
      title: "Setec Year-3",
      text: "See you guys at Setec, Setec for the TEAM",
    },
    {
      id: 3,
      image: albedo,
      name: "ligmaballAlbedo",
      title: "ITC Year-1",
      text: "Never have i been loving swallowing",
    },
    {
      id: 3,
      image: raiden,
      name: "slayDen",
      title: "Norton Year-3",
      text: "Can any of you help me cook",
    },
  ];

  return (
    <Container className={classes.grid}>
      <Grid container spacing={4}>
        {testimonialsData.map((testimony) => (
          <Grid item xs={12} sm={6} key={testimony.id}>
            <Card sx={{ height: "auto" }}>
              <CardHeader
                avatar={<Avatar src={testimony.image} alt={testimony.name} />}
                title={testimony.name}
                subheader={testimony.title}
              />
              <CardContent>
                <Typography variant="body1" color="text.secondary">
                  {testimony.text}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Testimonials;
