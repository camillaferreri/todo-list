import { ReactChild } from "react";

export interface BadgeProps {
  preset: 'white' | 'lightBlue';
  children: ReactChild;
}
