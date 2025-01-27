import {BrowserRouter, Routes, Route} from 'react-router-dom'
import "./index.css"
// pages
import Home from './pages/Home';
import Us from './pages/Us';
function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='us' element={<Us/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
