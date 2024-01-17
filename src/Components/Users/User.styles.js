import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {},

  dataGridMain: { width: "98%", margin: "0 auto" },
  dataGrid: {
    borderRadius: "10px !important",

    "& .MuiDataGrid-columnSeparator": {
      display: "none !important",
    },
    "& .MuiDataGrid-columnHeaderTitleContainer": {
      textTransform: "uppercase",

      "&:focus": {
        outline: "none !important",
      },
    },
    "& .MuiDataGrid-row": {
      minHeight: "60px !important",

      "& .MuiDataGrid-cell": {
        minHeight: "60px !important",

        "&:focus": {
          outline: "none !important",
        },
      },
    },
  },
}));
