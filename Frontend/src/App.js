import './App.css';
import Navbar from './component/Navbar'
import Searchpage from './component/Searchpage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/search" element={<Searchpage/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
