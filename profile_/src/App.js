import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from 'react';

function App(){
  const [user, setuser] = useState('guest');
  useEffect( () =>{
    if (user !== 'guest')
    console.log(`user changed to ${user}`);
  }, [user ]);
  
  const handleClick = () => {
    setuser("alice");
  };

    return (
  <div>
  <h2>welcome: {user}</h2>
  <button onClick={handleClick} > login</button>
  </div>
);
}
export default App;