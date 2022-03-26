import { Link } from "react-router-dom"

import { MenuItemProps } from "./MenuItem.types";

import { Icon } from "../Icon"

import "./MenuItem.scss"

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