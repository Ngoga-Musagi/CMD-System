import React from 'react'
import { useState } from 'react'

const Login = () => {
    
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  // Function to handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:8080/users/authenticate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });

    if (response.ok) {
      
      const { token } = await response.json();
      setToken(token);
      alert(token)
      alert('Ok ....');
      setUsername("");
      setPassword("");
      localStorage.setItem('token', token);
      
    } else {
      alert('Login failed.');
    }
  };

  // Function to fetch data from the backend using the JWT token
  const fetchData = async () => {
    const response = await fetch('http://localhost:8080/cmds/patients/all', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    if (response.ok) {
      const data = await response.json();
      setData(data);
      console(data)
    } else {
      alert('Failed to fetch data.');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
}
export default Login
