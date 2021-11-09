import React from 'react';
import loginIcon from '../images/user.svg'
import uiImg from '../images/login.svg';

import { Col, Container, Row, Button, Form } from 'react-bootstrap';


const Login = (props) => {
    const{
       
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError,
        fname,
        setFname,
        lname,
        setLname,
        number,
        setNumber
    } = props;
    return (
        <div>
            <Container className="mt-5">
                <Row>
                    <Col lg={4} md={6} sm={12} className="text-center mt-5 p-3">
                        <img className="icon-img" src={loginIcon} alt="icon"/>
                        <Form>        
                            <div className="btnContainer">
                                {hasAccount ? (
                                    <>
                                     
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="email" required placeholder="Enter email" value={email} onChange = {(e) => setEmail(e.target.value)} />
                                        <p className="errorMsg">{emailError}</p>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Control type="password" required placeholder="Password" value={password} onChange = {(e) => setPassword(e.target.value)}  />
                                        <p className="errorMsg">{passwordError}</p>
                                        </Form.Group>

                                        <Button className="log" variant="primary btn-block" onClick = {handleLogin}> Sign in </Button>
                                        <p>
                                            Don't have an account? 
                                            <span onClick={() => setHasAccount(!hasAccount)}>
                                                Sign up
                                            </span>
                                        </p>
                                    </>
                                ): (
                                    <>
                                         
                                        <Form.Group className="mb-3" controlId="formBasicText">
                                            <Form.Control type="text"  placeholder="Enter first name" required value={fname} onChange = {(e) => setFname(e.target.value)} />
                                            
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicText">
                                            <Form.Control type="text" required placeholder="Enter last name"  value={lname} onChange = {(e) => setLname(e.target.value)} />
                                            
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicText">
                                            <Form.Control type="text" required placeholder="Enter phone number" value={number} onChange = {(e) => setNumber(e.target.value)} />
                                            
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Control type="email" required placeholder="Enter email" value={email} onChange = {(e) => setEmail(e.target.value)} />
                                            <p className="errorMsg">{emailError}</p>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Control type="password" required placeholder="Password" value={password} onChange = {(e) => setPassword(e.target.value)}  />
                                            <p className="errorMsg">{passwordError}</p>
                                        </Form.Group>
                                    
                                        <Button className="out" variant="primary btn-block" onClick = {handleSignup}> Sign up </Button>
                                        <p>
                                            Have an account? 
                                            <span onClick={() => setHasAccount(!hasAccount)}>
                                                Sign in
                                            </span>
                                        </p>
                                    </>
                                ) }
                            </div>

                            {/* <Button variant="primary btn-block" type="submit">Login</Button> */}

                           {/*  <div className="text-left mt-3">
                                <a href="#"><small className="reset">Password Reset</small></a>
                            </div> */}
                        </Form>
                    </Col>

                    <Col lg={8} md={6} sm={12}>
                        <img className="w-100" src={uiImg} alt=""/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login;
