// import { type } from '@testing-library/user-event/dist/type';
import React, { FormEvent, useState } from 'react';
import './App.css';
import InputFeild from './components/InputFeild'; 
import { Todo } from './components/model';


const App: React.FC = () => {
 const [todo, setTodo] = useState<string>("")
 const [todos, setTodos] = useState<Todo[]>([])
 
 const handleAdd = (e: FormEvent<HTMLFormElement>) => {
   e.preventDefault();
 };
 
 console.log(todo);

   return ( 
    <div className="App">
      <span className="heading">Taskify</span>
    <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    
    </div>
  );
};

export default App;
