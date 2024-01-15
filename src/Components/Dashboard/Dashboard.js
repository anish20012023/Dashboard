import React from "react";
import BarChart from "./Charts/BarChart";
import { Avatar, Box, Container, Grid, Paper, Typography } from "@mui/material";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import { useStyles } from "./Dashboard.styles";
import DoughnutChart from "./Charts/DoughnutChart";
const statCard = [
  {
    title: "Budget",
    icon: <BarChartOutlinedIcon />,
    value: `$${Math.floor(Math.random() * (900 - 100 + 1)) + 100}K`,
    arrow: <ArrowDownwardOutlinedIcon />,
    color: "#D14343",
  },
  {
    title: "total customers",
    icon: <PeopleAltOutlinedIcon />,
    value: `${(Math.floor(Math.random() * (900 - 100 + 1)) + 100) / 10}K`,
    arrow: <ArrowUpwardOutlinedIcon />,
    color: "#14B8A6",
  },
  {
    title: "task progress",
    icon: <QueryStatsOutlinedIcon />,
    value: `${(Math.floor(Math.random() * (900 - 100 + 1)) + 100) / 10}%`,
    arrow: <ArrowUpwardOutlinedIcon />,
    color: "#FFB020",
  },
  {
    title: "total profit",
    icon: <AttachMoneyOutlinedIcon />,
    value: `$${(Math.floor(Math.random() * (900 - 100 + 1)) + 100) / 10}K`,
    arrow: <ArrowUpwardOutlinedIcon />,
    color: "#5048E4",
  },
];

function Dashboard() {
  const classes = useStyles();
  return (
    <Container maxWidth="xl">
      <Box className={classes.root}>
        <Typography variant="h6">Hi, Welcome in Dashboard.</Typography>
        {/* stats- card */}
        <Grid container spacing={3}>
          {statCard.map((item, index) => (
            <Grid item md={3} xs={12} key={index}>
              <Paper className={classes.paper} elevation={2}>
                <Box className="cardHeader">
                  <Box className="box1">
                    <Typography variant="body2" className="title">
                      {item.title}
                    </Typography>
                    <Typography variant="h6" className="value">
                      {item.value}
                    </Typography>
                  </Box>
                  <Box className="box2">
                    <Avatar className="icon" sx={{ backgroundColor: item.color }}>
                      {item.icon}
                    </Avatar>
                  </Box>
                </Box>
                <Typography variant="body2" className="arrowTypo">
                  <span style={{ color: item.color }}>
                    {item.arrow}
                    {Math.floor(Math.random() * (30 - 10 + 1) + 10)}%
                  </span>
                  since last month
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* post enagagement */}
        <Grid container spacing={3}>
          <Grid item md={7} xs={12}>
            <Paper className={classes.barchart} elevation={2}>
              <Typography className="heading">Avg Engagement Per Post</Typography>
              <Typography className="subheading" variant="body2">
                by post type
              </Typography>

              <Box className="barchartBox">
                <BarChart />
              </Box>
            </Paper>
          </Grid>
          <Grid item md={5} xs={12}>
            <Paper className={classes.doughnut}>
              <Typography className="heading">Traffic By Devices</Typography>
              <Box className="doughnutChartBox">
                <DoughnutChart />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Dashboard;
