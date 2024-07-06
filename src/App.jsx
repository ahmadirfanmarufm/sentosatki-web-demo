import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import About from './pages/About';
import GaleryPhoto from './pages/GaleryPhoto';
import GaleryVideo from './pages/GaleryVideo';
import Staff from './pages/Staff';
import News from './pages/News';
import Agenda from './pages/Agenda';
import Contact from './pages/Contact';
import Registration from './pages/Registration';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/tentang-kami' element={<About/>}></Route>
        <Route path='/galeri-foto' element={<GaleryPhoto/>}></Route>
        <Route path='/galeri-video' element={<GaleryVideo/>}></Route>
        <Route path='/staff' element={<Staff/>}></Route>
        <Route path='/berita' element={<News/>}></Route>
        <Route path='/agenda' element={<Agenda/>}></Route>
        <Route path='/kontak' element={<Contact/>}></Route>
        <Route path='/registrasi' element={<Registration/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
