import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

interface Props {
  bookDetailOrg: React.ReactNode;
  header: React.ReactNode;
  footer: React.ReactNode;
}

const useStyles = makeStyles({
  main : {
    height : "100%"
  },
  footer : {
    height:"370px",
    position:"sticky",
    alignItems : "center",
    marginTop : "auto",
    
    width : "100%"
  },
  body :{
    
    display : "flex",
    flexDirection : "column",
    
  }
})

const BookDetailView = (props: Props) => {

  const classes = useStyles();

  return (
    <>

    <div className = {classes.main}>
      <Container>{props.header}</Container>
        <Container style={{marginTop: "150px"}} className = {classes.body}>
            {props.bookDetailOrg}
        </Container>
        
    
    
    </div>
    <div className={classes.footer}>{props.footer}</div>
    </>
  );
};

export default BookDetailView;