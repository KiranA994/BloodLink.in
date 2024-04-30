import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../pages/Home.css'
import { getUserApi } from '../services/allAPI';
import { useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'sonner';


const Signin = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const[userData,setUserData] = useState([])

    // input check 
    const [signIn,setSignIn] = useState({
        username:"",
        password:""
    })
    console.log(signIn);

      // navigate next page with a delay 
     const navigate = useNavigate('')

    const handleUser = async() => {
      const response = await getUserApi()
      setUserData(response.data)
      const existingUser = userData.find(item=> item.username == signIn.username)
      const existingPswd = userData.find(item=> item.password == signIn.password)
      if(existingUser && existingPswd){
        toast.success('User LoggedIn successfully')
        handleClose()
        setTimeout(() => {
          navigate('/hospital')
        }, 3000)
      }
      else{
        toast.error('Invalid username / password')
      }
    } 

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
      <Button variant="primary" className='bg-danger' style={{border:"none"}} onClick={handleUser}>
        Login
      </Button>
    </Modal.Footer>
    
  </Modal>
  <Toaster position="top-right" toastOptions={{
        style: { background: 'white', fontSize: "1rem" },
      }} />
    </>
  )
}

export default Signin