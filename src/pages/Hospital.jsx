import React from 'react'
import Logo from '../assets/BloodLink-Logo.svg'
import { Card, Col, Row } from 'react-bootstrap'
import User from '../assets/user-icon.svg'

const Hospital = () => {
    return (
        <div className='p-5'>
            <div className='d-flex justify-content-start align-items-center'>
                <img src={Logo} alt="BloodLink_Logo" className='me-2' />
                <h2 className='mt-3'>BloodLink.in</h2>
            </div>
            <br />
            <p className='ms-5 mb-4'> BloodLink enables immediate connections between blood donors and recipients. With just a few clicks, those in need can find donors who match their blood type and location, facilitating quick and efficient blood donations.</p>
            <Row className='p-4 bg-light rounded-3' xs={1} md={4}>
                <Col className='bg-light'>
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
                
                <Col className='bg-light'>
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
                
                <Col className='bg-light'>
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
                
                <Col className='bg-light'>
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
        </div>
    )
}

export default Hospital