// import { type } from '@testing-library/user-event/dist/type';
import React, { FormEvent, useState } from 'react';
import './App.css';
import InputFeild from './components/InputFeild'; 
import { Todo } from './components/model';
import TodoList from './components/TodoList';


const App: React.FC = () => {
 const [todo, setTodo] = useState<string>("")
 const [todos, setTodos] = useState<Todo[]>([])
 
 const handleAdd = (e: FormEvent<HTMLFormElement>) => {
   e.preventDefault();
 

   if (todo) {
     
    setTodos([...todos, { id: Date.now(),todo, isDone: false }])
    setTodo("");
    }
 
  };
  //jhhh
 
//  console.log(todos);

   return ( 
    <div className="App">
      <span className="heading">Taskify</span>
    <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    <TodoList todos={todos} setTodos={setTodos}/>
    {/* {todos.map((t) => (
       <li>{t.todo}</li>
    ))} */}
    </div>
  );
};

export default App;
