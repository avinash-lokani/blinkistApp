import React, { HTMLAttributes, ReactNode } from "react";

import {
    Button,
    createTheme,
    ThemeProvider,
    Typography,
  } from "@mui/material";
  

  const theme = createTheme({

    palette : {
      action : {
        disabled : "#00000042",
      }
    },

    components:{
      MuiTypography: {
          styleOverrides: {
            body1: {
              color: "#22C870",
              fontSize: "16px",
              fontWeight: "500",
              fontStyle: "normal",
              fontFamily: "Cera Pro",
              lineHeight: "20px",
              borderRadius: "4px"
            },
          },
        },
        MuiButton: {
          styleOverrides: {
            root: {
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "16px",
              fontFamily: "Cera Pro",
              lineHeight: "20px"
            }
          }
        }
      },
      typography: {
          button: {
            textTransform: "none"
          }
      }

  })


  export interface Props extends HTMLAttributes<HTMLButtonElement> {
    variant?: "contained" | "text" | "outlined" | undefined;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    children?: ReactNode;
    onClick?: () => void;
    className?: string;
    disabled ?: boolean;
    style?: React.CSSProperties;
  }
  
  
  const Buttons = (props: Props) => {
    
    const { startIcon, endIcon, variant, children,disabled } = props;
    return (
    <ThemeProvider theme={theme}>
      <Typography>
        <Button
        onClick={props.onClick}
          variant={variant}
          disabled = {disabled}
          startIcon={startIcon}
          endIcon={endIcon}
          className={props.className}
          style={props.style}
        >
          {children}
        </Button>
      </Typography>
    </ThemeProvider>
        
    
    );
  };

  export default Buttons;
