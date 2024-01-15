import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: "20px 10px !important",

    "& .leftPaper": {
      padding: "30px",
      minHeight: "90vh",
      width: "95%",
      borderRadius: "10px !important",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      "& h4": {
        marginBottom: "20px",
      },
      "& img": {
        width: "80%",
        margin: "0 auto",
      },

      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    "& .rightBox": {
      "& .header": {
        textAlign: "end",
        fontSize: "15px",
        fontWeight: "400",
        "& a": {
          textDecoration: "none",
          color: "#00A36C",
          fontWeight: "500",
        },
      },
      //   formBox
      "& .formBox": {
        display: "flex",
        flexDirection: "column",
        gap: theme.spacing(2),
        width: "80%",
        margin: "40px auto",
        "& .socialIcon": {
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          "& button": {
            padding: "10px 50px",
            flexGrow: "1",
            borderColor: "grey",
            "&:nth-child(1)": {
              color: "#DB4437",
            },
            "&:nth-child(2)": {
              color: "#4267B2",
            },
            "&:nth-child(3)": {
              color: "#1DA1F2",
            },
          },
        },
        [theme.breakpoints.down("md")]: {
          width: "100%",
        },
        "& .registerBtn": {
          backgroundColor: "#00AB55",
        },
      },
    },
  },
  divider: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& .line": {
      backgroundColor: theme.palette.formColor,
      height: "2px",
      flexGrow: "1",
    },
    "& p": {
      padding: "0 5px",
      fontWeight: "500",
    },
  },
  formgrid: {
    "& .MuiFormControl-root": {
      width: "100%",
    },
  },
}));
