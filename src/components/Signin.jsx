import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../pages/Home.css'


const Signin = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // input check 
    const [signIn,setSignIn] = useState({
        username:"",
        password:""
    })
    console.log(signIn);

    
  return (
    
    <>
    <button onClick={handleShow} style={{border:"none",backgroundColor:"transparent"}} className='hospital'>Sign in</button>
    <Modal show={show} onHide={handleClose} >
    <Modal.Body>
        <h3>Sign in</h3>
        <input type="text" className='form-control mb-3' placeholder='User name' onChange={((e)=> setSignIn({...signIn,username:e.target.value}))}/>
       
        <input type="text" className='form-control mb-3' placeholder='Password' onChange={((e)=>setSignIn({...signIn,password:e.target.value}))}/>
        
    </Modal.Body>
    <Modal.Footer className='bg-transparent d-flex justify-content-evenly'>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" className='bg-danger' style={{border:"none"}} onClick={handleClose}>
        Login
      </Button>
    </Modal.Footer>
    
  </Modal>
    </>
  )
}

export default Signin