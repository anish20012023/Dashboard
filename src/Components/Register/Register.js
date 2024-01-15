import { Box, Button, Container, FormControl, Grid, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "./Register.styles";
import bckImg from "../../Images/register.png";
import { Link } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
function Register() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.root}>
      <Grid container>
        <Grid item md={5}>
          <Paper className="leftPaper">
            <Typography variant="h4">Manage the job more effectively with Minimal</Typography>
            <img src={bckImg} />
          </Paper>
        </Grid>
        <Grid item md={7} xs={12} className="rightBox">
          <Typography variant="body2" className="header">
            Already have an account? <Link to="/">Login</Link>
          </Typography>
          <Box className="formBox">
            <Typography variant="h6">Get started absolutely free.</Typography>
            <Typography variant="body2">Free forever. No credit card needed.</Typography>
            {/* social Icons */}
            <Box className="socialIcon">
              <Button variant="outlined">
                <GoogleIcon />
              </Button>
              <Button variant="outlined">
                <FacebookOutlinedIcon />
              </Button>
              <Button variant="outlined">
                <TwitterIcon />
              </Button>
            </Box>
            {/* ---Or--- */}
            <Box className={classes.divider}>
              <Box className="line"></Box>
              <Typography variant="body2">OR</Typography>
              <Box className="line"></Box>
            </Box>
            {/* form */}
            <form>
              <Grid container className={classes.formgrid} spacing={3}>
                <Grid item md={6} xs={12}>
                  <FormControl>
                    <TextField label="First Name" />
                  </FormControl>
                </Grid>
                <Grid item md={6} xs={12}>
                  <FormControl>
                    <TextField label="Last Name" />
                  </FormControl>
                </Grid>
                <Grid item md={12} xs={12}>
                  <FormControl>
                    <TextField label="Email address" type="email" />
                  </FormControl>
                </Grid>
                <Grid item md={12} xs={12}>
                  <FormControl>
                    <TextField label="Password" type="password" />
                  </FormControl>
                </Grid>
                <Grid item md={12} xs={12}>
                  <Button variant="contained" className="registerBtn" >
                    Register
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Register;
