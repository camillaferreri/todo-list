import { Todo as TodoType } from "./Todo.types";

import { useIsSmall } from "../../utils/useMediaQuery";
import { useTodos } from "../../context/todos";

import { Checkbox } from "../Checkbox";
import { Icon } from "../Icon";
import { PriorityDot } from "../PriorityDot";

import "./Todo.scss"

interface TodoProps extends TodoType {
  onSelect: () => void;
}

export const Todo = ({ id, checked, text, isHighPriority, onSelect }: TodoProps) => {
  const isSmall = useIsSmall()
  const { deleteTodo, toggleCompleteTodo } = useTodos()

  const onClickTodo = () => {
    if (isSmall) {
      onSelect()
    }
  }

  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  const onCompleteTodo = () => {
    toggleCompleteTodo(id)
  }

  return (
    <div className={`Todo ${checked ? 'Todo--checked' : ''}`} onClick={onClickTodo}>
      <Checkbox 
        checked={checked} 
        onChange={onCompleteTodo} 
      />

      <PriorityDot 
        isHighPriority={isHighPriority} 
      />

      <p>{text}</p>

      {!isSmall &&
        <Icon icon="trash" onClick={onDeleteTodo} />
      }
    </div>
  )
}