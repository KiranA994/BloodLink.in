import React from 'react'
import { motion } from "framer-motion";
import Logo from '../assets/BloodLink-Logo.svg'


const Form = () => {
  return (
    <motion.div className='p-5'   initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}>
            <div className='d-flex justify-content-start align-items-center'>
                <img src={Logo} alt="BloodLink_Logo" className='me-2' />
                <h2 className='mt-3'>BloodLink.in</h2>
            </div>
            <br />
            
        </motion.div>
  )
}

export default Form