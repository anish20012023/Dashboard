import React from "react";
import { useStyles } from "./Card.styles";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import card1 from "../../../Images/card3.jpeg";
import card2 from "../../../Images/card2.jpeg";
import card3 from "../../../Images/e.jpg";
import p1 from "../../../Images/p1.jpg";
import p2 from "../../../Images/p2.jpg";
import p3 from "../../../Images/p3.jpg";

import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import ShareIcon from "@mui/icons-material/Share";

function BlogCard() {
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} xl={4}>
        <Box className={classes.blogcard}>
          <img src={card1} />
          <Box className="overlay">
            <Avatar src={p1} />
            <Box>
              <Typography variant="body2" className="date">
                11 Jan 2024
              </Typography>
              <Typography className="content">
                Soaring through all the galaxies. In search of Earth, flying in to the night.
              </Typography>
            </Box>
            <Box className="socialInfo">
              <ModeCommentIcon /> <RemoveRedEyeIcon /> <ShareIcon />
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={3} xl={4}>
        <Box className={classes.blogcard}>
          <img src={card2} />
          <Box className="overlay">
            <Avatar src={p2} />
            <Box>
              <Typography variant="body2" className="date">
                02 Dec 2023
              </Typography>
              <Typography className="content">
              Explore our gallery and let the visuals inspire your journey.
              </Typography>
            </Box>
            <Box className="socialInfo">
              <ModeCommentIcon /> <RemoveRedEyeIcon /> <ShareIcon />
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={3} xl={4}>
        <Box className={classes.blogcard}>
          <img src={card3} />
          <Box className="overlay">
            <Avatar src={p3} />
            <Box>
              <Typography variant="body2" className="date">
                01 Jan 2024
              </Typography>
              <Typography className="content">
              Each image whispers tales of adventures, emotions, and timeless beauty.
              </Typography>
            </Box>
            <Box className="socialInfo">
              <ModeCommentIcon /> <RemoveRedEyeIcon /> <ShareIcon />
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default BlogCard;
