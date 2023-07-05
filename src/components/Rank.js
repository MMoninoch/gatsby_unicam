import React, { useState } from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import { Button } from "@mui/material";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

const universities = [
  { rank: 1, name: "Royal University of Phnom Penh", rating: 4.8 },
  { rank: 2, name: "University of Puthisastra", rating: 4.6 },
  { rank: 3, name: "The University of Cambodia", rating: 4.4 },
  { rank: 4, name: "Institute of Technology of Cambodia", rating: 4.2 },
  { rank: 5, name: "Paññasastra University of Cambodia", rating: 4.0 },
  { rank: 6, name: "Royal Academy of Cambodia", rating: 4.0 },
  { rank: 7, name: "Paragon International University", rating: 4.0 },
  { rank: 8, name: "Royal University of Agriculture", rating: 4.0 },
  { rank: 9, name: "Cambodian Mekong University", rating: 4.0 },
  { rank: 10, name: "Royal University of Law and Economics", rating: 4.0 },
  { rank: 11, name: "Build Bright University", rating: 4.0 },
  { rank: 12, name: "International University", rating: 4.0 },
  { rank: 13, name: "National University of Management", rating: 4.0 },
  { rank: 14, name: "Université des Sciences de la Santé", rating: 4.0 },
  { rank: 15, name: "Western University Cambodia", rating: 4.0 },
  { rank: 16, name: "American University of Phnom Penh", rating: 4.0 },
  { rank: 17, name: "Royal University of Fine Arts", rating: 4.0 },
  { rank: 18, name: "National University of Battambang", rating: 4.0 },
  { rank: 19, name: "École Royale d'Administration", rating: 4.0 },
  { rank: 20, name: "Asian Euro University", rating: 4.0 },
  { rank: 21, name: "Cambodia University for Specialties", rating: 4.0 },
  { rank: 22, name: "National Polytechnic Institute of Cambodia", rating: 4.0 },
  { rank: 23, name: "Svay Rieng University", rating: 4.0 },
  { rank: 24, name: "CamEd Business School", rating: 4.0 },
  { rank: 25, name: "Economics and Finance Institute", rating: 4.0 },
  { rank: 26, name: "University of Management and Economics", rating: 4.0 },
  { rank: 27, name: "Chea Sim University of Kamchaymear", rating: 4.0 },
  { rank: 28, name: "IIC University of Technology", rating: 4.0 },
  { rank: 29, name: "Angkor University", rating: 4.0 },
  { rank: 30, name: "Phnom Penh International University", rating: 4.0 },
  { rank: 31, name: "Life University, Cambodia", rating: 4.0 },
  { rank: 32, name: "University of Southeast Asia", rating: 4.0 },
  { rank: 33, name: "Mean Chey University", rating: 4.0 },
  { rank: 34, name: "Vanda Institute", rating: 4.0 },
  { rank: 35, name: "East Asian Management University", rating: 4.0 },
  { rank: 36, name: "National Institute of Education", rating: 4.0 },
  { rank: 37, name: "Human Resources University", rating: 4.0 },
  { rank: 38, name: "Panha Chiet University", rating: 4.0 },
  { rank: 39, name: "Dewey International University", rating: 4.0 },
  { rank: 40, name: "National Institute of Business", rating: 4.0 },
  { rank: 41, name: "Preah Sihanouk Raja Buddhist University", rating: 4.0 },
  { rank: 42, name: "Beltei International University", rating: 4.0 },
  { rank: 43, name: "Khemarak University", rating: 4.0 },
  { rank: 44, name: "Angkor Khemara University", rating: 4.0 },
  { rank: 45, name: "Limkokwing University of Creative Technology, Cambodia", rating: 4.0},
  { rank: 46, name: "Prek Leap National College of Agriculture", rating: 4.0 },
  { rank: 47, name: "Kampong Cham National School Agriculture", rating: 4.0 },
];

const Rank = () => {
  const [numItems, setNumItems] = useState(10);

  const handleSeeMore = () => {
    setNumItems(numItems + 10);
  };

  return (
    <List sx={{ mt: 2 }}>
      {universities.slice(0, numItems).map((university) => (
        <ListItem
          key={university.rank}
          sx={{
            mt: 2,
            pt: 2,
            pb: 2,
            pl: 6,
            pr: 6,
            borderRadius: 2,
            bgcolor: "#E9E9E9",
            color: "#311c71",
            fontSize: 48,
          }}
        >
          <ListItemText
            primary={`${university.rank}/ ${university.name}`}
            secondary={
              <Rating
                name="read-only"
                value={university.rating}
                precision={0.1}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
                readOnly
              />
            }
          />
          <Button variant="contained" size="medium">
            More
          </Button>
        </ListItem>
      ))}
      {numItems < universities.length && (
        <Button
          color="primary"
          onClick={handleSeeMore}
          sx={{ display: "block", margin: "0 auto" }}
        >
          See More...
        </Button>
      )}
    </List>
  );
};

export default Rank;
