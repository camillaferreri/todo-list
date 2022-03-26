import { ReactChild } from "react"

import "./Badge.scss"

interface BadgeProps {
  preset: 'white' | 'lightBlue';
  children: ReactChild;
}

export const Badge = ({ preset, children }: BadgeProps) => {
  return (
    <span className={`Badge ${preset}`}>
      {children}
    </span>
  )
}