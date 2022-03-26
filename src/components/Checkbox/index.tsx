import "./Checkbox.scss"

interface CheckboxProps {
  checked: boolean,
  onChange?: () => void
}

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