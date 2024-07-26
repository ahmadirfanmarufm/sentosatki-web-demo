import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import './App.css'
import Home from './pages/Home'
import About from './pages/About';
import GaleryPhoto from './pages/GaleryPhoto';
import GaleryVideo from './pages/GaleryVideo';
import Download from './pages/Download';
import News from './pages/News';
import Contact from './pages/Contact';
import Registration from './pages/Registration';
import JobList from './pages/JobList';
import JobDetail from './pages/JobDetail';
import NewsDetails from './pages/NewsDetails';
import PageNotFound from './pages/404';
import AddNews from './pages/AddNews';

const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
  const apiDatabaseUrl = import.meta.env.VITE_API_DATABASE;

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
        axios.get(`${apiDatabaseUrl}/verify`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            const data = response.data;
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data));
            setUser(data);
        })
        .catch(error => console.error('Error:', error));
    }
}, []);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/tentang-kami' element={<About/>}></Route>
        <Route path='/galeri-foto' element={<GaleryPhoto/>}></Route>
        <Route path='/galeri-video' element={<GaleryVideo/>}></Route>
        <Route path='/download' element={<Download/>}></Route>
        <Route path='/job-list' element={<JobList/>}></Route>
        <Route path='/job-detail/:id' element={<JobDetail/>}></Route>
        <Route path='/berita' element={<News/>}></Route>
        <Route path='/berita/:id' element={<NewsDetails/>}></Route>
        {user && user.jabatan.includes("Writter") && (
          <Route path='/tambah-berita' element={<AddNews/>}></Route>
        )}
        <Route path='/kontak' element={<Contact/>}></Route>
        <Route path='/registrasi' element={<Registration/>}></Route>
        <Route path='*' element={<PageNotFound/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
