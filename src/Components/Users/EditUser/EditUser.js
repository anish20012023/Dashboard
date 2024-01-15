import {
  Avatar,
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import React, { useState } from "react";
import { useStyles } from "./EditUser.style";
import { Form, useLocation } from "react-router-dom";
function EditUser() {
  const classes = useStyles();
  const data = useLocation().state;
  const [user, setUser] = useState(data);
  return (
    <Box className={classes.root}>
      <Typography  variant="h5">
        Edit User Profile
      </Typography>
      <Grid container>
        <Grid item md={9}>
          <form>
            {/* identity */}
            <Box className={classes.formBox}>
              <Typography>Identity</Typography>
              {/*first name */}
              <Grid container >
                <Grid item md={6}>
                  <FormControl className={classes.formControl}>
                    <FormLabel htmlFor="fname">First Name</FormLabel>
                    <TextField id="fname" name="firstname" value={user.firstname} />
                  </FormControl>
                </Grid>
                {/* last name */}
                <Grid item md={6}>
                  <FormControl className={classes.formControl}>
                    <FormLabel htmlFor="lname">Last Name</FormLabel>
                    <TextField id="lname" name="lastname" value={user.lastname} />
                  </FormControl>
                </Grid>

                {/* email */}
                <Grid item md={6}>
                  <FormControl className={classes.formControl}>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <TextField id="email" type="email" name="email" value={user.email} />
                  </FormControl>
                </Grid>

                {/* phone number */}
                <Grid item md={6}>
                  <FormControl className={classes.formControl}>
                    <FormLabel htmlFor="phone">Contact Number</FormLabel>
                    <TextField id="phone" name="phone" value={user.phone} />
                  </FormControl>
                </Grid>
                {/* birthday */}
                <Grid item md={4}>
                  <FormControl className={classes.formControl}>
                    <FormLabel htmlFor="birthdate">Birthday</FormLabel>
                    <TextField id="birthdate" type="date" name="birthdate" value={user.birthdate} />
                  </FormControl>
                </Grid>
                {/* Gender */}
                <Grid item md={4}>
                  <FormControl className={classes.formControl}>
                    <FormLabel>Gender</FormLabel>
                    <RadioGroup value={user.gender} className="radiobtn">
                      <FormControlLabel label="Male" value="male" control={<Radio />} />
                      <FormControlLabel label="Female" value="female" control={<Radio />} />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                {/* age */}
                <Grid item md={4}>
                  <FormControl className={classes.formControl}>
                    <FormLabel htmlFor="age">Age</FormLabel>
                    <TextField id="age" type="number" name="age" value={user.age} />
                  </FormControl>
                </Grid>
              </Grid>
            </Box>
            {/* Address */}
            <Box className={classes.formBox}>
              <Typography>Address</Typography>
              <Grid container>
                {/* house */}
                <Grid item md={12}>
                  <FormControl className={classes.formControl}>
                    <FormLabel htmlFor="address">Address</FormLabel>
                    <TextField id="address" name="address" value={user.userAdress.address} />
                  </FormControl>
                </Grid>
                {/* city */}
                <Grid item md={4}>
                  <FormControl className={classes.formControl}>
                    <FormLabel htmlFor="city">City</FormLabel>
                    <TextField id="city" name="city" value={user.userAdress.city} />
                  </FormControl>
                </Grid>
                {/* state */}
                <Grid item md={4}>
                  <FormControl className={classes.formControl}>
                    <FormLabel htmlFor="state">State</FormLabel>
                    <TextField id="state" name="state" value={user.userAdress.state} />
                  </FormControl>
                </Grid>
                {/* postalcode */}
                <Grid item md={4}>
                  <FormControl className={classes.formControl}>
                    <FormLabel htmlFor="code">postalCode</FormLabel>
                    <TextField id="code" name="postalCode" value={user.userAdress.postalCode} />
                  </FormControl>
                </Grid>
              </Grid>
            </Box>

            {/* save */}
            <Button variant="outlined" className={classes.saveButton} type="submit">Save Changes</Button>
          </form>
        </Grid>
        <Grid item md={3} className={classes.profileGrid}>
          <Box className="profile">
            <Box className="overlay">
              <IconButton>
                <EditIcon sx={{ color: "white" }} />
                
              </IconButton>
            </Box>
            <Avatar className="avatar" src={user.image}></Avatar>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default EditUser;
