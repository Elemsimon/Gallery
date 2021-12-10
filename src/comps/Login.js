import React,{useState} from 'react';
import loginIcon from '../images/user.svg'
import uiImg from '../images/login.svg';
import { auth, db } from "../firebase/config";
import { useHistory } from 'react-router-dom';
import {config} from '../firebase/config';
import { Col, Container, Row, Button, Form } from 'react-bootstrap';


const Login = (props) => {
    const{ 
        hasAccount,
        setHasAccount,
        emailError,
        passwordError,
        clearErrors,
        setEmailError,
        setPasswordError,
        setFname,
    } = props;

    const [data, setData] = useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
        error: '',
    });

    const history = useHistory();
    const { fname, lname, email, password } = data;

    const handleChange = e => {
        setData({...data, [e.target.name]: e.target.value })
    }
    
    const handleSignup = async (e) => {
        e.preventDefault();
        setData({ ...data, error: null, loading: true});
        if( !fname || !lname|| !email || !password){
            setData({ ...data, error: "All fields are required"})
        }
        try {
            const result = await auth.createUserWithEmailAndPassword(
                email,
                password
            );
            await db.collection("users").doc(result.user.uid).set({
                uid: result.user.uid,
                fname,
                lname,
                email,
            });
            setData({
                fname:"",
                lname:"",
                email:"",
                password:"",
                error: null,
              

            });
        } catch (err) {
            setData({...data, error: err.message});
        }
    };


    const handleLogin = () => {
        clearErrors();
        config
          .auth()
          .signInWithEmailAndPassword(email, password)
          .catch((err) => {
            switch (err.code) {
              case "auth/invalid-email":
              case "auth/user-disabled":
              case "auth/user-not-found":
                setEmailError(err.message);
                break;
              case "auth/wrong-password":
                setPasswordError(err.message);
                break;
            }
        });
      };
      
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
                                        <Form.Control type="email" required name="email" placeholder="Enter email" value={email} onChange = {handleChange} />
                                        <p className="errorMsg">{emailError}</p>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Control type="password" required placeholder="Password" name="password" value={password} onChange = {handleChange} />
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
                                            <Form.Control type="text"  placeholder="Enter first name" required name="fname" value={fname} onChange = {handleChange} />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicText">
                                            <Form.Control type="text" required placeholder="Enter last name" name="lname"  value={lname} onChange = {handleChange} />
                                            
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Control type="email" required placeholder="Enter email" name="email" value={email} onChange = {handleChange} />
                                            
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Control type="password" required placeholder="Password" name="password" value={password} onChange = {handleChange}  />
                                            
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
