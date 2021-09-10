import React, { useState } from 'react';

export default function Form() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [err, setErrorPass] = useState('');

//   function validateUser(value) {
//     if(!/\S+@\S+\.\S+/.test(value)) {
//       setError('el usuario tiene que ser un email');
//     } else {
//       setError('');
//     }
//     setUsername(value);
//   }

//   function validatePass(value) {
//     if(!/^[A-Za-z0-9]\w{8,}$/.test(value)) {
//       setErrorPass('La contraseña debe tener al menos 8 caracteres')
//     }
//     else {
//       setErrorPass('')
//     }
//     setPassword(value)
//   }

  return (
      <form>
        <input autoComplete='off'
          name="username" value={username} placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
        <br></br>
        <input name="password" value={password} placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)}/>
        <input type="submit" />
      </form>
    );
}