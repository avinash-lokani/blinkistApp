import { Box, Container, ThemeProvider, Typography } from "@mui/material";
import BookData from "Components/Data/BooksData";
import React, { useState } from "react";
import theme from "Components/Theme/Theme";
import { makeStyles } from "@mui/styles";
import CardGroup from "Components/Organisms/CardGroup/Index";


interface Props {
  header: React.ReactNode;
  banner: React.ReactNode;
  searchBar: React.ReactNode;
  footer: React.ReactNode;
}

const useStyles = makeStyles({

  header : {
    display : "flex",
    justifyContent:"center",
    alignItems:"center",
    marginBottom:"150px"
  },

  mainContainer: {
    width: "100%",
    boxSizing: "border-box",
    padding: "0px",
    alignItems:"center",
  },
  container: {
    marginTop: "70px",
    boxSizing: "border-box",
    width: "970px !important",
  },
  cardContainer: {
    paddingLeft: "140px",
    marginTop: "50px",
    boxSizing: "border-box",
    width: "100%",
  },
  headStyle: {
    color: "#03314B",
    fontWeight: "700",
    fontSize: "24px",
    lineHeight: "30.17px",
    fontStyle: "normal",
    display: "flex",
    justifyContent: "flex-start",
    width: "500px",
  },
  tabsStyle: {
    marginTop: "40px",
    boxSizing: "border-box",
    width: "100%",
  },
  bannerStyles: {
    margin: "32px 0px",
  },
  footer : {

    bottom:"0",
    width:"100%",
    height : "auto",
    overflow: "hidden"
  }
});

const Entrepreneurship = (props: Props) => {
  const classes = useStyles();
  const [myBookData, setBookData] = useState([
    {
      id: 1,
      image: "",
      title: "",
      author: "",
      minutes: "",
      reads: "",
      addToLib: false,
      isFinished: false,
      readAgain: false,
      type: {
        trending: false,
        featured: false,
        justAdded: false,
      },
    },
  ]);



  return (
    <>
      <ThemeProvider theme={theme}>
     
        <Box className={classes.mainContainer}>
          <Box className = {classes.header}>{props.header}</Box>
          <Box className={classes.bannerStyles}>{props.banner}</Box>
          <Box>{props.searchBar}</Box>
          <Container className={classes.container}>
            <Typography variant="h3" className={classes.headStyle}>
              Trending blinks
            </Typography>
          </Container>
          <Container className={classes.cardContainer}>
            <CardGroup bookData={BookData} type="trending" />
          </Container>
          <Container className={classes.container}>
            <Typography variant="h3" className={classes.headStyle}>
              Just added
            </Typography>
          </Container>
          <Container className={classes.cardContainer}>
            <CardGroup bookData={BookData} type="justAdded" />
          </Container>
          <Container className={classes.container}>
            <Typography variant="h3" className={classes.headStyle}>
              Featured audio blinks
            </Typography>
          </Container>
          <Container className={classes.cardContainer}>
            <CardGroup bookData={BookData} type="featured" />
          </Container>
          <Box sx={{ marginTop: "300px" , bottom : "0px" }} className = {classes.footer}>{props.footer}</Box>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Entrepreneurship;