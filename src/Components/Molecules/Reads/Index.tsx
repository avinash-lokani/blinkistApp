import React, { HTMLAttributes, ReactNode } from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  variant?: "contained" | "text" | "outlined" | undefined;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  className ?: string;
  children?: ReactNode;
  onClick?: () => void;
}

const useStyles = makeStyles({
  textStyles: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px !important",
    lineHeight: "17.6px",
    color: "#6D787E !important",
  },
  Container: {
    display: "flex",
    padding: "5px",
  },
});

const Reads = (props: Props) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.Container}>
        <div className={props.className}>{props.startIcon}</div>
        <Typography variant="body2" className={classes.textStyles}>{props.children}</Typography>
        <div className={props.className}>{props.endIcon}</div>
      </div>
    </>
  );
};

export default Reads;
