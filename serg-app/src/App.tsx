// import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import './App.css';
import InputFeild from './components/InputFeild'; 

const App: React.FC = () => {
 const [todo, setTodo] = useState<string> ("")
 
 
   return ( 
    <div className="App">
      <span className="heading">Taskify</span>
    <InputFeild todo ={todo} setTo />
    
    </div>
  );
}

export default App;
