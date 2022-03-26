import React, { createContext, useState, useContext, useEffect } from "react"
import { Todo } from "../components/Todo/Todo.types";

export interface TodosContextType {
  todos: Todo[] | [];
  totalTodos: number;
  completedTodos: number;
  inProgressTodos: number;
  addTodo: (text: string, isHighPriority: boolean) => void;
  deleteTodo: (id: number) => void;
  toggleCompleteTodo: (id: number) => void;
}

export const TodosContext = createContext<TodosContextType>({ todos: [] });

export const TodosProvider = ({ children }: {children: React.ReactNode}) => {
  const [ todos, setTodos ] = useState<Todo[]>([]);
  const [ totalTodos, setTotalTodos ] = useState<number>(0)
  const [ completedTodos, setCompletedTodos ] = useState<number>(0)
  const [ inProgressTodos, setInProgressTodos ] = useState<number>(0)

  const addTodo = (text: string, isHighPriority: boolean) => {
    const id = todos.length > 0 ? todos[todos.length -1].id + 1 : 0
    const newTodo = {
      id: id,
      text: text,
      isHighPriority: isHighPriority,
      checked: false,
    }

    setTodos(prevTodos => [...prevTodos, newTodo])
  }

  const deleteTodo = (id: number) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
  }

  const toggleCompleteTodo = (id: number) => {
    setTodos(prevTodos => prevTodos.map(el => el.id === id ? {...el, checked: !el.checked } : el))
  }

  useEffect(() => {
    const completed = todos.filter(todo => todo.checked).length
    setTotalTodos(todos.length)
    setCompletedTodos(completed)
    setInProgressTodos(todos.length - completed)
  }, [ todos ])

  return (
    <TodosContext.Provider
      value={{
        todos,
        addTodo,
        deleteTodo,
        toggleCompleteTodo,
        totalTodos,
        completedTodos,
        inProgressTodos,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export const useTodos = (): TodosContextType => {
  return useContext(TodosContext);
};