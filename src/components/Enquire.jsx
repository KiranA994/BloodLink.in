import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Enquire = () => {

//   // navigate next page with a delay 
//   const navigate = useNavigate('')


//  const navigateToForm = () => {
//     setTimeout(() => {
//         navigate('/form')
//       }, 3000)
//  }
  return (
    <>
    <Link to={'/form'}>
    <button style={{ border: "none", backgroundColor: "red", color: "white"  }} onClick={navigateToForm} className='p-2 border border-2 rounded'>Connect to Blood Bank</button>
    </Link>
    </>
  )
}

export default Enquire