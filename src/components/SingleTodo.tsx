import React, { useState } from 'react';
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
    const [edit, setEdit] = useState<boolean>(false)
    const [editTodo, setEditTodo] = useState<string>(todo.todo)

    const handleDone = (id:number) => {
        setTodos(todos.map(todo => todo.id === id? {...todo, isDone: !todo.isDone}: todo))
    }

    const handleDelete = (id:number) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const handleSubmit = (e: React.FormEvent, id: number) => {
        e.preventDefault()
        setTodos(todos.map(todo => (
            todo.id === id? {...todo, todo: editTodo} : todo
        )))
        setEdit(false)
    }

    return (
        <form className='todos_single w3-container  w3-animate-zoom' onSubmit={(e) =>handleSubmit(e, todo.id)}>

            {edit ? (
                <input className='edit_todo' value={editTodo} onChange={(e) => setEditTodo(e.target.value)} />
            ): (
                todo.isDone ? 
                (<s className="todo_single_text">{todo.todo}</s>) : 
                (<span className="todo_single_text">{todo.todo}</span>)
                )
            }
            
            <div>
                {todo.isDone ? ('') : (
                    <span className="icon" onClick={ () =>{
                        if(!edit && !todo.isDone){
                            setEdit(!edit)
                        }
                    }}>
                        <AiFillEdit />
                    </span>
                )}
                <span className="icon">
                    <MdDelete onClick={() => handleDelete(todo.id)}/>
                </span>
                <span className="icon" >
                    <MdOutlineDone onClick={() => handleDone(todo.id)} />
                </span>
            </div>
        </form>
    )
}

export default SingleTodo