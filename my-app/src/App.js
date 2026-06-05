import { useState } from 'react';
import './App.css';

function UserCard({name, age , city, isOnline}){
  return (
    <div className='user-card'>
      <div>
        <h2>{name}</h2>
        <p>Age: {age}</p>
        <p>City: {city}</p>
         </div>
        <span className= 'status'>
          {isOnline ? '🟢' : '🔴'}
        </span>
    </div>
  );
}

function App(){
  const [search, setSearch]=useState('');
  const [isOnlineOnly, setIsOnlineOnly] = useState(false);
  const users = [
    {id: 1, name: 'Ahje', age: 16, city: 'New York', isOnline: true},
    {id: 2, name: 'Ahmet', age: 20, city: 'Los Angeles', isOnline: false},
    {id: 3, name: 'Ayşe', age: 25, city: 'Chicago', isOnline: true},
    {id: 4, name: 'Mehmet', age: 30, city: 'Houston', isOnline: false},
  ];

const filteredUsers = users.filter((user)=> 
user.name.toLowerCase().includes(search.toLowerCase())
)
.filter((user)=> (isOnlineOnly ? user.isOnline:true));
return (
  <div className='app'>
  <h1> Users List</h1>
  <input type='text' 
  placeholder = 'Search by name...'
  value={search}
  onChange={(e)=>setSearch(e.target.value)}
  />

  <button onClick={()=> setIsOnlineOnly(!isOnlineOnly)}>
    {isOnlineOnly ? 'Show All' : 'Show Online Only'}
  </button>
  <p> Showing {filteredUsers.length} users</p>
  {filteredUsers.length === 0 && <p> No users found!</p>}
  {filteredUsers.map((user)=>(
    <UserCard
    key={user.id}
    name = {user.name}
    age = {user.age}
    city = {user.city}
    isOnline= {user.isOnline}
    />
  ))}
  </div>
);
}

export default App;