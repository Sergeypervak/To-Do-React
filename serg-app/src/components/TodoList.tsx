import React from 'react';
import {Todo} from "./model";
import './styles.css';

interface Props{
    todos:Todo[];
   setTodos:React.Dispatch<React.SetStateAction<Todo[]>> 
}

const TodoList = ({todos, setTodos}:Props) => {
  return <div className='todos'><div/>;

{
todos.map(todo => null)

}
  </div>;
  
};

export default TodoList;