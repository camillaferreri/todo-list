import { useState } from 'react'

import { useTodos } from '../../context/todos'
import { NewTaskModal as NewTaskModalProps } from './NewTaskModal.types'

import { Modal } from '../Modal'
import { Toggle } from '../Toggle'
import { Button } from '../Button'

import './NewTaskModal.scss'

export const NewTaskModal = ({ open, onClose }: NewTaskModalProps) => {
  const { addTodo } = useTodos()
  const [ text, setText ] = useState<string>("")
  const [ isHighPriority, setIsHighPriority ] = useState<boolean>(false)

  const onAddTodo = () => {
    addTodo(text, isHighPriority)
    setText('')
    setIsHighPriority(false)
    onClose()
  }

  return (
    <Modal 
      open={open}
      onClose={onClose}
      className='NewTaskModal'
      head={
        <p>New task</p>
      }
      body={
        <input 
          type="text" 
          placeholder="Insert task title..." 
          value={text}
          onChange={e => setText(e.currentTarget.value)}
        />
      }
      footer={<>
        <div className="NewTaskModal__priority">
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
      </>}
    />
  )
}