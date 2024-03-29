import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import admin from "../../Images/admin.png";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { notifydata } from "../../Data/Notify";
import { useStyles } from "./Home.styles";
import { NavLink, Outlet } from "react-router-dom";
import { router } from "../../Common/router";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { ChangeMode } from "../../ModeSlice";
function Home() {
  const AllRoutes = router.routes[0].children;
  const [profileanchorEl, setProfileAnchorEl] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [notifyanchorEl, setNotifyAnchorEl] = useState(null);
  const [notifyOpen, setNotifyOpen] = useState(false);
  const [hamBurger, setHamBurger] = useState(false);
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const mode = useSelector((state) => state.mode.theme);

  function handleMenu(e) {
    setProfileAnchorEl(e.currentTarget);
    setMenuOpen(true);
  }
  function handleNotify(e) {
    setNotifyAnchorEl(e.currentTarget);
    setNotifyOpen(true);
  }
  const classes = useStyles();
  return (
    <Box>
      {/* nav bar */}
      <AppBar className={classes.AppBar} elevation={0}>
        <Toolbar className={classes.navbar}>
          <Box className={classes.menuAndLogo}>
            <IconButton onClick={() => setHamBurger(!hamBurger)}>
              {hamBurger ? <IoClose /> : <RiMenu3Line />}
            </IconButton>
            <Typography className={classes.hh} variant="h6" textTransform={"uppercase"}>
              Admin Pannel
            </Typography>
          </Box>
          {/* right nav item */}
          <Box className={classes.navItems}>
            <IconButton onClick={() => dispatch(ChangeMode())}>
              {mode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
            <IconButton onClick={handleNotify} className={classes.notBtn}>
              <Badge badgeContent={notifydata.length} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton onClick={handleMenu}>
              <Avatar src={admin}>A</Avatar>
            </IconButton>
            <Menu
              open={menuOpen}
              anchorEl={profileanchorEl}
              onClose={() => setMenuOpen(false)}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              className={classes.userOption}
            >
              <MenuItem onClick={() => setMenuOpen(false)}>Edit</MenuItem>
              <MenuItem onClick={() => setMenuOpen(false)}>Setting</MenuItem>
              <MenuItem onClick={() => setMenuOpen(false)}>Logout</MenuItem>
            </Menu>
            {/*notification menu  */}
            <Menu
              open={notifyOpen}
              anchorEl={notifyanchorEl}
              onClose={() => setNotifyOpen(false)}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
            >
              <List sx={{ width: "250px" }}>
                {notifydata.map((item, index) => (
                  <ListItem button sx={{ height: "40px" }} key={index}>
                    <ListItemAvatar>
                      <Avatar sx={{ width: 30, height: 30 }}>{item.name[0]}</Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={item.name} secondary={item.notify} className={classes.notifListText} />
                  </ListItem>
                ))}
              </List>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer sidebar */}

      <Drawer
        variant="permanent"
        className={classes.drawer}
        sx={{ display: { xs: !hamBurger ? "none" : "block", md: "block" } }}
      >
        <Toolbar />
        <Paper className="adminPaper" onClick={() => navigate("/")}>
          <ListItem>
            <ListItemIcon>
              <Avatar src={admin} />
            </ListItemIcon>
            <ListItemText primary="Admin" />
          </ListItem>
        </Paper>
        <List className={classes.drawerLinks}>
          {AllRoutes.slice(0, 4).map((item, index) => (
            <ListItem disablePadding key={index}>
              <ListItemButton LinkComponent={NavLink} className={classes.navlink} to={item.path} key={index}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Button
          endIcon={<AddIcon />}
          variant="contained"
          className={classes.registerBtn}
          onClick={() => navigate("/register")}
        >
          Register
        </Button>
      </Drawer>

      {/* main contentd */}
      <Box className={classes.mainContent}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default Home;
