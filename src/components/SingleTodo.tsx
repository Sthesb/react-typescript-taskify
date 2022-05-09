import React from 'react';
import { TodoModel } from './../models/TodoModel';
import { AiFillEdit } from 'react-icons/ai';
import { MdDelete, MdOutlineDone } from 'react-icons/md';
import './SingleTodo.css';

type Props = {
    todo: TodoModel;
    todos: TodoModel[];
    setTodos: React.Dispatch<React.SetStateAction<TodoModel[]>>

}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos}) => {
  return (
    <form className='todos_single'>
        <span className="todo_single_text">{todo.todo}</span>
        <div>
            <span className="icon">
                <AiFillEdit />
            </span>
            <span className="icon">
                <MdDelete />
            </span>
            <span className="icon">
                <MdOutlineDone />
            </span>
        </div>
    </form>
  )
}

export default SingleTodo