import { Box, Container, ThemeProvider, Typography } from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import React, { useEffect, useState } from "react";
import ButtonGroup from "../ButtonGroup/Index";
import { Time } from "../../Molecules/Reads/Index.stories";
import { TimeIcon } from "../../../Icons";
import BookDetailTab from "../BookDetailsTab/Index";
import axios from "axios";
import theme from "../../Theme/Theme";


const URL = `http://localhost:7000`

export type booksData = {
    id: number;
    title: string;
    author: string;
    subTitle?: string;
    image: string;
    minute?: string;
    reads?: string;
    addToLib: boolean;
    isFinished: boolean;
    readAgain: boolean;
    type?: {
      isFinished?: boolean;
      isReading?: boolean;
      sendToKindle?: boolean;
    };
};

const useStyles = makeStyles({
    mainHead: {
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "36px",
      lineHeight: "45px",
      color: "#03314B",
    },
    subHead: {
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "20px",
      color: "#03314B",
    },
    imageStyle: {
      width: "304px",
      height: "304px",
    },
    author: {
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "20px",
      color: "#6D787E",
    },
    minute: {
      color: "#6D787E",
      lineHeight: "17.6px",
      fontSize: "14px",
      fontWeight: "400",
      fontStyle: "normal",
      textAlign: "left",
    },
    subtitle: {
      fontStyle: "normal",
      fontSize: "20px !important",
      lineHeight: "25px !important",
    },
  });
  
  const LeftContainer = styled("div")({
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    gap: "23px",
  });
  
  const RightContainer = styled("div")({
    display: "flex",
    justifyContent: "flex-end",
  });
  
  const Wrapper = styled("div")({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "912px",
    margin: "0 auto",
});

const BookDetails = () => {

    const classes = useStyles();

    const [bookData,setBookData] = useState<booksData>({
        id: 0,
        title: "",
        author: "",
        image: "",
        minute: "",
        reads: "",
        addToLib: false,
        isFinished: false,
        readAgain: false,
        type: {
          isFinished: false,
          isReading: false,
          sendToKindle: false,
        },
    })

    useEffect(() => {
        const data = async() => {
          const res = await axios.get(`${URL}/myBookDetail/`);
          const books = res.data;
          console.log(books);
          

          setBookData(books);
          
        };
          data();
        
      },[]);

      return (
          <>
            <Wrapper>
        <ThemeProvider theme={theme}>
          <LeftContainer>
            <Typography variant="body2" className={classes.subHead}>
              Get the key ideas from
            </Typography>
            <Typography variant="h1" className={classes.mainHead}>
              {bookData.title}
              {/* Beyond Entrepreneurship 2.0 */}
            </Typography>
            <Typography variant="body2" className={classes.subtitle}>
              Turning Your Business into an Enduring Great Company
            </Typography>
            <Typography variant="body1" className={classes.author}>
              {bookData.author}
              {/* Jim Collins & Bill Lazier */}
            </Typography>
            <Typography variant="caption">
              <Time
                startIcon={<TimeIcon />}
                className={classes.minute}
                children={"15-minute read"}
              ></Time>
            </Typography>
            <Box>
              <ButtonGroup num={10} disabled = {!bookData.isFinished}></ButtonGroup>
            </Box>
            <Box>
              <BookDetailTab
                synopsis={
                  "Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world."
                }
                aboutAuthor={"about the author"}
                forWhom={"who is it for"}
              />
            </Box>
          </LeftContainer>
          <RightContainer>
            <img
              src={`${bookData.image}`}
              className={classes.imageStyle}
              alt="book cardImg"
            />
          </RightContainer>
        </ThemeProvider>
      </Wrapper>
          </>
      )
}

export default BookDetails