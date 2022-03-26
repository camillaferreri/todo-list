import { TaskModal as TaskModalProps } from './TaskModal.types'
import { useTodos } from '../../context/todos'

import { Modal } from '../Modal'
import { Button } from '../Button'
import { PriorityDot } from '../PriorityDot'

import './TaskModal.scss'

export const TaskModal = ({ open, onClose, id, text, isHighPriority, checked }: TaskModalProps) => {
  const { deleteTodo, toggleCompleteTodo } = useTodos()

  const onDeleteTodo = () => {
    deleteTodo(id)
    onClose()
  }

  const onCompleteTodo = () => {
    toggleCompleteTodo(id)
    onClose()
  }

  return (
    <Modal 
      open={open}
      onClose={onClose}
      className='TaskModal'
      head={<>
        <PriorityDot isHighPriority={isHighPriority} />
        <p>Task</p>
      </>}
      body={
        <p>{text}</p>
      }
      footer={<>
        <Button 
          className="TrashButton"
          icon="trash"
          preset="lighter"
          onClick={onDeleteTodo}
        />

        <Button 
          label={checked ? "Uncomplete" : "Complete"}
          preset="success"
          onClick={onCompleteTodo}
        />
      </>}
    />
  )
}