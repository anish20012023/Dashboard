import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: "20px 0",

    display: "flex",
    flexDirection: "column",
    gap: "30px",
  },
  paperBox: { display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "20px" },
  paper: {
    padding: "26px 24px",
    display: "flex",
    flexDirection: "column",
    flexGrow: "1",
    gap: "5px",

    "& .cardHeader": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      "& .box1": {
        "& .title": {
          textTransform: "uppercase",
          fontSize: "10px",
          fontWeight: "600",
          color: "#888888",
        },
        "& .value": {
          fontSize: "25px",
          fontWeight: "600",
        },
      },
      "& .box2": {
        "& .icon": {
          padding: theme.spacing(3),
        },
      },
    },

    "& .arrowTypo": {
      display: "flex",
      alignItems: "center",
      fontSize: "12px",
      color: "#888888",
      gap: theme.spacing(1 / 2),
      "& .MuiSvgIcon-root": {
        fontSize: "20px",
      },
      "& span": {
        display: "flex",
        alignItems: "center",
      },
    },
  },
  barchart: {
    padding: "12px",
    "& .heading": {
      fontSize: "17px",
      fontWeight: "600",
    },
    "& .subheading": {
      fontSize: "12px",
      fontWeight: "500",
      color: "gray",
    },
    "& .barchartBox": {
      padding: "5px",
    },
  },
  // doughunut chart
  doughnut: {
    padding: "12px",
    "& .heading": {
      fontSize: "17px",
      fontWeight: "600",
    },
    "& .doughnutChartBox": {
      padding: "5px",
      width: "70%",
      margin: "0 auto",
    },
  },
}));
