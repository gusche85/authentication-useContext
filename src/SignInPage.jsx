import React, { useState } from 'react';
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
          <input type="text" value={username} placeholder="username" onChange={(e) => setUsername(e.target.value)} />
          </label>
          <label>
          <input type="email" value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)} />
        </label>
        <button onClick={handleSignIn}>Sign In</button>
        <p>Please sign in to view your profile.</p>
      </>
        )}
        </>
    );
  };

