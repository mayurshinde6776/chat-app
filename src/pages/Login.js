import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
function Login() {
 


  return (
    <div className='register'>
      <Container className="m-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <Card>
              <Card.Body>
                <div className="text-center mb-2">
                  <h2>Whatssap</h2>
                  <h4 style={{color:'gray'}}>Login</h4>
                </div>
                <Form>

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
                    style={{  backgroundColor: '#25D366',color: '#ffff' }}
                    className=' p-2 mb-3  rounded w-100 border-0'
                  >
                    Sign In
                  </Button>
                </Form>
                <p className='text-center'>You don't have an account? Register</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
