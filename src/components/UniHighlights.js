import React from "react";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import Box from "@material-ui/core/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import ruppImage from "../images/rupp.jpg";
import itcImage from "../images/itc.jpg";
import puthisastraImage from "../images/puthisastra.jpg";

const UniHighlights = () => {
  return (
    <Box justifyContent="center" sx={{mb: 15}}>
      <Typography variant="h3" gutterBottom color="#4527a0" textAlign="center">Top Universities <hr /></Typography>
      <Grid container spacing={2} display="flex" justifyContent="center">
        <Grid item xs={11} sm={6} md={4} lg={4} xl={4}>
          <Card sx={{ maxWidth: 400 }}>
            <CardMedia
              component="img"
              alt="Royal University of Phnom Penh"
              sx={{ width: 500, height: 250, }}
              image={ruppImage}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Royal University of Phnom Penh
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Royal University of Phnom Penh (RUPP) is a leading public
                research university located in the capital city of Cambodia. It
                offers a diverse range of academic programs in various fields of
                study, including business, engineering, law, medicine, and
                social sciences, among others. RUPP is committed to providing
                high-quality education and producing graduates who are equipped
                with the knowledge and skills to make significant contributions
                to society.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={11} sm={6} md={4} lg={4} xl={4}>
          <Card sx={{ maxWidth: 400 }}>
            <CardMedia
              component="img"
              alt="Royal University of Phnom Penh"
              sx={{ width: 500, height: 250 }}
              image={itcImage}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Institute of Technology of Cambodia
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ITC provides a range of undergraduate programs and courses in
                various fields of study, leading to officially recognized
                degrees. By enrolling in ITC, students can acquire the necessary
                knowledge and skills to succeed in their future careers
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={11} sm={6} md={4} lg={4} xl={4}>
          <Card sx={{ maxWidth: 400 }}>
            <CardMedia
              component="img"
              alt="Royal University of Phnom Penh"
              sx={{ width: 500, height: 250 }}
              image={puthisastraImage}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                University of Puthisastra
              </Typography>
              <Typography variant="body2" color="text.secondary">
                The University of Puthisastra (UP) provides a range of courses
                and programs in various areas of study, including pre-bachelor
                degrees, bachelor degrees, and master degrees. These degrees are
                officially recognized and provide a solid foundation for further
                education or professional opportunities.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UniHighlights;
