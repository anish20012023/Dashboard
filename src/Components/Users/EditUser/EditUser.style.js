import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0 20px",

    [theme.breakpoints.down("md")]: {
      padding: "0",
    },
  },
  profileGrid: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      order: -1,
      margin: "0 auto !important",
      "& .profile": {
        width: "150px !important",
        height: "150px !important",
      },
    },

    "& .profile": {
      height: "200px",
      width: "200px",
      cursor: "pointer",
      position: "relative",

      "& .overlay": {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        position: "absolute",
        height: "100%",
        width: "100%",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        visibility: "hidden",
      },
      "&:hover": {
        "& .overlay": {
          zIndex: "2",
          visibility: "visible",
        },
      },
      "& .avatar": {
        height: "100%",
        width: "100%",
        backgroundColor: "#D3D3D3",
      },
    },
  },
  formBox: {
    marginBottom: "30px",

    "& p": {
      fontWeight: "500",
      fontSize: "17px",
      paddingLeft: "10px",
    },
  },
  formControl: {
    width: "100%",
    padding: "10px !important",
    "& .MuiFormLabel-root": {
      fontSize: "14px",
      padding: "10px 0",
    },
    "& .MuiInputBase-root": {
      height: "40px",
    },
    "& .radiobtn": {
      display: "flex",
      flexDirection: "row",
    },
  },
  saveButton: {
    margin: "0 0 20px 0 !important",
  },
}));
