import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: { paddingTop: theme.spacing(2) },
  headerBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  select: {
    width: "110px",
    fontSize: "14px !important",
  },
  menuItem: {
    paddingTop: "2px !important",
    paddingBottom: "2px !important",
    fontSize: "14px !important",
  },
}));
