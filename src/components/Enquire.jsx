import React from 'react'
import { useNavigate } from 'react-router-dom';

const Enquire = () => {

  // navigate next page with a delay 
  const navigate = useNavigate('')


 const navigateToForm = () => {
    setTimeout(() => {
        navigate('/form')
      }, 3000)
 }
  return (
    <>
    <button style={{ border: "none", backgroundColor: "red", color: "white"  }} onClick={navigateToForm} className='p-2 border border-2 rounded'>Connect to Blood Bank</button>
    </>
  )
}

export default Enquire