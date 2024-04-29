import React from 'react'

import Card from 'react-bootstrap/Card';
import User from '../assets/user-icon.svg'
import connect from '../assets/connect.png'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Bloodlogo from '../assets/BloodLink-Logo.svg'
import Nav from 'react-bootstrap/Nav';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

function Home() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const closeRegister = () => {
        const reg = document.getElementById('register')
        reg.style.display = 'none'
    }

    const showRegister = () => {
        const reg = document.getElementById('register')
        reg.style.display = 'block'
    }

    
    return (
        <>
            <Navbar className="bg-transparent ">
                <Container>

                    <Navbar.Brand >
                        <img src={Bloodlogo} alt="" width={'40px'} />
                        <span className='fs-5 ms-3' style={{ color: "white" }}>BloodLink.In</span>
                    </Navbar.Brand>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link >
                                {/* <button varient='danger' className='btn  border rounded p-2'>Sign In</button>{' '} */}
                                <Button variant="danger" onClick={handleShow}>Sign In</Button>{' '}
                                <Button variant="danger" className='ms-4' onClick={showRegister}>Sign Up</Button>{' '}
                            </Nav.Link>


                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
            <div className='row ms-5 me-5 '>
                <div className='text-center mt-5'>
                    <h5> Welcome to <span className='text-danger'>BloodLink.In</span></h5><h5>your go-to platform for</h5><h5> instant blood donation connections</h5>
                    <div className='w-50 my-5 m-auto'><input type="text" placeholder='search your blood group,Location,.....' className='form-control' /></div>
                </div>
                <div className='col-lg-3 col-md-6 mt-5'>
                    <Card style={{ width: '20rem' }}>
                        <Card.Body className='rounded' style={{ backgroundColor: '#FFFFFF' }}  >
                            <Card.Title >
                                <div className='d-flex justify-content-between ' style={{ backgroundColor: "white" }}>
                                    <h3 style={{ color: 'black', background: "white", fontWeight: "700" }}>Rangan</h3>
                                    <img src={User} alt="" style={{ backgroundColor: "white" }} />
                                </div>
                            </Card.Title>
                            {/* <Card.Subtitle className="mb-2 fs-5">Blood Group : o+</Card.Subtitle> */}
                            <Card.Text>
                                <h6 style={{ color: 'black' }}><b>Blood Group : o+</b></h6>

                                <h6 style={{ color: 'black' }}><b>Location : </b></h6>
                                <h6 style={{ color: 'black' }}><b>Contact :+ 123 456 789</b></h6>
                            </Card.Text>

                            <div className='ms-auto d-flex justify-content-between' style={{ backgroundColor: "white" }}>
                                <Card.Link href="#"></Card.Link>
                                <h6 className='text-danger' style={{ backgroundColor: "white" }}>#o+ #city #state</h6></div>
                        </Card.Body>
                    </Card>

                </div>
                <div className='col-lg-3 col-md-6 mt-5'>
                    <Card style={{ width: '20rem' }}>
                        <Card.Body className='rounded' style={{ backgroundColor: '#FFFFFF' }}  >
                            <Card.Title>
                                <div className='d-flex justify-content-between'>
                                    <h5 style={{ color: 'black' }}>Rangan</h5>
                                    <img src={User} alt="" />
                                </div>
                            </Card.Title>
                            {/* <Card.Subtitle className="mb-2 fs-5">Blood Group : o+</Card.Subtitle> */}
                            <Card.Text>
                                <h6 style={{ color: 'black' }}><b>Blood Group : o+</b></h6>

                                <h6 style={{ color: 'black' }}><b>Location : </b></h6>
                                <h6 style={{ color: 'black' }}><b>Contact :+ 123 456 789</b></h6>
                            </Card.Text>

                            <div className='ms-auto d-flex justify-content-between'>
                                <Card.Link href="#"></Card.Link>
                                <h6 className='text-danger'>#o+ #city #state</h6></div>
                        </Card.Body>
                    </Card>

                </div>

                <div className='col-lg-3 col-md-6 mt-5'>
                    <Card style={{ width: '20rem' }}>
                        <Card.Body className='rounded' style={{ backgroundColor: '#FFFFFF' }}  >
                            <Card.Title>
                                <div className='d-flex justify-content-between'>
                                    <h5 style={{ color: 'black' }}>Rangan</h5>
                                    <img src={User} alt="" />
                                </div>
                            </Card.Title>
                            {/* <Card.Subtitle className="mb-2 fs-5">Blood Group : o+</Card.Subtitle> */}
                            <Card.Text>
                                <h6 style={{ color: 'black' }}><b>Blood Group : o+</b></h6>

                                <h6 style={{ color: 'black' }}><b>Location : </b></h6>
                                <h6 style={{ color: 'black' }}><b>Contact :+ 123 456 789</b></h6>
                            </Card.Text>

                            <div className='ms-auto d-flex justify-content-between'>
                                <Card.Link href="#"></Card.Link>
                                <h6 className='text-danger'>#o+ #city #state</h6></div>
                        </Card.Body>
                    </Card>

                </div>
                <div className='col-lg-3 col-md-6 mt-5'>
                    <Card style={{ width: '20rem' }}>
                        <Card.Body className='rounded' style={{ backgroundColor: '#FFFFFF' }}  >
                            <Card.Title>
                                <div className='d-flex justify-content-between'>
                                    <h5 style={{ color: 'black' }}>Rangan</h5>
                                    <img src={User} alt="" />
                                </div>
                            </Card.Title>
                            {/* <Card.Subtitle className="mb-2 fs-5">Blood Group : o+</Card.Subtitle> */}
                            <Card.Text>
                                <h6 style={{ color: 'black' }}><b>Blood Group : o+</b></h6>

                                <h6 style={{ color: 'black' }}><b>Location : </b></h6>
                                <h6 style={{ color: 'black' }}><b>Contact :+ 123 456 789</b></h6>
                            </Card.Text>

                            <div className='ms-auto d-flex justify-content-between'>
                                <Card.Link href="#"></Card.Link>
                                <h6 className='text-danger'>#o+ #city #state</h6></div>
                        </Card.Body>
                    </Card>

                </div>
                <div className='col-lg-3 col-md-6 mt-5'>
                    <Card style={{ width: '20rem' }}>
                        <Card.Body className='rounded' style={{ backgroundColor: '#FFFFFF' }}  >
                            <Card.Title>
                                <div className='d-flex justify-content-between'>
                                    <h5 style={{ color: 'black' }}>Rangan</h5>
                                    <img src={User} alt="" />
                                </div>
                            </Card.Title>
                            {/* <Card.Subtitle className="mb-2 fs-5">Blood Group : o+</Card.Subtitle> */}
                            <Card.Text>
                                <h6 style={{ color: 'black' }}><b>Blood Group : o+</b></h6>

                                <h6 style={{ color: 'black' }}><b>Location : </b></h6>
                                <h6 style={{ color: 'black' }}><b>Contact :+ 123 456 789</b></h6>
                            </Card.Text>

                            <div className='ms-auto d-flex justify-content-between'>
                                <Card.Link href="#"></Card.Link>
                                <h6 className='text-danger'>#o+ #city #state</h6></div>
                        </Card.Body>
                    </Card>

                </div>
                <div className='col-lg-3 col-md-6 mt-5'>
                    <Card style={{ width: '20rem' }}>
                        <Card.Body className='rounded' style={{ backgroundColor: '#FFFFFF' }}  >
                            <Card.Title>
                                <div className='d-flex justify-content-between'>
                                    <h5 style={{ color: 'black' }}>Rangan</h5>
                                    <img src={User} alt="" />
                                </div>
                            </Card.Title>
                            {/* <Card.Subtitle className="mb-2 fs-5">Blood Group : o+</Card.Subtitle> */}
                            <Card.Text>
                                <h6 style={{ color: 'black' }}><b>Blood Group : o+</b></h6>

                                <h6 style={{ color: 'black' }}><b>Location : </b></h6>
                                <h6 style={{ color: 'black' }}><b>Contact :+ 123 456 789</b></h6>
                            </Card.Text>

                            <div className='ms-auto d-flex justify-content-between'>
                                <Card.Link href="#"></Card.Link>
                                <h6 className='text-danger'>#o+ #city #state</h6></div>
                        </Card.Body>
                    </Card>

                </div>






            </div>
            <hr />

            <div className='row mt-5 p-5' style={{ backgroundColor: 'grey' }}>
                <div className='col-md-2'></div>
                <div className=' col-md-8'>
                    <div className='text-center m-5 w-75 m-auto'>
                        <p style={{ color: 'black' }}> <b>BloodLink is designed to facilitatedirect information between blood donors and recipients,ensuring swift and effecient access to life-saving blood donations.When you create a post on BloodLink, simply specify your bllod group and the urgency of your need .Other users can then browse the post and contact you directly if they are a match and able to donate. Rhis direct communication stramlines the process ,allowing donors and recipeints to connect quickly and cordinate donations with ease.</b></p>
                    </div>

                    <div className='d-flex align-items-center justify-content-center mb-5  w-100' style={{ overflowX: 'auto', scrollbarWidth: 'none', height: '170px' }}>
                        <div className='mx-4' style={{ width: '80px', height: '80px', borderRadius: '70px', backgroundColor: "black" }}>
                            <img src={connect} alt="" style={{ width: '70px', height: '70px' }} className='p-1 m-auto' />
                            <p className='text-center mt-2' style={{ color: 'black' }}> Instant Connects</p>

                        </div>
                        <div className='mx-4' style={{ width: '80px', height: '80px', borderRadius: '70px', backgroundColor: "black" }}>
                            <img src={connect} alt="" style={{ width: '70px', height: '70px' }} className='p-1 m-auto' />
                            <p className='text-center mt-2' style={{ color: 'black' }}> Instant Connects</p>

                        </div>
                        <div className='mx-4' style={{ width: '80px', height: '80px', borderRadius: '70px', backgroundColor: "black" }}>
                            <img src={connect} alt="" style={{ width: '70px', height: '70px' }} className='p-1 m-auto' />
                            <p className='text-center mt-2' style={{ color: 'black' }}> Instant Connects</p>

                        </div>
                        <div className='mx-4' style={{ width: '80px', height: '80px', borderRadius: '70px', backgroundColor: "black" }}>
                            <img src={connect} alt="" style={{ width: '70px', height: '70px' }} className='p-1 m-auto' />
                            <p className='text-center mt-2' style={{ color: 'black' }}> Instant Connects</p>

                        </div>
                        <div className='mx-4' style={{ width: '80px', height: '80px', borderRadius: '70px', backgroundColor: "black" }}>
                            <img src={connect} alt="" style={{ width: '70px', height: '70px' }} className='p-1 m-auto' />
                            <p className='text-center mt-2' style={{ color: 'black' }}> Instant Connects</p>

                        </div>

                    </div>
                </div>
                <div className='col-md-2'></div>
            </div>


            <Modal show={show} onHide={handleClose} className='mt-5' >
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <input id="loginUser" type="text" className='form-control w-75 mt-4 mb-4' placeholder='Username' />
                    <input id="loginPswd" type="password" className='form-control w-75 mb-4' placeholder='Password' />
                </div>
                <Modal.Footer className='d-flex justify-content-evenly'>
                    <Button variant="primary" onClick={handleClose}>
                        Login
                    </Button>
                    <Button variant="warning" onClick={handleClose}>
                        Reset
                    </Button>
                </Modal.Footer>
            </Modal>

<div className='regsiter'> 
<div className='register-content' id='register' style={{display:'none'}}>
            <div className='register-header'>
                <h4>Create Account</h4>
                <button type="button" className="btn-close ms-auto" aria-label="Close" onClick={closeRegister}></button>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                    <input id="registerUser" type="text" className='form-control w-75 mt-4 mb-4' placeholder='Username' />
                    <input id="registerEmail" type="email" className='form-control w-75 mb-4' placeholder='E-mail' />
                    <input id="registerPswd" type="password" className='form-control w-75 mb-4' placeholder='Password' />
            </div>
            <div className='d-flex justify-content-evenly'>
                    <Button variant="primary">
                        Register
                    </Button>
                    <Button variant="warning">
                        Reset
                    </Button>
            </div>
           </div>
</div>



          
        </>
    )
}

export default Home