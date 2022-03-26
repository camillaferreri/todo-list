import { useLocation } from "react-router-dom"

import { useTodos } from "../../context/todos"
import { menu as menuData } from "../../data/menu"

import { Badge } from "../Badge"
import { IconType } from "../Icon/Icon.types"
import { MenuItem } from "../MenuItem"

import "./Menu.scss"

export const Menu = () => {
  const location = useLocation()
  const { totalTodos, completedTodos } = useTodos()

  const renderPrimaryWrapperItems = () => (
    menuData
    .filter(item => item.isMain)
    .map((item, index) => {
      const icon: IconType = item.icon as IconType
      return (
        <MenuItem
          key={`menuItem_primary-${index}`}
          url={item.url}
          label={item.label}
          icon={icon}
          selected={item.url === location.pathname}
        >
          {index === 0 ? <Badge preset="white"><>{completedTodos}/{totalTodos}</></Badge> : <></>}
        </MenuItem>
      )
    })
  )
  
  const renderSecondaryWrapperItems = () => (
    menuData
    .filter(item => !item.isMain)
    .map((item, index) => {
      const icon: IconType = item.icon as IconType
      return (
        <MenuItem
          key={`menuItem_secondary-${index}`}
          url={item.url}
          label={item.label}
          icon={icon}
          selected={item.url === location.pathname}
        />
      )
    })
  )

  return (
    <nav className="Menu">
      <h1>MyTrack</h1>

      <div className="Menu__mainWrapper">
        {renderPrimaryWrapperItems()}
      </div>

      {renderSecondaryWrapperItems()}
    </nav>
  )
}