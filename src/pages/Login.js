import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

function Login() {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // If successful, navigate to another page 
      navigate('/');
    } catch (error) {
      setErr(true);
      console.error(error);
    }
  };

  return (
    <div className='register'>
      <Container className='m-5'>
        <Row className='justify-content-center'>
          <Col md={6}>
            <Card>
              <Card.Body>
                <div className="text-center mb-2">
                  <h2>Whatssap</h2>
                  <h4 style={{color:'gray'}}>Login</h4>
                </div>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="email">
                    <Form.Control
                      type="email"
                      placeholder="email"
                      className='shadow-sm p-3 mb-3 bg-white rounded w-100 border-0'
                    />
                  </Form.Group>

                  <Form.Group controlId="password">
                    <Form.Control
                      type="password"
                      placeholder="password"
                      className='shadow-sm p-3 mb-3 bg-white rounded w-100 border-0'
                    />
                  </Form.Group>

                  <Button
                    type='submit'
                    style={{ backgroundColor: '#25D366', color: '#ffff' }}
                    className='p-2 mb-3 rounded w-100 border-0'
                  >
                    Sign In
                  </Button>
                  {err && <span>Something went wrong</span>}
                </Form>
                <p className='text-center'>You don't have an account? <Link to='/register' > Register</Link></p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
