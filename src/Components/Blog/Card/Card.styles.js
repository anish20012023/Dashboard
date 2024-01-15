import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {},
  blogcard: {
    height: "360px",
    borderRadius: "10px",
    position: "relative",
    transition: "all 0.3s",
    "& img": {
      height: "100%",
      width: "100%",
      objectFit: "cover",
      borderRadius: "10px",
    },

    "&:hover": {
      transform: `translateY(10px)`,
    },
    "& .overlay": {
      backgroundColor: "rgba(0,0,0,.4)",
      backdropFilter: "blur(2px)",
      position: "absolute",
      top: "0",
      width: "100%",
      height: "100%",
      borderRadius: "10px",
      color: "white",
      display: "flex",
      padding: theme.spacing(2.5),
      flexDirection: "column",
      justifyContent: "space-between",
      "& .MuiAvatar-root": {
        height: "50px",
        width: "50px",
      },

      "& .date": {
        marginBottom: theme.spacing(2),
      },
      "& .content": {
        fontSize: "22px",
        "&:hover": {
          textDecoration: "underline",
          textUnderlineOffset: "4px",
          cursor: "pointer",
        },
      },
      "& .socialInfo": {
        "& .MuiSvgIcon-root": {
          marginLeft: theme.spacing(1),
          fontSize: "19px",
        },
      },
    },
  },
}));
