import React from "react";
import { ThemeProvider, createTheme, List, ListItem, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
		body1: {
			color: "#03314B",
			fontWeight: "700",
			fontSize: "16px",
			lineHeight: "24px",
		  },
		  body2: {
			color: "#6D787E",
			fontWeight: "400",
			lineHeight: "24px"
		  }
	  },
    },
  },
});

const useStyles = makeStyles({
  listStyle: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-start",
    width: "542px",
  },
  innerListStyle: {
    width: "214px",
    display: "flex",
    flexDirection: "column",
    paddingTop: "0px",
  },
  textStyle1: {
	color: "#03314B",
	fontWeight: "bold !important",
	fontSize: "16px",
	lineHeight: "24px",
  },
  textStyle2: {
	color: "#6D787E",
	fontWeight: "400",
	fontSize: "16px",
	lineHeight: "24px",
  }
});

const Lists = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <List className={classes.listStyle}>
        <List className={classes.innerListStyle}>
          <ListItem sx={{ paddingTop: "0px" }}>
            <Typography className={classes.textStyle1} variant="body1">Editorial</Typography>
          </ListItem>
          <ListItem>
            <Typography className={classes.textStyle2} variant="body2">Book lists</Typography>
          </ListItem>
          <ListItem>
            <Typography className={classes.textStyle2} variant="body2">What is Nonfiction?</Typography>
          </ListItem>
          <ListItem>
            <Typography className={classes.textStyle2} variant="body2">What to read next?</Typography>
          </ListItem>
          <ListItem>
            <Typography className={classes.textStyle2} variant="body2">Benefits of reading</Typography>
          </ListItem>
        </List>
        <List
          sx={{
            width: "132px",
            height: "224px",
            paddingLeft: "0px",
            paddingRight: "0px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            paddingTop: "0px",
          }}
        >
          <ListItem sx={{ paddingLeft: "0px", paddingTop: "1px" }}>
            <Typography className={classes.textStyle1} variant="body1">Useful links</Typography>
          </ListItem>
          <ListItem sx={{ paddingLeft: "0px" }}>
            <Typography className={classes.textStyle2} variant="body2">Pricing</Typography>
          </ListItem>
          <ListItem sx={{ paddingLeft: "0px", paddingRight: "0px" }}>
            <Typography className={classes.textStyle2} variant="body2" sx={{ marginRight: "0px" }}>
              Blinkist business
            </Typography>
          </ListItem>
          <ListItem sx={{ paddingLeft: "0px" }}>
            <Typography className={classes.textStyle2} variant="body2">Gift cards</Typography>
          </ListItem>
          <ListItem sx={{ paddingLeft: "0px", paddingRight: "0px" }}>
            <Typography className={classes.textStyle2} variant="body2">Blinkist magaine</Typography>
          </ListItem>
          <ListItem sx={{ paddingLeft: "0px" }}>
            <Typography className={classes.textStyle2} variant="body2">Contact & help</Typography>
          </ListItem>
        </List>
        <List
          sx={{
            width: "132px",
            height: "184px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            paddingTop: "0px",
          }}
        >
          <ListItem sx={{ paddingLeft: "0px", paddingTop: "1px" }}>
            <Typography className={classes.textStyle1} variant="body1">Company</Typography>
          </ListItem>
          <ListItem sx={{ paddingLeft: "0px" }}>
            <Typography className={classes.textStyle2} variant="body2">About</Typography>
          </ListItem>
          <ListItem sx={{ paddingLeft: "0px" }}>
            <Typography className={classes.textStyle2} variant="body2">Careers</Typography>
          </ListItem>
          <ListItem sx={{ paddingLeft: "0px" }}>
            <Typography className={classes.textStyle2} variant="body2">partners</Typography>
          </ListItem>
          <ListItem sx={{ paddingLeft: "0px", paddingRight: "0px" }}>
            <Typography className={classes.textStyle2} variant="body2">Code of Conduct</Typography>
          </ListItem>
        </List>
      </List>
    </ThemeProvider>
  );
};

export default Lists;
