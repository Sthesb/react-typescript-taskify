import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { TodoModel } from './models/TodoModel';


const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<TodoModel[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if(todo){
      setTodos([...todos, {id: Date.now(), todo: todo, isDone: false }])
      setTodo('')
    }

  }


  return (
    <div className="App">
      <h1 className='heading'>Tastify</h1>

      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}  />

    </div>
  );
}

export default App;
