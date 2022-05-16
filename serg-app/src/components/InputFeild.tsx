import React, { FormEvent } from 'react'
import './styles.css';

interface Props{
todo?: string;
setTodo: (todo: string ) => void;  
handleAdd: (e:FormEvent<HTMLFormElement>) => void;

}

const InputFeild: React.FC<Props> = ({todo, setTodo, handleAdd}:Props) => {
  return ( 
  <form className ="input" onSubmit={handleAdd}>
    
    <input 
    type='input'
    value={todo}
    onChange={(e) => setTodo(e.target.value)} 
    placeholder='Enter a task'
     className='input__box'
    /> 
    
    <button className='input_submit' type='submit'> Go </button>
    
  </form>
  )
  }



export default InputFeild