import React from 'react'
import { motion } from "framer-motion";
import Logo from '../assets/BloodLink-Logo.svg'
import User from '../assets/user-icon.svg'
import { Card, Col, Row } from 'react-bootstrap';
import Menu from '../assets/Menu.svg'
import './Home.css'
import Signin from '../components/Signin';
import Signup from '../components/Signup';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const Home = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <motion.div className='p-5' initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}>
                <div className='d-flex justify-content-between align-items-center'>
                    <a href="/" className='text-decoration-none'>
                    <div className='d-flex'>
                    <img src={Logo} alt="BloodLink_Logo" className='me-2' width={40} />
                    <h5 className='mt-3'>BloodLink.in</h5>
                    </div>
                    </a>
                    <div>
                        <a href="#" className='hospital px-3 py-1' style={{textDecoration:"none", transition:"0.3s"}}><Signin/></a>
                        <a href="#">
                        <a href="#" className='signup px-3 py-1 ms-2' style={{textDecoration:"none", transition:"0.3s"}}><Signup/></a>
                        <button style={{border:'none', backgroundColor:"transparent"}}><img src={Menu} alt="menu" className='logo ms-3' width={30} onClick={handleShow}/></button> 
                        </a>
                    </div>
                </div>
                <br />
                <motion.div initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 1.2,
                        delay: 0.7,
                        ease: [0, 0.71, 0.2, 1.01]
                    }} className='justify-content-center align-items-center text-center' style={{ display: "flex", flexDirection: "column" }}>
                    <h2>Welcome to <span className='text-danger' style={{ fontWeight: "700" }}>BloodLink.in</span></h2>
                    <h4>your go-to platform for</h4>
                    <h3>instant blood donation connections.</h3>
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 1.2,
                    delay: 0.9,
                    ease: [0, 0.71, 0.2, 1.01]
                }} className='d-flex justify-content-center align-items-center'>
                    <input type="text"  className='search form-control my-5' style={{maxWidth:"500px"}} placeholder='Search your location or Blood group'/>
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 1.2,
                    delay: 1,
                    ease: [0, 0.71, 0.2, 1.01]
                }}>
                    <Row xs={1} md={3}>
                    <Col className='mb-3'>
                    <Card style={{ width: '100%',background:"white" }} className='mb-2'>
                            <Card.Body className='p-4 rounded-3' style={{background:"white"}}>
                                <Card.Title>
                                    <div className='d-flex justify-content-between'  style={{background:"white"}}>
                                        <h2  style={{background:"white",color:"black"}} >Rangan</h2>
                                        <img src={User} alt=""  style={{background:"white"}} />
                                    </div></Card.Title>
                                <Card.Subtitle className="mb-2 fs-5 text-danger"  style={{background:"white"}}>Blood Group : o+</Card.Subtitle>
                                <Card.Text  style={{background:"white"}}>
                                    <p  style={{background:"white",color:'black'}}>Age :</p>
                                    <p  style={{background:"white",color:"black"}}>Location : </p>
                                    <p  style={{background:"white",color:'black'}}>Ph Num :</p>
                                </Card.Text>
                                <div className='d-flex justify-content-evenly'  style={{background:"white"}}>
                                    <Card.Link href="#"  style={{background:"white"}}><i class="fa-solid fa-circle-check fs-5"  style={{background:"white",color:"black"}}></i></Card.Link>
                                    <Card.Link href="#"  style={{background:"white"}}><i class="fa-brands fa-whatsapp fs-5"  style={{background:"white",color:"black"}}></i></Card.Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mb-3'>
                    <Card style={{ width: '100%',background:"white" }} className='mb-2'>
                            <Card.Body className='p-4 rounded-3' style={{background:"white"}}>
                                <Card.Title>
                                    <div className='d-flex justify-content-between'  style={{background:"white"}}>
                                        <h2  style={{background:"white",color:"black"}} >Rangan</h2>
                                        <img src={User} alt=""  style={{background:"white"}} />
                                    </div></Card.Title>
                                <Card.Subtitle className="mb-2 fs-5 text-danger"  style={{background:"white"}}>Blood Group : o+</Card.Subtitle>
                                <Card.Text  style={{background:"white"}}>
                                    <p  style={{background:"white",color:'black'}}>Age :</p>
                                    <p  style={{background:"white",color:"black"}}>Location : </p>
                                    <p  style={{background:"white",color:'black'}}>Ph Num :</p>
                                </Card.Text>
                                <div className='d-flex justify-content-evenly'  style={{background:"white"}}>
                                    <Card.Link href="#"  style={{background:"white"}}><i class="fa-solid fa-circle-check fs-5"  style={{background:"white",color:"black"}}></i></Card.Link>
                                    <Card.Link href="#"  style={{background:"white"}}><i class="fa-brands fa-whatsapp fs-5"  style={{background:"white",color:"black"}}></i></Card.Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mb-3'>
                    <Card style={{ width: '100%',background:"white" }} className='mb-2'>
                            <Card.Body className='p-4 rounded-3' style={{background:"white"}}>
                                <Card.Title>
                                    <div className='d-flex justify-content-between'  style={{background:"white"}}>
                                        <h2  style={{background:"white",color:"black"}} >Rangan</h2>
                                        <img src={User} alt=""  style={{background:"white"}} />
                                    </div></Card.Title>
                                <Card.Subtitle className="mb-2 fs-5 text-danger"  style={{background:"white"}}>Blood Group : o+</Card.Subtitle>
                                <Card.Text  style={{background:"white"}}>
                                    <p  style={{background:"white",color:'black'}}>Age :</p>
                                    <p  style={{background:"white",color:"black"}}>Location : </p>
                                    <p  style={{background:"white",color:'black'}}>Ph Num :</p>
                                </Card.Text>
                                <div className='d-flex justify-content-evenly'  style={{background:"white"}}>
                                    <Card.Link href="#"  style={{background:"white"}}><i class="fa-solid fa-circle-check fs-5"  style={{background:"white",color:"black"}}></i></Card.Link>
                                    <Card.Link href="#"  style={{background:"white"}}><i class="fa-brands fa-whatsapp fs-5"  style={{background:"white",color:"black"}}></i></Card.Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mb-3'>
                    <Card style={{ width: '100%',background:"white" }} className='mb-2'>
                            <Card.Body className='p-4 rounded-3' style={{background:"white"}}>
                                <Card.Title>
                                    <div className='d-flex justify-content-between'  style={{background:"white"}}>
                                        <h2  style={{background:"white",color:"black"}} >Rangan</h2>
                                        <img src={User} alt=""  style={{background:"white"}} />
                                    </div></Card.Title>
                                <Card.Subtitle className="mb-2 fs-5 text-danger"  style={{background:"white"}}>Blood Group : o+</Card.Subtitle>
                                <Card.Text  style={{background:"white"}}>
                                    <p  style={{background:"white",color:'black'}}>Age :</p>
                                    <p  style={{background:"white",color:"black"}}>Location : </p>
                                    <p  style={{background:"white",color:'black'}}>Ph Num :</p>
                                </Card.Text>
                                <div className='d-flex justify-content-evenly'  style={{background:"white"}}>
                                    <Card.Link href="#"  style={{background:"white"}}><i class="fa-solid fa-circle-check fs-5"  style={{background:"white",color:"black"}}></i></Card.Link>
                                    <Card.Link href="#"  style={{background:"white"}}><i class="fa-brands fa-whatsapp fs-5"  style={{background:"white",color:"black"}}></i></Card.Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mb-3'>
                    <Card style={{ width: '100%',background:"white" }} className='mb-2'>
                            <Card.Body className='p-4 rounded-3' style={{background:"white"}}>
                                <Card.Title>
                                    <div className='d-flex justify-content-between'  style={{background:"white"}}>
                                        <h2  style={{background:"white",color:"black"}} >Rangan</h2>
                                        <img src={User} alt=""  style={{background:"white"}} />
                                    </div></Card.Title>
                                <Card.Subtitle className="mb-2 fs-5 text-danger"  style={{background:"white"}}>Blood Group : o+</Card.Subtitle>
                                <Card.Text  style={{background:"white"}}>
                                    <p  style={{background:"white",color:'black'}}>Age :</p>
                                    <p  style={{background:"white",color:"black"}}>Location : </p>
                                    <p  style={{background:"white",color:'black'}}>Ph Num :</p>
                                </Card.Text>
                                <div className='d-flex justify-content-evenly'  style={{background:"white"}}>
                                    <Card.Link href="#"  style={{background:"white"}}><i class="fa-solid fa-circle-check fs-5"  style={{background:"white",color:"black"}}></i></Card.Link>
                                    <Card.Link href="#"  style={{background:"white"}}><i class="fa-brands fa-whatsapp fs-5"  style={{background:"white",color:"black"}}></i></Card.Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mb-3'>
                    <Card style={{ width: '100%',background:"white" }} className='mb-2'>
                            <Card.Body className='p-4 rounded-3' style={{background:"white"}}>
                                <Card.Title>
                                    <div className='d-flex justify-content-between'  style={{background:"white"}}>
                                        <h2  style={{background:"white",color:"black"}} >Rangan</h2>
                                        <img src={User} alt=""  style={{background:"white"}} />
                                    </div></Card.Title>
                                <Card.Subtitle className="mb-2 fs-5 text-danger"  style={{background:"white"}}>Blood Group : o+</Card.Subtitle>
                                <Card.Text  style={{background:"white"}}>
                                    <p  style={{background:"white",color:'black'}}>Age :</p>
                                    <p  style={{background:"white",color:"black"}}>Location : </p>
                                    <p  style={{background:"white",color:'black'}}>Ph Num :</p>
                                </Card.Text>
                                <div className='d-flex justify-content-evenly'  style={{background:"white"}}>
                                    <Card.Link href="#"  style={{background:"white"}}><i class="fa-solid fa-circle-check fs-5"  style={{background:"white",color:"black"}}></i></Card.Link>
                                    <Card.Link href="#"  style={{background:"white"}}><i class="fa-brands fa-whatsapp fs-5"  style={{background:"white",color:"black"}}></i></Card.Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    </Row>
                </motion.div>
            </motion.div>
            <Modal show={show} onHide={handleClose} >
    <Modal.Body>
        <h3>Sign up</h3>
        <input type="text" className='form-control mb-3' placeholder='User name'/>
        <input type="text" className='form-control mb-3' placeholder='Email'/>
        <input type="text" className='form-control mb-3' placeholder='Password'/>
        
    </Modal.Body>
    <Modal.Footer className='bg-transparent d-flex justify-content-evenly'>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" className='bg-danger' style={{border:"none"}} onClick={handleClose}>
        Create
      </Button>
    </Modal.Footer>
     
  </Modal>
        </>
    )
}

export default Home