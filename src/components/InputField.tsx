import React from 'react'
import './InputField.css'

interface Props {
    todo: string;
    setTodo:  React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}


const InputField: React.FC<Props> = ({todo , setTodo, handleAdd}) => {


    return (
        <form className='form' onSubmit={handleAdd}>
            <input type="text" 
                value={todo} 
                onChange={(e) => setTodo(e.target.value)} 
                placeholder="Enter task" 
                className='input_task' />

            <button type='submit' className='button_submit'>Go</button>
        </form>
    )
}

export default InputField