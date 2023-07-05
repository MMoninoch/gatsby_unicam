import React from "react";
import Container from "@material-ui/core/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  mar: {
    [theme.breakpoints.up("md")]: {
      marginLeft: "2rem",
    },
    marginLeft: "1rem",
  },
  card: {
    marginTop: 50,
  },
  container: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    flexWrap: "wrap",
    gap: "2rem",
    marginRight: "2rem",
  },
}));

const UniMain = () => {
  const classes = useStyles();

  return (
    <Container className={classes.mar}>
      <Typography variant="h4" gutterBottom>
        Top University in Cambodia
      </Typography>
      <Typography variant="body1" gutterBottom>
        UniCam provide students with Cambodia University Ranking of 49 Cambodia
        higher-education institutions meeting the following criteria:
      </Typography>

      <Grid container spacing={1}>

        <Grid items xs={12} sm={12} md={4}>
          <Card sx={{ maxWidth: 345 }} className={classes.card}>
            <CardMedia
              sx={{ height: 140 }}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid items xs={12} sm={12} md={4}>
          <Card sx={{ maxWidth: 345 }} className={classes.card}>
            <CardMedia
              sx={{ height: 140 }}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid items xs={12} sm={12} md={4}>
          <Card sx={{ maxWidth: 345 }} className={classes.card}>
            <CardMedia
              sx={{ height: 140 }}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>

      </Grid>
    </Container>
  );
};

export default UniMain;
