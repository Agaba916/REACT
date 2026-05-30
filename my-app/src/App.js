import {useState} from 'react';
import './Signup.css';

function SignupForm(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge]= useState('')
  const [password, setPassword] = useState('')

  return (
    <div className='form-container'>
     <h2>Sign Up</h2>

     <input
     type='text'
     placeholder='Name'
     value={name}
     onChange={(e)=>setName(e.target.value)}
     />
    <input
    type='email'
    placeholder='Email'
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    />
    <input
    type= 'number'
    placeholder='Age'
    value={age}
    onChange={(e)=>setAge(e.target.value)}
    />
    <input
    type='password'
    placeholder='Password'
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
    />
    <button type='submit'>Sign Up</button>
    </div>
  )
}

function App(){
  return (
    <div className='App'>\
      <SignupForm />
    </div>
  )
}

export default App;