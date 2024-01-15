import React from "react";
import img from "../../Images/notfound.svg";
import { Box, Button, Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
      "& h3": {
        fontSize: theme.spacing(3.5),
      },
    },
    textAlign: "center",
    "& .imgBox": {
      width: "40%",
      margin: "20px auto",
      "& img": {
        width: "100%",
      },
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
    "& button": {
      backgroundColor: "#00AB55",
    },
  },
}));

function NotFound() {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <Container maxWidth="lg">
      <Box className={classes.root}>
        <Typography variant="h3" sx={{ marginBottom: 2 }}>
          Sorry, page not found!
        </Typography>
        <Typography sx={{ marginBottom: 5 }} variant="body2">
          Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your
          spelling.
        </Typography>
        <Box className="imgBox">
          <img src={img} alt="" />
        </Box>
        <Button variant="contained" color="success" onClick={() => navigate("/")}>
          Go to home
        </Button>
      </Box>
    </Container>
  );
}

export default NotFound;
