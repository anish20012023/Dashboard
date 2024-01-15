import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    
  },

  dataGridMain: { width: "98%", margin:"0 auto" },
  dataGrid: {
    boxShadow: ".5px .5px 4px rgba(189, 195, 199)",
    borderRadius: "10px",

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
