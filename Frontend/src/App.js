import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from 'react';
import Navbar from './component/Navbar'
import Searchpage from './component/Searchpage'
import Popular from './component/Popular'
import Register from './component/Register';
import Login from './component/Login';
import Home from './component/Home';
import Frontpage from './component/Frontpage';

function App() {
  const [auth, setAuth] = useState({
    login: null,
  })
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar auth={auth} setAuth={setAuth}/>
      <Routes>
        <Route path='/' element={<Frontpage/>}/>
        <Route path='/Home' element={<Home/>} />
        <Route path="/Search" element={<Searchpage/>}/>
        <Route path="/Popular" element={<Popular/>}/>
        <Route path="/Register" element={<Register auth={auth} setAuth={setAuth}/>}/>
        <Route path="/Login"  element={<Login auth={auth} setAuth={setAuth}/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
