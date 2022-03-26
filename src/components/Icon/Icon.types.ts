export type IconType = "calendar" | "charts" | "dashboard" | "settings" | "teams" | "trash" | "add" | "close"

export interface IconProps {
  icon: IconType
  onClick?: () => void
}