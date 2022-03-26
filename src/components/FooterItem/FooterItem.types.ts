import React from "react";
import { IconType } from "../Icon/Icon.types";

export interface FooterItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  url: string;
  icon: IconType;
  label: string;
  selected?: boolean;
}