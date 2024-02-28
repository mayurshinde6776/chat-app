
// Register.js
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import Add from '../images/addAvatar.png';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db, storage } from '../firebase';
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 

function Register() {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState(null);
const  [err ,setErr]= useState(false);



const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    // Upload the file to storage
    const storageRef = ref(storage, `profiles/${userCredential.user.uid}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Handle progress, if needed
      },
      (error) => {
        setErr(true);
        console.error(error);
      },
      async () => {
        // File uploaded successfully, now get the download URL
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

        // Update user profile with displayName and photoURL
        await updateProfile(userCredential.user, {
          displayName,
          photoURL: downloadURL,
        });

        // Set user data in Firestore
        await setDoc(doc(db, 'users', userCredential.user.uid), {
          uid: userCredential.user.uid,
          displayName,
          email,
          photoURL: downloadURL,
        });
      }
    );
  } catch (error) {
    setErr(true);
    console.error(error);
  }
};


  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
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
                  <h4 style={{ color: 'gray' }}>Register</h4>
                </div>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="displayName">
                    <Form.Control
                      type="text"
                      placeholder="name"
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                      className='shadow-sm p-3 mb-3 bg-white rounded w-100 border-0'
                    />
                  </Form.Group>

                  <Form.Group controlId="email">
                    <Form.Control
                      type="email"
                      placeholder="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className='shadow-sm p-3 mb-3 bg-white rounded w-100 border-0'
                    />
                  </Form.Group>

                  <Form.Group controlId="password">
                    <Form.Control
                      type="password"
                      placeholder="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className='shadow-sm p-3 mb-3 bg-white rounded w-100 border-0'
                    />
                  </Form.Group>

                  <Form.Group controlId='file'>
                    <label
                      htmlFor='file'
                      style={{ fontSize: '12px', cursor: 'pointer', color: '#25D366' }}
                      className='shadow-sm p-3 mb-3 bg-white rounded w-100 border-0'
                    >
                      <input type='file' id='file' style={{ display: 'none' }} onChange={handleFileChange} />
                      <img src={Add} alt='add profile' style={{ width: '32px' }} />
                      <span className='px-2'>Add an Avatar</span>
                    </label>
                  </Form.Group>

                  <Button
                    variant=''
                    style={{ backgroundColor: '#25D366', color: '#ffff' }}
                    className='p-2 mb-3 rounded w-100 border-0'
                    type='submit'
                  >
                    Sign Up
                  </Button>
                  {err && <span>Something went wrong</span>}
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