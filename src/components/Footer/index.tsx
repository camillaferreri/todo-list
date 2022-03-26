import { useLocation } from "react-router-dom"

import { menu as footerData } from "../../data/menu"

import { FooterItem } from "../FooterItem"
import { IconType } from "../Icon"

import "./Footer.scss"

export const Footer = () => {
  const location = useLocation()

  const renderFooterItems = () => (
    footerData
    .map((item, index) => {
      const icon: IconType = item.icon as IconType
      return (
        <FooterItem
          key={`footerItem-${index}`}
          url={item.url}
          label={item.label}
          icon={icon}
          selected={item.url === location.pathname}
        />
      )
    })
  )

  return (
    <footer className="Footer">
      {renderFooterItems()}
    </footer>
  )
}