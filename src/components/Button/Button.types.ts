import { IconType } from "../Icon";

export interface Button {
  label?: string;
  className?: string;
  icon?: IconType;
  preset?: 'success' | 'primary' | 'lighter' | 'dark';
  size?: 'small' | 'big';
  disabled?: boolean;
  onClick: () => void;
}
