import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@mui/lab";
import { Paper, Typography } from "@mui/material";
import React from "react";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import { useStyles } from "./UpdateTimeline.styles";
const data = [
  {
    icon: <DesignServicesIcon />,
    title: "Site Redesign",
    subtitle: "Explore the refreshed look and feel of our website.",
    color: "#D14343",
    time: "15 Jan 2024 21:53",
  },
  {
    icon: <FeaturedPlayListIcon />,
    title: "New Features Added",
    subtitle: "Discover the latest functionalities we've integrated into the platform.",
    color: "#14B8A6",
    time: "19 May 2023 23:03",
  },
  {
    icon: <PhoneAndroidIcon />,
    title: "Mobile Responsiveness",
    subtitle: "Check out how our website is now optimized for seamless mobile browsing.",
    color: "#FFB020",
    time: "01 May 2023 12:20",
  },

  {
    icon: <SecurityRoundedIcon />,
    title: "Security Updates",
    subtitle: "Stay informed about the latest security enhancements to keep your data safe.",
    color: "#5048E4",
    time: "30 Feb 2023 21:30",
  },
];
function UpdateTimeline() {
  const classes=useStyles()
  return (
    <Paper elevation={3} className={classes.root}>
      <Typography variant="h6">Updates Timeline</Typography>
      <Timeline className={classes.timeline}>
        {data.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: item.color }}>{item.icon}</TimelineDot>
              {index != data.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent className={classes.timelineContent}>
              <Typography className="title">{item.title}</Typography>
              <Typography className="subtitle" variant="body2">{item.subtitle}</Typography>
              <Typography className="time" variant="body2">{item.time}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Paper>
  );
}

export default UpdateTimeline;
