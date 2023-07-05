import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Navbar from "../components/Navbar";
import HeroSection from "../components/Hero";
import Searchbar from "../components/Searchbar";
import UniHighlights from "../components/UniHighlights";
import Rank from "../components/Rank";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function IndexPage() {
  return (
    <Box>
      <Container>
        <Navbar />
        <HeroSection />
        <Searchbar />
        <UniHighlights />
        <Rank />
        <Testimonials />
      </Container>
      <Footer />
    </Box>
  );
}
