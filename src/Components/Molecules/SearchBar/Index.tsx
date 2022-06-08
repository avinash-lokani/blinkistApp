import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { TextField, InputAdornment } from "@mui/material";
import { SearchIcon } from "Icons";
import BookData from "Components/Data/BooksData";

const useStyles = makeStyles({
  textStyles: {
    color: "#3A4649",
    borderBottom: "#6D787E",
  },
  "&:focus": {
    color: "#3A4649",
    borderBottom: "#6D787E",
  },
});

const SearchBar = () => {

  const classes = useStyles();
  const [count, setCount] = useState(0);
  const [bookData, setBookData] = useState([
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



  const search = (val: string, books: any) => {
    console.log(val)
    const filteredData = [];
    for (let i = 0; i < books.length; i++) {
      val = val.toLowerCase();
      const bookName = books[i].title.toLowerCase();
      if (bookName.includes(val)) {
        filteredData.push(books[i]);
      }
    }
    return filteredData;
  };


  const handleChange = async (e: any) => {
    const val = e.target.value;
    if (count < 0) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }

    const books = search(val, BookData);
    setBookData(books);
    console.log(books);
  };

  return (
    <div style={{ width: "912px", margin: "58px auto 0px auto" }}>
      <TextField
        variant="filled"
        className={classes.textStyles}
        placeholder="Search by title or author"
        onChange={(e) => handleChange(e)}
        InputProps={{
          style: {
            backgroundColor: "white",
            border: "none",
            fontWeight: "700",
            width: "687px",
            height: "46px",
            fontSize: "24px",
            lineHeight: "30.17px",
            
            paddingBottom: "16px",
            paddingLeft: "0px",
          },
          startAdornment: (
            <InputAdornment
              position="start"
              sx={{
                marginLeft: "0px",
                paddingLeft: "0px",
                marginRight: "27px",
              }}
            >
              <SearchIcon
                sx={{
                  
                  marginLeft: "0px",
                  width: "23.7px",
                  height: "23.7px",
                  paddingLeft: "0px",
                }}
              />
            </InputAdornment>
          ),
        }}
        sx={{ display: "flex" }}
      />
    </div>
  )
}

export default SearchBar;