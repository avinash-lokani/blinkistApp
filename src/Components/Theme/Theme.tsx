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
      fontWeight: "700",
      fontSize: "36px",
      lineHeight: "45.25px",
      color: "#03314B",
    },
    h3: {
      fontFamily: "Cera Pro",
      fontWeight: "700",
      fontSize: "24px",
      lineHeight: "30.17px",
      color: "#03314B",
    },
    h5:{
      fontFamily: "Cera Pro",
      fontWeight: "700",
      fontSize: "16px",
      lineHeight: "20.11px",
    },
    body1: {
      fontFamily: "Cera Pro",
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "20.11px",
    },
    body2: {
      fontFamily: "inherit",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "20.11px",
      color: "#03314B",
    },
    subtitle2: {
      fontFamily: "Cera Pro",
      fontWeight: "400",
      fontSize: "18px",
      lineHeight: "22.63px",
      color: "#6D787E",
    },
    subtitle1: {
      fontFamily: "Cera Pro",
      fontWeight: "700",
      fontSize: "18px",
      lineHeight: "22.63px",
      color: "#03314B",
    },
    caption: {
      fontFamily: "Cera Pro",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "17.6px",
      color: "#6D787E",
    },
    button: {
      textTransform: "none",
      // background: colors.PRIMARY_BTN,
    }
  },

  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
          placeItems: "flex-start",
          "&:active" : {
            color:  "#22C870",
            fontWeight: "700",
          }
        }
      }
    }
  }

});

export default theme;