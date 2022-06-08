import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";

interface TabPanelProps {
    children? : React.ReactNode;
    index : number;
    value : number;
}

interface Props {
    synopsis ?: string;
    aboutAuthor?: string;
    forWhom ?: string;
}

const theme = createTheme({
    components: {
        MuiTab:{
           styleOverrides: {
             root: {
               "&.Mui-selected" : {
                borderBottom: "#2CE080",
                borderColor: "#2CE080",
                color: "#03314B",
                
               },
               "&.MuiTab-root":{
                borderBottom: "#2CE080",
                borderColor: "#2CE080",
               },
               fontWeight: "400",
               fontSize: "16px",
               lineHeight: "20.11px",
               color: "#2CE080",
               textTransform: "none",
               fontFamily: "Cera Pro"
             },
           }
        }
      },
})

const useStyles = makeStyles({
    textFormat: {
      lineHeight: "20px",
      color: "#03314B",
        fontWeight: "400 !important",
        fontSize: "16px",

      },
      Head: {
        "&:focus": { color: "#03314B !important" },
        "&:active": { color: "#03314B !important" },
        color: "#6D787E",
       
      },
});

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  
  const BookDetailTab = (props: Props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
  
    return (
      <ThemeProvider theme={theme}>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 2, borderColor: "#E1ECFC" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                className={classes.Head}
                label="Synopsis"
                {...a11yProps(0)}
              />
              <Tab
                className={classes.Head}
                label="Who is it for"
                {...a11yProps(1)}
              />
              <Tab
                className={classes.Head}
                label="About the author"
                {...a11yProps(2)}
              />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Typography variant="body2" className={classes.textFormat}>
              {props.synopsis}
            </Typography>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Typography variant="body2" className={classes.textFormat}>
              {props.aboutAuthor}
            </Typography>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Typography variant="body2" className={classes.textFormat}>
              {props.forWhom}
            </Typography>
          </TabPanel>
        </Box>
      </ThemeProvider>
    );
  };
  
  export default BookDetailTab;