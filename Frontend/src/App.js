import './App.css';
import Navbar from './component/Navbar'
import Searchpage from './component/Searchpage'
import Popular from './component/Popular'
import Register from './component/Register';
import Login from './component/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/Search" element={<Searchpage/>}/>
        <Route path="/Popular" element={<Popular/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Login" element={<Login/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
