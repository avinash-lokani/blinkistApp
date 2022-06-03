import styled from '@emotion/styled';
import { createTheme, ThemeProvider, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import React from 'react';
import Logo from "../../Atoms/Logo/Index";
import Lists from '../../Molecules/Lists/Index';

const theme = createTheme({
    components: {
        MuiTypography:{
            styleOverrides: {
                subtitle1: {
                    color: "#0365F2",
                    fontSize: "24px",
                    fontWeight: "500",
                    lineHeight: "32px",
                },
                caption: {
                    color: "#6D787E",
                    fontSize: "14px",
                    fontWeight: "500",
                    lineHeight: "22px",
                }
            }
        }
    }
});

const useStyles = makeStyles({
    headingText: {
      color: "#0365F2",
      fontSize: "24px !important",
      fontWeight: "500",
      lineHeight: "32px",
    },
    bottomText:{
      color: "#6D787E",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "22px",
      fontStyle: "normal",
    }
  })
  
  const Container = styled("div")({
      width: "100%",
      display: "flex",
      flexDirection: "column",
      height: "390px",
      gap: "48px",
      backgroundColor: "#F1F6F4",
      position: "relative",
      left: 0,
      bottom: 0,
      right: 0,
      justifyContent: "center",
      alignItems: "center",
  });
  
  const SubContainer = styled("div")({
      width: "950px",
      height: "224px",
      gap: "32px",
      position: "relative",
      top: "38px",
      display: "flex",
      bottom: "108px",
    });
    
    const LeftContainer = styled("div")({
      width: "378px",
      height: "120px",
    });
    
    const TypographyFrame = styled("div")({
      position: "relative",
      top: "56px",
      color: "#0365F2",
    });
    
    const RightContainer = styled("div")({
      width: "542px",
      height: "224px",
      display: "flex",
    });
    
    const BelowContainer = styled("div")({
      width: "546px",
      height: "22px",
      position: "relative",
      top: "20px",
      left: "0px",
    });

const Footer = () => {

    const classes = useStyles();
    return (
        <>
            <ThemeProvider theme={theme}>
                <Container>
                    <SubContainer>
                        <LeftContainer>
                            <Logo/>
                            <TypographyFrame>
                            <Typography variant="subtitle1" className={classes.headingText}>
                                Big ideas in small packages  
                            </Typography>
                            <Typography variant="subtitle1" className={classes.headingText}>
                                Start learning now
                            </Typography>
                            </TypographyFrame>
                        </LeftContainer>
                        <RightContainer>
                            <Lists></Lists>
                        </RightContainer>
                    </SubContainer>
                    <BelowContainer>
                        <Typography variant="caption" className={classes.bottomText}>
                        © Blinkist 2021 Sitemap   |   Imprint   |   Terms of Service   |   Privacy Policies
                        </Typography>
                    </BelowContainer>
                </Container>
            </ThemeProvider>
        </>
    )

}

export default Footer;