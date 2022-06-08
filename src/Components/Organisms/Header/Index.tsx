import { makeStyles, styled } from "@mui/styles";
import { useState } from "react";
import ExpandedNav from "Components/Organisms/NavExpanded/Index";
import {
    Container,
    createTheme,
    ThemeProvider,
    Typography,
  } from "@mui/material";
  import Logo from "Components/Atoms/Logo/Index";
  import Icons from "Components/Atoms/Icons/Icons";
  import Dropdown from "Components/Molecules/DropDown/Index";
  import {useNavigate} from "react-router-dom";
  import {SearchIcon} from "Icons";
  import LogOutButton from "Components/Organisms/LogoutButton/Index";

  const theme = createTheme({
    components: {
        MuiTypography: {
          styleOverrides: {
            body1: {
              fontSize: "16px",
              lineHeight: "20px",
              color: "#03314B",
              fontWeight: "500",
              fontStyle: "normal",
              
            },
          },
        },
      },
  })

  const useStyles = makeStyles({
    logo: {
      width: "124.9px",
      height: "26px",
    },
    navItem: {
      cursor: "pointer",
      color: "#03314B",
      fontStyle: "normal",
      fontSize: "16px !important",
      lineHeight: "20px",
      fontWeight: "500",
      "&:hover": {
        borderBottom: "2px solid #22C870",
      },
    },
    library: {
      marginTop:"200px",
      cursor: "pointer",
      color: "#03314B",
      fontStyle: "normal",
      fontSize: "16px !important",
      fontFamily: "Cera Pro !important",
      lineHeight: "20px",
      fontWeight: "500",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "&:hover": {
        borderBottom: "2px solid #22C870",
      },
    },
    account: {
      marginLeft: "auto",
      position: "relative",
      right: "0px",
      alignSelf: "center",
    },
    subContainer: {
      display: "flex !important",
      flexDirection: "row",
      justifyContent: "space-between",
    
      padding: "0px",
      margin: "0px",
      height: "86px",
      alignItems: "center",
      position: "fixed",
      top: "0",
      backgroundColor:"white",
      zIndex:"999",
       width: "100%"
    },
    pointer:{
      cursor: "pointer",
      position: "relative",
      top: "5px",
    }
  });

  const MainContainer = styled("div")({
    display: "flex",
    flexDirection: "row",
    gap: "40px",
  });

  const Header = () => {

    const navigate = useNavigate();

    const classes = useStyles();
    const [isExploreClicked, setExploreClicked] = useState<boolean>(false);
    const [iconStyle, setIconStyle] = useState({ transform: "rotate(0deg)" });
   
    const displayExploreDropdown = () => {
      isExploreClicked ? setExploreClicked(false) : setExploreClicked(true);
  
      if (isExploreClicked) {
        setIconStyle({ transform: "rotate(0deg)" });
      } else {
        setIconStyle({ transform: "rotate(180deg)" });
      }
    };

    const handleClick = () => {
      navigate("/");
    }

    return (
        <ThemeProvider theme={theme}>
            <Container className={classes.subContainer}>
                <MainContainer>
                    <Logo className={classes.logo}/>
                    <Icons className={classes.pointer} >
                        <SearchIcon sx={{width: "20.31px", height: "20.31px"}}></SearchIcon>
                    </Icons>
                    <Dropdown
                        className={classes.navItem}
                        onClick={displayExploreDropdown}
                        style={iconStyle}
                        title="Explore"
                    />
                    <Typography className={classes.library} onClick={handleClick} variant="body1">
                        My Library
                    </Typography>
                </MainContainer>
                <MainContainer>
                <LogOutButton/>
                </MainContainer>
            </Container>
            {isExploreClicked ? <ExpandedNav/> : null}
        </ThemeProvider>   
      )
}

export default Header;
