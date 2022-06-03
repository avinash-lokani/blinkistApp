import React from 'react'
import Logo from "../../../images/logo.png";

interface Props {
    className?: string;
    onClick?: () => void;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

const BrandLogo = (props: Props) => {
  return (
    <img src={Logo} alt="Logo" className={props.className} />
  )
}

export default BrandLogo;