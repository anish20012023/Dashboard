import React, { useState } from "react";
import { useStyles } from "./Header.styles";
import { Box, Button, MenuItem, Select, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function Header() {
  const classes = useStyles();
  const [sort, setSort] = useState("latest");
  return (
    <Box className={classes.root}>
      <Box className={classes.headerBox}>
        <Typography variant="h5">Blogs</Typography>
        <Button variant="contained" startIcon={<AddIcon />}>
          new post
        </Button>
      </Box>
      <Box className={classes.headerBox}>
        <Typography >Search</Typography>
        <Select size="small" onChange={(e) => setSort(e.target.value)} value={sort} className={classes.select}>
          <MenuItem value="latest" className={classes.menuItem}>
            Latest
          </MenuItem>
          <MenuItem value="popular" className={classes.menuItem}>
            Popular
          </MenuItem>
          <MenuItem value="oldest" className={classes.menuItem}>
            Oldest
          </MenuItem>
        </Select>
      </Box>
    </Box>
  );
}

export default Header;
