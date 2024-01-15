import { Box } from "@mui/material";
import { GridToolbarExport, GridToolbarFilterButton, GridToolbarQuickFilter } from "@mui/x-data-grid";
import React from "react";
import { useStyles } from "./GridDataToolbar.styles";

function GridDataToolbar() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <GridToolbarExport />
      <GridToolbarFilterButton />
      <GridToolbarQuickFilter />
    </Box>
  );
}

export default GridDataToolbar;
