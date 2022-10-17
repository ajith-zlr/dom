
import React from 'react';
import { auth } from './config';
import './App.css';
import { useState } from 'react';
import {createUserWithEmailAndPassword} from "firebase/auth"
function App() {
  const [registerEmail,setRegisterEmail]=useState("");
  const [registerPassword,setRegisterPassword]=useState("");
const register=async()=>{
  const user=await createUserWithEmailAndPassword(auth,registerEmail,registerPassword);
}
  return (
    <div className="App">
      <h3>register</h3>
      <input placeholder='mail' onChange={(event)=>{setRegisterEmail(event.target.value)}}/>
      <input placeholder='password' onChange={(event)=>{setRegisterPassword(event.target.value)}}/>
      {/* <input placeholder='createUser' onChange={register}/> */}
      <button onClick={register}>createUser</button>
    </div>
  );
}
export default App;