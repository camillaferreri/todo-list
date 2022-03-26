import "./Toggle.scss"

interface ToggleProps {
  checked: boolean,
  onChange?: () => void
}

export const Toggle = ({ checked, onChange }: ToggleProps) => {
  return (
    <label className='Toggle'>
      <input 
        type='checkbox' 
        checked={checked}
        onChange={onChange}
      />

      <span className="Toggle__slider"></span>
    </label>
  )
}