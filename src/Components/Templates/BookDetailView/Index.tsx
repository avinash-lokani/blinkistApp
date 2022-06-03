import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

interface Props {
  bookDetailOrg: React.ReactNode;
  header: React.ReactNode;
  footer: React.ReactNode;
}

const useStyles = makeStyles({
  footer : {
    height:"370px",
    position:"relative",
    bottom : "0",
    alignItems : "center",
    width : "100%"
  },
  body :{
    minHeight: "100vh",
    display : "flex",
    flexDirection : "column"
  }
})

const BookDetailView = (props: Props) => {

  const classes = useStyles();

  return (
    <>

    <Container>
      <Container>{props.header}</Container>
        <Container style={{marginTop: "150px"}} className = {classes.body}>
            {props.bookDetailOrg}
        </Container>
        
    </Container>
    <div className={classes.footer}>{props.footer}</div>
      
    </>
  );
};

export default BookDetailView;