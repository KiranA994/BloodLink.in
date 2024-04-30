import React from 'react'
import Logo from '../assets/BloodLink-Logo.svg'
import { Card, Col, Row } from 'react-bootstrap'
import User from '../assets/user-icon.svg'
import { motion } from "framer-motion";
import Enquire from '../components/Enquire';

const Hospital = () => {
    return (
        <motion.div className='p-5' initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }}>
            <div className='d-flex justify-content-start align-items-center'>
                <a href="/" className='text-decoration-none'>
                    <div className='d-flex'>
                        <div>
                            <img src={Logo} alt="BloodLink_Logo" className='me-2' width={40} />
                            <h5 className='mt-3'>BloodLink.in</h5>
                        </div>
                        <div>
                            <Enquire />
                        </div>
                    </div>
                </a>
            </div>
            <br />
            <p className='ms-5 mb-4'> BloodLink enables immediate connections between blood donors and recipients. With just a few clicks, those in need can find donors who match their blood type and location, facilitating quick and efficient blood donations.</p>
            <motion.div initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 1.0,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}>

                <Row className='p-4 bg-white rounded-3' xs={1} md={4}  >
                    <Col className='bg-white'>
                        <h1 className='text-center mb-4 ' style={{ backgroundColor: "transparent", color: "#D22F27", fontWeight: "700", borderBottom: "1px black solid" }}>A</h1>
                        <Card style={{ width: '100%' }} className='mb-2'>
                            <Card.Body className='p-4 rounded-3'>
                                <Card.Title>
                                    <div className='d-flex justify-content-between'>
                                        <h2>Rangan</h2>
                                        <img src={User} alt="" />
                                    </div></Card.Title>
                                <Card.Subtitle className="mb-2 fs-5 text-danger">Blood Group : o+</Card.Subtitle>
                                <Card.Text>
                                    <p>Age :</p>
                                    <p>Location : </p>
                                    <p>Ph Num :</p>
                                </Card.Text>
                                <div className='d-flex justify-content-evenly'>
                                    <Card.Link href="#"><i class="fa-solid fa-circle-check fs-5"></i></Card.Link>
                                    <Card.Link href="#"><i class="fa-brands fa-whatsapp fs-5"></i></Card.Link>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '100%' }} className='mb-2'>
                            <Card.Body className='p-4 rounded-3'>
                                <Card.Title>
                                    <div className='d-flex justify-content-between'>
                                        <h2>Rangan</h2>
                                        <img src={User} alt="" />
                                    </div></Card.Title>
                                <Card.Subtitle className="mb-2 fs-5 text-danger">Blood Group : o+</Card.Subtitle>
                                <Card.Text>
                                    <p>Age :</p>
                                    <p>Location : </p>
                                    <p>Ph Num :</p>
                                </Card.Text>
                                <div className='d-flex justify-content-evenly'>
                                    <Card.Link href="#"><i class="fa-solid fa-circle-check fs-5"></i></Card.Link>
                                    <Card.Link href="#"><i class="fa-brands fa-whatsapp fs-5"></i></Card.Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className='bg-white'>
                        <h1 className='text-center mb-4 ' style={{ backgroundColor: "transparent", color: "#D22F27", fontWeight: "700", borderBottom: "1px black solid" }}>B</h1>
                        <Card style={{ width: '100%' }} className='mb-2'>
                            <Card.Body className='p-4 rounded-3'>
                                <Card.Title>
                                    <div className='d-flex justify-content-between'>
                                        <h2>Rangan</h2>
                                        <img src={User} alt="" />
                                    </div></Card.Title>
                                <Card.Subtitle className="mb-2 fs-5 text-danger">Blood Group : o+</Card.Subtitle>
                                <Card.Text>
                                    <p>Age :</p>
                                    <p>Location : </p>
                                    <p>Ph Num :</p>
                                </Card.Text>
                                <div className='d-flex justify-content-evenly'>
                                    <Card.Link href="#"><i class="fa-solid fa-circle-check fs-5"></i></Card.Link>
                                    <Card.Link href="#"><i class="fa-brands fa-whatsapp fs-5"></i></Card.Link>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '100%' }} className='mb-2'>
                            <Card.Body className='p-4 rounded-3'>
                                <Card.Title>
                                    <div className='d-flex justify-content-between'>
                                        <h2>Rangan</h2>
                                        <img src={User} alt="" />
                                    </div></Card.Title>
                                <Card.Subtitle className="mb-2 fs-5 text-danger">Blood Group : o+</Card.Subtitle>
                                <Card.Text>
                                    <p>Age :</p>
                                    <p>Location : </p>
                                    <p>Ph Num :</p>
                                </Card.Text>
                                <div className='d-flex justify-content-evenly'>
                                    <Card.Link href="#"><i class="fa-solid fa-circle-check fs-5"></i></Card.Link>
                                    <Card.Link href="#"><i class="fa-brands fa-whatsapp fs-5"></i></Card.Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className='bg-white'>
                        <h1 className='text-center mb-4 ' style={{ backgroundColor: "transparent", color: "#D22F27", fontWeight: "700", borderBottom: "1px black solid" }}>AB</h1>
                        <Card style={{ width: '100%' }} className='mb-2'>
                            <Card.Body className='p-4 rounded-3'>
                                <Card.Title>
                                    <div className='d-flex justify-content-between'>
                                        <h2>Rangan</h2>
                                        <img src={User} alt="" />
                                    </div></Card.Title>
                                <Card.Subtitle className="mb-2 fs-5 text-danger">Blood Group : o+</Card.Subtitle>
                                <Card.Text>
                                    <p>Age :</p>
                                    <p>Location : </p>
                                    <p>Ph Num :</p>
                                </Card.Text>
                                <div className='d-flex justify-content-evenly'>
                                    <Card.Link href="#"><i class="fa-solid fa-circle-check fs-5"></i></Card.Link>
                                    <Card.Link href="#"><i class="fa-brands fa-whatsapp fs-5"></i></Card.Link>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '100%' }} className='mb-2'>
                            <Card.Body className='p-4 rounded-3'>
                                <Card.Title>
                                    <div className='d-flex justify-content-between'>
                                        <h2>Rangan</h2>
                                        <img src={User} alt="" />
                                    </div></Card.Title>
                                <Card.Subtitle className="mb-2 fs-5 text-danger">Blood Group : o+</Card.Subtitle>
                                <Card.Text>
                                    <p>Age :</p>
                                    <p>Location : </p>
                                    <p>Ph Num :</p>
                                </Card.Text>
                                <div className='d-flex justify-content-evenly'>
                                    <Card.Link href="#"><i class="fa-solid fa-circle-check fs-5"></i></Card.Link>
                                    <Card.Link href="#"><i class="fa-brands fa-whatsapp fs-5"></i></Card.Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className='bg-white'>
                        <h1 className='text-center mb-4 ' style={{ backgroundColor: "transparent", color: "#D22F27", fontWeight: "700", borderBottom: "1px black solid" }}>O</h1>
                        <Card style={{ width: '100%' }} className='mb-2'>
                            <Card.Body className='p-4 rounded-3'>
                                <Card.Title>
                                    <div className='d-flex justify-content-between'>
                                        <h2>Rangan</h2>
                                        <img src={User} alt="" />
                                    </div></Card.Title>
                                <Card.Subtitle className="mb-2 fs-5 text-danger">Blood Group : o+</Card.Subtitle>
                                <Card.Text>
                                    <p>Age :</p>
                                    <p>Location : </p>
                                    <p>Ph Num :</p>
                                </Card.Text>
                                <div className='d-flex justify-content-evenly'>
                                    <Card.Link href="#"><i class="fa-solid fa-circle-check fs-5"></i></Card.Link>
                                    <Card.Link href="#"><i class="fa-brands fa-whatsapp fs-5"></i></Card.Link>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '100%' }} className='mb-2'>
                            <Card.Body className='p-4 rounded-3'>
                                <Card.Title>
                                    <div className='d-flex justify-content-between'>
                                        <h2>Rangan</h2>
                                        <img src={User} alt="" />
                                    </div></Card.Title>
                                <Card.Subtitle className="mb-2 fs-5 text-danger">Blood Group : o+</Card.Subtitle>
                                <Card.Text>
                                    <p>Age :</p>
                                    <p>Location : </p>
                                    <p>Ph Num :</p>
                                </Card.Text>
                                <div className='d-flex justify-content-evenly'>
                                    <Card.Link href="#"><i class="fa-solid fa-circle-check fs-5"></i></Card.Link>
                                    <Card.Link href="#"><i class="fa-brands fa-whatsapp fs-5"></i></Card.Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>



                </Row>
            </motion.div>
        </motion.div>
    )
}

export default Hospital