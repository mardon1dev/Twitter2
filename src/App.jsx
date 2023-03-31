import Login from './assets/auth/Login';
import Register from './assets/auth/Register';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Default from './assets/default/Default';
import { useState, useEffect } from 'react';
import { auth } from './assets/authentification/firebase';
import SendData from './assets/twitter/components/SendData';

import './App.css'


function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
    })

    return unsubscribe;
  }, []);


  return (
    <div className='container'>
      <div className='wrapper-all'>
        <Routes>
          <Route path='/default' element={<Default  user={user}/>}/>
          <Route path='/home' element={user ? <SendData/> : <Navigate to="/Login" />} />
          <Route path='/login' element={user ? <Navigate to="/home" /> : <Login/>} />
          <Route path='/register' element={user ? <Navigate to="/login"/> : <Register/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
