import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../pages/Home.css'
import { createUserApi } from '../services/allAPI';
import { Toaster, toast } from 'sonner';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // input user create details 
  const [signUp, setSignUp] = useState({
    username: "",
    email: "",
    password: ""
  })
  console.log(signUp);

  // navigate next page with a delay 
  const navigate = useNavigate('')

  const handleSubmit = async () => {
    // console.log(response);
    // handleClose()
    const { username, email, password } = signUp
    if (!username || !email || !password) {
      toast.error('Please fill the details')
    }
    else {
      const response = await createUserApi(signUp)
      if (response.status >= 200 && response.status < 300) {
        toast.success('Account created Successfully')
        handleClose()

        setTimeout(() => {
          navigate('/hospital')
        }, 3000)
      }
      
    }
    
  }
  return (

    <>
      <button onClick={handleShow} style={{ border: "none", backgroundColor: "transparent", color: "white" }} >Sign up</button>
      <Modal show={show} onHide={handleClose} >
        <Modal.Body>
          <h3>Sign up</h3>
          <input type="text" className='form-control mb-3' placeholder='User name' onChange={((e) => setSignUp({ ...signUp, username: e.target.value }))} />
          <input type="text" className='form-control mb-3' placeholder='Email' onChange={((e) => setSignUp({ ...signUp, email: e.target.value }))} />
          <input type="text" className='form-control mb-3' placeholder='Password' onChange={((e) => setSignUp({ ...signUp, password: e.target.value }))} />

        </Modal.Body>
        <Modal.Footer className='bg-transparent d-flex justify-content-evenly'>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" className='bg-danger' style={{ border: "none" }} onClick={handleSubmit}>
            Create
          </Button>
        </Modal.Footer>

      </Modal>
      <Toaster position="top-right" toastOptions={{
        style: { background: 'white', fontSize: "1rem" },
      }} />
    </>
  )
}

export default Signup