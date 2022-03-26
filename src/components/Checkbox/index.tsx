import { CheckboxProps } from "./Checkbox.types"

import "./Checkbox.scss"

export const Checkbox = ({ checked, onChange }: CheckboxProps) => {
  return (
    <input 
      type='checkbox' 
      className='Checkbox' 
      checked={checked}
      onChange={onChange}
    />
  )
}