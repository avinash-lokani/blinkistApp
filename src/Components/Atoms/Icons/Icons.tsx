import React, { HTMLAttributes, ReactNode } from 'react'

export interface Props extends HTMLAttributes<HTMLButtonElement>{
    variant?: 'contained'|'text'|'outlined'|undefined;
    startIcon?:ReactNode;
    endIcon?:ReactNode;
    children?:ReactNode;
    onClick?: () => void;
    style?: React.CSSProperties;
}

const Icons = (props: Props) => {
  return (
    <div role="icon" onClick={props.onClick} className={props.className} style={props.style}>
        {props.children}
    </div>
  )
}

export default Icons