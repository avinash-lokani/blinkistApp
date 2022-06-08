import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Buttons from "Components/Molecules/Button/Button";
import { RightArrowIcon } from "Icons";   
import { useEffect, useState } from "react";
import axios from "axios";
import URL from "Components/Data/Url";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
    mainCont: {
      height: "100px",
      padding: "0px",
      width: "100%",
      display: "flex !important",
      justifyContent: "flex-start",
      flexDirection: "row",
      
      gap: "20px",
    },
    readN: {
      lineHeight: "20px",
      border: "1px solid #3A4649 !important",
      borderRadius: "4px",
      textTransform: "none",
      color: "#22C870",
      fontSize: "16px",
      fontWeight: "500",
      fontStyle: "normal",
      
      height: "44px",
      "&:hover": {
        border: "1px solid #3A4649 !important",
      },
    },
    finishedReading: {
      width: "170px",
      height: "44px",
      backgroundColor: "#2CE080 !important",
      border: "none !important",
      color: "#03314B ",
      textAlign: "center",
      
      "&:hover": {
        backgroundColor: "#20BA68 !important",
        border: "none !important",
      },
    },
    sendToKindle: {
      width: "156px",
      height: "44px",
      color: "#6D787E !important",
      
      textTransform: "none",
    },
  });
  
  interface Props {
    num: number;
    disabled : boolean;
  }
  

const ButtonGroup = (props: Props) => {
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

   const navigate = useNavigate();

  const handleFinished = async (n: number) => {
    if (bookData.isFinished) {
      bookData.isFinished = false;
      
    } else {
      bookData.isFinished = true;
    }
    
    console.log( bookData);

    await axios.put(`${URL}/myBookData/${bookData.id}`, bookData);
     navigate("/")
  };

  const handleRead = async (n: number) => {
    if(bookData.isFinished){
      bookData.readAgain = true;
      bookData.isFinished = false;
    }
    await axios.put(`${URL}/myBookData/${bookData.id}`, bookData);
     navigate("/");
  };

  useEffect(() => {
    const myData = async () => {
      const res = await axios.get(`http://localhost:7000/BookDetail/`);
      const books = res.data;
      setBookData(books);
    };
    return () => {
      myData();
    };
  });

  const classes = useStyles();
  return (
      <Box className={classes.mainCont}>
        <Buttons
          variant="outlined"
          className={classes.readN}
          onClick={() => handleRead(props.num)}
          disabled = {props.disabled}
          
        >
          Read now
        </Buttons>
        <Buttons
          variant="outlined"
          onClick={() => handleFinished(props.num)}
          className={classes.finishedReading}
          disabled = {!props.disabled}
         
        >
          Finished Reading
        </Buttons>
        <Buttons
          variant="text"
          endIcon={
            <RightArrowIcon sx={{ position: "relative", top: "4.5px" }} />
          }
          className={classes.sendToKindle}
        >
          Send to Kindle
        </Buttons>
      </Box>
  );
};

export default ButtonGroup;