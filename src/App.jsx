import { useState } from 'react'
import './App.css'
import Hospital from './pages/Hospital'
import Form from './pages/Form'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'



function App() {


  return (
    <>
      

      {/* <Hospital/> */}
      
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/' element={<Hospital/>} />
        <Route path='/form' element={<Form/>} />

      </Routes>





    </>
  )
}

export default App
