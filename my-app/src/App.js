import { useState, useEffect } from 'react';
function App(){

const [seconds, setSeconds] = useState(0);
const [isRunning, setIsRunning]= useState(true);
useEffect(()=>{
  document.title = `Timer: ${seconds}s`;
  if (!isRunning) return;
  const timer = setInterval(()=>{
    setSeconds((prev)=> prev + 1);
  }, 1000);

  return ()=> clearInterval(timer);
}, [seconds, isRunning]);

return (
  <div>
    <h1>Timer: {seconds} seconds</h1>
    <button onClick={()=>setIsRunning(!isRunning)}>
    {isRunning ? 'Stop' : 'Start'}
    </button>
    <button onClick={()=>{
      setSeconds(0);
      setIsRunning(false);
    }}>Reset</button>
  </div>
);
}
export default App;