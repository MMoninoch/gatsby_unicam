import React from "react";
import Box from "@material-ui/core/Box";
import { Grid } from "@mui/material";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import UniMain from "../components/UniMain";

export default function University() {
  return (
    <Box>
      <Navbar />
      <Searchbar />
      <Grid container>
        <Grid item xs={0} md={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={12} md={8}>
          <UniMain />
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
}
