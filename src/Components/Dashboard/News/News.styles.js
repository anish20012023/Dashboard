import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {

  },
  newsContainer: {
    padding: theme.spacing(2.5),
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
    "& .news": {
      display: "flex",
      gap: theme.spacing(1.6),
      "& .imageBox": {
        width: "50px",
        height: "40px",
        borderRadius: "5px",
        overflow: "hidden",
        "& img": {
          height: "100%",
          width: "100%",
          objectFit: "cover",
        },
      },
      "& .newsDetail": {
        "& .heading": {
          fontSize: theme.spacing(1.9),
          fontWeight: "500",
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline",
            textUnderlineOffset: "2px",
          },
        },
        "& .content": {
          lineHeight: theme.spacing(2.3),
          fontSize: theme.spacing(1.7),
          color: "gray",
        },
        "& .time": {
          display: "inline-block",
          fontSize: theme.spacing(1.4),
          padding: "1px 5px",
          borderRadius: "20px",
          fontWeight: "500",
          backgroundColor: theme.palette.lightBlue.lighter,
          color: "gray",
        },
      },
    },
  },
  btn: {
    textAlign: "end",
    padding: "10px",
  },
}));
