// import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import './App.css';
import InputFeild from './components/InputFeild'; 

const App: React.FC = () => {
 
 
 
   return ( 
    <div className="App">
      <span className="heading">Taskify</span>
    <InputFeild />
    
    </div>
  );
}

export default App;
