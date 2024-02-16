import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import Add from '../images/addAvatar.png'
function Register() {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState(null);

  const handleDisplayNameChange = (e) => {
    setDisplayName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFileChange = (e) => {
    // Handle file upload logic
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSignUp = () => {
    // Handle sign-up logic using Firebase or your authentication method
    console.log('Display Name:', displayName);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('File:', file);
    // Add your authentication logic here
  };

  return (
    <div className='register'>
      <Container className="m-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <Card>
              <Card.Body>
                <div className="text-center mb-2">
                  <h2>Whatssap</h2>
                  <h4 style={{color:'gray'}}>Register</h4>
                </div>
                <Form>
                  <Form.Group controlId="displayName">
                    <Form.Control
                      type="text"
                      placeholder="name"
                      value={displayName}
                      onChange={handleDisplayNameChange}
                      className='shadow-sm p-3 mb-3 bg-white rounded w-100 border-0'
                    />
                  </Form.Group>

                  <Form.Group controlId="email">
                    <Form.Control
                      type="email"
                      placeholder="email"
                      value={email}
                      onChange={handleEmailChange}
                    
                      className='shadow-sm p-3 mb-3 bg-white rounded w-100 border-0'
                    />
                  </Form.Group>

                  <Form.Group controlId="password">
                    <Form.Control
                      type="password"
                      placeholder="password"
                      value={password}
                      onChange={handlePasswordChange}
                     
                      className='shadow-sm p-3 mb-3 bg-white rounded w-100 border-0'
                    />
                  </Form.Group>

                  <Form.Group controlId="file">
                    <label
                      htmlFor="file"
                      onChange={handleFileChange}
                      style={{  fontSize:'12px',  cursor:'pointer', color: '#25D366' }}
                      className='shadow-sm p-3 mb-3 bg-white rounded w-100 border-0'
                    > 
                     <img  src={Add} alt='add profile' style={{width:'32px'}}/>
                     <span className='px-2'>Add an Avatar</span>
                    </label>
                  
                  </Form.Group>

                  <Button
                    variant=""
                    onClick={handleSignUp}
                    style={{  backgroundColor: '#25D366',color: '#ffff' }}
                    className=' p-2 mb-3  rounded w-100 border-0'
                  >
                    Sign Up
                  </Button>
                </Form>
                <p className='text-center'>Do you have an account? Login</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Register;
