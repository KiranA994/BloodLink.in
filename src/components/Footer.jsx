import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <>
    <h3 className='text-center mt-3' style={{textDecoration:"underline"}}>Team Members</h3>
    <Row md={4} xs={2}>
        <Col>
        <h6 className='text-center mt-4'>Kiran A</h6>
        <div className='d-flex justify-content-evenly'>
            <a href=""><i class="fa-brands fa-github text-white"></i></a>
            <a href=""><i class="fa-brands fa-linkedin text-white"></i></a>
        </div>
        </Col>
        <Col>
        <h6 className='text-center mt-4'>Nasweha Shirin</h6>
        <div className='d-flex justify-content-evenly'>
            <a href=""><i class="fa-brands fa-github text-white"></i></a>
            <a href=""><i class="fa-brands fa-linkedin text-white"></i></a>
        </div>
        </Col>
        <Col>
        <h6 className='text-center mt-4'>Najas Nazar</h6>
        <div className='d-flex justify-content-evenly'>
            <a href=""><i class="fa-brands fa-github text-white"></i></a>
            <a href=""><i class="fa-brands fa-linkedin text-white"></i></a>
        </div>
        </Col>
        <Col>
        <h6 className='text-center mt-4'>Abhinav Bavos</h6>
        <div className='d-flex justify-content-evenly'>
            <a href=""><i class="fa-brands fa-github text-white"></i></a>
            <a href=""><i class="fa-brands fa-linkedin text-white"></i></a>
        </div>
        </Col>
    </Row>
    <p className='mt-3 text-center'><i class="fa-regular fa-copyright"></i> 2024 BloodLink.in . All Rights reserved.</p>
    </>
  )
}

export default Footer