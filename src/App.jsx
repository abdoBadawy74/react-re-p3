import React from 'react'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Home';
import Movies from './Movies';
import TV from './TV';
import People from './People';
import Login from './Login';
import Register from './Register';
import Notfound from './Notfound';
import Footer from './Footer';
import Contacts from './Contacts';
import About from './About';



export default function App() {
  return (
    <div>
      <Navbar></Navbar>

        <Routes>
            <Route path='' element={<Home></Home>}></Route>
            <Route path='home' element={<Home></Home>}></Route>
            <Route path='movies' element={<Movies></Movies>}></Route>
            <Route path='tv' element={<TV></TV>}></Route>
            <Route path='people' element={<People></People>}></Route>
            <Route path='about' element={<About></About>}></Route>
            <Route path='contacts' element={<Contacts></Contacts>}></Route>
            <Route path='login' element={<Login></Login>}></Route>
            <Route path='register' element={<Register></Register>}></Route>
            <Route path='*' element={<Notfound></Notfound>}></Route>
        </Routes>

      <Footer></Footer>
    </div>
  )
}
