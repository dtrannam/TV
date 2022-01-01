import './App.css';
import Navbar from './component/Navbar'
import Searchpage from './component/Searchpage'
import Popular from './component/Popular'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/search" element={<Searchpage/>}/>
        <Route path="/popular" element={<Popular/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
