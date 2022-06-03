import React from "react";
import {
  createTheme,
  Container,
  ThemeProvider,
  Typography
} from "@mui/material";
import banner from "../../../images/banner.png";
import { styled , makeStyles} from "@mui/styles";

export interface bannerProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        subtitle2: {
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "22.63px",
            color: "#6D787E",
            fontFamily: "Cera Pro",
        },
        h4: {
          fontSize: "36px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "45px",
          color: "#03314B",
        },
      },
    },
  },
});

const useStyles = makeStyles({
    heading: {
        fontSize: "36px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "45px",
          color: "#03314B",
    },
    subHeading: {
        fontSize: "18px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "22.63px",
        color: "#6D787E",
    }
})

const MainContainer = styled("div")({
  backgroundColor: "#F1F6F4",
  display: "flex",
  margin: "0 auto",
  gap: "112px",
  width: "912px",
  height: "264px",
});

const LeftContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  bottom: "45px",
  top: "45px",
  position: "relative",
  left: "45px",
  gap: "15px",
});

const Heading = styled("div")({
  height: "90px",
  width: "319px",
});

const SubHeading = styled("div")({
  height: "69px",
  width: "461px",
});

const RightContainer = styled("div")({

})

const Banner = (props: bannerProps) => {
    const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Container className={props.className}>
        <MainContainer>
          <LeftContainer>
            <Heading>
              <Typography variant="h4" className={classes.heading}>
                Explore Books on entrepreneurship
              </Typography>
            </Heading>
            <SubHeading>
              <Typography variant="subtitle2" className={classes.subHeading}>
                Everything you need to know about thriving on a shoestring
                budget, making your first million, and hiring right from the
                start.
              </Typography>
            </SubHeading>
          </LeftContainer>
          <RightContainer>
              <img src={banner} alt="banner girl"/>
          </RightContainer>
        </MainContainer>
      </Container>
    </ThemeProvider>
  );
};

export default Banner;