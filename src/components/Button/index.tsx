import { Button as ButtonProps } from './Button.types'

import { Icon } from '../Icon'

import './Button.scss'

export const Button = ({ label, icon, preset = 'primary', size = 'small', disabled, className = '', onClick }: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={`Button ${preset} ${size} ${className}`}
      onClick={onClick}
    >
      {label && 
        <span>{label}</span>
      }
      {icon && 
        <Icon icon={icon} />
      }
    </button>
  )
}