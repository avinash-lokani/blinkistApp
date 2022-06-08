import { Container, createTheme, ThemeProvider, Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import IconButtons from "Components/Molecules/IconButtons/Index";
import expandedNavItems from "Components/Data/NavData";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
    mainCont: {
      boxSizing: "border-box",
      color: "#6D787E",
      zIndex: "10",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: "398px",
      background: "#F1F6F4",
      
      width: "100%",
      position: "absolute",
      top: "86px",
      left:"0"
    },
    subContainers: {
      display: "flex !important",
      justifyContent: "space-evenly",
      marginTop: "10px",
      width: "990px !important",
      flexDirection: "row",
      
    },
    BoxContainer: {
      display: "flex",
      flexDirection: "row",
     
      padding: "37px 0px 25px 40px",
      justifyContent: "initial",
      width: "900px",
      gap: "200px",
      borderBottom: "1px solid #042330",
    },
    iconStyle: {
      color: "#042330",
      width: "16px",
      height: "22.05px",
    },
    textStyle: {
      fontSize: "16px",
      lineHeight: "20.11px",
      color: "#6D787E",
      fontStyle: "normal",
      fontWeight: "400",
     
      marginLeft: "6px",
    },
    headingStyle: {
      color: "#6D787E",
      
      cursor: "pointer",
      "&:hover": {
        color: "#116BE9",
      },
      "&:focus": {
        color: "#116BE9",
      },
      "&:active": {
        color: "#116BE9",
      },
      fontWeight: "500",
      lineHeight: "20px",
      fontSize: "16px",
    },
});

const theme = createTheme({
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            fontSize: "16px",
            lineHeight: "20.11px",
            fontFamily: "Cera Pro",
            fontWeight: "400",
           
          },
          body1: {
            fontSize: "16px",
            fontFamily: "Cera Pro",
            fontWeight: "700",
            
            lineHeight: "20.11px",
          }
        }
      }
    }
})

const ExpandedNav = () => {

    const classes = useStyles();

    const navigate = useNavigate();

    const handleClick = () => {
      navigate("/entrepreneur")
    }


    return (
        <ThemeProvider theme={theme}>
            <div className={classes.mainCont}>
                <Box className={classes.BoxContainer}>
                <Typography variant="body1" sx={{color: "#116BE9"}} className={classes.headingStyle}>
                    Explore by category
                </Typography>
                <Typography variant="body1" className={classes.headingStyle}>
                    See recently added title
                </Typography>
                <Typography variant="body1" className={classes.headingStyle}>
                    See popular titles
                </Typography>
                </Box>

                <Container className={classes.subContainers}>
                    <Container>
                    {expandedNavItems[0].map((item, key) => {
                        return (
                        <IconButtons
                            style={{ display: "flex", margin: "5px" ,padding: "10px", cursor: "pointer" }}
                            className={classes.textStyle}
                            onClick = {handleClick}
                            startIcon={
                            item.iconImage 
                            }
                            variant = "body2"
                            children={item.title}
                            key={key}
                        ></IconButtons>
                        );
                    })}
                    </Container>
                    <Container>
                    {expandedNavItems[1].map((item, key) => {
                        return (
                        <IconButtons
                            style={{ display: "flex", margin: "5px", padding: "10px",cursor: "pointer"  }}
                            className={classes.textStyle}
                            startIcon={item.iconImage}
                            children={item.title}
                            key={key}
                            variant = "body2"
                        ></IconButtons>
                        );
                    })}
                    </Container>
                    <Container>
                    {expandedNavItems[2].map((item, key) => {
                            return (
                            <IconButtons
                                style={{ display: "flex", margin: "5px", padding: "10px",cursor: "pointer"  }}
                                className={classes.textStyle}
                                startIcon={item.iconImage}
                                children={item.title}
                                key={key}
                                variant = "body2"
                            ></IconButtons>
                            );
                        })}
                    </Container>
                </Container>

            </div>
        </ThemeProvider>
    )

}

export default ExpandedNav;