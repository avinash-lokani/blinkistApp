import React, { useEffect, useState } from "react";
import { Card, CardMedia, CardContent, CardActions, ThemeProvider, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Theme from "Components/Theme/Theme"
import Reads from "Components//Molecules/NoOfReads/Index";
import { AddIcon, TimeIcon, UserIcon } from "Icons";
import  IconButton from "Components/Molecules/IconButtons/Index"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import URL from "Components/Data/Url"

export interface BookProps {
    children?: React.ReactNode;
    id?: number;
    image?: string;
    title?: string;
    author?: string;
    minutes?: any;
    reads?: string;
    addToLib?: boolean;
    isFinished?: boolean;
    readAgain?: boolean;
    num: number;
    onClick?: () => void;
    className?: string;
}

const useStyles = makeStyles({
    mainContainer: {
      margin: "10px",
      display: "flex",
    },
    cards: {
      width: "284px",
      height: "auto",
      border: "1px solid #E1ECFC",
      background: "#FFFFFF",
      borderRadius: "8px",
      cursor: "pointer",
      
      boxSizing: "border-box",
      "&:hover": {
        background: "#E1ECFC",
      },
    },
    textStyles: {
      fontWeight: "bold",
      fontSize: "18px",
      lineHeight: "22.63px",
      color: "#03314B",
      
      fontStyle: "normal",
    },
    readStyles: {
      justifyContent: "space-between",
      color: "#6D787E",
      display: "flex",
      
      boxSizing: "border-box",
    },
    author: {
      lineHeight: "20px",
      fontStyle: "normal",
      fontSize: "16px",
      color: "#6D787E",
      margin: "15px 0px",
      
      fontWeight: "500",
    },
    BtnaddtoLib: {
      display: "flex",
      alignItems: "center",
      color: "#0365F2",
      borderTop: "1px solid #E1ECFC",
      boxSizing: "border-box",
      flexDirection: "row",
      justifyContent: "center",
      
      borderRadius: "0px 0px 4px 4px",
      cursor: "pointer",
      "&:hover": {
        color: "white",
        backgroundColor: "#0365F2",
      },
    },
    timeIconStyle: {
      height: "16.67px",
      color: "#6D787E",
    },
    userIconStyle: {
      height: "17.5px",
      color: "#6D787E",
    },
    optionalBtnTextStyles: {
      fontSize: "16px",
      lineHeight: "20px",
      color: "#0365F2",
      fontStyle: "normal",
      fontWeight: "500",
     
      cursor: "pointer",
      margin: "0px auto !important",
    },
    tabs:{
      height : "52px"
    }
  });


const Cards = (props: BookProps) => {
  const [bookData, setBookData] = useState({
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
  });

  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    

    const myBookData = async (n: number) => {
      if (n && n !== 0) {
        const res = await axios.get(`${URL}/myBookData/${n}`);
        const books = res.data;
        setBookData(books);
       
      }
      console.log(props.image);
    };
    myBookData(props.num);
  }, [count, props.image, props.num]);

  const handleFinished = async (n: number) => {
    if (bookData.isFinished) {
      bookData.isFinished = false;
    } else {
      bookData.isFinished = true;
    }
    if (count < 0) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
    props.onClick === undefined ? (console.log("")) : props.onClick()
    await axios.put(`${URL}/myBookData/${n}`, bookData);
  };

  const handleCardData = async(n : number) => {
    const res = await axios.get(`${URL}/myBookData/${n}`);
    props.onClick === undefined ? (console.log("")) : props.onClick()
    await axios.put(`http://localhost:7000/BookDetail/`, res.data);
    navigate("/bookDetails")
  }

  const addToLibrary = async (n: number) => {
    bookData.addToLib = false;
    bookData.isFinished = true;
    if (count < 0) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
    props.onClick === undefined ? (console.log("")) : props.onClick()
    await axios.put(`${URL}/myBookData/${10}`, bookData); // updating lib
    navigate("/");
  };

    const classes = useStyles();


    return (
        <ThemeProvider theme={Theme}>
            <div className={classes.mainContainer}>
                <Card className={classes.cards}>
                    <CardMedia component="img" image={props.image} alt = "card Image"></CardMedia>
                        <CardContent style={{padding: "12px"}} onClick = {() => handleCardData(props.num)}>
                            <Typography className={classes.textStyles} variant="subtitle1">
                                {props.title}
                            </Typography>
                            <Typography variant="body2">
                                <div className={classes.author}>{props.author}</div>
                                <div className={classes.readStyles}>
                                    <Reads 
                                    startIcon = {<TimeIcon />}
                                    children = {props.minutes}
                                    className={classes.timeIconStyle}
                                    />
                                    {props.reads === undefined ? null : (
                                        <Reads
                                         startIcon = {<UserIcon />}
                                         children = {props.reads}
                                         className={classes.userIconStyle}
                                         /> 
                                    )}
                                </div>
                            </Typography>
                        </CardContent>
<div className = {classes.tabs}>
                        { props.isFinished ? (
                            <CardActions onClick={ () => handleFinished(props.num)}>
                                <Typography 
                                variant="body1"
                                className={classes.optionalBtnTextStyles}
                                >
                                    Finished
                                </Typography>
                            </CardActions>
                        ) : null}

                    {props.readAgain ? (
                                <CardActions onClick={() => handleFinished(props.num)}>
                                <Typography
                                    variant="body1"
                                    className={classes.optionalBtnTextStyles}
                                >
                                        Read Again
                                    </Typography>
                                    </CardActions>
                                ) : null}

                    {props.addToLib ? (
                                <CardActions
                                className={classes.BtnaddtoLib}
                                onClick={() => addToLibrary(props.num)}
                                >
                                <IconButton
                                    startIcon={<AddIcon />}
                                    style={{
                                    display: "flex",
                                    height: "36px",
                                    bottom:"0px",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    }}
                                    children="Add to library"
                                ></IconButton>
                                </CardActions>
                            ) : null}

</div>                 
                </Card>
            </div>
        </ThemeProvider>
    )
}

export default Cards

