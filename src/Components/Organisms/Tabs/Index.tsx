import { useEffect, useState } from "react";
import Tab from "@mui/material/Tab";
import { Box } from "@mui/material";
import { TabList, TabContext, TabPanel } from "@mui/lab";
import Cards from "../Cards/Index";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import URL from "../../Data/Url";

const useStyles = makeStyles({
  textStyles: {
    textTransform: "none",
    fontSize: "18px",
    fontWeight: "400",
    fontStyle: "normal",
    color: "#6D787E",
    "&:focus": {
      color: "#22C870",
      fontWeight: "700",
      lineHeight: "23px",
    },
    "&:active": {
      color: "#22C870",
      fontWeight: "700",
      lineHeight: "23px",
    },
  },
  borderStyles: {
    borderBottom: "2px solid #E1ECFC",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    margin: "20px 0px",
  },
});



const TabBar= () => {

    const classes = useStyles();

    const [selectedTab,setSelectedTab] = useState("1");

    const [booksTab, setBooksTab] = useState([
        {
          id: 1,
          image: "",
          title: "",
          author: "",
          minutes: "",
          reads: "",
          addToLib: "",
          isFinished: "",
          readAgain: "",
          type: {
            trending: false,
            featured: false,
            justAdded: false,
          },
        },
      ]);

    const [count, setCount] = useState(0);
    
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setSelectedTab(newValue);
    };

    const handleClick = () => {
        if (count < 0) {
          setCount(count + 1);
        } else {
          setCount(count - 1);
        }
      };

      useEffect(() => {
        const myBookdata = async () => {
          const res = await axios.get(`${URL}/myBookData/`);
          const books = res.data;
    
          setBooksTab(books);
        };
        myBookdata();
      }, [count]);

    return(
        <TabContext value = {selectedTab}>
            
        <TabList
        className={classes.borderStyles}
        onChange={handleChange}
        aria-label="checking"
        >
        
        <Tab  
          className={classes.textStyles}
          label="Currently reading"
          value="1" />

          <Tab  className={classes.textStyles} label = "Finished" value = "2" />

        
        </TabList>
    
        <TabPanel sx={{ padding: "0px" }} value = "1">

            <Box className={classes.container}>
                {booksTab
                    .slice(0,9)
                    .filter((item) => !item.isFinished)
                    .map((book,indx) => {
                        return (
                            <Cards 
                            key={indx}
                            title={book.title}
                            author={book.author}
                            minutes={book.minutes}
                            addToLib={false}
                            isFinished={!book.isFinished}
                            image={book.image}
                            num={book.id}
                            onClick={handleClick}
                        />
                   )
                    })
                    }
            </Box>

        </TabPanel>

        <TabPanel sx={{ padding: "0px" }} value="2">
        <Box className={classes.container}>
          {booksTab
            .filter((item) => item.isFinished)
            .map((books, idx) => {
              return (
                <Cards
                  key={idx}
                  title={books.title}
                  author={books.author}
                  minutes={books.minutes}
                  addToLib={false}
                  isFinished={false}
                  image={books.image}
                  num={books.id}
                  readAgain={true}
                  onClick={handleClick}
                />
              );
            })}
        </Box>
      </TabPanel>

        </TabContext>
    )
}

export default TabBar;