import { Link } from "react-router-dom"

import { FooterItemProps } from "./FooterItem.types"

import { Icon } from "../Icon"

import "./FooterItem.scss"

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