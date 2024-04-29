import { useState } from 'react'
import './App.css'
import Hospital from './pages/Hospital'
import Form from './pages/Form'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'



function App() {


  return (
    <>
      

      {/* <Home/> */}
      {/* <Hospital/> */}
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/hospital' element={<Hospital/>} />
        <Route path='/form' element={<Form/>} />

      </Routes>





    </>
  )
}

export default App
