 import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main:  "#22C870",
    },
  },
  typography: {
    h1: {
      fontFamily: "Cera Pro",
      fontSize: "36px",
      lineHeight: "45.25px",
      color: "#03314B",
      fontWeight: "700",
      
    },
    h3: {
      fontFamily: "Cera Pro",
      
      color: "#03314B",
      fontWeight: "700",
      fontSize: "24px",
      lineHeight: "30.17px",
    },
    h5:{
      fontFamily: "Cera Pro",
      fontSize: "16px",
      lineHeight: "20.11px",
      fontWeight: "700",
      
    },
    body1: {
      fontFamily: "Cera Pro",
      fontSize: "16px",
      lineHeight: "20.11px",
      fontWeight: "500",
      
    },
    body2: {
      fontFamily: "inherit",
      
      lineHeight: "20.11px",
      fontWeight: "400",
      fontSize: "16px",
      color: "#03314B",
    },
    subtitle2: {
      fontFamily: "Cera Pro",
      fontSize: "18px",
      lineHeight: "22.63px",
      color: "#6D787E",
      fontWeight: "400",
      
    },
    subtitle1: {
      fontFamily: "Cera Pro",
      fontWeight: "700",
      lineHeight: "22.63px",
      color: "#03314B",
      fontSize: "18px",
    
    },
    caption: {
      fontFamily: "Cera Pro",
      fontSize: "14px",
      lineHeight: "17.6px",
      color: "#6D787E",
      fontWeight: "400",
      
    },
    button: {
      textTransform: "none",
    }
  },

  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          "&:active" : {
            color:  "#22C870",
            fontWeight: "700",
          },
          textTransform: "none",
          placeItems: "flex-start",
        }
      }
    }
  }

});

export default theme;