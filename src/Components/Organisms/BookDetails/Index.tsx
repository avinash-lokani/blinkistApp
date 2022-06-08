import { Box, Container, ThemeProvider, Typography } from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import React, { useEffect, useState } from "react";
import ButtonGroup from "Components/Organisms/GroupOfButtons/Index";
import { Time } from "Components/Molecules/NoOfReads/Index.stories";
import { TimeIcon } from "Icons";
import BookDetailTab from "Components/Organisms/BooksTab/Index";
import axios from "axios";
import theme from "Components/Theme/Theme";


const LINK = `http://localhost:7000`

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
    type: {
      trending: boolean,
      featured: boolean,
      justAdded: boolean,
    },
};

const useStyles = makeStyles({
   
    subHeading: {
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "20px",
      color: "#03314B",
    },
    heading: {
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "36px",
      lineHeight: "45px",
      color: "#03314B",
    },
    cardImg: {
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
    min: {
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
  
  const Whole = styled("div")({
    width: "912px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    
});

  const LeftSide = styled("div")({
    gap: "23px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    
  });
  
  const RightSide = styled("div")({
    display: "flex",
    justifyContent: "flex-end",
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
          trending: false,
          featured: false,
          justAdded: false,
        },
    })

    useEffect(() => {
        const data = async() => {
          const res = await axios.get(`${LINK}/BookDetail/`);
          const books = res.data;
          console.log(books);
          

          setBookData(books);
          
        };
          data();

          console.log(bookData.image);
        
      },[bookData]);

      return (
          <>
            <Whole>
        <ThemeProvider theme={theme}>
          <LeftSide>
            <Typography variant="body2" className={classes.subHeading}>
              Get the key ideas from
            </Typography>
            <Typography variant="h1" className={classes.heading}>
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
                className={classes.min}
                children={"15-minute read"}
              ></Time>
            </Typography>
            <Box>
              <ButtonGroup num={10} disabled = {!bookData.isFinished} ></ButtonGroup>
            </Box>
            <Box>
              <BookDetailTab
                synopsis={
                  "Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world."
                }
                aboutAuthor={"author"}
                forWhom={""}
              />
            </Box>
          </LeftSide>
          <RightSide>
            <img
              src={`${bookData.image}`}
              className={classes.cardImg}
              alt="book cardImg"
            />
          </RightSide>
        </ThemeProvider>
      </Whole>
          </>
      )
}

export default BookDetails