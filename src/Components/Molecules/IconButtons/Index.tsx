import React, { HTMLAttributes, ReactNode } from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";



export interface Props extends HTMLAttributes<HTMLButtonElement> {
  variant?:
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "overline"
    | "inherit"
    | undefined;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  children?: ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
}



const useStyles = makeStyles({
    iconStyles: {
      marginTop:"3px",
      width: "14px",
      height: "16px",
      position: "relative",
      marginRight: "15px",
    },
    textStyles: {
      fontWeight: "400",
      fontSize: "14px",
    },
  });
  
  const IconButton = (props: Props) => {
    const classes = useStyles()
    return (
      <>
        <div style={props.style}>
          <div data-testid="startIcon" className={classes.iconStyles}>
            {props.startIcon}
          </div>
          <Typography variant={props.variant} onClick={props.onClick} className={classes.textStyles}>
            {props.children}
          </Typography>
          <div data-testid="endIcon">{props.endIcon}</div>
        </div>
      </>
    );
  };
  
  export default IconButton;