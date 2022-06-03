import { Box, Container, ThemeProvider, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Tabsbar from "../../Organisms/Tabs/Index";
import theme from "../../Theme/Theme";

interface Props {
  header: React.ReactNode;
  footer: React.ReactNode;
}

const useStyles = makeStyles({
  mainContainer: {
    width: "100%",
    boxSizing: "border-box",
    padding: "0px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    paddingLeft: "160px",
    marginTop: "150px",
    boxSizing: "border-box",
    width: "970px !important",

  },
  container2: {
    paddingLeft: "160px",
    marginTop: "30px",
    boxSizing: "border-box",
    width: "970px !important",
    minHeight : "100vh",
    display : "flex",
    flexDirection : "column"
  },
  headStyle: {
    color: "#03314B",
    fontWeight: "700",
    fontSize: "36px",
    lineHeight: "45px",
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
  footer : {
    marginTop : "auto"
  }
});

const MyLibrary = (props: Props) => {
  const classes = useStyles();
  return (
    <>
    <ThemeProvider theme={theme}>
      <Box className={classes.mainContainer}>
        {props.header}
      </Box>
        <Container className={classes.container}>
          <Typography variant="h1" className={classes.headStyle}>My Library</Typography>
        </Container>
        <Container className={classes.container2}>
          <Tabsbar />
        </Container>
      
        <Box sx={{marginTop: "100px"}} className = {classes.footer}>{props.footer}</Box>
      </ThemeProvider>
    </>
  );
};

export default MyLibrary;