import { Box, Button, Divider, Link, Paper, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "./News.styles";
import img1 from "../../../Images/a.jpg";
import img2 from "../../../Images/b.jpg";
import img3 from "../../../Images/c.jpg";
import img4 from "../../../Images/d.jpg";
import img5 from "../../../Images/e.jpg";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const data = [
  { img: img1, heading: "Customer Optimization Architect", time: 12 },
  { img: img2, heading: "Human Creative Representative", time: 2 },
  { img: img3, heading: "Dynamic Identity Officer", time: 5 },
  { img: img4, heading: "Chief Program Planner", time: 6 },
  { img: img5, heading: "Senior Implementation Manager", time: 10 },
];
function News() {
  const classes = useStyles();
  return (
    <Paper className={classes.root} elevation={3}>
      <Box className={classes.newsContainer}>
        <Typography variant="h6">News Updates</Typography>
        {data.map((news, index) => (
          <Box key={index} className="news">
            <Box className="imageBox">
              <img src={news.img} alt="" />
            </Box>
            <Box className="newsDetail">
              <Link className="heading" href="/">
                <Typography>{news.heading}</Typography>
              </Link>
              <Typography className="content">
                lorem9 lorem50lo0 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, at?
              </Typography>
              <Typography className="time">{`about ${news.time} hours`}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
      <Divider />
      <Box className={classes.btn}>
        <Button endIcon={<KeyboardArrowRightIcon/>} variant="text">View all</Button>
      </Box>
    </Paper>
  );
}

export default News;
