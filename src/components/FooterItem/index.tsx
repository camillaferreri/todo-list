import React from "react";
import { Link } from "react-router-dom"

import { Icon } from "../Icon"
import { IconType } from "../Icon"

import "./FooterItem.scss"

interface FooterItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  url: string;
  icon: IconType;
  label: string;
  selected?: boolean;
}

export const FooterItem = ({ url, label, icon, selected, className = '', ...rest }: FooterItemProps) => {

  return (
    <Link 
      to={url} 
      className={`FooterItem ${selected ? 'FooterItem--selected' : ''} ${className}`}
      {...rest}
    >
      <Icon icon={icon}  />
      <span>{label}</span>
    </Link>
  )
}