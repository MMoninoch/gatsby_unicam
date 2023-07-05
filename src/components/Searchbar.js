import React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { Container } from "@mui/system";
import { makeStyles } from "@material-ui/core/";
import { Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

const useStyles = makeStyles((theme) => ({
  mar: {
    marginTop: 160,
    marginBottom: 145,
  },
  stack: {
    [theme.breakpoints.up("lg")]: {
      width: 200,
    },
    [theme.breakpoints.up("md")]: {
      width: 900,
    },
  },
  searchText: {
    color: "#4527a0",
  },
}));


const Searchbar = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md" className={classes.mar}>
      <Typography variant="h5" gutterBottom className={classes.searchText}>
        Search University Here
      </Typography>
      <Stack spacing={2} className={classes.stack}>
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={University.map((option) => option.title)}
          renderInput={(params) => (
            <TextField
              {...params}
              InputProps={{
                ...params.InputProps,
                type: "search",
                startAdornment: (
                  <InputAdornment>
                    <SearchIcon />
                    <Typography>University : </Typography>
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
      </Stack>
    </Container>
  );
};

const University = [
  { title: "Royal University of Phnom Penh" },
  { title: "University of Puthisastra" },
  { title: "The University of Cambodia" },
  { title: "Institute of Technology of Cambodia" },
  { title: "Paññasastra University of Cambodia" },
  { title: "Royal Academy of Cambodia" },
  { title: "Paragon International University" },
  { title: "Royal University of Agriculture" },
  { title: "Cambodian Mekong University" },
  { title: "Royal University of Law and Economics" },
  { title: "Build Bright University" },
  { title: "International University" },
  { title: "National University of Management" },
  { title: "Norton University" },
  { title: "Université des Sciences de la Santé" },
  { title: "Western University Cambodia" },
  { title: "American University of Phnom Penh" },
  { title: "Royal University of Fine Arts" },
  { title: "National University of Battambang" },
  { title: "École Royale d'Administration" },
  { title: "Asian Euro University" },
  { title: "Cambodia University for Specialties" },
  { title: "National Polytechnic Institute of Cambodia" },
  { title: "Svay Rieng University" },
  { title: "CamEd Business School" },
  { title: "Economics and Finance Institute" },
  { title: "University of Management and Economics" },
  { title: "Chea Sim University of Kamchaymear" },
  { title: "IIC University of Technology" },
  { title: "Angkor University" },
  { title: "Phnom Penh International University" },
  { title: "Life University, Cambodia" },
  { title: "University of Southeast Asia" },
  { title: "Mean Chey University" },
  { title: "Vanda Institute" },
  { title: "East Asian Management University" },
  { title: "National Institute of Education" },
  { title: "Human Resources University" },
  { title: "Panha Chiet University" },
  { title: "Dewey International University" },
  { title: "National Institute of Business" },
  { title: "Preah Sihanouk Raja Buddhist University" },
  { title: "Beltei International University" },
  { title: "Khemarak University" },
  { title: "Angkor Khemara University" },
  { title: "Limkokwing University of Creative Technology, Cambodia" },
  { title: "Chenla University" },
  { title: "Prek Leap National College of Agriculture" },
  { title: "Kampong Cham National School Agriculture" },
];

export default Searchbar;
