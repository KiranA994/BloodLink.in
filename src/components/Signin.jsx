import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../pages/Home.css'
import Signup from './Signup';
import { Link } from 'react-router-dom';

const Signin = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    
    <>
    <button onClick={handleShow} style={{border:"none",backgroundColor:"transparent"}} className='hospital'>Sign in</button>
    <Modal show={show} onHide={handleClose} >
    <Modal.Body>
        <h3>Sign in</h3>
        <input type="text" className='form-control mb-3' placeholder='User name'/>
       
        <input type="text" className='form-control mb-3' placeholder='Password'/>
        
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