import { useState } from 'react'

import './App.css'
import Hospital from './pages/Hospital'
import Home from './pages/Home'
import Form from './pages/Form'

function App() {


  return (
    <>
      <Hospital/>
      <Home/>
      {/* <Hospital/> */}
      <Form/>
    </>
  )
}

export default App
