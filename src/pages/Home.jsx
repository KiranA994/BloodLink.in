import React from 'react'

import Card from 'react-bootstrap/Card';
import User from '../assets/user-icon.svg'
import connect from '../assets/connect.png'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Bloodlogo from '../assets/BloodLink-Logo.svg'
import Nav from 'react-bootstrap/Nav';

function Home() {
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
                                <Button variant="danger">Sign In</Button>{' '}
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
                                    <h4 style={{ color: 'black', background: "white", fontWeight: "700" }}>Rangan</h4>
                                    <img src={User} alt="" style={{ backgroundColor: "white" }} />
                                </div>
                            </Card.Title>
                            {/* <Card.Subtitle className="mb-2 fs-5">Blood Group : o+</Card.Subtitle> */}
                            <Card.Text style={{ backgroundColor: "white" }}>
                                <h6 style={{ color: 'black', background: "white", fontWeight: "600" }}>Blood Group : o+</h6>

                                <h6 style={{ color: 'black', background: "white", fontWeight: "600" }}>Location : </h6>
                                <h6 style={{ color: 'black', background: "white", fontWeight: "600" }}>Contact :+ 123 456 789</h6>
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
                            <Card.Title >
                                <div className='d-flex justify-content-between ' style={{ backgroundColor: "white" }}>
                                    <h4 style={{ color: 'black', background: "white", fontWeight: "700" }}>Rangan</h4>
                                    <img src={User} alt="" style={{ backgroundColor: "white" }} />
                                </div>
                            </Card.Title>
                            {/* <Card.Subtitle className="mb-2 fs-5">Blood Group : o+</Card.Subtitle> */}
                            <Card.Text style={{ backgroundColor: "white" }}>
                                <h6 style={{ color: 'black', background: "white", fontWeight: "600" }}>Blood Group : o+</h6>

                                <h6 style={{ color: 'black', background: "white", fontWeight: "600" }}>Location : </h6>
                                <h6 style={{ color: 'black', background: "white", fontWeight: "600" }}>Contact :+ 123 456 789</h6>
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
                            <Card.Title >
                                <div className='d-flex justify-content-between ' style={{ backgroundColor: "white" }}>
                                    <h4 style={{ color: 'black', background: "white", fontWeight: "700" }}>Rangan</h4>
                                    <img src={User} alt="" style={{ backgroundColor: "white" }} />
                                </div>
                            </Card.Title>
                            {/* <Card.Subtitle className="mb-2 fs-5">Blood Group : o+</Card.Subtitle> */}
                            <Card.Text style={{ backgroundColor: "white" }}>
                                <h6 style={{ color: 'black', background: "white", fontWeight: "600" }}>Blood Group : o+</h6>

                                <h6 style={{ color: 'black', background: "white", fontWeight: "600" }}>Location : </h6>
                                <h6 style={{ color: 'black', background: "white", fontWeight: "600" }}>Contact :+ 123 456 789</h6>
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
                            <Card.Title >
                                <div className='d-flex justify-content-between ' style={{ backgroundColor: "white" }}>
                                    <h4 style={{ color: 'black', background: "white", fontWeight: "700" }}>Rangan</h4>
                                    <img src={User} alt="" style={{ backgroundColor: "white" }} />
                                </div>
                            </Card.Title>
                            {/* <Card.Subtitle className="mb-2 fs-5">Blood Group : o+</Card.Subtitle> */}
                            <Card.Text style={{ backgroundColor: "white" }}>
                                <h6 style={{ color: 'black', background: "white", fontWeight: "600" }}>Blood Group : o+</h6>

                                <h6 style={{ color: 'black', background: "white", fontWeight: "600" }}>Location : </h6>
                                <h6 style={{ color: 'black', background: "white", fontWeight: "600" }}>Contact :+ 123 456 789</h6>
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
                            <Card.Title >
                                <div className='d-flex justify-content-between ' style={{ backgroundColor: "white" }}>
                                    <h4 style={{ color: 'black', background: "white", fontWeight: "700" }}>Rangan</h4>
                                    <img src={User} alt="" style={{ backgroundColor: "white" }} />
                                </div>
                            </Card.Title>
                            {/* <Card.Subtitle className="mb-2 fs-5">Blood Group : o+</Card.Subtitle> */}
                            <Card.Text style={{ backgroundColor: "white" }}>
                                <h6 style={{ color: 'black', background: "white", fontWeight: "600" }}>Blood Group : o+</h6>

                                <h6 style={{ color: 'black', background: "white", fontWeight: "600" }}>Location : </h6>
                                <h6 style={{ color: 'black', background: "white", fontWeight: "600" }}>Contact :+ 123 456 789</h6>
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
                            <Card.Title >
                                <div className='d-flex justify-content-between ' style={{ backgroundColor: "white" }}>
                                    <h4 style={{ color: 'black', background: "white", fontWeight: "700" }}>Rangan</h4>
                                    <img src={User} alt="" style={{ backgroundColor: "white" }} />
                                </div>
                            </Card.Title>
                            {/* <Card.Subtitle className="mb-2 fs-5">Blood Group : o+</Card.Subtitle> */}
                            <Card.Text style={{ backgroundColor: "white" }}>
                                <h6 style={{ color: 'black', background: "white", fontWeight: "600" }}>Blood Group : o+</h6>

                                <h6 style={{ color: 'black', background: "white", fontWeight: "600" }}>Location : </h6>
                                <h6 style={{ color: 'black', background: "white", fontWeight: "600" }}>Contact :+ 123 456 789</h6>
                            </Card.Text>

                            <div className='ms-auto d-flex justify-content-between' style={{ backgroundColor: "white" }}>
                                <Card.Link href="#"></Card.Link>
                                <h6 className='text-danger' style={{ backgroundColor: "white" }}>#o+ #city #state</h6></div>
                        </Card.Body>
                    </Card>

                </div>










            </div>
           

            <div className='row mt-5 p-5' style={{ backgroundColor: 'grey' }}>
                <div className='col-md-2' style={{ backgroundColor: 'grey' }}></div>
                <div className=' col-md-8' style={{ backgroundColor: 'grey' }}>
                    <div className='text-center m-5 w-75 m-auto' style={{backgroundColor: 'grey',fontWeight:'600'}}>
                        <p style={{ color: 'black', backgroundColor: 'grey'}}>BloodLink is designed to facilitatedirect information between blood donors and recipients,ensuring swift and effecient access to life-saving blood donations.When you create a post on BloodLink, simply specify your bllod group and the urgency of your need .Other users can then browse the post and contact you directly if they are a match and able to donate. Rhis direct communication stramlines the process ,allowing donors and recipeints to connect quickly and cordinate donations with ease.</p>
                    </div>

                    <div className='d-flex align-items-center justify-content-center mb-5  w-100' style={{ overflowX: 'auto', scrollbarWidth: 'none', height: '170px', backgroundColor: 'grey' }}>
                        <div className='me-5' style={{ backgroundColor: 'grey', width:'80px' }}>
                            <img src={connect} alt="" style={{ width: '70px', height: '70px', backgroundColor: "black", borderRadius: '70px' }} className='p-3' />
                            <p className='text-center' style={{ color: 'black', backgroundColor: 'grey' }}>Instant Connections</p>

                        </div>
                        <div className='me-5' style={{ backgroundColor: 'grey', width:'80px' }}>
                            <img src={connect} alt="" style={{ width: '70px', height: '70px', backgroundColor: "black", borderRadius: '70px' }} className='p-3' />
                            <p className='text-center' style={{ color: 'black', backgroundColor: 'grey' }}>Instant Connections</p>

                        </div>
                       
                        <div className='me-5' style={{ backgroundColor: 'grey', width:'80px' }}>
                            <img src={connect} alt="" style={{ width: '70px', height: '70px', backgroundColor: "black", borderRadius: '70px' }} className='p-3' />
                            <p className='text-center' style={{ color: 'black', backgroundColor: 'grey' }}>Instant Connections</p>

                        </div>
                        <div className='me-5' style={{ backgroundColor: 'grey', width:'80px' }}>
                            <img src={connect} alt="" style={{ width: '70px', height: '70px', backgroundColor: "black", borderRadius: '70px' }} className='p-3' />
                            <p className='text-center' style={{ color: 'black', backgroundColor: 'grey' }}>Instant Connections</p>

                        </div>
                        <div className='' style={{ backgroundColor: 'grey', width:'80px' }}>
                            <img src={connect} alt="" style={{ width: '70px', height: '70px', backgroundColor: "black", borderRadius: '70px' }} className='p-3' />
                            <p className='text-center' style={{ color: 'black', backgroundColor: 'grey' }}>Instant Connections</p>

                        </div>



                       

                    </div>
                </div>
                <div className='col-md-2' style={{ backgroundColor: 'grey' }}></div>
            </div>

        </>
    )
}

export default Home