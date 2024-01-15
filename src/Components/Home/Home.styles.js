import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  navbar: {
    display: "flex",
    justifyContent: "space-between",
  },

  navItems: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    "& .MuiIconButton-root": {
      color: "white",
    },
  },
  userOption: {
    "& .MuiMenuItem-root": { fontSize: "14px" },
  },
  notifListText: {
    "& .MuiListItemText-primary": {
      fontSize: "13px",
      lineHeight: "14px",
    },
    "& .MuiListItemText-secondary": {
      fontSize: "11px",
    },
  },
  drawer: {
    "& .adminPaper": {
      margin: "20px 10px 0 10px",
      backgroundColor: "rgba(189, 195, 199,.3)",
      cursor: "pointer",
      boxShadow: "none",
    },
    "& .MuiDrawer-paper": {
      width: "200px",
      zIndex: "1",
      borderRight: "1.5px solid rgba(0,0,0,.12)",
      zIndex: 2,
    },
    // [theme.breakpoints.down("md")]: {
    //   // display: "none",
    // },
  },
  drawerLinks: {
    marginTop: "30px !important",
    "& .MuiListItemIcon-root": {
      color: theme.palette.primary.main,
      display: "flex",
      justifyContent: "center",
      "& svg": {
        width: "21px",
      },
    },
    "& .MuiTypography-body1": {
      fontSize: "14px",
      fontWeight: "400",
    },
  },
  // main content
  mainContent: {
    marginTop: "64px",
    marginLeft: "auto",
    width: "100%",
    minHeight: "calc(100vh - 64px)",
    padding: "10px",

    [theme.breakpoints.up("md")]: {
      width: `calc(100% - 200px)`,
    },
  },
  // active navbar
  navlink: {
    "&.active": {
      backgroundColor: theme.palette.lightBlue.lighter,
      borderRight: "3px solid",
      borderRightColor: theme.palette.primary.main,
      "& .MuiTypography-root": {
        color: theme.palette.primary.main,
      },
    },
  },

  // register btn
  registerBtn: {
    margin: "20px !important",
    textTransform: "capitalize !important",
    height: "40px",
    fontWeight: "400",
  },
  // menu icon and  app logo
  menuAndLogo: {
    display: "flex",
    alignItems: "center",

    "& button": {
      display: "none",
      color: "white",
      fontSize: theme.spacing(4),
      [theme.breakpoints.down("md")]: {
        display: "flex",
      },
    },
    "& h6": {
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
  },
}));
