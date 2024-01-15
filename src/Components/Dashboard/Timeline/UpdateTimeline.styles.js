import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2.5),
  },
  timeline: {
    "& li": {
      "&::before": {
        display: "none !important",
      },
    },
  },
  timelineContent: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(.3),
    "& .title": {
      fontWeight: "500",
      fontSize: theme.spacing(1.7),
    },
    "& .subtitle": {
      lineHeight: theme.spacing(1.8),
      fontSize: theme.spacing(1.6),
      color: "gray",
    },
    "& .time": {
      fontSize: theme.spacing(1.3),
      color: "gray",
    },
  },
}));
