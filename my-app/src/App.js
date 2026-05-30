import './App.css';

function UserCard({id, name, age, city, isOnline}) {
  return (
    <div className="user-card">
      <div>
        <h2>{name}</h2>
        <p>Age: {age}</p>
        <p>City: {city}</p>
        </div>
        <span className='status'> {isOnline ? '🟢' : '🔴'}</span>
      </div>
  );
}

function App(){
  const users = [
    {id: 1, name: 'Ahje', age: 16, city: 'New York', isOnline: true},
    {id: 2, name: 'John', age: 25, city: 'Los Angeles', isOnline: false},
    {id: 3, name: 'Emily', age: 30, city: 'Chicago', isOnline: true},
    {id: 4, name: 'Michael', age: 22, city: 'Houston', isOnline: false},
    {id: 5, name: 'Sarah', age: 28, city: 'Phoenix', isOnline: true}
  ];

  return (
    <div className='users-container'>
      <h1>Users List</h1>
      {users.map((user)=>(
        <UserCard
        key={user.id}
        name = {user.name}
        age = {user.age}
        city = {user.city}
        isOnline = {user.isOnline}
        />
      ))}
    </div>

  );
}

export default App;