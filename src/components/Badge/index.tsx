import { BadgeProps } from "./Badge.types"

import "./Badge.scss"

export const Badge = ({ preset, children }: BadgeProps) => {
  return (
    <span className={`Badge ${preset}`}>
      {children}
    </span>
  )
}