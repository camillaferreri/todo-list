import React, { ReactChild } from "react";
import { Link } from "react-router-dom"

import { Icon } from "../Icon"
import { IconType } from "../Icon"

import "./MenuItem.scss"

interface MenuItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  url: string;
  icon: IconType;
  label: string;
  selected?: boolean;
  children?: ReactChild
}

export const MenuItem = ({ url, label, icon, selected, className = '', children, ...rest }: MenuItemProps) => {

  return (
    <Link 
      to={url} 
      className={`MenuItem ${selected ? 'MenuItem--selected' : ''} ${className}`}
      {...rest}
    >
      <Icon icon={icon}  />
      <span className="MenuItem__text">{label}</span>

      {children && children}
    </Link>
  )
}