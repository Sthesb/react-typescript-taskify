import React from 'react'
import { TodoModel } from '../models/TodoModel'
import './TodoList.css'
import SingleTodo from './SingleTodo';

interface Props{
    todos: TodoModel[];
    setTodos:React.Dispatch<React.SetStateAction<TodoModel[]>>
}

const TodoList:React.FC<Props> = ({ todos, setTodos}) => (
    <div className='todos'>
        {todos.map(todo => (
            <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
        ))}
    </div>
)

export default TodoList