import {useState, useEffect} from 'react';
import './App.css';

function UserCard({name, email, phone}){
  return (
    <div className="user-card">
      <div>
        <h2>{name}</h2>
        <p>📧 {email}</p>
        <p>📞 {phone}</p>
      </div>
    </div>
  )
}

function App(){
  const [users, setUsers]= useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]= useState('');
  const [search, setSearch] = useState('');
  const [reload, setReload] = useState(false);

  useEffect(()=>{
    setLoading(true);
  fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>response.json())
.then((data)=>{
  setUsers(data);
  setLoading(false);
})
.catch((err)=>{
  setError('Something went wrong!');
  setLoading(false);
});

},[reload]);

const filteredUsers = users.filter((user)=>
user.name.toLowerCase().includes(search.toLowerCase())
);

if(loading) return <h1> Loading...</h1>
if (error) return <h1> {error} </h1>
return (
  <div className="users-container">
    <h1>Users from API</h1>

    <input 
    type='text'
    placeholder='Search by name...'
    value={search}
    onChange= {(e)=>setSearch(e.target.value)}
    />
    <button onClick={()=> setReload(reload + 1)}>
      Reload
    </button>
    <p>Loaded {users.length} users- Showing {filteredUsers.length}</p>
    {filteredUsers.length === 0 && <p> No users found!</p>
    
}
    {filteredUsers.map((user)=>(
      <UserCard
       key={user.id} 
      name={user.name}
       email={user.email}
        phone={user.phone} 
      />
    ))}
  </div>

);
}
export default App;