import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Buttons from "../../Molecules/Button/Button";
import { RightArrowIcon } from "../../../Icons";
import { useEffect, useState } from "react";
import axios from "axios";
import URL from "../../Data/Url";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
    mainBox: {
      display: "flex !important",
      justifyContent: "flex-start",
      flexDirection: "row",
      height: "100px",
      padding: "0px",
      width: "100%",
      gap: "20px",
    },
    readNow: {
      color: "#22C870 !important",
      fontSize: "16px",
      fontWeight: "500",
      fontStyle: "normal",
      lineHeight: "20px",
      border: "1px solid #3A4649 !important",
      borderRadius: "4px",
      textTransform: "none",
      height: "44px",
      "&:hover": {
        border: "1px solid #3A4649 !important",
      },
    },
    finishedReading: {
      color: "#03314B !important",
      textAlign: "center",
      width: "170px",
      height: "44px",
      background: "#2CE080 !important",
      border: "none !important",
      "&:hover": {
        backgroundColor: "#20BA68 !important",
        border: "none !important",
      },
    },
    sendToKindle: {
      color: "#6D787E !important",
      width: "156px",
      height: "44px",
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
    
    console.log(`${URL}/myBookData/${bookData.id}`, bookData)

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
      const res = await axios.get(`http://localhost:7000/myBookDetail/`);
      const books = res.data;
      setBookData(books);
    };
    return () => {
      myData();
    };
  });

  const classes = useStyles();
  return (
      <Box className={classes.mainBox}>
        <Buttons
          variant="outlined"
          className={classes.readNow}
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