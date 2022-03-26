import { useState } from "react";
import { useTodos } from "../../context/todos";

import { Button } from "../Button";
import { Toggle } from "../Toggle";

import "./Input.scss"

export const Input = () => {
  const { addTodo } = useTodos()
  const [ text, setText ] = useState<string>("")
  const [ isHighPriority, setIsHighPriority ] = useState<boolean>(false)

  const onAddTodo = () => {
    addTodo(text, isHighPriority)
    setText('')
    setIsHighPriority(false)
  }

  return (
    <div className={`Input `}>
      <input 
        type="text" 
        placeholder="Insert task title..." 
        value={text}
        onChange={e => setText(e.currentTarget.value)}
      />

      <div className="Input__priority">
        <span>High priority</span>
        <Toggle 
          checked={isHighPriority}
          onChange={() => setIsHighPriority(prevIsHighPriority => !prevIsHighPriority)}
        />
      </div>

      <Button 
        label="Add" 
        preset="primary"
        disabled={!text.length}
        onClick={onAddTodo}
      />
    </div>
  )
}