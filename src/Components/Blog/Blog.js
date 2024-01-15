import {
  Avatar,
  Box,
  Menu,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Snackbar,
  Container,
  Grid,
} from "@mui/material";
import { useStyles } from "./Blog.styles";
import MoreVertSharpIcon from "@mui/icons-material/MoreVertSharp";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import ShareSharpIcon from "@mui/icons-material/ShareSharp";
import ChatBubbleSharpIcon from "@mui/icons-material/ChatBubbleSharp";
import React, { useEffect, useState } from "react";
import HideImageSharpIcon from "@mui/icons-material/HideImageSharp";
import BookmarkSharpIcon from "@mui/icons-material/BookmarkSharp";
import { PostData } from "../../Data/PostData";
import SkeletonComp from "../../Utilities/Skeleton";
import Header from "./Header/Header";
import BlogCard from "./Card/Card";
function Blog() {
  const [loading, setLoading] = useState(true);
  const [optionanchor, setOptionAnchor] = useState(null);
  const [allPost, setAllPost] = useState(PostData);
  const [postIndex, setPostIndex] = useState(null);
  const [alert, setAlert] = useState({ status: false, msg: "" });
  const classes = useStyles();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  function handleOption(e, index) {
    setOptionAnchor(e.currentTarget);
    setPostIndex(index);
  }
  function handlePost(title) {
    if (title === "Hide Post") {
      const updatedPost = allPost.filter((post, index) => index != postIndex);
      setAllPost(updatedPost);
      setAlert({ status: true, msg: "Hide Successfuly" });
    }
    setOptionAnchor(null);
  }
  function handleFav(index) {
    const updatedPost = allPost.map((post, id) => {
      if (id === index) {
        {
          !post.fav ? setAlert({ status: true, msg: "Liked Post" }) : setAlert({ status: true, msg: "Unliked Post" });
        }
        post.fav = !post.fav;
      }
      return post;
    });
    setAllPost(updatedPost);
  }

  if (loading) {
    return <SkeletonComp />;
  }

  return (
    <Container maxWidth="xl">
      <Box className={classes.root}>
        <Header />
        <BlogCard />
      </Box>
      {/* as xam ,a as */}
      <Grid container className={classes.root} spacing={3} my={10}>
        {/* all posts */}
        {allPost.map((post, index) => (
          <Grid item md={4} key={index}>
            <Card elevation={2} className={classes.cardPost}>
              <CardHeader
                avatar={<Avatar>{post.title[0]}</Avatar>}
                title={post.title}
                subheader={post.subheading}
                action={
                  <IconButton onClick={(e) => handleOption(e, index)}>
                    <MoreVertSharpIcon />
                  </IconButton>
                }
              />
              <CardMedia sx={{ height: "200px" }} image={post.image} />
              <CardContent>
                <Typography sx={{ fontSize: 13 }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, eveniet!
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton onClick={() => handleFav(index)}>
                  <FavoriteSharpIcon sx={post.fav && { color: "red" }} />
                </IconButton>
                <IconButton>
                  <ShareSharpIcon />
                </IconButton>
                <IconButton>
                  <ChatBubbleSharpIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>{" "}
      {/* option menu */}
      <Menu open={Boolean(optionanchor)} anchorEl={optionanchor} onClose={() => setOptionAnchor(null)}>
        {[
          { title: "Hide Post", icon: <HideImageSharpIcon sx={{ fontSize: "20px" }} /> },
          { title: "Save Post", icon: <BookmarkSharpIcon sx={{ fontSize: "20px" }} /> },
        ].map((option, index) => (
          <MenuItem sx={{ px: 1 }} key={index} onClick={() => handlePost(option.title)}>
            <ListItemIcon>{option.icon}</ListItemIcon>
            <ListItemText primary={option.title} primaryTypographyProps={{ style: { fontSize: "12px" } }} />
          </MenuItem>
        ))}
      </Menu>
      {/* alert */}
      <Snackbar
        open={alert.status}
        autoHideDuration={2000}
        onClose={() => setAlert({ status: false, msg: "" })}
        message={alert.msg}
      />
    </Container>
  );
}

export default Blog;
