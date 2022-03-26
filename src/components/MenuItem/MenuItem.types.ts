import { ReactChild } from "react";
import { IconType } from "../Icon/Icon.types";

export interface MenuItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  url: string;
  icon: IconType;
  label: string;
  selected?: boolean;
  children?: ReactChild
}