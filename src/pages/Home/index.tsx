import { useState } from "react";

import { useIsSmall } from "../../utils/useMediaQuery";
import { useTodos } from "../../context/todos";

import { Input } from "../../components/Input";
import { Todo } from "../../components/Todo";
import { NewTaskModal } from "../../components/NewTaskModal";
import { TaskModal } from "../../components/TaskModal";
import { Button } from "../../components/Button";
import { Todo as TodoType } from "../../components/Todo/Todo.types";
import { Badge } from "../../components/Badge";

export const Home = () => {
	const isSmall = useIsSmall()
	const { todos, completedTodos, inProgressTodos } = useTodos()
	
	const [ newTaskModalIsOpen, setNewTaskModalIsOpen ] = useState<boolean>(false)
	const [ taskModalIsOpen, setTaskModalIsOpen ] = useState<boolean>(false)
	const [ selectedTodo, setSelectedTodo ] = useState<TodoType | undefined>(undefined)

	const renderInProgressTodos = () => (
		todos
		.sort((a, b) => (a.isHighPriority === b.isHighPriority) ? 0 : (a.isHighPriority ? -1 : 1))
		.filter(todo => !todo.checked)
		.map(todo => (
			renderTodo(todo)
		))
	)

	const renderDoneTodos = () => (
		todos
		.sort((a, b) => (a.isHighPriority === b.isHighPriority) ? 0 : (a.isHighPriority ? -1 : 1))
		.filter(todo => todo.checked)
		.map(todo => (
			renderTodo(todo)
		))
	)

	const renderTodo = (todo: TodoType) => (
		<Todo 
			key={todo.id}
			id={todo.id}
			checked={todo.checked}
			text={todo.text}
			isHighPriority={todo.isHighPriority}
			onSelect={() => {
				setSelectedTodo(todo)
				setTaskModalIsOpen(true)
			}}
		/>
	)

	return (
		<main className="Home">
			<div className="container">
				{isSmall && <h1>MyTrack</h1>}

				<section>
					<h2>New task</h2>
					{isSmall ?
						<Button 
							className="NewTaskButton"
							label="New task"
							icon="add"
							preset="dark"
							size="big"
							onClick={() => setNewTaskModalIsOpen(true)}
						/>
					:
						<Input />
					}
				</section>

				<section>
					<h2>
						In progress

						<Badge preset="lightBlue">
							{inProgressTodos}
						</Badge>
					</h2>

					{renderInProgressTodos()}
				</section>

				<section>
					<h2>
						Done

						<Badge preset="lightBlue">
							{completedTodos}
						</Badge>
					</h2>

					{renderDoneTodos()}
				</section>

				<NewTaskModal 
					open={newTaskModalIsOpen}
					onClose={() => setNewTaskModalIsOpen(false)}
				/>

				{selectedTodo &&
					<TaskModal 
						open={taskModalIsOpen}
						onClose={() => {
							setTaskModalIsOpen(false)
							setSelectedTodo(undefined)
						}}
						id={selectedTodo?.id}
						text={selectedTodo?.text}
						isHighPriority={selectedTodo?.isHighPriority}
						checked={selectedTodo?.checked}
					/>
				}
			</div>
		</main>
	)
}

export default Home;