import React from 'react'
import logo from "./assets/logo.svg"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Signup from './pages/Signup'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import Updateuser from './pages/Updateuser'
import Post from './pages/Post'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/update' element={<Updateuser/>}/>
          <Route path='*' element={<NotFound/>}/>
          <Route path='*' element={<Post/>}/>

        </Routes>

        <Footer/>
      </BrowserRouter>


    </div>
  )
}

const style = {
  fontSize: "2rem"
}

export default App