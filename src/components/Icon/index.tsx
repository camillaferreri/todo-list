import { ReactComponent as Calendar } from '../../assets/icons/icon-calendar.svg';
import { ReactComponent as Charts} from "../../assets/icons/icon-charts.svg"
import { ReactComponent as Dashboard} from "../../assets/icons/icon-dashboard.svg"
import { ReactComponent as Settings} from "../../assets/icons/icon-settings.svg"
import { ReactComponent as Teams} from "../../assets/icons/icon-teams.svg"
import { ReactComponent as Trash} from "../../assets/icons/icon-trash.svg"
import { ReactComponent as Close} from "../../assets/icons/close.svg"
import { ReactComponent as Add} from "../../assets/icons/add.svg"

import "./Icon.scss"

export type IconType = "calendar" | "charts" | "dashboard" | "settings" | "teams" | "trash" | "add" | "close"

interface IconProps {
  icon: IconType
  onClick?: () => void
}

export const Icon = ({ icon, onClick, ...props }: IconProps) => {
  switch (icon) {
    case "calendar":
      return <Calendar onClick={onClick} {...props} className={`Icon`} />
    case "charts":
      return <Charts onClick={onClick} {...props} className={`Icon`} />
    case "dashboard":
      return <Dashboard onClick={onClick} {...props} className={`Icon`} />
    case "settings":
      return <Settings onClick={onClick} {...props} className={`Icon`} />
    case "teams":
      return <Teams onClick={onClick} {...props} className={`Icon`} />
    case "trash":
      return <Trash onClick={onClick} {...props} className={`Icon`} />
    case "add":
      return <Add onClick={onClick} {...props} className={`Icon`} />
    case "close":
      return <Close onClick={onClick} {...props} className={`Icon`} />
    default:
      return <div className={`Icon`} />;
  }
}