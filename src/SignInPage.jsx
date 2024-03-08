import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useAuth } from './AuthContext';
import { UserProfile } from './UserProfile';

  export const SignInPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const { user, signIn } = useAuth();
    
    const handleSignIn = () => {
      if (username && email) {
        signIn(username, email);
      }
    };

    return (
      <>
      { user ? (
     <UserProfile />
        ) : (
       <>
        <h2>Sign In</h2>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>

          <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <button onClick={handleSignIn}>Sign In</button>
        <p>Please sign in to view your profile.</p>
      </>
        )}
        </>
    );
  };




//export default SignInPage;

